<div align="center">

<br/>

```
   ██████╗ █████╗ ███╗   ██╗██████╗ ██████╗  █████╗ ███████╗ █████╗
  ██╔════╝██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗
  ██║     ███████║██╔██╗ ██║██║  ██║██████╔╝███████║███████╗███████║
  ██║     ██╔══██║██║╚██╗██║██║  ██║██╔══██╗██╔══██║╚════██║██╔══██║
  ╚██████╗██║  ██║██║ ╚████║██████╔╝██║  ██║██║  ██║███████║██║  ██║
   ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
```

**Candrasa Bakery — Digital Storefront**

*Fresh from the oven, straight to your screen.*

<br/>

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-22c55e?style=flat-square)]()

</div>

---

## ✦ About

**CandrasaWeb** is the official digital platform for **Candrasa Bakery** — a modern e-commerce web experience built to showcase products, highlight ongoing promotions, and deliver essential bakery information to customers.

Designed with a clean and responsive interface, CandrasaWeb strengthens the bakery's online presence and ensures a seamless browsing experience across all devices — from desktop to mobile.

> *"More than a bakery website — it's a digital experience that brings the warmth of fresh bread to every screen."*

---

## ✦ Features

- **Product Showcase** — Browse the full catalog with rich visuals and descriptions
- **Promotions & Offers** — Highlighted banners and deals updated in real-time
- **Responsive Design** — Pixel-perfect layout across all screen sizes
- **Fast Performance** — Built on Vite for lightning-fast HMR and optimized builds
- **Type-Safe Codebase** — Full TypeScript coverage for maintainable, scalable code
- **Clean UI** — Minimal, bakery-themed aesthetic focused on readability

---

## ✦ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Language | TypeScript 5 |
| Build Tool | Vite 6 |
| Linting | ESLint + typescript-eslint |
| Styling | CSS / Tailwind CSS |
| Package Manager | npm / pnpm |

---

## ✦ Project Structure

```
candrasa-web/
│
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route-level page components
│   ├── assets/           # Images, fonts, icons
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   └── main.tsx          # App entry point
│
├── public/               # Static assets
├── index.html
├── vite.config.ts
├── tsconfig.app.json
├── tsconfig.node.json
└── eslint.config.js
```

---

## ✦ Getting Started

### Prerequisites

- Node.js `>= 18`
- npm or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/candrasa-web.git

# 2. Navigate into the project
cd candrasa-web

# 3. Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

Output goes to the `dist/` folder, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## ✦ React + TypeScript + Vite

This project is bootstrapped with the official Vite React TypeScript template, providing a minimal setup with HMR and ESLint rules out of the box.

Two official Vite React plugins are available:

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used with [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) — uses [SWC](https://swc.rs/) for Fast Refresh

> **Note:** The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking progress.

---

## ✦ ESLint Configuration

For production applications, update `eslint.config.js` to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

You can also install [`eslint-plugin-react-x`](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [`eslint-plugin-react-dom`](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

---

## ✦ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## ✦ License

Released under the [MIT License](LICENSE).

---

<div align="center">

Made with care for **Candrasa Bakery** 🍞

<sub>Built with React · TypeScript · Vite</sub>

</div>