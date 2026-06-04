import Image from "next/image";

/* ────────────────────────────────────────────────────────────────
   TSMFood — Style Guide (MATON direction)
   Warm · organic · botanical · premium-artisanal
   Locks: palette · type · lime pill buttons · image-overlay card ·
   feature column · bento product card
──────────────────────────────────────────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-xs tracking-[0.2em] uppercase text-ink/40 font-semibold mb-6">
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-ink/10 my-16" />;
}

// Small right-side circular icon used inside lime pill buttons
function PillArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 11L11 3M11 3H4.5M11 3V9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── COLOR SWATCHES ─────────────────────────────────────────────
const colors = [
  { name: "--forest", hex: "#22372A", bg: "bg-forest", text: "text-cream", label: "Hero / footer panels" },
  { name: "--cream", hex: "#F1EEE2", bg: "bg-cream", text: "text-ink", label: "Content background", ring: true },
  { name: "--stone", hex: "#E7E5DE", bg: "bg-stone", text: "text-ink", label: "Bento / alt cards", ring: true },
  { name: "--matcha", hex: "#7BA05B", bg: "bg-matcha", text: "text-cream", label: "Accents · dots · icons" },
  { name: "--lime", hex: "#C7E85C", bg: "bg-lime", text: "text-ink", label: "CTA pill buttons" },
  { name: "--gula", hex: "#C77B3C", bg: "bg-gula", text: "text-cream", label: "Caramel · SENSCAFE" },
  { name: "--ink", hex: "#1A1F1A", bg: "bg-ink", text: "text-cream", label: "Body text on cream" },
];

// ─── FEATURE COLUMN DATA ────────────────────────────────────────
const features = [
  {
    image: "/assets/Grass-Jelly.jpg",
    title: "Cooling herbs",
    blurb: "Slow-boiled mesona for a naturally cooling treat.",
  },
  {
    image: "/assets/DESSERTS.jpg",
    title: "Real ingredients",
    blurb: "Pandan, gula melaka and coconut — never synthetic.",
  },
  {
    image: "/assets/Pandan-Chendol-1.jpg",
    title: "No preservatives",
    blurb: "Clean recipes with an 18-month natural shelf life.",
  },
];

export default function StyleguidePage() {
  return (
    <main className="bg-cream text-ink min-h-screen">
      {/* ── Page header ── */}
      <header className="border-b border-ink/10 px-8 py-5 flex items-center gap-4">
        <Image
          src="/assets/cropped-Logo-Tan-soon-mui-1-270x270.png"
          alt="TSMFood logo"
          width={36}
          height={36}
          className="object-contain"
        />
        <span className="font-display text-base font-semibold tracking-tight">TSMFood</span>
        <span className="ml-auto font-sans text-xs tracking-[0.2em] uppercase text-ink/40 font-semibold">
          Style Guide
        </span>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* ══ 01 — PALETTE ══ */}
        <section>
          <Label>01 — Color tokens</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {colors.map((c) => (
              <div
                key={c.name}
                className={`rounded-2xl overflow-hidden ${c.ring ? "ring-1 ring-ink/10" : ""}`}
              >
                <div className={`${c.bg} ${c.text} h-24 flex items-end p-4`}>
                  <span className="font-sans text-xs font-medium opacity-80">{c.hex}</span>
                </div>
                <div className="bg-stone px-4 py-3">
                  <p className="font-sans text-xs font-semibold text-ink">{c.name}</p>
                  <p className="font-sans text-xs text-ink/50 mt-0.5">{c.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ══ 02 — TYPOGRAPHY ══ */}
        <section>
          <Label>02 — Typography</Label>

          {/* small matcha Chinese secondary label above heading */}
          <p className="font-chinese text-matcha text-sm font-medium mb-3">传统仙草 · 自然好味</p>

          <div className="space-y-3 mb-12">
            <p className="font-display font-semibold text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.98] tracking-tight">
              Singapore&apos;s Best-Loved Desserts
            </p>
            <p className="font-display font-medium text-3xl leading-snug tracking-tight text-ink/90">
              Discover the world of grass jelly
            </p>
            <p className="font-display font-normal italic text-2xl leading-snug text-ink/70">
              Warm, rounded serif — Fraunces
            </p>
          </div>

          {/* Chinese glyph showcase */}
          <div className="flex flex-wrap items-baseline gap-5 mb-12">
            <span className="font-chinese text-5xl font-bold">仙草</span>
            <span className="font-chinese text-3xl text-matcha">甜仙草 · 班兰 · 椰糖</span>
            <span className="font-sans text-ink/40 text-sm self-center">Noto Sans SC</span>
          </div>

          {/* Body / UI */}
          <div className="space-y-4 border-l-2 border-matcha/40 pl-6">
            <p className="font-sans text-lg leading-relaxed text-ink/80 max-w-xl">
              Body — DM Sans. Clean, slightly geometric, warm humanist sans. TSMFood has
              been crafting traditional Asian desserts in Singapore since&nbsp;1974, using
              only natural herbs and roots.
            </p>
            <p className="font-sans text-sm leading-relaxed text-ink/60 max-w-xl">
              Small body / captions. ISO 22000 · Halal · Healthier Choice · No preservatives.
              Free local delivery on orders&nbsp;over&nbsp;$45.
            </p>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-ink/40 font-semibold">
              Label / overline — wide-tracked
            </p>
          </div>
        </section>

        <Divider />

        {/* ══ 03 — LIME PILL BUTTONS ══ */}
        <section>
          <Label>03 — Lime pill buttons</Label>
          <div className="flex flex-wrap gap-4 items-center">
            {/* Primary — lime with circular icon */}
            <button className="group inline-flex items-center gap-3 rounded-full bg-lime text-ink pl-6 pr-2 py-2 font-sans text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
              Shop now
              <span className="grid place-items-center w-8 h-8 rounded-full bg-ink text-lime transition-transform duration-200 group-hover:translate-x-0.5">
                <PillArrow />
              </span>
            </button>

            {/* Primary on forest panel uses cream icon disc — show forest variant */}
            <button className="group inline-flex items-center gap-3 rounded-full bg-forest text-cream pl-6 pr-2 py-2 font-sans text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest">
              Explore all
              <span className="grid place-items-center w-8 h-8 rounded-full bg-lime text-ink transition-transform duration-200 group-hover:translate-x-0.5">
                <PillArrow />
              </span>
            </button>

            {/* Secondary — outlined ink */}
            <button className="inline-flex items-center gap-2 rounded-full border border-ink/30 text-ink px-6 py-2.5 font-sans text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
              Learn more
            </button>

            {/* Tertiary — stone fill */}
            <button className="inline-flex items-center gap-2 rounded-full bg-stone text-ink px-6 py-2.5 font-sans text-sm font-semibold transition-colors hover:bg-ink/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
              View all
            </button>
          </div>
        </section>

        <Divider />

        {/* ══ 04 — IMAGE-OVERLAY LABEL CARD ══ */}
        <section>
          <Label>04 — Image-overlay label card</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
            <OverlayCard
              image="/assets/DESSERTS.jpg"
              chinese="仙草"
              title="Naturally Cooling"
              blurb="Grass jelly, brewed the traditional way."
            />
            <OverlayCard
              image="/assets/Pandan-Chendol-1.jpg"
              chinese="班兰"
              title="No Preservatives"
              blurb="Real pandan, real coconut — nothing else."
            />
          </div>
        </section>

        <Divider />

        {/* ══ 05 — FEATURE COLUMN ══ */}
        <section>
          <Label>05 — Feature column (3-up)</Label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-1 ring-ink/10 bg-stone">
                  <Image
                    src={f.image}
                    alt={f.title}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* small matcha dot marker */}
                <span className="block w-1.5 h-1.5 rounded-full bg-matcha mx-auto mt-5 mb-3" />
                <h3 className="font-display font-semibold text-xl tracking-tight text-ink">
                  {f.title}
                </h3>
                <p className="font-sans text-sm text-ink/60 leading-relaxed mt-1.5 max-w-[16rem] mx-auto">
                  {f.blurb}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ══ 06 — BENTO PRODUCT CARD ══ */}
        <section>
          <Label>06 — Bento product card</Label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {/* Large feature tile */}
            <FeatureBento
              image="/assets/Chin-Chow-Dessert-300g-313x313.jpg"
              name="Chin Chow Dessert"
              chinese="甜仙草"
              blurb="Our signature smooth, cooling grass jelly — a Singapore classic since 1974."
              price="$3.50"
              unit="300g"
              tag="Best Seller"
            />
            {/* Two stacked compact row cards */}
            <div className="grid grid-rows-2 gap-4">
              <CompactBento
                image="/assets/Sensoh-Grass-Jelly-Slurpup-200g-313x313.jpg"
                name="SENSOH Slurp-Up"
                chinese="仙草"
                price="$2.20"
                unit="200g"
              />
              <CompactBento
                image="/assets/SENSCAFE-2-IN-1-313x313.jpg"
                name="SENSCAFE 2-in-1"
                chinese="南洋咖啡"
                price="$6.80"
                unit="200g"
                accent="gula"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── Footer note ── */}
      <footer className="bg-forest text-cream px-8 py-8 mt-8">
        <p className="font-sans text-xs text-cream/50 text-center tracking-wide">
          TSMFood visual identity · MATON direction · v2.0 · 2026
        </p>
      </footer>
    </main>
  );
}

// ─── Image-overlay label card ───────────────────────────────────
function OverlayCard({
  image,
  chinese,
  title,
  blurb,
}: {
  image: string;
  chinese: string;
  title: string;
  blurb: string;
}) {
  return (
    <figure className="group relative rounded-3xl overflow-hidden aspect-[4/3]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 90vw, 360px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-6">
        <p className="font-chinese text-lime text-sm mb-1">{chinese}</p>
        <h3 className="font-display font-semibold text-2xl tracking-tight text-cream leading-tight">
          {title}
        </h3>
        <p className="font-sans text-sm text-cream/75 mt-1">{blurb}</p>
      </figcaption>
    </figure>
  );
}

// Small plus glyph used by the add buttons
function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M7 2.5V11.5M2.5 7H11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// ─── Bento: large feature tile ──────────────────────────────────
function FeatureBento({
  image,
  name,
  chinese,
  blurb,
  price,
  unit,
  tag,
}: {
  image: string;
  name: string;
  chinese: string;
  blurb?: string;
  price: string;
  unit: string;
  tag?: string;
}) {
  return (
    <article className="group relative sm:col-span-2 rounded-3xl overflow-hidden bg-stone flex flex-col transition-shadow duration-300 hover:shadow-[0_16px_45px_-20px_rgba(26,31,26,0.45)]">
      {tag && (
        <span className="absolute top-4 left-4 z-10 bg-lime text-ink font-sans text-[10px] font-semibold tracking-widest uppercase rounded-full px-3 py-1">
          {tag}
        </span>
      )}

      <div className="relative h-64 flex items-center justify-center p-8">
        <Image
          src={image}
          alt={name}
          width={313}
          height={313}
          className="object-contain h-full w-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="bg-cream p-7 mt-auto">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-matcha" />
          <p className="font-chinese text-xs text-matcha">{chinese}</p>
        </div>
        <h3 className="font-display font-semibold text-2xl tracking-tight text-ink leading-snug mt-1">
          {name}
        </h3>
        {blurb && (
          <p className="font-sans text-sm text-ink/60 leading-relaxed mt-2 max-w-sm">{blurb}</p>
        )}
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="font-display font-semibold text-4xl text-ink leading-none">{price}</p>
            <p className="font-sans text-xs text-ink/45 mt-1">{unit}</p>
          </div>
          <button
            aria-label={`Add ${name} to cart`}
            className="grid place-items-center w-10 h-10 rounded-full bg-lime text-ink transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </article>
  );
}

// ─── Bento: compact row card (circular thumb + name + price) ────
function CompactBento({
  image,
  name,
  chinese,
  price,
  unit,
  accent,
}: {
  image: string;
  name: string;
  chinese: string;
  price: string;
  unit: string;
  accent?: "matcha" | "gula";
}) {
  const dot = accent === "gula" ? "bg-gula" : "bg-matcha";

  return (
    <article className="group flex items-center gap-4 rounded-3xl bg-cream ring-1 ring-ink/10 p-3 transition-colors hover:ring-ink/25">
      {/* circular thumbnail */}
      <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden bg-stone grid place-items-center p-1.5">
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* name + chinese */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
          <p className="font-chinese text-[11px] text-matcha truncate">{chinese}</p>
        </div>
        <h3 className="font-display font-semibold text-base tracking-tight text-ink leading-snug truncate">
          {name}
        </h3>
      </div>

      {/* price */}
      <div className="text-right shrink-0 pr-1">
        <p className="font-display font-semibold text-xl text-ink leading-none">{price}</p>
        <p className="font-sans text-[11px] text-ink/45 mt-1">{unit}</p>
      </div>
    </article>
  );
}
