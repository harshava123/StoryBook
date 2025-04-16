import type { Meta, StoryObj } from '@storybook/react';
import { ToastContainer } from './ToastContainer';
import { Toast } from './Toast';

const meta: Meta<typeof ToastContainer> = {
  title: 'Design System/Feedback/ToastContainer',
  component: ToastContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
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
}; 