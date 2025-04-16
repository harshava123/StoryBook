import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Design System/Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'error', 'warning'],
    },
    duration: {
      control: 'number',
    },
    showCloseButton: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This is an information message.',
    duration: 5000,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Operation completed successfully.',
    duration: 5000,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    duration: 5000,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please review your changes before proceeding.',
    duration: 5000,
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: 'info',
    message: 'This is a simple message without a title.',
    duration: 5000,
  },
};

export const WithoutCloseButton: Story = {
  args: {
    variant: 'info',
    title: 'Auto-dismiss',
    message: 'This toast will automatically dismiss after 5 seconds.',
    duration: 5000,
    showCloseButton: false,
  },
};

export const LongDuration: Story = {
  args: {
    variant: 'info',
    title: 'Long Duration',
    message: 'This toast will stay visible for 10 seconds.',
    duration: 10000,
  },
};

export const CustomContent: Story = {
  args: {
    variant: 'info',
    title: 'Custom Content',
    message: 'You can include any content in the message.',
    duration: 5000,
    className: 'max-w-md',
  },
}; 