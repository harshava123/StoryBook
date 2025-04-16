import React from 'react';
import { TextInputProps } from '../../types/data-entry';
import { Typography } from '../Typography/Typography';
import { twMerge } from 'tailwind-merge';

const sizeStyles: Record<string, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

const variantStyles: Record<string, string> = {
  outline: 'border border-gray-300 rounded-md',
  filled: 'bg-gray-100 border border-transparent rounded-md',
  flushed: 'border-b border-gray-300 rounded-none',
};

const stateStyles: Record<string, string> = {
  default: 'focus:border-primary-500',
  error: 'border-red-500 focus:border-red-500',
  success: 'border-green-500 focus:border-green-500',
  warning: 'border-yellow-500 focus:border-yellow-500',
};

export const TextInput: React.FC<TextInputProps> = ({
  size = 'md',
  variant = 'outline',
  state = 'default',
  disabled = false,
  required = false,
  className = '',
  helperText,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  name,
  id,
  autoComplete,
  maxLength,
  minLength,
  pattern,
}) => {
  const baseStyles = 'w-full transition-colors duration-200 focus:outline-none';
  const sizeStyle = sizeStyles[size];
  const variantStyle = variantStyles[variant];
  const stateStyle = stateStyles[state];
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const inputClasses = twMerge(
    baseStyles,
    sizeStyle,
    variantStyle,
    stateStyle,
    disabledStyle,
    className
  );

  const helperTextColor = state === 'default' ? 'secondary' : state;

  return (
    <div className="w-full">
      {label && (
        <Typography
          variant="label"
          className="block mb-1"
          color={state === 'default' ? 'primary' : state}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Typography>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
        autoComplete={autoComplete}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        className={inputClasses}
        aria-invalid={state === 'error'}
        aria-describedby={helperText ? `${id}-helper` : undefined}
      />
      {helperText && (
        <Typography
          variant="helper"
          color={helperTextColor}
          id={helperText ? `${id}-helper` : undefined}
          className="mt-1"
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
}; 