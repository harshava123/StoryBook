import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import { useState } from 'react';

const meta: Meta<typeof TextInput> = {
  title: 'Design System/Data Entry/Text Input',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'flushed'],
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning'],
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

const Template = (args: any) => {
  const [value, setValue] = useState('');
  return <TextInput {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: Template,
  args: {
    label: 'Default Input',
    placeholder: 'Enter text here',
  },
};

export const WithHelperText: Story = {
  render: Template,
  args: {
    label: 'Input with Helper Text',
    placeholder: 'Enter text here',
    helperText: 'This is a helper text',
  },
};

export const ErrorState: Story = {
  render: Template,
  args: {
    label: 'Error Input',
    placeholder: 'Enter text here',
    state: 'error',
    helperText: 'This field is required',
  },
};

export const SuccessState: Story = {
  render: Template,
  args: {
    label: 'Success Input',
    placeholder: 'Enter text here',
    state: 'success',
    helperText: 'Input is valid',
  },
};

export const WarningState: Story = {
  render: Template,
  args: {
    label: 'Warning Input',
    placeholder: 'Enter text here',
    state: 'warning',
    helperText: 'Please review your input',
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    label: 'Disabled Input',
    placeholder: 'Enter text here',
    disabled: true,
  },
};

export const Required: Story = {
  render: Template,
  args: {
    label: 'Required Input',
    placeholder: 'Enter text here',
    required: true,
  },
};

export const SmallSize: Story = {
  render: Template,
  args: {
    label: 'Small Input',
    placeholder: 'Enter text here',
    size: 'sm',
  },
};

export const LargeSize: Story = {
  render: Template,
  args: {
    label: 'Large Input',
    placeholder: 'Enter text here',
    size: 'lg',
  },
};

export const FilledVariant: Story = {
  render: Template,
  args: {
    label: 'Filled Input',
    placeholder: 'Enter text here',
    variant: 'filled',
  },
};

export const FlushedVariant: Story = {
  render: Template,
  args: {
    label: 'Flushed Input',
    placeholder: 'Enter text here',
    variant: 'flushed',
  },
};

export const PasswordType: Story = {
  render: Template,
  args: {
    label: 'Password Input',
    placeholder: 'Enter password',
    type: 'password',
  },
};

export const EmailType: Story = {
  render: Template,
  args: {
    label: 'Email Input',
    placeholder: 'Enter email',
    type: 'email',
  },
}; 