# Initial homepage audit — Crohn's & Colitis Lifestyle (route `/`)

Stack: TanStack Start + React 19, Tailwind v4; homepage imported from the Elementor/WordPress site into `src/routes/index.tsx` with retained source CSS in `src/styles/site.css` (15.6k lines) and media in `public/site-assets/`.

## Scope and audit coverage

Reviewed the homepage route, root document shell, imported styles, routing test, package scripts, and public assets. The audit covers visual hierarchy, navigation, responsive behavior, performance, accessibility, SEO, copy, implementation quality, conversion, interactions, browser compatibility, reliability, and design consistency. This table records the pre-change baseline and the status after implementation and validation.

The project dependencies were not installed at the start of this audit, so the baseline build and local browser inspection could not initially run. The earlier imported-site audit recorded checks at 390 / 768 / 1280 / 1440 px in Chromium; Firefox, Safari, and Edge were not available there. This run will report only validations actually completed.

| # | Section | Issue | Severity | Impact | Recommended solution | Status |
|---|---|---|---|---|---|---|
| 1 | Head / SEO | Meta description and Open Graph tags are template placeholders ("Lovable Generated Project", "Lovable App", @Lovable) | Critical | Search results and social shares show wrong text | Brand-specific title, description, OG and Twitter tags | Completed |
| 2 | Head / SEO | No canonical URL, no structured data | High | Duplicate-content risk, no rich results | Canonical link + Organization JSON-LD | Completed |
| 3 | Whole page | No `<main>` landmark, no skip link | High | Screen-reader / keyboard users can't jump to content | Wrap content in `<main id="main-content">`, add skip link | Completed |
| 4 | Header / footer | Logo links have empty alt → links without accessible name | High | Screen readers announce "link" only | Descriptive alt / aria-label | Completed |
| 5 | Team, featured-on, guide, story | 15 meaningful images (8 coach photos, 4 press logos, ebook mockup, before/after photo) have empty alt | High | Content invisible to screen readers and image search | Descriptive alt text | Completed |
| 6 | Free-guide form | Live form height fixed per breakpoint; at 768px the submit button is cut off | High | Lost leads on tablets | Use the vendor's auto-resize embed script, safer fallback heights | Completed |
| 7 | Performance | 750 KB of CSS inlined into the HTML and the JS bundle as a string | High | Slow first load, no caching | Serve the stylesheet as a cacheable `<link>` | Completed |
| 8 | Video bubble | Teaser GIF is 1.5 MB | High | Heavy download on every visit, esp. mobile | Convert to animated WebP | In Progress |
| 9 | Images | Some JPEGs 440–770 KB for ≤745px display; press logos request 1085–2048px files for ~190px slots | Medium | Wasted bandwidth | Recompress; correct `sizes` attributes | In Progress |
| 10 | Headings | Coach names, card numbers "01–06" and card titles are all `<h2>`; reviews jump h2→h4 | Medium | Confusing outline for SEO and screen readers | Names/titles → h3, numbers → p, review titles → h3 | Completed |
| 11 | Header | Hidden sticky-spacer duplicates menu IDs (`menu-1/2-a61003d`) | Medium | Invalid HTML, ambiguous `aria-controls` | Unique IDs in the spacer copy | Completed |
| 12 | Links | 23 `target="_blank"` links lack `rel="noopener noreferrer"`; one `http://` link | Medium | Tab-nabbing risk, mixed-content redirect | Add rel, upgrade to https | Completed |
| 13 | Reviews carousel | Pagination dots are focusable "buttons" that do nothing; 8×8px targets | Medium | Broken interaction, hard to tap | Wire dots to slides, enlarge hit area | Completed |
| 14 | Reviews / program cards | Low contrast: review author/date grey 2.7:1; gold eyebrow labels 2.4:1; gold numerals 1.7–2.4:1 | Medium | Hard to read for low-vision users | Deeper shade of the same grey/gold | Completed |
| 15 | Layout 1280px | Carousel arrow causes 5px horizontal scroll | Medium | Page wobbles sideways on laptops | Clip horizontal overflow of the reviews section | Completed |
| 16 | Hero stats | "Client served worldwide" grammar | Low | Credibility | "Clients served worldwide" | Completed |
| 17 | Console | `controlslist` React warning | Low | Noise | Use `controlsList` | Completed |
| 18 | Internal links | /about-us, /testimonials, /podcast, /privacy-policy, /terms-conditions not built yet → 404 in this app | High | Broken navigation | Point to the branded site's existing pages; importing local pages remains out of scope | Completed |
| 19 | Reviews | Captured relative dates ("about 1 day ago") are frozen | Medium | Misleading over time | Replace with real review dates or a live widget (needs data) | Pending |
| 20 | Video bubble | On phones the floating bubble covers ~40% of the form/text area | Medium | Can obscure content (minimise button exists) | Business decision — kept as on the original | Pending |
| 21 | CSS | ~15.6k lines of retained WordPress/Elementor CSS, much unused | Medium | Larger download, maintainability | Gradual pruning once more pages are imported | Pending |
| 22 | Console | Third-party form iframe logs CSP/Turnstile warnings | Low | None for users | Outside this codebase | Pending |

Baseline totals: 22 issues - Critical 1, High 8, Medium 10, Low 3.

## Final validation and outcome

- **Completed:** 16; **In Progress:** 2; **Pending:** 4. Severity totals above describe the original audit, not unresolved-only counts.
- Production build: **passed**. Output includes a separate cacheable imported stylesheet (626.84 KB / 56.67 KB gzip) and homepage overrides (2.27 KB / 0.81 KB gzip); the client entry bundle is 371.23 KB / 118.71 KB gzip.
- Tests: **passed** (1 file, 1 test).
- Chromium viewport checks at 390, 768, and 1440 px: no document horizontal overflow; team portraits render at 125 px on mobile and 145 px at tablet/desktop, and select matching 125/145 px image candidates. Visible menu button, carousel pagination, and carousel arrows have 44 x 44 px targets. The free-guide iframe uses the increased tablet height.
- Interaction checks: mobile menu opens, closes on Escape, and returns focus; review pagination moves to slide 4 and marks its control active.
- Content checks: all 32 homepage images loaded; the 15 content images identified in the baseline have text alternatives. Remaining empty-alt images are decorative (video thumbnail) or inside the hidden sticky-header duplicate. All `_blank` links have `rel="noopener"`; page metadata, canonical URL, and Organization schema are present.
- Lint: not clean. Full lint is blocked by repository-wide Prettier/CRLF differences; targeted ESLint with Prettier disabled reports 11 existing errors in imported markup (explicit `any` and irregular whitespace). These unrelated findings were not changed.
- Dependency installation reported 9 advisories (7 moderate, 2 high); they were not triaged in this homepage-only pass. No dependency manifests were changed.
- Browser compatibility: the interactive checks used Chromium only. Firefox, Safari, and Edge were not tested. The embedded form was not submitted. Browser logs include third-party LeadConnector/Cloudflare CSP, Turnstile, codec, and font warnings; they were not attributed to the homepage code.

### Remaining work

1. Re-encode the 1.55 MB video teaser GIF as an animated WebP. Lazy loading and low fetch priority are in place; conversion was deferred because no local converter is installed and no new dependency was added.
2. Recompress remaining large image assets; responsive source sizing now avoids over-sized coach and press-logo candidates.
3. Replace frozen relative review dates when authoritative dates or a live review source are available.
4. Decide whether to reposition the mobile video bubble; it remains as on the original design.
5. Prune retained WordPress/Elementor CSS only when additional imported pages no longer depend on it.
6. Investigate vendor-side embedded-form CSP/Turnstile warnings and validate form submission in the vendor environment.

### Before and after

- **Before:** placeholder SEO metadata, no canonical/schema or main landmark, inaccessible image descriptions and review controls, tablet form clipping, oversized responsive image requests, and imported CSS embedded in the page.
- **After:** brand-specific SEO/schema and accessible navigation/landmarks, corrected headings/contrast/links, working review pagination, larger touch targets, responsive image candidates, a cacheable stylesheet, and corrected tablet embed height. The original content and visual direction remain intact.
