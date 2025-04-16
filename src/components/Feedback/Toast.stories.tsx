import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Design System/Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Toast Component

The Toast component provides a way to display brief, non-intrusive notifications to the user. Toasts are used to show confirmation messages, alerts, and other time-sensitive information.

### Anatomy

A Toast consists of:
- Icon (variant-specific)
- Title (optional)
- Message
- Close button (optional)

### Accessibility

- Uses appropriate ARIA roles (role="alert")
- Has sufficient color contrast for all states
- Can be dismissed with keyboard (close button)
- Automatically closes after a configurable duration
- Uses semantic colors to convey meaning

### Mount/Unmount Behavior

- Toasts appear with a smooth fade-in transition
- Toasts are removed from the DOM after closing animation
- Toasts can be set to auto-dismiss after a specified duration

### Theming

The Toast component adapts to the theme context, supporting both light and dark modes with appropriate contrast.

### Keyboard Interaction

- **Tab**: Navigates to the close button
- **Enter/Space**: Activates the close button if focused
- **Escape**: Can be configured to close all active toasts

### Best Practices

#### Do
- Use appropriate variants for different message types
- Keep messages concise and actionable
- Set appropriate auto-dismiss durations based on importance
- Consider positioning toasts consistently in your application

#### Don't
- Use toasts for critical information requiring immediate action
- Display multiple toasts simultaneously if possible
- Use toasts for complex interactions
- Rely solely on color to communicate meaning
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'error', 'warning'],
      description: 'The visual style and semantic meaning of the toast',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    title: {
      control: 'text',
      description: 'The title/heading of the toast (optional)',
      table: {
        type: { summary: 'string' },
      },
    },
    message: {
      control: 'text',
      description: 'The main content of the toast',
      table: {
        type: { summary: 'string' },
      },
    },
    duration: {
      control: 'number',
      description: 'Time in milliseconds before auto-dismissing (0 to disable)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5000 },
      },
    },
    onClose: {
      description: 'Callback fired when toast is closed',
      table: {
        type: { summary: '() => void' },
      },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
      table: {
        type: { summary: 'string' },
      },
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
  parameters: {
    docs: {
      description: {
        story: 'Use for general, neutral information that is useful but not critical.',
      },
    },
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Operation completed successfully.',
    duration: 5000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use to indicate that an operation has completed successfully.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    duration: 5000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use to indicate that an operation has failed or an error has occurred.',
      },
    },
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please review your changes before proceeding.',
    duration: 5000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use to indicate that caution is needed or to preview a potentially negative outcome.',
      },
    },
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: 'info',
    message: 'This is a simple message without a title.',
    duration: 5000,
  },
  parameters: {
    docs: {
      description: {
        story: 'For simple messages, the title can be omitted.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'For toasts that auto-dismiss quickly, the close button can be removed.',
      },
    },
  },
};

export const LongDuration: Story = {
  args: {
    variant: 'info',
    title: 'Long Duration',
    message: 'This toast will stay visible for 10 seconds.',
    duration: 10000,
  },
  parameters: {
    docs: {
      description: {
        story: 'For important messages, use longer durations to ensure the user has time to read.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'The toast component can be customized with additional classes for specific use cases.',
      },
    },
  },
}; 