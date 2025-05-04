
# Glean Admin Dashboard

An elegant and responsive admin dashboard with dark mode support for enterprise search analytics.

## Features

- **Modern UI Design**: Clean, responsive interface built with React, Tailwind CSS, and shadcn/ui
- **Dark Mode Support**: Toggle between light and dark themes with automatic system preference detection
- **Analytics Dashboard**: Visualize search analytics, user engagement metrics, and content performance
- **Advanced Filtering**: Filter analytics data by date range, department, and more
- **Modular Architecture**: Well-organized code structure with component-based architecture

## Project Structure

The project uses a modular architecture with the following structure:

- `/src/components`: Reusable UI components 
- `/src/pages`: Main application pages
- `/src/contexts`: React context providers (e.g., ThemeContext)
- `/src/styles`: CSS styles organized by purpose:
  - `base.css`: Core styles and Tailwind imports
  - `theme/`: Light and dark theme variables
  - `components/`: Component-specific styles
  - `utilities.css`: Utility classes

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router
- **API Integration**: TanStack Query (React Query)
- **Charts**: Recharts

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Visit `http://localhost:5173` to see the application

## Development Guidelines

- Keep components small and focused
- Follow the established styling patterns using Tailwind CSS
- Maintain theme consistency for both light and dark modes
- Use TypeScript for type safety
- Follow React best practices (custom hooks, context API, etc.)
- Ensure responsive design for all screen sizes

## Deployment

The application can be deployed on any static hosting service like Vercel, Netlify, or GitHub Pages.

## License

MIT
