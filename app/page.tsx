import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

/* ── Section eyebrow + heading block ── */
function Heading({
  cn,
  eyebrow,
  title,
  center,
  tone = "ink",
}: {
  cn?: string;
  eyebrow?: string;
  title: string;
  center?: boolean;
  tone?: "ink" | "cream";
}) {
  const sub = tone === "cream" ? "text-cream/55" : "text-ink/45";
  const head = tone === "cream" ? "text-cream" : "text-ink";
  return (
    <div className={center ? "text-center" : ""}>
      {cn && <p className="font-chinese text-matcha text-sm mb-2">{cn}</p>}
      {eyebrow && (
        <p className={`font-sans text-xs tracking-[0.2em] uppercase font-semibold mb-3 ${sub}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display font-semibold text-[clamp(2rem,4vw,3.25rem)] tracking-tight leading-[1.08] ${head}`}
      >
        {title}
      </h2>
    </div>
  );
}

/* ── Lime pill button ── */
function LimePill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-lime text-ink pl-7 pr-2.5 py-2.5 font-sans text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
    >
      {children}
      <span className="grid place-items-center w-8 h-8 rounded-full bg-ink text-lime transition-transform duration-200 group-hover:translate-x-0.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M3 11L11 3M11 3H4.5M11 3V9.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

/* ── Data ── */
const showcase = [
  {
    image: "/assets/Chin-Chow-Dessert-300g-313x313.jpg",
    cn: "仙草",
    name: "Grass Jelly",
    blurb: "Slow-boiled mesona — smooth, dark and naturally cooling.",
  },
  {
    image: "/assets/Pandan-Chendol-450g-313x313.jpg",
    cn: "班兰",
    name: "Pandan Chendol",
    blurb: "Real pandan, coconut milk and gula melaka in every cup.",
  },
  {
    image: "/assets/Sensoh-Grass-Jelly-Slurpup-200g-313x313.jpg",
    cn: "仙草",
    name: "SENSOH Slurp-Up",
    blurb: "Grab-and-go jelly with 25% less sugar — Healthier Choice.",
  },
];

const features = [
  {
    image: "/assets/Chin-Chow-Dessert-300g-313x313.jpg",
    title: "Naturally cooling",
    blurb: "Herbal grass jelly to beat the tropical heat.",
  },
  {
    image: "/assets/Sensoh-Grass-Jelly-Slurpup-200g-313x313.jpg",
    title: "Healthier choice",
    blurb: "Lower sugar, HPB-certified, no compromise on taste.",
  },
  {
    image: "/assets/SENSCAFE-2-IN-1-313x313.jpg",
    title: "No preservatives",
    blurb: "Clean recipes with an 18-month natural shelf life.",
  },
];

const bento = [
  {
    image: "/assets/Chin-Chow-Dessert-300g-313x313.jpg",
    cn: "甜仙草",
    name: "Chin Chow Dessert",
    blurb: "Our signature smooth, cooling grass jelly — a Singapore classic since 1974.",
    price: "$3.50",
    unit: "300g",
    tag: "Best Seller",
  },
  {
    image: "/assets/Sensoh-Grass-Jelly-Slurpup-200g-313x313.jpg",
    cn: "仙草",
    name: "SENSOH Slurp-Up",
    price: "$2.20",
    unit: "200g",
  },
  {
    image: "/assets/Chin-Chow-with-Nata-de-Coco-250g-313x313.jpg",
    cn: "椰果",
    name: "Chin Chow · Nata de Coco",
    price: "$3.80",
    unit: "250g",
  },
  {
    image: "/assets/SENSCAFE-2-IN-1-313x313.jpg",
    cn: "南洋咖啡",
    name: "SENSCAFE 2-in-1",
    price: "$6.80",
    unit: "200g",
    accent: "gula" as const,
  },
];

const pairings = [
  {
    image: "/assets/Chin-Chow-Dessert-300g-313x313.jpg",
    cn: "豆奶",
    name: "Grass Jelly + Soya Milk",
    blurb: "The hawker-centre classic — earthy jelly in cool, creamy soya.",
  },
  {
    image: "/assets/Pandan-Chendol-450g-313x313.jpg",
    cn: "椰糖",
    name: "Chendol + Gula Melaka",
    blurb: "Drizzle warm palm sugar over shaved ice and pandan strands.",
  },
  {
    image: "/assets/Ice-Jelly-250g-313x313.jpg",
    cn: "酸柑",
    name: "Ice Jelly + Lime",
    blurb: "Bright, citrusy and refreshing — a zesty afternoon pick-me-up.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream">
        {/* ── Hero ── */}
        <HeroSection />

        {/* ── Flat-lay product showcase ── */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="max-w-2xl mx-auto mb-14">
              <Heading
                center
                cn="自然食材"
                eyebrow="What's inside"
                title="Crafted with real ingredients"
              />
            </Reveal>

            <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10">
              {showcase.map((item) => (
                <ShowcaseItem key={item.name} {...item} />
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── Wellness section ── */}
        <section className="py-20 lg:py-28 bg-stone rounded-[2.5rem] mx-3 lg:mx-6">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="max-w-2xl mb-12">
              <Heading
                cn="清凉一碗"
                eyebrow="Wellness in every spoon"
                title="A cooling treat in every bowl"
              />
              <p className="font-sans text-base text-ink/60 leading-relaxed mt-5 max-w-md">
                Brewed from herbs and roots the traditional way — light, refreshing, and made to
                be enjoyed every day.
              </p>
            </Reveal>

            {/* overlay-label image cards */}
            <Reveal className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
              <OverlayCard
                image="/assets/DESSERTS.jpg"
                cn="仙草"
                title="Naturally Cooling"
                blurb="Grass jelly, brewed the traditional way."
              />
              <OverlayCard
                field
                cn="无防腐剂"
                title="No Preservatives"
                blurb="Clean recipes, 18-month natural shelf life."
              />
            </Reveal>

            {/* feature columns */}
            <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {features.map((f) => (
                <FeatureColumn key={f.title} {...f} />
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── Bento grid ── */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <Heading cn="传统仙草" eyebrow="Best sellers" title="Discover our desserts" />
              <div className="hidden sm:block">
                <LimePill href="/shop">Explore all</LimePill>
              </div>
            </Reveal>

            <Reveal className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <FeatureBento {...bento[0]} />
              <div className="flex flex-col gap-4">
                {bento.slice(1).map((b) => (
                  <CompactBento key={b.name} {...b} />
                ))}
              </div>
            </Reveal>

            <div className="mt-10 sm:hidden flex justify-center">
              <LimePill href="/shop">Explore all products</LimePill>
            </div>
          </div>
        </section>

        {/* ── Dessert pairing section ──
            Full-bleed with only a top radius so its square bottom merges
            seamlessly into the forest footer (no cream seam between them). */}
        <section className="py-20 lg:py-28 bg-forest text-cream rounded-t-[2.5rem]">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="max-w-2xl mx-auto text-center mb-14">
              <Heading
                center
                tone="cream"
                cn="这样吃最好"
                eyebrow="Serving suggestions"
                title="Perfect pairings"
              />
            </Reveal>

            <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {pairings.map((p) => (
                <PairingCard key={p.name} {...p} />
              ))}
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   Section building blocks
════════════════════════════════════════════════════════════════ */

// Flat-lay showcase item — product tile + dotted connector + label
function ShowcaseItem({
  image,
  cn,
  name,
  blurb,
}: {
  image: string;
  cn: string;
  name: string;
  blurb: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-full aspect-square rounded-[2rem] bg-stone overflow-hidden grid place-items-center p-8">
        <Image
          src={image}
          alt={name}
          width={313}
          height={313}
          className="object-contain h-full w-auto transition-transform duration-500 hover:scale-105"
        />
      </div>
      {/* dotted connector */}
      <span className="block h-8 w-px border-l border-dashed border-ink/25" aria-hidden />
      <span className="block w-2 h-2 rounded-full bg-matcha -mt-1 mb-4" aria-hidden />
      <p className="font-chinese text-sm text-matcha mb-1">{cn}</p>
      <h3 className="font-display font-semibold text-xl tracking-tight text-ink">{name}</h3>
      <p className="font-sans text-sm text-ink/60 leading-relaxed mt-1.5 max-w-[16rem]">{blurb}</p>
    </div>
  );
}

// Image-overlay label card (photo) or forest color-field variant
function OverlayCard({
  image,
  field,
  cn,
  title,
  blurb,
}: {
  image?: string;
  field?: boolean;
  cn: string;
  title: string;
  blurb: string;
}) {
  return (
    <figure className="group relative rounded-[2rem] overflow-hidden aspect-[16/10] bg-forest">
      {image ? (
        <>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 90vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
        </>
      ) : (
        // color-field card (no clean photo available) — brand graphic
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -bottom-12 -right-4 font-display font-semibold text-[12rem] leading-none text-cream/[0.07] tracking-tight"
        >
          仙草
        </span>
      )}
      <figcaption className="absolute inset-x-0 bottom-0 p-7">
        <p className="font-chinese text-lime text-sm mb-1">{cn}</p>
        <h3 className="font-display font-semibold text-2xl tracking-tight text-cream leading-tight">
          {title}
        </h3>
        <p className="font-sans text-sm text-cream/75 mt-1">{blurb}</p>
      </figcaption>
    </figure>
  );
}

// Feature column — circular product tile + heading + blurb
function FeatureColumn({ image, title, blurb }: { image: string; title: string; blurb: string }) {
  return (
    <div className="text-center">
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-cream ring-1 ring-ink/10 grid place-items-center p-3">
        <Image
          src={image}
          alt={title}
          width={120}
          height={120}
          className="object-contain w-full h-full"
        />
      </div>
      <span className="block w-1.5 h-1.5 rounded-full bg-matcha mx-auto mt-5 mb-3" />
      <h3 className="font-display font-semibold text-xl tracking-tight text-ink">{title}</h3>
      <p className="font-sans text-sm text-ink/60 leading-relaxed mt-1.5 max-w-[16rem] mx-auto">
        {blurb}
      </p>
    </div>
  );
}

// Plus glyph for add buttons
function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M7 2.5V11.5M2.5 7H11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// Bento large feature tile
function FeatureBento({
  image,
  cn,
  name,
  blurb,
  price,
  unit,
  tag,
}: {
  image: string;
  cn: string;
  name: string;
  blurb?: string;
  price: string;
  unit: string;
  tag?: string;
}) {
  return (
    <article className="group relative lg:col-span-2 rounded-[2rem] overflow-hidden bg-stone flex flex-col transition-shadow duration-300 hover:shadow-[0_16px_45px_-20px_rgba(26,31,26,0.45)]">
      {tag && (
        <span className="absolute top-4 left-4 z-10 bg-lime text-ink font-sans text-[10px] font-semibold tracking-widest uppercase rounded-full px-3 py-1">
          {tag}
        </span>
      )}
      <div className="relative h-56 lg:h-72 flex items-center justify-center p-8">
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
          <p className="font-chinese text-xs text-matcha">{cn}</p>
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

// Bento compact row card
function CompactBento({
  image,
  cn,
  name,
  price,
  unit,
  accent,
}: {
  image: string;
  cn: string;
  name: string;
  price: string;
  unit: string;
  accent?: "matcha" | "gula";
}) {
  const dot = accent === "gula" ? "bg-gula" : "bg-matcha";
  return (
    <article className="group flex items-center gap-4 rounded-[1.75rem] bg-cream ring-1 ring-ink/10 p-3 flex-1 transition-colors hover:ring-ink/25">
      <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden bg-stone grid place-items-center p-1.5">
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
          <p className="font-chinese text-[11px] text-matcha truncate">{cn}</p>
        </div>
        <h3 className="font-display font-semibold text-base tracking-tight text-ink leading-snug truncate">
          {name}
        </h3>
      </div>
      <div className="text-right shrink-0 pr-1">
        <p className="font-display font-semibold text-xl text-ink leading-none">{price}</p>
        <p className="font-sans text-[11px] text-ink/45 mt-1">{unit}</p>
      </div>
    </article>
  );
}

// Pairing card (cream card on forest panel)
function PairingCard({
  image,
  cn,
  name,
  blurb,
}: {
  image: string;
  cn: string;
  name: string;
  blurb: string;
}) {
  return (
    <article className="group bg-cream rounded-[2rem] p-6 flex flex-col">
      <div className="w-20 h-20 rounded-full overflow-hidden bg-stone grid place-items-center p-2 mb-5">
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="font-chinese text-sm text-matcha mb-1">{cn}</p>
      <h3 className="font-display font-semibold text-xl tracking-tight text-ink leading-snug">
        {name}
      </h3>
      <p className="font-sans text-sm text-ink/60 leading-relaxed mt-2">{blurb}</p>
    </article>
  );
}
