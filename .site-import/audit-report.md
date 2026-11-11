# Homepage audit — Crohn's & Colitis Lifestyle (route `/`)

Stack: TanStack Start + React 19, Tailwind v4; homepage imported from the Elementor/WordPress site into `src/routes/index.tsx` with retained source CSS in `src/styles/site.css` (15.6k lines) and media in `public/site-assets/`.
Tested: 390 / 768 / 1280 / 1440 px in headless Chromium (Playwright). Firefox / Safari / Edge not available in this sandbox.

| # | Section | Issue | Severity | Impact | Recommended solution | Status |
|---|---|---|---|---|---|---|
| 1 | Head / SEO | Meta description and Open Graph tags are template placeholders ("Lovable Generated Project", "Lovable App", @Lovable) | Critical | Search results and social shares show wrong text | Brand-specific title, description, OG and Twitter tags | Pending |
| 2 | Head / SEO | No canonical URL, no structured data | High | Duplicate-content risk, no rich results | Canonical link + Organization JSON-LD | Pending |
| 3 | Whole page | No `<main>` landmark, no skip link | High | Screen-reader / keyboard users can't jump to content | Wrap content in `<main id="main-content">`, add skip link | Pending |
| 4 | Header / footer | Logo links have empty alt → links without accessible name | High | Screen readers announce "link" only | Descriptive alt / aria-label | Pending |
| 5 | Team, featured-on, guide, story | 15 meaningful images (8 coach photos, 4 press logos, ebook mockup, before/after photo) have empty alt | High | Content invisible to screen readers and image search | Descriptive alt text | Pending |
| 6 | Free-guide form | Live form height fixed per breakpoint; at 768px the submit button is cut off | High | Lost leads on tablets | Use the vendor's auto-resize embed script, safer fallback heights | Pending |
| 7 | Performance | 750 KB of CSS inlined into the HTML and the JS bundle as a string | High | Slow first load, no caching | Serve the stylesheet as a cacheable `<link>` | Pending |
| 8 | Video bubble | Teaser GIF is 1.5 MB | High | Heavy download on every visit, esp. mobile | Convert to animated WebP | Pending |
| 9 | Images | Some JPEGs 440–770 KB for ≤745px display; press logos request 1085–2048px files for ~190px slots | Medium | Wasted bandwidth | Recompress; correct `sizes` attributes | Pending |
| 10 | Headings | Coach names, card numbers "01–06" and card titles are all `<h2>`; reviews jump h2→h4 | Medium | Confusing outline for SEO and screen readers | Names/titles → h3, numbers → p, review titles → h3 | Pending |
| 11 | Header | Hidden sticky-spacer duplicates menu IDs (`menu-1/2-a61003d`) | Medium | Invalid HTML, ambiguous `aria-controls` | Unique IDs in the spacer copy | Pending |
| 12 | Links | 23 `target="_blank"` links lack `rel="noopener noreferrer"`; one `http://` link | Medium | Tab-nabbing risk, mixed-content redirect | Add rel, upgrade to https | Pending |
| 13 | Reviews carousel | Pagination dots are focusable "buttons" that do nothing; 8×8px targets | Medium | Broken interaction, hard to tap | Wire dots to slides, enlarge hit area | Pending |
| 14 | Reviews / program cards | Low contrast: review author/date grey 2.7:1; gold eyebrow labels 2.4:1; gold numerals 1.7–2.4:1 | Medium | Hard to read for low-vision users | Deeper shade of the same grey/gold | Pending |
| 15 | Layout 1280px | Carousel arrow causes 5px horizontal scroll | Medium | Page wobbles sideways on laptops | Clip horizontal overflow of the reviews section | Pending |
| 16 | Hero stats | "Client served worldwide" grammar | Low | Credibility | "Clients served worldwide" | Pending |
| 17 | Console | `controlslist` React warning | Low | Noise | Use `controlsList` | Pending |
| 18 | Internal links | /about-us, /testimonials, /podcast, /privacy-policy, /terms-conditions not built yet → 404 in this app | High | Broken navigation | Import those pages (needs your go-ahead) | Pending |
| 19 | Reviews | Captured relative dates ("about 1 day ago") are frozen | Medium | Misleading over time | Replace with real review dates or a live widget (needs data) | Pending |
| 20 | Video bubble | On phones the floating bubble covers ~40% of the form/text area | Medium | Can obscure content (minimise button exists) | Business decision — kept as on the original | Pending |
| 21 | CSS | ~15.6k lines of retained WordPress/Elementor CSS, much unused | Medium | Larger download, maintainability | Gradual pruning once more pages are imported | Pending |
| 22 | Console | Third-party form iframe logs CSP/Turnstile warnings | Low | None for users | Outside this codebase | Pending |

Totals: 22 issues — Critical 1, High 8, Medium 10, Low 3.
