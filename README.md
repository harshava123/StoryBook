# Design System

A comprehensive design system built with React, TypeScript, and TailwindCSS.

## Features

- Typography system with consistent heading and text styles
- Data Entry components (coming soon)
- Feedback components (coming soon)
- Fully documented with Storybook
- TypeScript support
- TailwindCSS for styling
- Accessibility support

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
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
│   ├── DataEntry/
│   └── Feedback/
├── styles/
│   └── globals.css
└── types/
    └── typography.ts
```

## Typography System

The typography system provides a consistent set of text styles for your application:

- Headings (h1-h6)
- Body text (body1, body2)
- Captions
- Labels
- Helper text

Each text style can be customized with:
- Font weight
- Color
- Custom className

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 