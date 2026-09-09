export type MarkdownHeading = {
  depth: number;
  slug: string;
  text: string;
};

/** H2s only — page title is the layout H1. */
export function headingsFromMarkdown(headings: MarkdownHeading[]): { id: string; label: string }[] {
  return headings
    .filter((heading) => heading.depth === 2)
    .map((heading) => ({ id: heading.slug, label: heading.text }));
}


