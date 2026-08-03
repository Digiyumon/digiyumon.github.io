// Site-wide settings. Edit this file to rebrand the theme — every page,
// the RSS feed, and Open Graph tags read from here.

export const SITE = {
  /** Site name — used in the header brand, <title>, and og:site_name. */
  title: 'Alejandro Ojeda-Celis',
  /** Default meta description for pages that don't set their own. */
  description: 'Data & Software Engineer specializing in Python ETL pipelines, SQL performance tuning, and full-stack development.',
  /** Description of the RSS feed at /rss.xml. */
  rssDescription: 'Project logs and technical notes from Alejandro Ojeda-Celis.',
  /** Default social share image, relative to the site root (see public/). */
  ogImage: '/og.jpg',
  /** Footer credit line. */
  footerText: '© 2026 Alejandro Ojeda-Celis. Built with Astro.',
} as const;

/** Header navigation. `href` is relative to the site root; the configured
 *  `base` is applied automatically via `withBase()`. */
export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/works/', label: 'Projects' }, 
] as const;