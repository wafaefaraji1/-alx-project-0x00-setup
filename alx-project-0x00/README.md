# ALX Project 0x00 - Next.js Airbnb Clone

This is a Next.js-based project designed to teach the fundamentals of building modern web applications using React, TypeScript, and Next.js.

## Project Structure

```
alx-project-0x00/
├── components/          # Reusable React components
│   ├── Card.tsx        # Card component for property listings
│   └── Pill.tsx        # Pill component for tags
├── interfaces/         # TypeScript interfaces
│   └── index.ts        # Shared interfaces
├── pages/              # Next.js pages (Pages Router)
│   ├── index.tsx       # Home page
│   ├── landing.tsx     # Landing page
│   ├── about.tsx       # About page
│   └── api/            # API routes
├── public/             # Static assets
│   └── assets/
│       └── images/     # Image assets
│           ├── house.png
│           └── star.png
└── styles/             # Global styles
    └── globals.css
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev -- -p 3000
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Routes

- `/` - Home page with "Get Started" button
- `/landing` - Landing page with property cards
- `/about` - About page

## Technologies Used

- **Next.js** - React framework with Pages Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and quality

## Components

### Card Component
Displays property information including:
- Property image
- Rating with star icon
- Title and description
- Accepts props: `title`, `desc`, `rating`

### Pill Component
Small tag component for displaying labels
- Accepts props: `title`

## Learning Objectives

- Understand Next.js project structure
- Implement basic routing with Pages Router
- Create reusable TypeScript components
- Work with TypeScript interfaces
- Manage static assets
- Apply Tailwind CSS styling

## Important Notes

⚠️ **Image Assets**: The placeholder image files in `public/assets/images/` need to be replaced with actual PNG images:
- `house.png` - Property/house image
- `star.png` - Star rating icon

You can download suitable images or create your own to replace these placeholders.

## Development Best Practices

- Use TypeScript interfaces for component props
- Follow arrow function syntax for components
- Keep components modular and reusable
- Use Tailwind CSS utility classes
- Maintain consistent code formatting with ESLint

## Project Tasks Completed

- ✅ Task 0: Project scaffolding with create-next-app
- ✅ Task 1: Project directory structure (components, interfaces)
- ✅ Task 2: Basic routing (landing, about pages)
- ✅ Task 3: Component creation (Card, Pill)
- ✅ Task 4: Component usage
- ✅ Task 5: TypeScript interfaces for props

## License

This project is part of the ALX Software Engineering program.
