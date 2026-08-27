import { SITE_TITLE } from '../consts';

export const pageLabels: Record<string, string> = {
	'/': SITE_TITLE,
	'/home': SITE_TITLE,
	'/family': `Family`,
	'/patient-space': `Patient`,
	'/researcher': `Researcher`,
};

export function getPageLabel(path: string): string {
	return pageLabels[path] ?? SITE_TITLE;
}