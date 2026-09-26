# Aime | Software Developer Portfolio

A responsive personal portfolio for Byiringiro Ingabire Aime. It presents an introduction, skills, selected projects, education, certifications, and contact options in a single-page experience.

## Features

- Responsive layout with mobile navigation
- Light and dark themes, with the selection saved in local storage
- Animated sections and project cards
- Project and certification details maintained in one data file
- CV and certificate links
- Contact form powered by [FormSubmit](https://formsubmit.co/)

## Built With

- React 18
- Vite 6
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Getting Started

### Requirements

- Node.js (an active LTS release is recommended)
- npm

### Install and run

```bash
git clone https://github.com/aimebyiringiro123/aime-portfolio.git
cd aime-portfolio
npm install
npm run dev
```

Vite prints the local development URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Preview the production build locally. Run `npm run build` first. |

## Project Structure

```text
public/                 Static images, certificates, documents, and sitemap
src/
  components/            Reusable UI components
  data/portfolio.js      Skills, project cards, and certification entries
  App.jsx                Portfolio page and section layout
  styles.css             Global styles
index.html               HTML entry point and page metadata
```

## Customization

- Update the `skills`, `projects`, and `certifications` arrays in `src/data/portfolio.js` to change portfolio content.
- Put the portrait and project-related images in `public/images/` and update their paths in the app or data file.
- Put the CV in `public/documents/` and certificates in `public/certificates/`. The current page links to `/documents/Aime_Byiringiro_CV.pdf`.
- Update social links, email, and the FormSubmit recipient in `src/App.jsx` if you reuse the site for another portfolio.
- Edit the page title and description in `index.html` for the new owner and site.

## Production Build

```bash
npm run build
npm run preview
```

The generated static site is written to `dist/` and can be deployed to a static hosting provider such as Netlify or Vercel. The current Vite configuration assumes the site is served from the domain root. For GitHub Pages deployments under a repository subpath, configure Vite's `base` option before deploying so asset URLs resolve correctly.

## Contact

- GitHub: [@aimebyiringiro123](https://github.com/aimebyiringiro123)
- LinkedIn: [Byiringiro Ingabire Aime](https://www.linkedin.com/in/byiringiro-ingabire-aime-9a589a2b3/)
- Email: [aimebyiringiro123@gmail.com](mailto:aimebyiringiro123@gmail.com)
