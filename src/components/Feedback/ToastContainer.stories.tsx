import type { Meta, StoryObj } from '@storybook/react';
import { ToastContainer } from './ToastContainer';
import { Toast } from './Toast';

const meta: Meta<typeof ToastContainer> = {
  title: 'Design System/Feedback/ToastContainer',
  component: ToastContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Toast Container Component

The ToastContainer manages the positioning and stacking of Toast components. It provides a consistent location for displaying notifications in the user interface.

### Usage

ToastContainer should be placed once per application or view, typically at the root level. All Toast components should be children of this container.

### Accessibility

- Uses ARIA live region for screen readers
- Manages focus appropriately
- Handles keyboard navigation between toasts

### Responsiveness

The ToastContainer positions toasts appropriately on all screen sizes, ensuring they don't obstruct critical UI elements.

### Best Practices

#### Do
- Place a single ToastContainer per view/application
- Position toasts where they won't obstruct important UI actions
- Consider z-index to ensure toasts appear above other UI elements
- Choose a consistent position to build user familiarity

#### Don't
- Place ToastContainers inside scrollable containers
- Use multiple conflicting toast positions in the same application
- Position toasts where they obscure critical information or actions
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'The position of the toast container within the viewport',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top-right' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      description: 'The Toast components to display',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToastContainer>;

export const MultipleToasts: Story = {
  render: (args) => (
    <div className="h-[400px] w-[600px] relative border border-gray-200 rounded-lg">
      <ToastContainer {...args}>
        <Toast
          variant="info"
          title="Information"
          message="This is an information message."
        />
        <Toast
          variant="success"
          title="Success"
          message="Operation completed successfully."
        />
        <Toast
          variant="error"
          title="Error"
          message="Something went wrong. Please try again."
        />
        <Toast
          variant="warning"
          title="Warning"
          message="Please review your changes before proceeding."
        />
      </ToastContainer>
    </div>
  ),
  args: {
    position: 'top-right',
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple toasts can be displayed in the same container. They will stack according to their order in the DOM.',
      },
    },
  },
};

export const TopLeft: Story = {
  render: (args) => (
    <div className="h-[400px] w-[600px] relative border border-gray-200 rounded-lg">
      <ToastContainer {...args}>
        <Toast
          variant="info"
          title="Top Left"
          message="This toast is positioned at the top left."
        />
      </ToastContainer>
    </div>
  ),
  args: {
    position: 'top-left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Positioning toasts in the top-left is useful for LTR languages where reading starts from the left.',
      },
    },
  },
};

export const BottomRight: Story = {
  render: (args) => (
    <div className="h-[400px] w-[600px] relative border border-gray-200 rounded-lg">
      <ToastContainer {...args}>
        <Toast
          variant="info"
          title="Bottom Right"
          message="This toast is positioned at the bottom right."
        />
      </ToastContainer>
    </div>
  ),
  args: {
    position: 'bottom-right',
  },
  parameters: {
    docs: {
      description: {
        story: 'Bottom-right positioning is useful for notifications that shouldn\'t interrupt the main content flow.',
      },
    },
  },
};

export const BottomLeft: Story = {
  render: (args) => (
    <div className="h-[400px] w-[600px] relative border border-gray-200 rounded-lg">
      <ToastContainer {...args}>
        <Toast
          variant="info"
          title="Bottom Left"
          message="This toast is positioned at the bottom left."
        />
      </ToastContainer>
    </div>
  ),
  args: {
    position: 'bottom-left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Bottom-left positioning can be useful for less critical notifications in RTL interfaces.',
      },
    },
  },
}; 