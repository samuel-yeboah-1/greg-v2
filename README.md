# Greg AI Chat Interface

A modern, accessible chat interface built with Next.js and TypeScript, featuring a sleek design with dark mode support and file attachment capabilities.

## Features

- 💬 Real-time chat interface
- 📎 File attachment support
  - Documents (PDF, DOC, DOCX, TXT)
  - Data files (JSON, XML)
- 🌓 Dark mode / Light mode
- 🎨 Modern UI with smooth animations
- ♿ Accessible design
- 📱 Responsive layout
- ⌨️ Keyboard shortcuts

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn/ui Components
- Lucide Icons

## Project Structure

```
src/
├── components/     # React components
│   ├── chat/      # Chat-related components
│   ├── ui/        # Reusable UI components
│   └── forms/     # Form components
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── constants/     # Constant values
├── helpers/       # Helper functions
└── providers/     # React context providers
```

## Key Components

### ChatBox

The main chat container that handles:

- Message display
- Date grouping
- Scroll management
- Theme adaptation

### ChatInput

A sophisticated input component featuring:

- Text input with auto-resize
- File attachment support
- File preview with type indicators
- Keyboard shortcuts (Enter to send)
- Loading states

## Getting Started

1. Clone the repository

```bash
git clone [repository-url]
cd greg-ai
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Usage

### File Attachments

- Click the attachment icon to open the file selector
- Supported file types:
  - PDF files (.pdf)
  - Word documents (.doc, .docx)
  - Text files (.txt)
  - JSON files (.json)
  - XML files (.xml)

### Keyboard Shortcuts

- `Enter`: Send message
- `Shift + Enter`: New line

### Theme

The interface automatically adapts to your system's theme preferences and provides consistent styling in both light and dark modes.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - see LICENSE.md for details

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com)

## Deployment

This project can be deployed on any platform that supports Next.js applications, such as:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
