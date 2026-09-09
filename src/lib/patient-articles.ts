import { getCollection, type CollectionEntry } from 'astro:content';

export const PATIENT_HUB_HREF = '/patient-space';

export type PatientArticle = CollectionEntry<'patient'>;

export function getPatientSlug(article: PatientArticle): string {
  const segments = article.id.split('/');
  return segments[segments.length - 1] ?? article.id;
}

export function patientArticleHref(slug: string): string {
  return `${PATIENT_HUB_HREF}/${slug}`;
}

export async function getPublishedPatientArticles(): Promise<PatientArticle[]> {
  return getCollection('patient', ({ data }) => !data.draft);
}

export async function getRelatedPatientArticles(
  article: PatientArticle,
): Promise<PatientArticle[]> {
  const published = await getPublishedPatientArticles();
  const currentSlug = getPatientSlug(article);
  const bySlug = new Map(published.map((entry) => [getPatientSlug(entry), entry]));

  const explicit = article.data.related
    .map((slug) => bySlug.get(slug))
    .filter((entry): entry is PatientArticle => Boolean(entry) && getPatientSlug(entry) !== currentSlug);

  if (explicit.length > 0) {
    return explicit;
  }

  return published.filter(
    (entry) => entry.data.stage === article.data.stage && getPatientSlug(entry) !== currentSlug,
  );
}
