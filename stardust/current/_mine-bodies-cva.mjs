#!/usr/bin/env node
/**
 * Targeted re-extract for stardust/current/pages/customer-value-agreements.json.
 *
 * Why this exists: the default stardust:extract recipe captures headings,
 * CTAs, landmarks innerText, and structural components but does NOT emit a
 * per-section body[] array of paragraph/list innerText. For content-rich
 * program pages (like this CVA page), that gap means downstream prototype
 * has nothing to render verbatim or tweak from.
 *
 * This script walks every <section> inside <main>, captures full innerText
 * per section + paragraphs[] + lists[] + the first heading as a section
 * title, and writes the result alongside the existing per-page JSON.
 *
 * Recommend folding back into stardust:extract Capture 7 in
 * playwright-recipe.md. See stardust/notes/skill-improvements.md item 1.
 *
 * Usage: node stardust/current/_mine-bodies-cva.mjs
 */

import { chromium, devices } from 'playwright';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const URL = 'https://wheelercat.com/customer-value-agreements/';
const OUT = resolve('stardust/current/pages/customer-value-agreements.bodies.json');

const start = Date.now();

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();

  console.log(`[bodies-mine] navigating to ${URL}`);
  const response = await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  const httpStatus = response?.status() ?? 0;
  console.log(`[bodies-mine] httpStatus=${httpStatus}`);

  // Wait medium — settle the page after navigation
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000);

  // Scroll to bottom in 4 viewport-height steps with 300ms pauses
  const vh = 900;
  for (let i = 0; i < 4; i++) {
    await page.evaluate((y) => window.scrollBy(0, y), vh);
    await page.waitForTimeout(300);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  const waitMs = Date.now() - start;
  console.log(`[bodies-mine] settled at waitMs=${waitMs}`);

  // Walk every section in <main> and capture body content
  const bodies = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('main section, article section, main > div > section'));
    // De-dupe by element
    const seen = new Set();
    const unique = [];
    for (const s of sections) {
      if (seen.has(s)) continue;
      seen.add(s);
      unique.push(s);
    }

    const cssPath = (el) => {
      if (!el) return '';
      const parts = [];
      let cur = el;
      while (cur && cur.nodeType === 1 && parts.length < 5) {
        let part = cur.tagName.toLowerCase();
        if (cur.id) { part += '#' + cur.id; parts.unshift(part); break; }
        if (cur.className && typeof cur.className === 'string') {
          const cls = cur.className.split(/\s+/).filter(Boolean).slice(0, 2).join('.');
          if (cls) part += '.' + cls;
        }
        const siblings = Array.from(cur.parentNode?.children || []).filter(s => s.tagName === cur.tagName);
        if (siblings.length > 1) {
          const idx = siblings.indexOf(cur) + 1;
          part += `:nth-of-type(${idx})`;
        }
        parts.unshift(part);
        cur = cur.parentElement;
      }
      return parts.join(' > ');
    };

    return unique.map((s, idx) => {
      const firstHeading = s.querySelector('h1, h2, h3, h4, h5, h6');
      const paragraphs = Array.from(s.querySelectorAll(':scope > p, :scope > div > p, :scope > div > div > p, :scope > .container p'))
        .map(p => (p.innerText || '').trim())
        .filter(t => t.length > 0);
      const lists = Array.from(s.querySelectorAll(':scope ul, :scope ol')).map(l => ({
        type: l.tagName.toLowerCase(),
        items: Array.from(l.querySelectorAll(':scope > li')).map(li => (li.innerText || '').trim()).filter(t => t),
      })).filter(l => l.items.length > 0);
      // Filter list types we don't want (nav menus, social-icon lists)
      const filteredLists = lists.filter(l => {
        const joined = l.items.join(' ').toLowerCase();
        if (joined.length < 30) return false;
        if (/quick links|connect with us|sitemap|legal/.test(joined)) return false;
        return true;
      });
      return {
        index: idx,
        sectionSelector: cssPath(s),
        sectionClass: s.className || '',
        sectionTitle: firstHeading ? firstHeading.innerText.trim() : '',
        sectionTitleLevel: firstHeading ? parseInt(firstHeading.tagName.slice(1), 10) : null,
        paragraphs,
        lists: filteredLists,
        rawInnerText: (s.innerText || '').trim(),
        rawTextLength: (s.innerText || '').length,
      };
    });
  });

  const output = {
    _provenance: {
      writtenBy: 'stardust/current/_mine-bodies-cva.mjs (targeted re-extract)',
      writtenAt: new Date().toISOString(),
      sourceUrl: URL,
      renderedBy: 'playwright',
      viewport: '1440x900 @ 2x',
      waitMode: 'medium',
      waitMs,
      httpStatus,
      note: 'Augments stardust/current/pages/customer-value-agreements.json with per-section bodies[]. Recipe gap tracked in stardust/notes/skill-improvements.md item 1.',
    },
    slug: 'customer-value-agreements',
    url: URL,
    bodies,
  };

  writeFileSync(OUT, JSON.stringify(output, null, 2));
  console.log(`[bodies-mine] wrote ${OUT} — ${bodies.length} sections, ${bodies.reduce((s, b) => s + b.rawTextLength, 0)} total chars`);

  await browser.close();
}

main().catch(e => {
  console.error('[bodies-mine] failed:', e);
  process.exit(1);
});
