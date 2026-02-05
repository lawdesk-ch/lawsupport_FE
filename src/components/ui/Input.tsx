import React, { InputHTMLAttributes, useId } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
  hideLabel?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  hideLabel = true,
  inputClassName = '',
  value,
  onChange,
  placeholder = '',
  error,
  className = '',
  id,
  ...props
}) => {
  const autoId = useId();
  const inputId = id || autoId;
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={
            hideLabel ? 'sr-only' : 'text-sm font-semibold bg-[#f9fafb] mt-2'
          }
        >
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded-lg bg-white px-2 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(161,172,160,0.4)] ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${inputClassName}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
