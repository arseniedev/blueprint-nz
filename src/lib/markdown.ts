/** Match typical GitHub / rehype-slug heading ids. */
// export function slugifyHeading(text: string): string {
//   return text
//     .toLowerCase()
//     .normalize('NFKD')
//     .replace(/[\u0300-\u036f]/g, '')
//     .replace(/[''"]/g, '')
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/^-+|-+$/g, '');
// }

export type MarkdownHeading = {
  depth: number;
  slug: string;
  text: string;
};

/** H2s only — page title is the layout H1. */
export function tocFromHeadings(headings: MarkdownHeading[]): { id: string; label: string }[] {
  return headings
    .filter((heading) => heading.depth === 2)
    .map((heading) => ({ id: heading.slug, label: heading.text }));
}



// export function headingsFromMarkdown(body: string): { id: string; label: string }[] {
//   return [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map(([, label]) => ({
//     id: slugifyHeading(label),
//     label: label.trim(),
//   }));