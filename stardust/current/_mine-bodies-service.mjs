#!/usr/bin/env node
/**
 * Targeted bodies mine for /service/ — same recipe as _mine-bodies-cva.mjs.
 * See stardust/notes/skill-improvements.md item 1.
 */
import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const URL = 'https://wheelercat.com/service/';
const OUT = resolve('stardust/current/pages/service.bodies.json');
const start = Date.now();

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  console.log(`[bodies-mine] navigating to ${URL}`);
  const response = await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  const httpStatus = response?.status() ?? 0;
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000);
  for (let i = 0; i < 4; i++) { await page.evaluate((y) => window.scrollBy(0, y), 900); await page.waitForTimeout(300); }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  const waitMs = Date.now() - start;
  console.log(`[bodies-mine] settled at waitMs=${waitMs}`);

  const bodies = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('main section, article section, main > div > section, .bialty-container > section'));
    const seen = new Set();
    const unique = [];
    for (const s of sections) { if (seen.has(s)) continue; seen.add(s); unique.push(s); }
    return unique.map((s, idx) => {
      const firstHeading = s.querySelector('h1, h2, h3, h4, h5, h6');
      const paragraphs = Array.from(s.querySelectorAll(':scope > p, :scope > div > p, :scope > div > div > p, :scope > .container p'))
        .map(p => (p.innerText || '').trim())
        .filter(t => t.length > 0);
      const lists = Array.from(s.querySelectorAll(':scope ul, :scope ol')).map(l => ({
        type: l.tagName.toLowerCase(),
        items: Array.from(l.querySelectorAll(':scope > li')).map(li => (li.innerText || '').trim()).filter(t => t),
      })).filter(l => l.items.length > 0);
      const filteredLists = lists.filter(l => {
        const joined = l.items.join(' ').toLowerCase();
        if (joined.length < 30) return false;
        if (/quick links|connect with us|sitemap|legal/.test(joined)) return false;
        return true;
      });
      return {
        index: idx,
        sectionClass: s.className || '',
        sectionTitle: firstHeading ? firstHeading.innerText.trim() : '',
        sectionTitleLevel: firstHeading ? parseInt(firstHeading.tagName.slice(1), 10) : null,
        paragraphs,
        lists: filteredLists,
        rawInnerText: (s.innerText || '').trim(),
        rawTextLength: (s.innerText || '').length,
      };
    }).filter(b => b.rawTextLength > 30);
  });

  const output = {
    _provenance: {
      writtenBy: 'stardust/current/_mine-bodies-service.mjs (targeted re-extract)',
      writtenAt: new Date().toISOString(),
      sourceUrl: URL,
      renderedBy: 'playwright',
      viewport: '1440x900 @ 2x',
      waitMs,
      httpStatus,
    },
    slug: 'service',
    url: URL,
    bodies,
  };
  writeFileSync(OUT, JSON.stringify(output, null, 2));
  console.log(`[bodies-mine] wrote ${OUT} — ${bodies.length} sections, ${bodies.reduce((s, b) => s + b.rawTextLength, 0)} total chars`);
  await browser.close();
}
main().catch(e => { console.error('[bodies-mine] failed:', e); process.exit(1); });
