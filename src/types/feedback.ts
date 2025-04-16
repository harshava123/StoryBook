export type ToastVariant = 'info' | 'success' | 'error' | 'warning';
export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface ToastProps {
  variant?: ToastVariant;
  title?: string;
  message: string;
  duration?: number;
  position?: ToastPosition;
  onClose?: () => void;
  showCloseButton?: boolean;
  className?: string;
}

export interface ToastContainerProps {
  position?: ToastPosition;
  className?: string;
} 