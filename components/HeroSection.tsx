"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay },
  }),
};

// Floating annotation callouts that point at the hero image (lg only).
const callouts = [
  { side: "left" as const, top: "16%", cn: "仙草", label: "Naturally cooling" },
  { side: "left" as const, top: "70%", cn: "无防腐剂", label: "No preservatives" },
  { side: "right" as const, top: "40%", cn: "天然", label: "Real herbs & roots" },
];

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative bg-forest text-cream overflow-hidden rounded-b-[2.5rem] pt-28 pb-16 lg:pt-32 lg:pb-24">
      {/* faint brand watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-10 left-1/2 -translate-x-1/2 font-display font-semibold text-[34vw] lg:text-[22rem] leading-none text-cream/[0.04] tracking-tight"
      >
        仙草
      </span>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ── Centered intro ── */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="font-chinese text-lime text-sm mb-4"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={0}
          >
            传统仙草 · 自然好味
          </motion.p>

          <h1 className="font-display font-semibold text-[clamp(1.6rem,5.5vw,4rem)] leading-[1.04] tracking-tight text-cream text-balance hyphens-none">
            <motion.span
              className="block whitespace-nowrap"
              variants={rise}
              initial="hidden"
              animate="show"
              custom={0.12}
            >
              Singapore&rsquo;s best-loved
            </motion.span>
            <motion.span
              className="block"
              variants={rise}
              initial="hidden"
              animate="show"
              custom={0.2}
            >
              desserts, since 1974.
            </motion.span>
          </h1>

          <motion.p
            className="font-sans text-base lg:text-lg text-cream/70 leading-relaxed max-w-xl mx-auto mt-6"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={0.32}
          >
            Smooth, cooling grass jelly and traditional Asian desserts — crafted from natural
            herbs and roots, with no preservatives. Halal certified.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mt-9"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={0.42}
          >
            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 rounded-full bg-lime text-ink pl-7 pr-2.5 py-2.5 font-sans text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              Shop now
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
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-cream/40 text-cream px-7 py-3 font-sans text-sm font-semibold transition-colors hover:bg-cream hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              Our story
            </Link>
          </motion.div>
        </div>

        {/* ── Hero image + floating callouts ── */}
        <div className="relative max-w-3xl mx-auto mt-14 lg:mt-20 lg:h-[360px] flex justify-center">
          <motion.div
            className="relative w-[260px] sm:w-[340px] lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
          >
            <motion.div
              animate={prefersReduced ? undefined : { y: [0, -8, 0] }}
              transition={
                prefersReduced ? undefined : { duration: 5, ease: "easeInOut", repeat: Infinity }
              }
              className="relative aspect-square rounded-[2.25rem] overflow-hidden ring-1 ring-cream/15 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55)]"
            >
              <Image
                src="/assets/Chin-Chow-Dessert-300g.jpg"
                alt="Tan Soon Mui Chin Chow grass jelly dessert, 300g"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 340px, 360px"
              />
            </motion.div>
          </motion.div>

          {/* Dotted callouts — desktop only */}
          {callouts.map((c, i) => (
            <motion.div
              key={c.label}
              className={`hidden lg:flex items-center gap-3 absolute ${
                c.side === "left" ? "left-0 flex-row" : "right-0 flex-row-reverse"
              }`}
              style={{ top: c.top }}
              initial={prefersReduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 1 + i * 0.15 }}
            >
              <div className="rounded-2xl bg-cream text-ink px-4 py-2.5 shadow-lg">
                <p className="font-chinese text-[11px] text-matcha leading-none mb-1">{c.cn}</p>
                <p className="font-sans text-xs font-semibold leading-none">{c.label}</p>
              </div>
              {/* dashed connector + dot */}
              <span
                className={`block w-12 border-t border-dashed border-cream/40`}
                aria-hidden
              />
              <span className="block w-2 h-2 rounded-full bg-lime ring-2 ring-forest" aria-hidden />
            </motion.div>
          ))}
        </div>

        {/* ── Mobile attribute chips ── */}
        <div className="flex lg:hidden flex-wrap justify-center gap-2 mt-10">
          {callouts.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-2 rounded-full bg-cream/10 ring-1 ring-cream/15 px-3.5 py-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime" />
              <span className="font-sans text-xs font-medium text-cream/80">{c.label}</span>
            </span>
          ))}
        </div>

        {/* ── Trust line ── */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-12"
          variants={rise}
          initial="hidden"
          animate="show"
          custom={0.6}
        >
          <Image
            src="/assets/ISO-halal-healthier-choice-logo.png"
            alt="ISO 22000, Halal, and Healthier Choice certified"
            width={130}
            height={40}
            className="object-contain h-8 w-auto brightness-0 invert opacity-70"
          />
          <span className="w-px h-5 bg-cream/20" />
          <p className="font-sans text-xs text-cream/50">Free delivery over&nbsp;$45</p>
        </motion.div>
      </div>
    </section>
  );
}
