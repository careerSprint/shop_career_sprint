# Shop Application

A modern e-commerce application built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Node.js Express backend.

## Project Structure

```
shop/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/       # App Router pages
│   │   ├── components/ # React components
│   │   └── lib/       # Utility functions
│   ├── package.json
│   └── tailwind.config.js
└── backend/           # Express.js backend API
    ├── src/
    │   └── index.ts   # Main server file
    ├── package.json
    └── tsconfig.json
```

## Getting Started

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. The API will be available at [http://localhost:3001](http://localhost:3001).

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/products` - Get all products

## Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **CORS** - Cross-Origin Resource Sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **dotenv** - Environment variable management

## Features

- ✅ Modern React with Next.js App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ shadcn/ui components
- ✅ Express.js REST API
- ✅ CORS enabled for cross-origin requests
- ✅ Security headers with Helmet
- ✅ Request logging with Morgan
- ✅ Environment configuration

## Development Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server with nodemon
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Start production server
