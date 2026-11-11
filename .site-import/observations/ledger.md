# Observation ledger — https://crohnscolitislifestyle.com/ → route `/`

| Control | Viewport | Trigger / scroll | Expected (source) | Preview result | Status | Evidence |
|---|---|---|---|---|---|---|
| Desktop sticky nav | 1280x900 | wheel 0→1500→0 | Nav relative at y=54 at top, fixed at y=0 after announcement bar scrolls away, no gap above hero | relative/54 → fixed/0 → relative/54; hero at y=139 (matches) | pass | 1280_top.png, 1280_scrolled.png |
| Phone sticky nav | 390x844 | wheel | Always fixed at top, spacer 64px | fixed/0 throughout; hero at y=64 | pass | 390_top.png, 390_scrolled.png |
| Desktop nav links | 1280 | — | S.H.I.E.L.D. (external), /about-us, /testimonials, /podcast | same hrefs (internal pages not imported → 404 on preview, path preserved) | pass (pages missing) | — |
| Phone menu toggle | 390 | tap ☰ | Full-width white panel under header with 4 links, icon → ✕, aria-expanded=true | panel 0,69 390x272, 4 links, aria-expanded=true; Escape closes and returns focus; link tap closes + navigates (/about-us) | pass | src_m_menu_open.png, 390_menu_open.png |
| Floating video bubble (GIF) | 1280 / 390 | click GIF | GIF+minus hide; video 340x191 (desktop) / 286x161 (phone) plays with sound; close (✕) shown | same rects; currentTime 2.42→3.93 (desktop), 2.58→4.09 (phone), unmuted | pass | 1280_video_open.png |
| Bubble close (✕) | both | click ✕ | video pauses, GIF bubble returns | paused=true, GIF visible | pass | — |
| Bubble minimise (–) | both | click – | GIF + minus hidden | both display:none | pass | — |
| Free-guide form | 1280 / 390 | scroll into view | Live LeadConnector form iframe 847x307 / 300x515 | live iframe 847x307 / 300x515 (was a static screenshot that overflowed phones by 31px) | pass (submission not tested) | 1280_form.png, 390_form.png |
| Hero CTA "Book Your Free IBD Session" | both | — | https://www.cclworkshop.com/apply?el=website (external) | same href | pass | — |
| Review carousel arrows | 1280 | — | swiper arrows | captured carousel present | pass (not re-verified after audit) | — |

Notes: the source page itself overflows horizontally by 5px at 1280px (carousel next-arrow) — carried into the audit.
