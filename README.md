# Enterprise Design System

A comprehensive design system built with React, TypeScript, TailwindCSS, and Storybook, suitable for enterprise applications.

## Live Demo

- [Storybook Documentation](https://design-system-storybook-lemon.vercel.app/)

## Features

### Component Categories

1. **Typography System**
   - Hierarchical headings (H1-H6)
   - Body text (body1, body2)
   - Captions, labels, and helper text
   - Responsive scaling for all devices
   - Semantic HTML elements
   - Customizable font weights and colors

2. **Data Entry Component (Text Input)**
   - Multiple states (default, error, success, warning)
   - Various sizes (small, medium, large)
   - Variant styles (outline, filled, flushed)
   - Accessible labeling
   - Responsive design
   - Proper ARIA attributes

3. **Feedback Component (Toast/Notifications)**
   - Semantic variants (info, success, error, warning)
   - Customizable positioning
   - Auto-dismiss functionality
   - Keyboard accessible
   - Mount/unmount animations
   - Accessibility compliant

### Core Features

- **Fully Typed**: Complete TypeScript definitions for all components
- **Accessibility**: WCAG 2.1 compliance with proper ARIA attributes
- **Responsive**: Mobile-first design that works on all devices
- **Themeable**: Support for light/dark modes and brand theming
- **Scalable**: Component architecture designed for reuse and extension
- **Well Documented**: Comprehensive Storybook documentation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/harshava123/StoryBook.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start Storybook
```bash
npm run storybook
# or
yarn storybook
```

## Project Structure

```
src/
├── components/
│   ├── Typography/
│   │   ├── Typography.tsx
│   │   └── Typography.stories.tsx
│   ├── DataEntry/
│   │   ├── TextInput.tsx
│   │   └── TextInput.stories.tsx
│   └── Feedback/
│       ├── Toast.tsx
│       ├── Toast.stories.tsx
│       ├── ToastContainer.tsx
│       └── ToastContainer.stories.tsx
├── styles/
│   └── globals.css
└── types/
    ├── typography.ts
    ├── data-entry.ts
    └── feedback.ts
```

## Implementation Details

### Typography Component

The Typography component serves as the foundation for all text in the design system. It implements:

- **Tokens**: Consistent font-size, weight, line-height, and letter spacing
- **Semantic Elements**: Uses appropriate HTML tags (h1-h6, p, span)
- **Theming Support**: Adapts to light/dark modes
- **Accessibility**: Proper contrast ratios and responsive sizing

#### Usage Example

```tsx
// Heading
<Typography variant="h1">Main Heading</Typography>

// Body text
<Typography variant="body1">Regular paragraph text</Typography>

// With customization
<Typography variant="body2" weight="bold" color="primary">
  Custom styled text
</Typography>
```

### Text Input Component

The TextInput component provides a flexible, accessible interface for user data entry. Features include:

- **Validation States**: Default, error, success, and warning states
- **Size Variants**: Small, medium, and large sizes
- **Style Variants**: Outline, filled, and flushed styles
- **Labeling**: Proper labeling with support for required fields
- **Helper Text**: Additional context and error messages

#### Usage Example

```tsx
// Basic input
<TextInput
  label="Username"
  placeholder="Enter username"
  value={username}
  onChange={setUsername}
/>

// With validation
<TextInput
  label="Email"
  type="email"
  state="error"
  helperText="Please enter a valid email"
  value={email}
  onChange={setEmail}
/>
```

### Toast Component

The Toast component provides a non-intrusive way to display notifications to users. Features include:

- **Semantic Variants**: Info, success, error, and warning states
- **Configuration**: Customizable duration, position, and dismiss options
- **Accessibility**: ARIA roles and keyboard navigation
- **Animation**: Smooth entry and exit animations

#### Usage Example

```tsx
// Basic toast
<Toast
  variant="success"
  title="Success"
  message="Your changes have been saved"
/>

// With ToastContainer for positioning
<ToastContainer position="top-right">
  <Toast
    variant="error"
    title="Error"
    message="Failed to save changes"
  />
</ToastContainer>
```

## Accessibility Considerations

All components comply with WCAG 2.1 standards:

- **Semantic HTML**: Using proper HTML elements for their intended purpose
- **Keyboard Navigation**: All components can be navigated using a keyboard
- **Focus Management**: Visible focus indicators and proper tab order
- **Screen Readers**: ARIA roles, labels, and descriptions for screen readers
- **Color Contrast**: Sufficient color contrast for all text and UI elements
- **Responsive Design**: All components adapt to different screen sizes and zoom levels

## Best Practices

### Do
- Use semantic variants (success, error, etc.) consistently
- Provide clear, concise labels for form fields
- Use helper text to provide additional context
- Implement proper error handling and validation
- Follow the component hierarchy and composition patterns

### Don't
- Skip heading levels (e.g., h1 to h3, skipping h2)
- Use placeholder text as a replacement for labels
- Rely solely on color to convey meaning
- Use toasts for critical information requiring immediate action
- Override component styles directly; use the provided props

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 