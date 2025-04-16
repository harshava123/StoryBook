import React from 'react';
import { TypographyProps, TypographyVariant } from '../../types/typography';
import { twMerge } from 'tailwind-merge';

const variantStyles: Record<TypographyVariant, string> = {
  h1: 'text-5xl font-bold',
  h2: 'text-4xl font-bold',
  h3: 'text-3xl font-bold',
  h4: 'text-2xl font-bold',
  h5: 'text-xl font-bold',
  h6: 'text-lg font-bold',
  body1: 'text-base',
  body2: 'text-sm',
  caption: 'text-xs',
  label: 'text-sm font-medium',
  helper: 'text-xs text-secondary-500',
};

const weightStyles: Record<string, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const colorStyles: Record<string, string> = {
  primary: 'text-primary-600',
  secondary: 'text-secondary-600',
  error: 'text-red-600',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  info: 'text-blue-600',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  weight = 'normal',
  color = 'primary',
  className = '',
  children,
  as: Component = 'p',
  ...props
}) => {
  const baseStyles = 'leading-relaxed';
  const variantStyle = variantStyles[variant];
  const weightStyle = weightStyles[weight];
  const colorStyle = colorStyles[color];

  const classes = twMerge(
    baseStyles,
    variantStyle,
    weightStyle,
    colorStyle,
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}; 