import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import { useState } from 'react';

const meta: Meta<typeof TextInput> = {
  title: 'Design System/Data Entry/Text Input',
  component: TextInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Text Input Component

The TextInput component allows users to input text data. It supports various states, sizes, and variants to accommodate different UI requirements.

### Anatomy

The TextInput consists of:
- Label (optional)
- Input field
- Helper text (optional)
- Error message (when in error state)

### Accessibility

- Includes proper labeling with \`label\` elements
- Uses \`aria-invalid\` for error states
- Connects helper text via \`aria-describedby\`
- Supports keyboard navigation
- Maintains 3:1 contrast ratio for borders and 4.5:1 for text
- Includes focus indicators

### Theming

The TextInput component adapts to the theme context, supporting both light and dark modes.

### Keyboard Interaction

- **Tab**: Focuses the input
- **Shift+Tab**: Moves focus to the previous focusable element
- **Enter**: Submits the form if the input is part of a form

### Best Practices

#### Do
- Always provide a label for the input
- Use helper text to provide additional context when needed
- Use appropriate validation states (error, success, warning)
- Use appropriate input types (email, password, etc.)

#### Don't
- Use placeholder text as a replacement for labels
- Use generic error messages; be specific about requirements
- Disable form controls unless absolutely necessary
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the input field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'flushed'],
      description: 'Determines the visual style of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outline' },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning'],
      description: 'Indicates the validation state of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      description: 'HTML input type attribute',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    required: {
      control: 'boolean',
      description: 'Marks the input as required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Additional guidance or context for the input',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Current value of the input',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: 'Callback when input value changes',
      table: {
        type: { summary: '(value: string) => void' },
      },
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
  parameters: {
    docs: {
      description: {
        story: 'Standard input with label and placeholder.',
      },
    },
  },
};

export const WithHelperText: Story = {
  render: Template,
  args: {
    label: 'Input with Helper Text',
    placeholder: 'Enter text here',
    helperText: 'This is a helper text',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use helper text to provide additional context or instructions for the input field.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Use error state to indicate validation errors. Always provide informative error messages.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Use success state to indicate valid input after validation.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Use warning state to indicate potential issues that don\'t necessarily invalidate the input.',
      },
    },
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    label: 'Disabled Input',
    placeholder: 'Enter text here',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled inputs cannot be interacted with. Use sparingly.',
      },
    },
  },
};

export const Required: Story = {
  render: Template,
  args: {
    label: 'Required Input',
    placeholder: 'Enter text here',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Required inputs have an asterisk and must be filled before form submission.',
      },
    },
  },
};

export const SmallSize: Story = {
  render: Template,
  args: {
    label: 'Small Input',
    placeholder: 'Enter text here',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small inputs are useful for compact UIs or dense forms.',
      },
    },
  },
};

export const LargeSize: Story = {
  render: Template,
  args: {
    label: 'Large Input',
    placeholder: 'Enter text here',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large inputs are easier to tap on touch devices and can emphasize important fields.',
      },
    },
  },
};

export const FilledVariant: Story = {
  render: Template,
  args: {
    label: 'Filled Input',
    placeholder: 'Enter text here',
    variant: 'filled',
  },
  parameters: {
    docs: {
      description: {
        story: 'Filled inputs have a background color in their default state, providing more visual weight.',
      },
    },
  },
};

export const FlushedVariant: Story = {
  render: Template,
  args: {
    label: 'Flushed Input',
    placeholder: 'Enter text here',
    variant: 'flushed',
  },
  parameters: {
    docs: {
      description: {
        story: 'Flushed inputs have only a bottom border, creating a cleaner, more minimal look.',
      },
    },
  },
};

export const PasswordType: Story = {
  render: Template,
  args: {
    label: 'Password Input',
    placeholder: 'Enter password',
    type: 'password',
  },
  parameters: {
    docs: {
      description: {
        story: 'Password inputs mask the entered text for security.',
      },
    },
  },
};

export const EmailType: Story = {
  render: Template,
  args: {
    label: 'Email Input',
    placeholder: 'Enter email',
    type: 'email',
  },
  parameters: {
    docs: {
      description: {
        story: 'Email inputs can trigger specialized keyboards on mobile and provide basic format validation.',
      },
    },
  },
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          label="First Name"
          placeholder="Enter first name"
          value=""
          onChange={() => {}}
        />
        <TextInput
          label="Last Name"
          placeholder="Enter last name"
          value=""
          onChange={() => {}}
        />
      </div>
      <div className="mt-4">
        <TextInput
          label="Email Address"
          placeholder="Enter email address"
          type="email"
          value=""
          onChange={() => {}}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'TextInput components can be arranged in responsive layouts that adapt to different screen sizes.',
      },
    },
  },
}; 