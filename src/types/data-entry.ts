export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'outline' | 'filled' | 'flushed';
export type InputState = 'default' | 'error' | 'success' | 'warning';

export interface BaseInputProps {
  size?: InputSize;
  variant?: InputVariant;
  state?: InputState;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  helperText?: string;
  label?: string;
}

export interface TextInputProps extends BaseInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  name?: string;
  id?: string;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
} 