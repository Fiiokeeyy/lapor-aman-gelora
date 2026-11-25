import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  PRIVACY_LAST_UPDATED,
  PRIVACY_SECTIONS,
  ROLE_VISIBILITY_RULES,
  getRoleVisibilityRule,
  TERMS_LAST_UPDATED,
  TERMS_SECTIONS,
  REPORT_TONE_EXAMPLES,
  getReportToneExample,
  HELP_TRIAGE_SOLUTIONS,
  getHelpTriageSolution,
  OFFICIAL_HELP_CHANNELS,
  EMERGENCY_CRISIS_CONTACTS,
  PUBLIC_DOC_TABS,
} from '../legal-support-data.ts';

function collectStrings(value: unknown): string[] {
  if (typeof value === 'string') {
    return [value];
  }
  if (Array.isArray(value)) {
    return value.flatMap(collectStrings);
  }
  if (value && typeof value === 'object') {
    return Object.values(value).flatMap(collectStrings);
  }
  return [];
}

describe('legal-support-data integrity and copy rules', () => {
  it('avoids AI-slop em-dashes across all legal and support copy', () => {
    const allTexts = collectStrings({
      PRIVACY_LAST_UPDATED,
      PRIVACY_SECTIONS,
      ROLE_VISIBILITY_RULES,
      TERMS_LAST_UPDATED,
      TERMS_SECTIONS,
      REPORT_TONE_EXAMPLES,
      HELP_TRIAGE_SOLUTIONS,
      OFFICIAL_HELP_CHANNELS,
      EMERGENCY_CRISIS_CONTACTS,
      PUBLIC_DOC_TABS,
    });

    for (const text of allTexts) {
      assert.equal(
        text.includes('\u2014'),
        false,
        `Found forbidden em-dash in copy: "${text}"`
      );
    }
  });

  it('keeps privacy policy accurate to Email/Nama/Kelas login and Guru BK-only admin RBAC', () => {
    assert.ok(PRIVACY_SECTIONS.length >= 4);
    const privacyStrings = collectStrings({
      PRIVACY_SECTIONS,
      ROLE_VISIBILITY_RULES,
    }).join(' ');

    assert.equal(/\bNISN?\b/.test(privacyStrings), false);
    assert.equal(/\bTPPK\b/i.test(privacyStrings), false);
    assert.equal(/guru mapel/i.test(privacyStrings), false);
    assert.match(privacyStrings, /email/i);
    assert.match(privacyStrings, /nama/i);
    assert.match(privacyStrings, /kelas/i);
    assert.match(privacyStrings, /guru bk/i);

    assert.equal(ROLE_VISIBILITY_RULES.length, 3);
    const unknownRole = getRoleVisibilityRule('unknown' as never);
    assert.equal(unknownRole.id, ROLE_VISIBILITY_RULES[0].id);
    assert.equal(getRoleVisibilityRule('siswa-pelapor').id, 'siswa-pelapor');
    assert.equal(getRoleVisibilityRule('siswa-lain').id, 'siswa-lain');
    assert.equal(getRoleVisibilityRule('guru-bk').id, 'guru-bk');
  });

  it('provides complete terms sections and interactive report tone comparison without TPPK', () => {
    assert.ok(TERMS_SECTIONS.length >= 4);
    assert.equal(REPORT_TONE_EXAMPLES.length, 2);

    const termsText = collectStrings({
      TERMS_SECTIONS,
      REPORT_TONE_EXAMPLES,
    }).join(' ');
    assert.equal(/\bTPPK\b/i.test(termsText), false);

    const accepted = getReportToneExample('diterima');
    const rejected = getReportToneExample('ditolak');
    assert.equal(accepted.id, 'diterima');
    assert.equal(rejected.id, 'ditolak');
    assert.ok(accepted.reasons.length >= 2);
    assert.ok(rejected.reasons.length >= 2);
  });

  it('keeps official help channels consistent and free of mismatched mailto addresses', () => {
    assert.ok(HELP_TRIAGE_SOLUTIONS.length >= 3);
    assert.equal(getHelpTriageSolution('unggah-bukti').id, 'unggah-bukti');

    assert.ok(OFFICIAL_HELP_CHANNELS.length >= 3);
    for (const channel of OFFICIAL_HELP_CHANNELS) {
      assert.ok(
        channel.href.startsWith('mailto:') ||
          channel.href.startsWith('https://') ||
          channel.href.startsWith('tel:') ||
          channel.href.startsWith('/'),
        `Invalid channel href: ${channel.href}`
      );

      if (channel.href.startsWith('mailto:')) {
        const mailtoTarget = channel.href.replace('mailto:', '').toLowerCase();
        assert.equal(
          channel.value.toLowerCase(),
          mailtoTarget,
          `Mismatched mailto (${mailtoTarget}) and visible address (${channel.value})`
        );
      }
    }

    assert.ok(
      EMERGENCY_CRISIS_CONTACTS.some((item) => item.href === 'tel:112')
    );
    assert.ok(
      EMERGENCY_CRISIS_CONTACTS.some((item) =>
        item.href.startsWith('https://wa.me/628111129129')
      )
    );
    assert.equal(PUBLIC_DOC_TABS.length, 3);
    for (const item of [
      ...PUBLIC_DOC_TABS,
      ...ROLE_VISIBILITY_RULES,
      ...REPORT_TONE_EXAMPLES,
      ...HELP_TRIAGE_SOLUTIONS,
    ]) {
      assert.ok(
        item.mobileLabel.length > 0 && item.mobileLabel.length <= 14,
        `mobileLabel "${item.mobileLabel}" must fit cleanly in single-row mobile tabs`
      );
    }
  });
});
