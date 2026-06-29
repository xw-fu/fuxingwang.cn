# Ryan Fu - Personal Website

A minimalist personal website built with React and Vite.

## Features

- Clean, minimal design with dark mode support
- Fully responsive layout
- Accessibility-focused (skip links, semantic HTML)
- Fast performance with Vite
- SPA routing via React Router (`/`, `/about`)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

The production bundle is written to `dist/`.

### Preview Production Build

```bash
npm run preview
```

## Deployment

Deployed on **Render.com** as a Static Site. The `render.yaml` in this repo is the
source of truth for the deployment config.

The critical setting is the SPA rewrite:

```yaml
routes:
  - type: rewrite
    source: /*
    destination: /index.html
```

Without it, refreshing or directly visiting any non-root path (e.g. `/about`)
returns a 404 because Render serves static files literally, while React Router
expects every URL to be served as `index.html` and resolved client-side.

## Customization

### Profile Photo

Replace `public/avatar.jpg` to update the avatar.

### Content

- `src/components/Hero.jsx` — Hero section + rotating-words list
- `src/components/About.jsx` — About me copy
- `src/components/Footer.jsx` — Social links and copyright
- `index.html` — `<title>` and meta

### Styling

- Each component has its own CSS file for easy customization
- Global styles live in `src/index.css`

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
│   ├── pages/           # Route-level components
│   │   ├── Home.jsx
│   │   └── AboutPage.jsx
│   ├── App.jsx          # Router + layout shell
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── render.yaml          # Render.com Static Site config
└── vite.config.js
```

## License

All rights reserved.
