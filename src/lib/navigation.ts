export interface NavItem {
  label: string;
  href: string;
  num: string;
}

export interface SectionAnchor {
  id: string;
  href: string;
}

/** Order must strictly match top-to-bottom DOM order in src/app/page.tsx. */
export const LANDING_SECTION_ORDER: readonly SectionAnchor[] = [
  { id: 'alur', href: '/#alur' },
  { id: 'kategori', href: '/#kategori' },
  { id: 'kepatuhan', href: '/#kepatuhan' },
  { id: 'tim', href: '/#tim' },
  { id: 'faq', href: '/#faq' },
];

/** Public navbar links: landing page sections only (no standalone pages like /kebijakan-privasi). */
export const PUBLIC_NAV_ITEMS: readonly NavItem[] = [
  { label: 'Beranda', href: '/', num: '01' },
  { label: 'Alur Lapor', href: '/#alur', num: '02' },
  { label: 'Fitur Utama', href: '/#kategori', num: '03' },
  { label: 'Kepatuhan', href: '/#kepatuhan', num: '04' },
  { label: 'Tim Pengembang', href: '/#tim', num: '05' },
  { label: 'FAQ', href: '/#faq', num: '06' },
];

/** Footer Explore column links matching landing sections cleanly. */
export const FOOTER_EXPLORE_ITEMS: readonly { label: string; href: string }[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Alur Laporan', href: '/#alur' },
  { label: 'Fitur Utama', href: '/#kategori' },
  { label: 'Pondasi Kepatuhan', href: '/#kepatuhan' },
  { label: 'Tim Pengembang', href: '/#tim' },
  { label: 'Tanya Jawab (FAQ)', href: '/#faq' },
];

/**
 * Resolves the active navigation href based on current route and section bounding tops.
 * Pure function so Scroll Spy transitions can be deterministically unit tested.
 */
export function resolveActiveNav(
  pathname: string,
  scrollY: number,
  innerHeight: number,
  scrollHeight: number,
  sectionTops: Record<string, number>,
  scrollCheckY = 170
): string {
  if (pathname !== '/') {
    return pathname;
  }

  if (scrollY < 220) {
    return '/';
  }

  if (scrollHeight > 0 && innerHeight + scrollY >= scrollHeight - 140) {
    return '/#faq';
  }

  let current = '/';
  for (const section of LANDING_SECTION_ORDER) {
    const top = sectionTops[section.id];
    if (typeof top === 'number' && top <= scrollCheckY) {
      current = section.href;
    }
  }

  return current;
}
