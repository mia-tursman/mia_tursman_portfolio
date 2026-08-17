# Mia Tursman — Portfolio

Personal portfolio site for Mia Tursman, a UX design student at the University of Michigan School of Information. Built with the Next.js App Router, TypeScript, and Tailwind CSS v4.

## Structure

- `/` — Homepage: intro and a grid of selected case studies
- `/about` — Background, interests, and resume/contact links
- `/work/[slug]` — Individual case study pages, each its own file under `src/app/work/<slug>/page.tsx`

Case studies are listed in `src/lib/projects.ts`; adding a new one means adding an entry there and a matching page under `src/app/work/<slug>/`.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- `next/font` (Fraunces, Work Sans, Caveat) and `next/image` for optimized fonts/images

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

```bash
npm run build   # production build
npm run lint    # ESLint
```
