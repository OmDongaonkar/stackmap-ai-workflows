# Stackmap - AI-Powered Developer Documentation Platform

## Overview

Stackmap is a full-stack web application designed to help developers generate documentation, understand codebases, and facilitate easier onboarding. The application features a React frontend with a modern UI built using shadcn/ui components, an Express.js backend, and PostgreSQL database integration through Drizzle ORM. The platform appears to focus on workflow visualization, documentation generation, and team collaboration for software development projects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript running on Vite for fast development and building
- **UI Framework**: Modern component library using shadcn/ui with Radix UI primitives and Tailwind CSS for styling
- **Styling**: Tailwind CSS with custom design system supporting dark/light themes via CSS variables
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: React Router v6 for client-side navigation with dedicated pages for authentication, dashboard, workspace, and workflow viewing
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework using ES modules
- **Language**: TypeScript for type safety across the entire backend
- **Development**: TSX for running TypeScript directly in development mode
- **API Structure**: RESTful API design with modular route registration system
- **Middleware**: Custom logging middleware for API request tracking and error handling
- **Build Process**: ESBuild for production bundling with external package handling

### Data Storage Solutions
- **Database**: PostgreSQL as the primary database
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Database Provider**: Neon Database (serverless PostgreSQL) for cloud hosting
- **Schema Management**: Centralized schema definitions in shared directory with automatic TypeScript type generation
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Development Storage**: In-memory storage implementation for development/testing with interface-based design for easy database swapping

### Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple for persistent session storage
- **User Schema**: Basic user model with username/password authentication
- **Validation**: Zod schemas for input validation and type safety
- **Frontend Auth**: Route-based navigation with login/signup flows and dashboard protection

### Development and Build System
- **Build Tool**: Vite for frontend development with React plugin and hot module replacement
- **Development Server**: Custom Vite middleware integration with Express for unified development experience
- **Error Handling**: Runtime error overlay for development debugging
- **Path Aliases**: TypeScript path mapping for clean imports across client, server, and shared code
- **Code Organization**: Monorepo structure with clear separation between client, server, and shared code

### UI/UX Design Decisions
- **Design System**: Comprehensive component library with consistent spacing, colors, and typography
- **Theme Support**: Built-in dark/light mode with system preference detection
- **Responsive Design**: Mobile-first approach with responsive breakpoints and mobile-specific components
- **Animation**: Subtle animations and transitions using Tailwind CSS and Radix UI
- **Accessibility**: Radix UI primitives ensure keyboard navigation and screen reader support

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connectivity
- **drizzle-orm** and **drizzle-kit**: Type-safe ORM and database toolkit for PostgreSQL operations
- **express**: Web framework for the Node.js backend API
- **vite** and **@vitejs/plugin-react**: Modern build tool and React integration

### UI and Component Libraries
- **@radix-ui/***: Comprehensive set of accessible, unstyled UI primitives for building the component system
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: For creating consistent component variants
- **next-themes**: Theme management for dark/light mode switching

### State Management and Data Fetching
- **@tanstack/react-query**: Server state management, caching, and synchronization
- **react-hook-form** and **@hookform/resolvers**: Form state management and validation
- **zod**: Schema validation for TypeScript

### Development and Build Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx** and **tailwind-merge**: Conditional CSS class handling
- **nanoid**: Unique ID generation
- **lucide-react**: Icon library for consistent iconography