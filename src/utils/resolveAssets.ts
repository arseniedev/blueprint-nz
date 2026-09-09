const imageModules = import.meta.glob<string>('/public/assets/images/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

/** Resolve a path relative to `public/assets/images/`, e.g. `path-cards/path-patient-space.png`. */
export function resolveAsset(relativePath: string): string {
  const key = `/public/assets/images/${relativePath.replace(/^\//, '')}`;
  const url = imageModules[key];

  if (!url) {
    throw new Error(`Asset not found: ${relativePath}`);
  }

  return url;
}
