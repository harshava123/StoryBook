import React from 'react';
import { ToastContainerProps } from '../../types/feedback';
import { twMerge } from 'tailwind-merge';

const positionStyles: Record<string, string> = {
  'top-left': 'top-4 left-4',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-right': 'bottom-4 right-4',
};

export const ToastContainer: React.FC<ToastContainerProps> = ({
  position = 'top-right',
  className = '',
  children,
}) => {
  const baseStyles = 'fixed z-50 space-y-4';
  const positionStyle = positionStyles[position];

  const classes = twMerge(baseStyles, positionStyle, className);

  return (
    <div className={classes} role="region" aria-live="polite">
      {children}
    </div>
  );
}; 