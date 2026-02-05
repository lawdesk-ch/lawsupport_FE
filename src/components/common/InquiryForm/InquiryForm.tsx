'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import ReCAPTCHA from 'react-google-recaptcha';
import { InquiryPayload, InquiryFormState } from '@/types/forms';

interface CountryData {
  name: string;
  dialCode: string;
  countryCode: string;
}

type InquiryFormProps = {
  open: boolean;
  onClose: () => void;
};
type FormErrors = Partial<Record<keyof InquiryFormState, string>>;

export default function InquiryForm({ open, onClose }: InquiryFormProps) {
  const [formData, setFormData] = useState<InquiryFormState>({
    name: '',
    country: '',
    telephone_code: '',
    email: '',
    phone: '',
    message: '',
    agreement: false,
    captchaToken: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleFieldChange = <K extends keyof InquiryFormState>(
    name: K,
    value: InquiryFormState[K]
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatusMessage(null);
  };

  const handleFocusAll = () => {
    setErrors({});
    setStatusMessage(null);
  };

  const handleCaptchaChange = (token: string | null) => {
    handleFieldChange('captchaToken', token || '');
  };

  const inquiryValidateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    const name = formData.name.trim();
    if (!name) {
      newErrors.name = 'Name is required';
    } else if (name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (name.length > 100) {
      newErrors.name = 'Name cannot exceed 100 characters';
    }

    const phone = formData.phone.trim();
    if (!phone) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{6,15}$/.test(phone)) {
      newErrors.phone = 'Phone must be 6-15 digits';
    }

    const email = formData.email.trim();
    if (!email) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = 'Email format is invalid';
      } else if (email.length > 254) {
        newErrors.email = 'Email is too long';
      } else if (/\s/.test(email)) {
        newErrors.email = 'Email cannot contain spaces';
      }
    }

    if (!formData.captchaToken)
      newErrors.captchaToken = 'Please confirm you are not a robot.';

    if (!formData.agreement)
      newErrors.agreement =
        'Please accept the terms and conditions to proceed.';

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    } else if (formData.country.trim().length < 2) {
      newErrors.country = 'Country must be at least 2 characters';
    } else if (formData.country.trim().length > 100) {
      newErrors.country = 'Country cannot exceed 100 characters';
    }

    if (!formData.telephone_code)
      newErrors.telephone_code = 'Select your country code';

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    const validationErrors = inquiryValidateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      if (validationErrors.captchaToken || validationErrors.agreement) {
        setStatusMessage(
          `${validationErrors.captchaToken || ''} ${validationErrors.agreement || ''}`.trim()
        );
      }
      return;
    }

    setLoading(true);

    try {
      const payload: InquiryPayload = {
        name: formData.name,
        country: formData.country,
        telephone_code: formData.telephone_code,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/inquiries`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: payload }),
        }
      );

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error?.message || 'Failed to submit form');
      }

      setStatusMessage('✅ Your inquiry was submitted successfully!');
      setFormData({
        name: '',
        country: '',
        telephone_code: '',
        phone: '',
        email: '',
        message: '',
        agreement: false,
        captchaToken: '',
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      const message =
        err instanceof Error ? err.message : 'Unknown error occurred';
      setStatusMessage(
        `❌ Something went wrong. Please try again later. ${message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 px-[10px] md:px-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiryFormTitle"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg w-full max-w-[572px] p-[34px] max-h-[90vh] lg:max-h-full overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 cursor-pointer hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-[14px]">
          Have a question?
        </h2>

        <p className="mb-5">
          {' '}
          Send us a message and we&apos;ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
          <Input
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            onFocus={handleFocusAll}
            placeholder="Name*"
            className="font-geologica font-light bg-white w-full"
            error={errors.name}
          />

          <div className="flex flex-col md:flex-row gap-[10px] w-full">
            <div className="w-full md:w-1/2">
              <Input
                label="Country"
                type="text"
                name="country"
                value={formData.country}
                onChange={(e) => handleFieldChange('country', e.target.value)}
                onFocus={handleFocusAll}
                placeholder="Country*"
                className="font-geologica font-light bg-white w-full"
                error={errors.country}
              />
            </div>

            <div className="w-full md:w-1/2">
              <label htmlFor="telephone_code" className="sr-only">
                Telephone country code
              </label>
              <PhoneInput
                country={'us'}
                value={formData.telephone_code}
                onChange={(value: string, country: CountryData) => {
                  if (country && country.dialCode) {
                    handleFocusAll();
                    handleFieldChange('telephone_code', `+${country.dialCode}`);
                  }
                }}
                onFocus={handleFocusAll}
                onlyCountries={[]}
                placeholder="Telephone country code*"
                inputClass="!w-full bg-white font-geologica font-light min-h-11 border rounded-lg px-2 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(161,172,160,0.4)]"
                dropdownClass="max-w-62 !rounded-lg font-geologica font-light"
                inputProps={{
                  name: 'telephone_code',
                  'aria-label': 'Telephone country code',
                  readOnly: true,
                }}
                enableSearch
                countryCodeEditable={false}
              />
              {errors.telephone_code && (
                <span className="text-xs text-red-500">
                  {errors.telephone_code}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[10px]">
            <Input
              label="Phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const digitsOnly = e.target.value.replace(/\D/g, '');
                handleFieldChange('phone', digitsOnly);
              }}
              onFocus={handleFocusAll}
              placeholder="WhatsApp:"
              className="font-geologica font-light bg-white w-full"
              error={errors.phone}
            />

            <Input
              label="Email"
              type="text"
              name="email"
              value={formData.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              onFocus={handleFocusAll}
              placeholder="Email*"
              className="font-geologica font-light bg-white w-full"
              error={errors.email}
            />
          </div>

          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            aria-label="Message"
            name="message"
            placeholder="How can we help?"
            rows={4}
            value={formData.message}
            onFocus={handleFocusAll}
            onChange={(e) => handleFieldChange('message', e.target.value)}
            className={`font-geologica font-light border rounded-lg px-2 py-3 text-sm bg-white w-full resize-none focus:outline-none focus:ring-2 focus:ring-[rgba(161,172,160,0.4)] ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.message && (
            <span className="text-xs text-red-500">{errors.message}</span>
          )}

          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={handleCaptchaChange}
            onFocus={handleFocusAll}
            className="transform scale-80 origin-top-left m-0"
          />

          <div className="flex items-center gap-2 ml-[13px] mb-3">
            <input
              type="checkbox"
              name="agreement"
              id="agreement"
              onFocus={handleFocusAll}
              checked={formData.agreement}
              className="w-4 h-4 accent-black cursor-pointer"
              onChange={(e) => handleFieldChange('agreement', e.target.checked)}
            />
            <label htmlFor="agreement" className="text-sm">
              I agree to the Terms and Conditions and Privacy Policy.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-black text-sm text-white rounded-lg active:bg-[#6a6a6a]"
          >
            {loading ? 'Sending...' : 'Send message'}
          </button>
          {statusMessage && (
            <div
              className={`text-sm text-center mb-2 ${
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
}
