# Portfolio

A modern, minimalist portfolio website built with React and TypeScript. Features a clean design with dark theme support and responsive layout.

## Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Dark Theme**: Beautiful dark color scheme with violet accents
- **Responsive**: Fully responsive design that works on all devices
- **Reusable Components**: Modular component architecture for easy customization
- **TypeScript**: Full TypeScript support for better development experience
- **Performance**: Optimized for fast loading and smooth interactions

## Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **CSS3** - Styling with CSS custom properties and modern features
- **React Router** - Client-side routing (ready to implement)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── index.ts
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── index.ts
├── App.tsx                 # Main app component
├── index.tsx              # App entry point
└── index.css              # Global styles and CSS variables
```

## Customization

### Colors

The app uses CSS custom properties for colors. You can modify the color scheme by updating the variables in `src/index.css`:

```css
.dark, .dark-theme {
  --violet-1: #120f19;
  --violet-2: #191623;
  /* ... more color variables */
}
```

### Content

Update the portfolio content by modifying the components in the `src/components/sections/` directory:

- **Hero**: Update your name, title, and description
- **About**: Modify your story, skills, and experience
- **Projects**: Add your projects with descriptions and links
- **Contact**: Update contact information and form handling

### Components

The UI components are designed to be reusable and customizable. Each component accepts props for styling and behavior:

```tsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Click me
</Button>
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Deployment

To deploy your portfolio:

1. Build the production version:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service of choice (Vercel, Netlify, GitHub Pages, etc.)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).