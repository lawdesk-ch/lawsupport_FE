'use client';

import Image from 'next/image';
import { useState } from 'react';
import Input from '@/components/ui/Input';
import { ContactPayload } from '@/types/forms';

type FormErrors = Partial<Record<keyof ContactPayload, string>>;

const ContactUs = () => {
  const [formData, setFormData] = useState<ContactPayload>({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (name: keyof ContactPayload, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatusMessage(null);
  };

  const handleFocusAll = () => {
    setErrors({});
    setStatusMessage(null);
  };
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    const name = formData.name.trim();
    if (!name) newErrors.name = 'Name is required';
    else if (name.length < 2)
      newErrors.name = 'Name must be at least 2 characters';
    else if (name.length > 100)
      newErrors.name = 'Name cannot exceed 100 characters';

    const email = formData.email.trim();
    if (!email) newErrors.email = 'Email is required';
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) newErrors.email = 'Email format is invalid';
      else if (email.length > 254) newErrors.email = 'Email is too long';
      else if (/\s/.test(email))
        newErrors.email = 'Email cannot contain spaces';
    }

    const whatsapp = formData.whatsapp.trim();
    if (!whatsapp) {
      newErrors.whatsapp = 'Whatsapp is required';
    } else if (!/^\+\d{10,15}$/.test(whatsapp)) {
      newErrors.whatsapp =
        'Whatsapp must start with + and contain 10-15 digits';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/contacts`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: formData }),
        }
      );

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData?.error?.message || 'Failed to submit form');
      }

      setStatusMessage('✅ Your inquiry was submitted successfully!');
      setFormData({ name: '', email: '', whatsapp: '', message: '' });
      setErrors({});
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err);
        setStatusMessage(
          `❌ Something went wrong. Please try again later. ${err.message}`
        );
      } else {
        console.error(err);
        setStatusMessage('❌ Something went wrong. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-5xl w-1/2 mb-[50px]">Contact us</h2>

      <div className="flex justify-between w-full">
        <div className="flex gap-5">
          <Image
            src="/images/author.jpg"
            alt="image-man"
            loading="lazy"
            width={336}
            height={343}
            className="w-[336px] h-[343px] object-cover"
          />

          <div className="flex flex-col justify-between">
            <div className="space-y-3 max-w-[327px]">
              <h3 className="text-[32px] leading-none mb-2">Maria Werner</h3>

              <p className="text-lg color-silver leading-none">
                Of Counsel — specializing in corporate law and tax law
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-3 items-center">
                <Image
                  src="/icons/tel.svg"
                  className="w-6 h-6"
                  loading="lazy"
                  width={24}
                  height={24}
                  alt="Phone"
                />
                <address className="text-lg not-italic leading-none text-[#100] active:text-[#6a6a6a] hover:text-[#6a6a6a] transition-colors duration-300">
                  <a href="tel:+41445152530">+41 (44) 5152530</a>
                </address>
              </div>

              <div className="flex gap-3 items-center">
                <Image
                  src="/icons/massage.svg"
                  className="w-6 h-6"
                  loading="lazy"
                  width={24}
                  height={24}
                  alt="Email"
                />
                <a
                  href="mailto:info@goldblum.ch"
                  className="text-lg leading-none text-[#100] active:text-[#6a6a6a] hover:text-[#6a6a6a] transition-colors duration-300"
                >
                  info@goldblum.ch
                </a>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full gap-3 lg:max-w-[572px]"
          aria-describedby="formStatus"
        >
          <Input
            id="name"
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onFocus={handleFocusAll}
            placeholder="Name"
            className="font-geologica font-light rounded-lg w-full"
            error={errors.name}
          />

          <Input
            id="email"
            label="Email"
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onFocus={handleFocusAll}
            placeholder="E-mail"
            className="font-geologica font-light rounded-lg w-full"
            error={errors.email}
          />

          <Input
            id="whatsapp"
            label="Whatsapp"
            type="tel"
            name="phone"
            value={formData.whatsapp}
            onChange={(e) => {
              let val = e.target.value;
              if (val.startsWith('+')) {
                val = '+' + val.slice(1).replace(/\D/g, '');
              } else {
                val = val.replace(/\D/g, '');
              }
              if (val.length > 16) {
                val = val.slice(0, 16);
              }
              handleChange('whatsapp', val);
            }}
            onFocus={handleFocusAll}
            placeholder="Whatsapp"
            className="font-geologica font-light rounded-lg w-full"
            error={errors.whatsapp}
          />

          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            aria-label="Message"
            name="message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onFocus={handleFocusAll}
            onChange={(e) => handleChange('message', e.target.value)}
            className={`font-geologica font-light border rounded-lg px-2 py-3 text-sm bg-white w-full resize-none focus:outline-none focus:ring-2 focus:ring-[rgba(161,172,160,0.4)] ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.message && (
            <span className="text-xs mr-auto text-red-500">
              {errors.message}
            </span>
          )}

          <button
            type="submit"
            disabled={loading}
            aria-label="Submit the contact form"
            className="bg-[#f00] text-white rounded-lg text-xs w-full cursor-pointer h-10 active:bg-[#d2000]"
          >
            {loading ? 'Sending...' : 'Order A Callback'}
          </button>
          {statusMessage && (
            <div
              id="formStatus"
              role="status"
              aria-live="polite"
              className={`text-sm text-center mt-2 ${
                statusMessage.startsWith('✅')
                  ? 'text-green-600'
                  : 'text-red-500'
              }`}
            >
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
