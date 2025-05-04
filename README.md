
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

## Current Limitations

- **No Automated Testing**: The project currently lacks unit, integration, and end-to-end tests.
- **No Backend Implementation**: This is a frontend-only project. A real implementation would require backend services for data persistence and processing.
- **Limited Accessibility**: While basic accessibility features are in place, a comprehensive audit and implementation of WCAG guidelines is needed.
- **Mock Data Only**: All visualizations and tables currently use static mock data.

## Roadmap

### Q2 2025
- **Automated Testing Suite**
  - Implement Jest and React Testing Library for unit tests
  - Add Cypress for end-to-end testing
  - Set up CI/CD pipeline with GitHub Actions
- **Backend Integration**
  - Create API specification for backend services
  - Implement JWT authentication
  - Set up data fetching with React Query

### Q3 2025
- **Enhanced Analytics Features**
  - Real-time data streaming for live analytics
  - Export capabilities for reports (CSV, PDF)
  - Custom dashboard builder for personalized analytics views
- **Accessibility Improvements**
  - WCAG 2.1 AA compliance
  - Keyboard navigation improvements
  - Screen reader optimizations

### Q4 2025
- **Advanced User Management**
  - Role-based access control
  - User activity logging and audit trails
  - Multi-factor authentication
- **AI-Powered Analytics**
  - Natural language query interface
  - Predictive analytics for search trends
  - Anomaly detection for unusual search patterns

### Q1 2026
- **Enterprise Features**
  - Single sign-on (SSO) integration
  - Custom theming for white-labeling
  - Multi-tenant architecture
- **Mobile Application**
  - React Native implementation for iOS and Android
  - Push notifications for critical metrics
  - Offline mode with data synchronization

## Deployment

The application can be deployed on any static hosting service like Vercel, Netlify, or GitHub Pages.

## License

MIT
