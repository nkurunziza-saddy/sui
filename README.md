# GEMINI.md

## Project Overview

This is a Next.js project that uses [Fumadocs](https://fumadocs.vercel.app/) to create a documentation website for my components using Shadcn registry. The project is structured to have a main landing page and a separate documentation section. The content for the documentation is written in MDX and is located in the `content/docs` directory and registry components and blocks in `src/registry/new-york` with registries defined in `registry.json`, registry components use base shadcn ui components in `src/components/ui` with open component in v0 at `src/components/open-in-v0-button.tsx`, example for components are in `src/components/examples`.

The main technologies used are:

- **Framework:** [Next.js](https://nextjs.org/)
- **Documentation:** [Fumadocs](https://fumadocs.vercel.app/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [fumadocs-ui](https://fumadocs.vercel.app/docs/ui/components), [Radix UI](https://www.radix-ui.com/)
- **Content:** [MDX](https://mdxjs.com/)

## Building and Running

To run the development server, use one of the following commands:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

This will start the development server on [http://localhost:3000](http://localhost:3000).

Other available scripts:

- `pnpm run build`: Builds the application for production.
- `pnpm run start`: Starts a production server.
- `pnpm run postinstall`: Runs `fumadocs-mdx` after installation.
- `pnpm run registry:build`: Builds the shadcn registry components.

## Development Conventions

- **Content:** Documentation content is written in MDX and stored in the `content/docs` directory.
- **Components:** Reusable UI components are located in `src/components`.
- **Registry Items:** Shadcn registry items are located in `src/registry/new-york`.
- **Examples for registry items:** Example implementations for components are in `src/components/examples`.
- **Registry Configuration:** The registry configuration is defined in `registry.json`.
- **Layouts:** The main layouts for the home page and documentation pages are defined in `src/app/(home)/layout.tsx` and `src/app/docs/layout.tsx` respectively. Shared layout options are in `src/lib/layout.shared.tsx`.
- **Content Source:** The content source is configured in `src/lib/source.ts` and `source.config.ts`.
- **Styling:** The project uses Tailwind CSS for styling. The configuration is in `tailwind.config.js` and the main CSS file is `src/app/global.css`.
