import type { ImageMetadata } from 'astro';

// Project images live in src/assets/projects so astro:assets can optimize them.
// identity.json keeps the original public paths ("/img/projects/<slug>/<file>.webp");
// this map resolves each one to its imported ImageMetadata.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projects/**/*.{webp,png,jpg,jpeg}',
  { eager: true },
);

const byPath = new Map<string, ImageMetadata>(
  Object.entries(modules).map(([file, mod]) => [file.replace('/src/assets/', '/img/'), mod.default]),
);

export function getProjectImage(path: string): ImageMetadata {
  const image = byPath.get(path);
  if (!image) throw new Error(`Project image not found: ${path}`);
  return image;
}
