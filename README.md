# Equal Horizons

The Equal Horizons website is a Next.js site for the California 501(c)(3)
nonprofit Equal Horizons. It shares the organization's mission, projects, and
ways to get involved.

## Prerequisites

- Node.js 20 or newer
- npm

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The
development server automatically reloads as files change.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/app/
├── about/             # About Equal Horizons
├── get-involved/      # Ways to contribute
├── projects/          # Project listing and project detail pages
├── Footer.tsx         # Site footer
├── Hero.tsx           # Homepage hero section
├── Navbar.tsx         # Site navigation
├── layout.tsx         # Root layout and metadata
├── page.tsx           # Homepage
└── globals.css        # Global styles
```

Page content and components live under `src/app`. Static assets are stored in
`public`.

## Technology

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Phosphor Icons](https://phosphoricons.com/)

## Production

Build and run the production version locally:

```bash
npm run build
npm run start
```

The site can be deployed to any platform that supports Next.js. For a
Vercel deployment, see the
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
