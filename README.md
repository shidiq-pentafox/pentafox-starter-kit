# Pentafox TodoApp Starter Kit

A modern React starter template built with Vite, TypeScript, Mantine UI, React Router, Zustand, and React Query.

This template includes a fully functional Todo application, showcasing:
- Component organization and best practices
- State management with Zustand
- Routing with React Router
- UI components with Mantine
- Form handling and validation
- API integration structure

## Features

- 🚀 **Vite** - Lightning fast build tool
- 🔍 **TypeScript** - Type safety and better developer experience
- 💅 **Mantine UI** - Beautiful, accessible components
- 🔄 **React Query** - Data fetching and caching
- 🧩 **Zustand** - Simple state management
- 🔀 **React Router** - Client-side routing
- 📱 **Responsive Design** - Works on all devices
- 🔒 **Authentication Structure** - Ready to integrate with your auth system

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Using npm
npm create vite@latest my-app -- --template github:pentafox/pentafox-starter-kit
cd my-app
npm install
npm run dev

# Using yarn
yarn create vite my-app --template github:pentafox/pentafox-starter-kit
cd my-app
yarn
yarn dev

# Using pnpm
pnpm create vite my-app --template github:pentafox/pentafox-starter-kit
cd my-app
pnpm install
pnpm dev
```

## Project Structure

```
pentafox-starter-kit/
├── public/              # Static assets
├── src/
│   ├── api/             # API integration layers
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── layout/          # Layout components
│   ├── pages/           # Page components
│   ├── store/           # Zustand store definitions
│   ├── theme/           # Mantine theme configuration
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite type definitions
├── .eslintrc.js         # ESLint configuration
├── .gitignore           # Git ignore rules
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Todo App Features

The included Todo application demonstrates:

- **CRUD Operations**: Create, read, update, and delete todos
- **State Management**: Using Zustand for global state
- **Data Fetching**: With React Query for server state
- **Form Handling**: With Mantine forms
- **Routing**: Navigation between different views
- **Responsive UI**: Works on mobile and desktop

## Customization

### Theming

The template uses Mantine UI which supports extensive theming. Modify the theme configuration in `src/theme/index.ts`.

### Adding New Pages

1. Create a new page component in the `src/pages` directory
2. Add a route for your page in `src/App.tsx` using React Router

### State Management

The template uses Zustand for state management. Add new stores in the `src/store` directory.

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint the codebase
npm run lint

# Format the codebase
npm run format
```

## Deployment

This template can be deployed to any static hosting service:

```bash
npm run build
```

Then deploy the `dist` directory to your hosting provider of choice (Vercel, Netlify, GitHub Pages, etc.).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

See [CONTRIBUTING.md](contributing.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mantine UI](https://mantine.dev/)
- [React Query](https://tanstack.com/query/latest)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Router](https://reactrouter.com/)
