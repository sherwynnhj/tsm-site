# TSMFood Redesign — Progress

_Last updated: 2026-06-01_

A front-end-only **visual concept redesign** of tsmfood.com (Tan Soon Mui Food Industries).
Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · Motion (`motion/react`).
Mock data only — no backend/auth/checkout. `CLAUDE.md` is the source of truth for direction.

> **Current design direction: "MATON" — warm, organic, botanical, premium-artisanal.**
> (This replaced two earlier directions — a Forager-style clean-editorial look, then a
> bold-pandan-green look. Both are superseded; ignore them.) Reference image lives at
> `/references/original-86df03c44e063030625b84e10b6956f9.webp`.

---

## Done

### Foundations
- **`app/globals.css`** — MATON token set in `@theme inline`:
  `forest #22372A`, `cream #F1EEE2`, `stone #E7E5DE`, `matcha #7BA05B`, `lime #C7E85C`,
  `gula #C77B3C`, `ink #1A1F1A`. Body defaults to cream/ink. Legacy tokens
  (`paper/mist/line/pandan/pandan-lt`) are **kept temporarily** so the not-yet-rebuilt
  inner pages and old components still compile — marked for removal (see Gotchas).
- **`app/layout.tsx`** — fonts swapped to **Fraunces** (display serif) + **DM Sans** (body);
  Noto Sans SC retained for Chinese glyphs. CSS vars: `--font-fraunces`, `--font-dm-sans`,
  `--font-noto-sc`.

### `/styleguide` — LOCKED ✅ (`app/styleguide/page.tsx`)
Palette · typography (Fraunces/DM Sans/Noto SC + matcha Chinese secondary labels) ·
**lime pill buttons** (chartreuse, ink text, circular icon disc, hover scale + icon nudge) ·
**image-overlay label card** (forest scrim, cream/lime label) · **feature column** (3-up,
circular thumb + matcha dot) · **bento product card** (large `FeatureBento` tile + airy
bordered `CompactBento` rows with circular thumbnails, price + unit caption).

### `/` Home — rebuilt to MATON ✅
Section order: hero → flat-lay showcase → wellness → bento grid → dessert pairing → footer.
- **`components/HeroSection.tsx`** — forest hero, rounded bottom. Centered Fraunces headline,
  matcha Chinese eyebrow, lime "Shop now" + cream-outline "Our story". Hero product image in
  a square rounded card that gently bobs (y:0→-8→0, 5s); 3 floating dotted-connector callouts
  on desktop / attribute chips on mobile; faint 仙草 watermark; inverted cert badges.
  Orchestrated entrance stagger; loops guarded by `useReducedMotion`.
- **`components/Navbar.tsx`** — transparent cream text over the dark hero → cream bar + ink
  text after 40px scroll; lime CTA pill; logo in a soft circle chip.
- **`components/Footer.tsx`** — deep-forest footer: promo headline + subscribe pill, 4 link
  columns, bottom bar. Reusable (import on every future page).
- **`components/Reveal.tsx`** — fade+rise on scroll-into-view wrapper; reduced-motion aware.
- **`app/page.tsx`** — section orchestration + local card components (`ShowcaseItem`,
  `OverlayCard`, `FeatureColumn`, `FeatureBento`, `CompactBento`, `PairingCard`).

### Recent fixes
- **Hero headline** forced onto two clean lines — "Singapore's best-loved" is `whitespace-nowrap`
  so "best-loved" never splits; container widened to `max-w-4xl`; font retuned to
  `clamp(1.6rem,5.5vw,4rem)` so the unbreakable line fits desktop→mobile. (Trade: desktop
  headline dropped 5rem→4rem.)
- **Footer seam** — the green pairing section is now full-bleed with **only a top radius**
  (`rounded-t-[2.5rem]`), so its square bottom merges seamlessly into the forest footer
  (was an inset rounded panel leaving cream notches).
- **Hero image** set to **Chin Chow Dessert 300g** (`Chin-Chow-Dessert-300g.jpg`) per request
  — note it's a packaging-on-white shot (reads as a white product card on the forest panel).

---

## What's left

### Pages still to build (per `CLAUDE.md`, in order)
- [ ] **`/about`** — heritage 1974→today timeline; certifications.
- [ ] **`/shop`** + **`/product/[slug]`** — bento/grid catalog w/ category filter; detail page
      (price, attribute list, flavour switcher, "Find in stores").
- [ ] **`/sensoh`**, **`/senscafe`** — sub-brand feature pages.
- [ ] **`/recipes`** — chendol bowls, grass-jelly drinks.
- [ ] **`/contact`** — address, map placeholder, socials.
- All inner nav/footer links currently **404** (routes don't exist yet).

### Cleanup / tech debt
- [ ] Remove legacy tokens from `globals.css` once nothing references them.
- [ ] `components/CategoryCarousel.tsx` and `components/IngredientStory.tsx` are now **unused**
      and still on **old tokens/direction** — restyle for a page or delete.
- [ ] `data/products.ts` `ingredients[]` is still the old set (4 items, old blurbs). The
      MATON spec wants 6 ingredients (Mesona 仙草, Pandan 班兰, Gula Melaka 椰糖, Nata de Coco
      椰果, Atap Seed 亚答子, Red Bean 红豆) with a dynamic `/0N` counter — **not yet done**
      (was deferred when direction changed).
- [ ] Card components (`FeatureBento`/`CompactBento`/`OverlayCard`/feature column) are
      **duplicated** between `app/styleguide/page.tsx` and `app/page.tsx` — consider extracting
      to `components/` for a single source of truth.

### Pending decisions (need user input)
- [ ] **Mobile hero headline size** — currently min `1.6rem` to keep one line; option to bump
      container to `max-w-5xl` + raise max back to ~4.5–5rem if a bigger desktop headline is wanted.
- [ ] **Assets** — see gotcha below; sourcing cut-out PNGs + food photography is the biggest
      lever for matching the reference.

---

## Key decisions & gotchas

- **ASSET GAP (most important).** Only **one** clean appetising food photo exists
  (`public/assets/DESSERTS.jpg`, a chendol bowl). Everything else is **packaging-on-white
  JPEGs** (`*-313x313.jpg` + originals) or wide promo **banners with baked-in marketing text**
  (`Grass-Jelly.jpg`, `Seaweed-1.jpg`, `Herbal.jpg`, etc.). There are **no cut-out
  (transparent-bg) PNGs**. Consequences:
  - All product cards are kept on **light surfaces** (stone/cream) — a white-bg shot on a
    forest card shows an ugly white box.
  - Where the reference floats cut-outs on green, we substitute **forest color-field cards**
    with a 仙草 watermark (e.g. the 2nd wellness overlay card).
  - **To match the reference properly, source cut-out PNGs + real food shots** (glossy black
    grass jelly, pandan chendol bowls).
- **Tailwind v4 + `CLAUDE.md` file lock (Windows).** Tailwind v4 scans source files —
  including markdown — for class names. If another process holds `CLAUDE.md`, Turbopack
  **panics** (`os error 32`, "being used by another process") and the page 500s.
  **Fix: restart the dev server** (`npm run dev`) to clear the stale handle.
- **`next/font` edits need care.** Changing fonts in `layout.tsx` can throw transient
  `ReferenceError: <oldFont> is not defined` mid-HMR; it resolves on the next clean compile /
  restart.
- **No headless browser installed** (no Playwright/Puppeteer). Visual checks were done by
  reasoning about CSS + inspecting served HTML — **eyeball on a real device** before sign-off,
  especially responsive headline behaviour at 375px.
- **Workflow:** build one page/section at a time and **pause for review** (per `CLAUDE.md`).
  Never generate the whole site at once.
- **Motion:** `CLAUDE.md` says "framer-motion" but the project uses **`motion/react`** (same
  API, the renamed package) — keep using `motion/react`.

---

## Run it
```
npm run dev        # http://localhost:3000  (styleguide at /styleguide)
```
