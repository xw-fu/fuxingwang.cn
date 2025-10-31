# Ryan Fu - Personal Website

A minimalist personal website built with React and Vite.

## Features

- Clean, minimal design with dark mode support
- Fully responsive layout
- Accessibility-focused (skip links, semantic HTML)
- Fast performance with Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Customization

### Profile Photo

Replace the placeholder image in `src/components/Hero.jsx` with your actual photo.

### Social Links

Update the social media links in `src/components/Footer.jsx` with your actual profiles.

### Content

Edit the content in the component files:
- `src/components/Hero.jsx` - Hero section with profile photo
- `src/components/About.jsx` - About me section
- `src/components/Footer.jsx` - Social links and copyright

### Styling

Each component has its own CSS file for easy customization:
- Modify colors, fonts, and spacing in the individual CSS files
- Global styles are in `src/index.css`

## Project Structure

```
fuxingwang.cn/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── App.css         # App styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## License

All rights reserved.
