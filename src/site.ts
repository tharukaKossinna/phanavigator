// Site-wide settings. Edit here to change the navigation or help-line numbers.

export const SITE_NAME = 'PH Navigator';
export const SITE_DESCRIPTION =
  'Plain-language information for people with pulmonary hypertension (PH) and their families in Australia and New Zealand.';

/** Main navigation, in order. Paths are written from the site root. */
export const NAV = [
  { label: 'What is PH', href: '/what-is-ph/' },
  { label: 'Diagnosis & tests', href: '/diagnosis-and-tests/' },
  { label: 'Questions for your doctor', href: '/questions-for-your-doctor/' },
  { label: 'Treatments', href: '/treatments/' },
  { label: 'Find a specialist', href: '/find-a-specialist/' },
  { label: 'About', href: '/about/' },
];

/**
 * Urgent help numbers shown at the top of every page.
 * Last checked 25 October 2026. NZ numbers checked against
 * mentalhealth.org.nz/helplines.
 */
export const HELP_LINES = {
  emergency: [
    { label: 'Australia', number: '000' },
    { label: 'New Zealand', number: '111' },
  ],
  support: [
    { label: 'Lifeline (AU)', number: '13 11 14' },
    { label: 'Beyond Blue (AU)', number: '1300 22 4636' },
    { label: 'Need to talk? (NZ, call or text)', number: '1737' },
  ],
};

/** Adds the base path (e.g. /phanavigator) to a root-relative link. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

/** Turns a display number into a tel: link. */
export function tel(number: string): string {
  return `tel:${number.replace(/\s+/g, '')}`;
}
