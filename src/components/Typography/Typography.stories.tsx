import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'label', 'helper'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body 1 - The quick brown fox jumps over the lazy dog.',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body 2 - The quick brown fox jumps over the lazy dog.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'Label text',
  },
};

export const Helper: Story = {
  args: {
    variant: 'helper',
    children: 'Helper text',
  },
};

export const WithCustomColor: Story = {
  args: {
    variant: 'body1',
    color: 'error',
    children: 'Error text',
  },
};

export const WithCustomWeight: Story = {
  args: {
    variant: 'body1',
    weight: 'bold',
    children: 'Bold text',
  },
}; 