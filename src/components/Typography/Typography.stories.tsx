import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Typography Component

The Typography component is the foundation of textual presentation in our design system. It provides consistent styling for all text elements including headings, body text, and supporting text elements.

### Accessibility

- Uses semantic HTML elements with correct heading hierarchy (h1-h6)
- Maintains a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text
- Font sizes are responsive and scale appropriately on different devices
- Line heights ensure proper readability

### Theming

The Typography component supports both light and dark modes through color tokens.

### Best Practices

#### Do
- Use appropriate heading levels (h1-h6) to maintain document hierarchy
- Keep paragraphs concise and scannable
- Use helper text to provide additional context when needed

#### Don't
- Skip heading levels (e.g., h1 to h3, skipping h2)
- Use typography for purely decorative purposes without semantic meaning
- Override the component styles directly; use the provided props instead
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'label', 'helper'],
      description: 'Determines the styling and semantic HTML element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'body1' },
      },
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Sets the font weight of the text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning', 'info'],
      description: 'Determines the text color',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    as: {
      control: 'text',
      description: 'Override the rendered HTML element',
      table: {
        type: { summary: 'keyof JSX.IntrinsicElements' },
      },
    },
    className: { 
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    children: {
      control: 'text',
      description: 'The content to display',
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
  parameters: {
    docs: {
      description: {
        story: 'Use for main page titles. There should only be one h1 per page.',
      },
    },
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for section titles within a page.',
      },
    },
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for sub-section titles or feature headings.',
      },
    },
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body 1 - The quick brown fox jumps over the lazy dog.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary body text style used for most content.',
      },
    },
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