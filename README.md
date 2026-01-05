# Portfolio Website

Welcome to my portfolio website! You can check it out [here](https://mohammadalsmadi.com).

## Description

This is a modern, interactive portfolio website showcasing my work as a Senior Software Engineer. The site features a clean, concise design that highlights my experience, projects, and open-source contributions without requiring excessive scrolling.

## Features

- **Interactive Hover Elements**: Discover more information by hovering over highlighted text
- **Project Showcase**: Display of web and mobile applications I've built
- **Open Source Contributions**: Real-time display of recent GitHub contributions
- **Responsive Design**: Optimized for all device sizes
- **Accessibility**: Full keyboard navigation and ARIA labels for screen readers
- **SEO Optimized**: Comprehensive meta tags and structured data

## Technologies Used

### Core
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Libraries
- **react-icons** - Icon library
- **react-tiny-popover** - Popover component for interactive elements

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **TypeScript** - Static type checking

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/alsmadi99/mohammadalsmadi.git
   ```

2. Navigate to the project directory:
   ```bash
   cd mohammadalsmadi
   ```

3. Install the dependencies:
   ```bash
   yarn
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build for production
- `yarn preview` - Preview the production build
- `yarn lint` - Run ESLint with auto-fix
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   ├── About.tsx
│   ├── Footer.tsx
│   ├── LoadingList.tsx
│   ├── Navbar.tsx
│   └── ReactPopover.tsx
├── constants/       # Constants and configuration
├── hooks/           # Custom React hooks
│   ├── useContributions.tsx
│   └── useIsMobile.tsx
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or would like to collaborate, feel free to reach out to me at [alsmadi.work@gmail.com](mailto:alsmadi.work@gmail.com).
