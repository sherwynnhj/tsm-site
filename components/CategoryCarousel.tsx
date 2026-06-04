"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/products";

interface Props {
  categories: Category[];
}

export function CategoryCarousel({ categories }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.7;
    track.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="py-16 lg:py-24 bg-paper">
      {/* heading row */}
      <div className="max-w-7xl mx-auto px-6 flex items-end justify-between mb-8">
        <div>
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-ink/40 font-medium mb-2">
            Our products
          </p>
          <h2 className="font-display font-extrabold text-3xl lg:text-4xl tracking-tight leading-tight text-ink">
            Explore our desserts
          </h2>
        </div>
        {/* Arrow controls — desktop only */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink hover:bg-mist transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink hover:bg-mist transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-6 max-w-7xl mx-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/shop?category=${encodeURIComponent(cat.name.toLowerCase().replace(/\s+/g, "-"))}`}
            className="group snap-start shrink-0 w-[200px] sm:w-[220px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink rounded-2xl"
          >
            {/* Image tile */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-mist mb-3">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="220px"
              />
              {cat.accent === "pandan" && (
                <div className="absolute top-3 left-3 bg-pandan text-paper rounded-full px-2.5 py-1 font-sans text-[9px] font-semibold tracking-widest uppercase">
                  Healthier Choice
                </div>
              )}
              {cat.accent === "gula" && (
                <div className="absolute top-3 left-3 bg-gula text-paper rounded-full px-2.5 py-1 font-sans text-[9px] font-semibold tracking-widest uppercase">
                  Nanyang Roast
                </div>
              )}
            </div>
            {/* Label */}
            <p className="font-display font-semibold text-base tracking-tight text-ink group-hover:text-ink/70 transition-colors">
              {cat.name}
            </p>
            <p className="font-sans text-xs text-ink/40 mt-0.5">{cat.label}</p>
          </Link>
        ))}

        {/* "Explore all" tile */}
        <Link
          href="/shop"
          className="group snap-start shrink-0 w-[200px] sm:w-[220px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink rounded-2xl"
        >
          <div className="relative w-full aspect-square rounded-2xl bg-ink flex items-center justify-center mb-3 transition-opacity hover:opacity-90">
            <div className="text-center">
              <p className="font-display font-extrabold text-3xl text-paper mb-1">→</p>
              <p className="font-sans text-xs tracking-widest uppercase text-paper/60 font-medium">
                All products
              </p>
            </div>
          </div>
          <p className="font-display font-semibold text-base tracking-tight text-ink group-hover:text-ink/70 transition-colors">
            Explore all
          </p>
          <p className="font-sans text-xs text-ink/40 mt-0.5">50+ products</p>
        </Link>
      </div>
    </section>
  );
}
