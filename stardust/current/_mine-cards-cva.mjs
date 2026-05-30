#!/usr/bin/env node
/**
 * Deeper mine — captures card-like nested structures (plan tier cards in
 * carousels/sliders, value-prop deep-link cards inside sub-sections).
 *
 * Augments customer-value-agreements.bodies.json with .cards[] keyed by the
 * captured section anchor IDs (#PartsSupport / #PremiumService / etc.).
 *
 * See stardust/notes/skill-improvements.md item 1 (deeper).
 */
import { chromium } from 'playwright';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const URL = 'https://wheelercat.com/customer-value-agreements/';
const BODIES_PATH = resolve('stardust/current/pages/customer-value-agreements.bodies.json');

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000);
  const vh = 900;
  for (let i = 0; i < 4; i++) { await page.evaluate((y) => window.scrollBy(0, y), vh); await page.waitForTimeout(300); }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  const captured = await page.evaluate(() => {
    const result = { cards: [], anchoredSubsections: [], imageButtons: [], allHeadings: [] };

    // 1. Capture every element that has both a heading + paragraph content within it
    const candidates = Array.from(document.querySelectorAll('main *, article *')).filter(el => {
      if (!(el instanceof HTMLElement)) return false;
      const hasHeading = el.querySelector(':scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > h5, :scope > h6, :scope > div > h1, :scope > div > h2, :scope > div > h3, :scope > div > h4, :scope > div > h5');
      const hasParagraph = el.querySelector(':scope > p, :scope > div > p, :scope > div > div > p');
      const cls = (el.className || '').toString();
      const isCardish = /card|tile|button|item|panel|accordion|tab/i.test(cls);
      return hasHeading && (hasParagraph || isCardish);
    });

    // De-dupe nested matches: keep only those whose parent isn't also a match
    const set = new Set(candidates);
    const final = candidates.filter(c => {
      let p = c.parentElement;
      while (p) {
        if (set.has(p)) return false;
        p = p.parentElement;
      }
      return true;
    });

    for (const el of final) {
      const heading = el.querySelector(':scope h1, :scope h2, :scope h3, :scope h4, :scope h5, :scope h6');
      const headingText = heading ? heading.innerText.trim() : '';
      const headingLevel = heading ? parseInt(heading.tagName.slice(1), 10) : null;
      const paragraphs = Array.from(el.querySelectorAll(':scope p')).map(p => p.innerText.trim()).filter(t => t.length > 0);
      const lists = Array.from(el.querySelectorAll(':scope ul, :scope ol')).map(l => ({
        type: l.tagName.toLowerCase(),
        items: Array.from(l.querySelectorAll(':scope > li')).map(li => li.innerText.trim()).filter(t => t),
      })).filter(l => l.items.length > 0);
      const links = Array.from(el.querySelectorAll(':scope a')).map(a => ({
        text: (a.innerText || '').trim().slice(0, 80),
        href: a.getAttribute('href') || '',
      })).filter(l => l.text && l.text.length < 60);

      // Find the closest ancestor with an id (anchor reference)
      let anchor = '';
      let cur = el;
      while (cur) {
        if (cur.id) { anchor = '#' + cur.id; break; }
        cur = cur.parentElement;
      }

      const cls = (el.className || '').toString().split(/\s+/).filter(Boolean).slice(0, 3).join(' ');
      const rawText = (el.innerText || '').trim();
      if (rawText.length < 50) continue;

      result.cards.push({
        anchor,
        sectionClass: cls,
        headingText,
        headingLevel,
        paragraphs,
        lists,
        links: links.slice(0, 5),
        rawTextLength: rawText.length,
      });
    }

    // 2. Anchor sub-sections (id="X" within main)
    const anchored = Array.from(document.querySelectorAll('main [id], article [id], main section [id], main div[id]')).filter(el => {
      if (!(el instanceof HTMLElement)) return false;
      const id = el.id;
      // Match the anchor IDs the captured CTAs link to
      return /^(PartsSupport|PremiumService|TMR|ManagedService|FleetTraining|Parts|UptimeGuarantee|RebuildBenefits|Terms|Form|contact)/i.test(id);
    });
    for (const el of anchored) {
      result.anchoredSubsections.push({
        id: el.id,
        headingText: (el.querySelector('h1, h2, h3, h4, h5, h6')?.innerText || '').trim(),
        firstParagraph: (el.querySelector('p')?.innerText || '').trim().slice(0, 600),
        rawTextLength: el.innerText?.length || 0,
      });
    }

    // 3. Look for the .image-buttons slider tier cards specifically
    const imgButtons = document.querySelectorAll('.image-buttons, [class*="image-button"]');
    for (const el of imgButtons) {
      const headings = Array.from(el.querySelectorAll('h2, h3, h4, h5')).map(h => h.innerText.trim()).filter(t => t);
      const paragraphs = Array.from(el.querySelectorAll('p')).map(p => p.innerText.trim()).filter(t => t);
      result.imageButtons.push({
        sectionClass: (el.className || '').toString().split(/\s+/).slice(0, 3).join(' '),
        headings,
        paragraphs: paragraphs.slice(0, 12),
      });
    }

    return result;
  });

  // Merge into existing bodies.json
  let existing = { bodies: [] };
  if (existsSync(BODIES_PATH)) existing = JSON.parse(readFileSync(BODIES_PATH, 'utf8'));
  existing.cards = captured.cards;
  existing.anchoredSubsections = captured.anchoredSubsections;
  existing.imageButtons = captured.imageButtons;
  existing._provenance.augmentedAt = new Date().toISOString();
  existing._provenance.augmentedBy = 'stardust/current/_mine-cards-cva.mjs';

  writeFileSync(BODIES_PATH, JSON.stringify(existing, null, 2));
  console.log(`[cards-mine] ${captured.cards.length} cards · ${captured.anchoredSubsections.length} anchored sub-sections · ${captured.imageButtons.length} image-button blocks`);
  await browser.close();
}
main().catch(e => { console.error('[cards-mine] failed:', e); process.exit(1); });
