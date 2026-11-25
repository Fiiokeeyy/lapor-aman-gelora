import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { BULLYING_CATEGORIES, getCategoryById } from '../bullying-categories.ts';

describe('Bullying Categories Content Contract', () => {
  it('covers the exact five reporting categories implemented in /lapor', () => {
    const ids = BULLYING_CATEGORIES.map((c) => c.id);
    assert.deepEqual(ids, ['Fisik', 'Verbal', 'Siber', 'Sosial', 'Emosional']);
  });

  it('provides concrete school examples and evidence guidance without em-dashes', () => {
    for (const category of BULLYING_CATEGORIES) {
      assert.ok(category.headline.length > 10);
      assert.ok(category.summary.length > 20);
      assert.ok(category.examples.length >= 2);
      assert.ok(category.evidenceTip.length > 10);

      const combinedText = [
        category.headline,
        category.summary,
        ...category.examples,
        category.evidenceTip,
      ].join(' ');
      assert.equal(combinedText.includes('—'), false, `Found forbidden em-dash in ${category.id}`);
    }
  });

  it('resolves fallback safely when an unknown id is requested', () => {
    const resolved = getCategoryById('Fisik');
    assert.equal(resolved.id, 'Fisik');
    const fallback = getCategoryById('Unknown');
    assert.equal(fallback.id, 'Fisik');
  });
});
