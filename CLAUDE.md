# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Vue 3 + TypeScript + Vite web application for demonstrating EasyExcel functionality. It provides a simple web interface to download Excel files via API calls.

## Tech Stack
- **Frontend**: Vue 3 with Composition API
- **Build Tool**: Vite
- **Language**: TypeScript
- **HTTP Client**: Axios
- **Styling**: CSS with scoped styles

## Project Structure
```
src/
├── main.ts           # Application entry point
├── App.vue           # Root Vue component
├── components/       # Vue components
│   └── HelloWorld.vue # Main demo component with Excel download
├── assets/           # Static assets
└── style.css        # Global styles

config files:
├── vite.config.ts    # Vite configuration with proxy setup
├── tsconfig.json     # TypeScript configuration (references tsconfig.app.json & tsconfig.node.json)
└── package.json      # Dependencies and scripts
```

## Available Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production (runs type check + build)
- `npm run preview` - Preview production build locally

## Development Setup
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. The app will be available at `http://localhost:5173`

## API Integration
The project includes a Vite proxy configuration for API calls:
- All `/api/*` requests are proxied to `http://localhost:8080`
- The `/api` prefix is removed when forwarding requests
- This allows seamless integration with a Java Spring Boot backend

## Key Features
- **Excel Download**: The HelloWorld component includes functionality to download Excel files via `/api/web-demo01` endpoint
- **Blob Handling**: Uses Axios with `responseType: 'blob'` for proper Excel file handling
- **File Download**: Implements browser-based file download using Blob URLs and dynamic link creation

## Backend Requirements
The frontend expects a backend server running on `http://localhost:8080` with:
- Endpoint: `/web-demo01` (GET)
- Response: Excel file with content-type `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

## No Testing Setup
This project does not currently include any testing framework or test files.