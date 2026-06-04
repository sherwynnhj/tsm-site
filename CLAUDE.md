# CLAUDE.md — Tan Soon Mui (TSM) Website Redesign

## What we're building
A **visual concept redesign** of tsmfood.com — front-end only. No real e-commerce,
no backend, no payments. "Buy"/cart elements are visual (local state at most). Goal:
a beautiful, brand-true, fully responsive marketing + catalog concept for stakeholders.
Use **mock data** (`data/products.ts`). No APIs, auth, checkout, or database.

## Stack & conventions
- **Next.js (App Router) + TypeScript + Tailwind CSS**, **Motion** (framer-motion) for animation
- `/components`, routes in `/app`, mock data in `/data`, images via `next/image`
- Mobile-first; verify at 375 / 768 / 1280px
- Accessible: semantic HTML, visible focus, AA contrast, honor `prefers-reduced-motion`

## The brand
**Tan Soon Mui Food Industries (TSMFood)** — Singapore's leading maker of traditional
Asian desserts, founded **1974**; the island's biggest grass jelly (Chin Chow / 仙草)
producer. Positioning: **heritage + natural + healthier**.
Tagline: *"Singapore's Leading Asian Dessert Manufacturer."*

Sub-brands:
- **SENSOH** — grab-and-go "Slurp-Up" jellies; 25% lower sugar, Healthier-Choice certified.
- **SENSCAFE** — Nanyang Roast black coffee / Kopi-O; four decades of roasting.

Heritage (About page): 1974 founded Lim Chu Kang · 1980 Bukit Batok, 1,600/hr ·
1982 → 3,000/hr · 1988 SISIR R&D + HACCP + $400k vacuum packing · 1993 1,500sqm Woodlands ·
Today → 3 Second Chin Bee Road, Singapore.

Trust signals: **ISO 22000**, **Healthier Choice (HPB)**, **Halal**,
**No preservatives / 18-month shelf life**, **Free local delivery over $45**.
Contact: 3 Second Chin Bee Road, Singapore 618770 · +65 6756 7626 · sales@tsmfood.com
· FB /tsmfood · TikTok @tansoonmui1974 · IG @tsmfood.sg

## Aesthetic direction — REFERENCE: MATON matcha site (commit to this)
**Warm, organic, premium-artisanal e-commerce.** Earthy and inviting, not clinical.
Deep herbal-green hero + footer panels bookending soft cream/ivory content sections.
Soft rounded serif headlines, lots of breathing room, generous border-radius on
everything (cards, images, buttons), and product photography arranged like a styled
flat-lay. This is botanical, healthy, and appetising — the grass-jelly equivalent of
a beautiful matcha brand.

### Color tokens (CSS variables)
- `--forest`  #22372A  (deep herbal green — HERO + FOOTER panels, image-label text)
- `--cream`   #F1EEE2  (warm ivory — dominant content background)
- `--stone`   #E7E5DE  (light warm-gray — bento cards, alt sections)
- `--matcha`  #7BA05B  (mid botanical green — accents, small product dots, icons)
- `--lime`    #C7E85C  (bright chartreuse — CTA pill buttons; high-energy accent, use for actions)
- `--gula`    #C77B3C  (gula-melaka caramel — sparing warm accent, SENSCAFE, turmeric/sago products)
- `--ink`     #1A1F1A  (near-black green — body text on cream)
Pattern: `--ink` on `--cream`/`--stone` for content; `--cream` text on `--forest` panels;
`--lime` pills with `--ink` text for all primary CTAs.

### Typography (distinctive — NOT Inter/Roboto/Arial)
- **Display / headings:** "Fraunces" — soft, rounded, warm high-contrast serif. Use for
  big centered headlines ("Best Matcha in Town" → "Singapore's Best-Loved Desserts",
  "Discover the World of Matcha" → "Discover Our Desserts"). Large, elegant, friendly.
  (Recoleta is the paid ideal if available; Fraunces is the free stand-in.)
- **Body / UI:** "DM Sans" — clean, slightly geometric, warm humanist sans.
- **Asian-language accents:** "Noto Sans SC" for Chinese labels (仙草, 甜仙草, 班兰).
Headlines are warm and rounded, NOT bold-grotesque. Centered hero + section headings.
Logo: use the real TSM logo asset as the wordmark.

### Signature components & patterns (reuse from the reference)
- **Rounded everything:** large radius (16–28px) on cards, image tiles, buttons.
- **Lime pill buttons:** chartreuse `--lime` background, `--ink` text, with a small
  circular icon (arrow or plus) on the right. Primary CTA everywhere ("Shop now",
  "Explore all products", "Subscribe").
- **Floating flat-lay layout:** scattered product photos (cut-out PNGs on cream) with
  small `--matcha` dot markers and thin dotted connector lines pointing to annotation
  labels (title + short blurb). Used in the hero and the product-showcase section.
- **Image-overlay labels:** rounded photo cards with the label sitting over the bottom
  of the image in `--cream`/`--lime` text (e.g. "Naturally Cooling", "No Preservatives").
- **Feature columns:** small circular product image + heading + 1-line blurb, in a 3-up row.
- **Bento product grid:** mixed-size rounded cards; one large feature card (light `--stone`)
  beside smaller stacked cards; each shows name, tiny Chinese subtitle, blurb, and price.
- **Chinese secondary labels:** small `--matcha` Chinese text above/beside English headings
  for authenticity (料理用 → 传统仙草, 礼盒装, etc.). Keep subtle and correct.
- **Price tags:** large price number + tiny unit caption (e.g. `$4.50` / 500g).

### Motion (gentle, organic)
- Soft fade + rise (y:16→0) on scroll-into-view for sections and cards (stagger children).
- Hero: floating product images bob gently (y: 0 → -8 → 0, ~5s, easeInOut, infinite);
  dotted connector lines/markers fade in after the hero image settles.
- Lime buttons: subtle scale + icon nudge on hover. Bento/product cards: gentle lift.
- Honor `prefers-reduced-motion` (disable loops/parallax).

### Avoid
Sharp corners, cold grays, pure-white backgrounds, Inter/Roboto, default Tailwind blue,
bold-grotesque headlines, glassmorphism, busy gradients. Keep it warm, rounded, botanical,
and roomy. Don't leave elements floating in empty whitespace without dotted-line anchoring.

## Assets
Downloaded TSM images in `/public/assets/` — logo
(`cropped-Logo-Tan-soon-mui-1-270x270.png`), header logo, category banners
(`Senscafe.jpg`, `Grass-Jelly.jpg`, `Mini-1.jpg`, `Seaweed-1.jpg`, `Special.jpg`,
`Herbal.jpg`, `Sensoh-1.jpg`, `80g.jpg`), product shots (`*-313x313.jpg` + originals),
press clippings. The MATON reference image is in `/references/` for visual direction
ONLY — do not copy its logo, photos, matcha content, or text.
NOTE: the flat-lay look needs cut-out (transparent-background) product photos and
appetising bowl shots (glossy black grass jelly, green chendol). Source these where
possible; packaging-on-white shots won't achieve the styled flat-lay effect.

## Pages to build (in order)
1. **/styleguide** — FIRST. Palette, type scale, lime pill buttons, an image-overlay
   label card, a feature column, and one bento product card. Lock before proceeding.
2. **/** Home — green hero (rounded-serif headline, central dessert hero image, floating
   feature callouts + lime "Shop now"); flat-lay product showcase with dotted labels;
   "A cooling treat in every bowl" wellness section (2 overlay-label image cards + 3
   feature columns); "Discover Our Desserts" bento grid + lime "Explore all"; dessert-
   pairing section; deep-green footer with promo + subscribe pill + contact + links.
3. **/about** — heritage 1974→today; certifications.
4. **/shop** + **/product/[slug]** — bento/grid catalog; detail page with price, attribute
   list, flavour switcher, "Find in stores".
5. **/sensoh**, **/senscafe** — sub-brand feature pages.
6. **/recipes** — chendol bowls, grass-jelly drinks.
7. **/contact** — address, map placeholder, socials.

## Workflow
Build one page/section at a time and pause for review. Start with `/styleguide`,
get sign-off on tokens + components, then proceed. Never generate the whole site at once.
