import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  PUBLIC_NAV_ITEMS,
  FOOTER_EXPLORE_ITEMS,
  LANDING_SECTION_ORDER,
  resolveActiveNav,
} from '../navigation.ts';

describe('Landing Page Navigation Contract', () => {
  it('excludes separate standalone pages like /kebijakan-privasi from public navbar', () => {
    const hrefs = PUBLIC_NAV_ITEMS.map((item) => item.href);
    assert.equal(hrefs.includes('/kebijakan-privasi'), false);
    assert.equal(hrefs.includes('/syarat-ketentuan'), false);
  });

  it('replaces "Kenali Kasus" with "Fitur Utama" pointing to /#kategori', () => {
    const labels = PUBLIC_NAV_ITEMS.map((item) => item.label);
    assert.equal(labels.includes('Kenali Kasus'), false);
    const fiturItem = PUBLIC_NAV_ITEMS.find((item) => item.href === '/#kategori');
    assert.ok(fiturItem);
    assert.equal(fiturItem.label, 'Fitur Utama');
  });

  it('keeps navbar section anchors ordered identically to the landing page DOM order', () => {
    const sectionHrefs = PUBLIC_NAV_ITEMS.filter((i) => i.href.startsWith('/#')).map((i) =>
      i.href.replace('/#', '')
    );
    assert.deepEqual(
      sectionHrefs,
      LANDING_SECTION_ORDER.map((s) => s.id)
    );
    assert.deepEqual(sectionHrefs, ['alur', 'kategori', 'kepatuhan', 'tim', 'faq']);
  });

  it('keeps Footer explore items aligned with all landing page anchors', () => {
    const footerHrefs = FOOTER_EXPLORE_ITEMS.map((item) => item.href);
    for (const navItem of PUBLIC_NAV_ITEMS) {
      assert.ok(
        footerHrefs.includes(navItem.href),
        `Expected footer explore links to include ${navItem.href}`
      );
    }
  });
});

describe('resolveActiveNav Scroll Spy Behavior', () => {
  it('returns current pathname immediately on non-home routes', () => {
    const active = resolveActiveNav('/kebijakan-privasi', 500, 800, 3000, {});
    assert.equal(active, '/kebijakan-privasi');
  });

  it('returns "/" when near top of landing page', () => {
    const active = resolveActiveNav('/', 100, 900, 5000, {
      alur: 600,
      kategori: 1200,
      kepatuhan: 2000,
      tim: 3000,
      faq: 4000,
    });
    assert.equal(active, '/');
  });

  it('returns "/#alur" when #alur enters the viewport zone', () => {
    const active = resolveActiveNav('/', 650, 900, 5000, {
      alur: 120,
      kategori: 720,
      kepatuhan: 1500,
      tim: 2500,
      faq: 3500,
    });
    assert.equal(active, '/#alur');
  });

  it('advances cleanly from #tim to #faq without reverting to #tim', () => {
    const active = resolveActiveNav('/', 3600, 900, 5200, {
      alur: -2800,
      kategori: -2200,
      kepatuhan: -1400,
      tim: -450,
      faq: 110,
    });
    assert.equal(active, '/#faq');
  });

  it('selects "/#faq" when scrolled to bottom of page', () => {
    const active = resolveActiveNav('/', 4200, 900, 5150, {
      alur: -3400,
      kategori: -2800,
      kepatuhan: -2000,
      tim: -1050,
      faq: 240,
    });
    assert.equal(active, '/#faq');
  });
});
