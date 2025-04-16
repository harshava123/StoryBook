export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'label'
  | 'helper';

export type TypographyWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export type TypographyColor = 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info';

export interface TypographyProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: TypographyColor;
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
} 