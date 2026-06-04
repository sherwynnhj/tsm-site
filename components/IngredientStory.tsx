"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import type { Ingredient } from "@/data/products";

interface Props {
  ingredients: Ingredient[];
}

export function IngredientStory({ ingredients }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = useCallback((el: HTMLDivElement | null, i: number) => {
    sectionRefs.current[i] = el;
  }, []);

  useEffect(() => {
    const observers = ingredients.map((_, i) => {
      const el = sectionRefs.current[i];
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.55 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [ingredients]);

  const active = ingredients[activeIndex];

  return (
    <section className="bg-mist py-16 lg:py-0">
      {/* Section label — visible above sticky area */}
      <div className="max-w-7xl mx-auto px-6 pt-16 lg:pt-24 pb-8 lg:pb-0">
        <p className="font-sans text-xs tracking-[0.18em] uppercase text-ink/40 font-medium mb-2">
          What&apos;s inside
        </p>
        <h2 className="font-display font-extrabold text-3xl lg:text-4xl tracking-tight leading-tight text-ink">
          Naturally sourced ingredients
        </h2>
      </div>

      {/* Sticky container — desktop only */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-0 relative">
            {/* Left — sticky image panel */}
            <div className="sticky top-16 h-[calc(100vh-4rem)] w-[55%] shrink-0 self-start flex items-center">
              <div className="relative w-full h-[calc(100%-4rem)] rounded-2xl overflow-hidden bg-paper">
                {ingredients.map((ing, i) => (
                  <div
                    key={ing.name}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: i === activeIndex ? 1 : 0 }}
                  >
                    <Image
                      src={ing.image}
                      alt={ing.romanized}
                      fill
                      className="object-contain p-8"
                      sizes="55vw"
                    />
                  </div>
                ))}

                {/* Chinese name watermark */}
                <div
                  key={active.name}
                  className="absolute bottom-8 left-8 pointer-events-none select-none transition-all duration-500"
                >
                  <p className="font-display font-extrabold text-[7rem] leading-none text-ink/[0.04] tracking-tight">
                    {active.name}
                  </p>
                </div>

                {/* Active dot nav */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  {ingredients.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`View ingredient ${i + 1}`}
                      onClick={() => {
                        sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      className={`w-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink ${
                        i === activeIndex ? "h-8 bg-ink" : "h-3 bg-ink/20 hover:bg-ink/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right — scrollable ingredient sections */}
            <div className="w-[45%] shrink-0 pl-16">
              {ingredients.map((ing, i) => (
                <div
                  key={ing.name}
                  ref={(el) => setRef(el, i)}
                  className="h-screen flex flex-col justify-center py-16"
                >
                  <p className="font-sans text-xs tracking-[0.18em] uppercase text-ink/40 font-medium mb-4">
                    Ingredient {String(i + 1).padStart(2, "0")} / {String(ingredients.length).padStart(2, "0")}
                  </p>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="font-display font-extrabold text-5xl tracking-tight text-ink leading-none">
                      {ing.name}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-ink/40 mb-6">{ing.romanized}</p>
                  <p className="font-display font-bold text-xl text-ink mb-4 leading-snug">
                    {ing.tagline}
                  </p>
                  <p className="font-sans text-base text-ink/65 leading-relaxed mb-8 max-w-sm">
                    {ing.description}
                  </p>
                  <ul className="space-y-2.5">
                    {ing.attributes.map((attr) => (
                      <li key={attr} className="flex items-center gap-3">
                        <span className="text-pandan font-semibold text-base leading-none select-none">–</span>
                        <span className="font-sans text-sm text-ink/70 font-medium">{attr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile — stacked cards */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 pb-16 space-y-8 mt-8">
        {ingredients.map((ing) => (
          <div key={ing.name} className="bg-paper rounded-2xl overflow-hidden">
            <div className="relative h-56 bg-mist">
              <Image
                src={ing.image}
                alt={ing.romanized}
                fill
                className="object-contain p-6"
                sizes="90vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="font-display font-extrabold text-3xl tracking-tight text-ink">{ing.name}</h3>
              </div>
              <p className="font-sans text-xs text-ink/40 mb-4">{ing.romanized}</p>
              <p className="font-display font-bold text-lg text-ink mb-3">{ing.tagline}</p>
              <p className="font-sans text-sm text-ink/65 leading-relaxed mb-5">{ing.description}</p>
              <ul className="space-y-2">
                {ing.attributes.map((attr) => (
                  <li key={attr} className="flex items-center gap-3">
                    <span className="text-pandan font-semibold leading-none select-none">–</span>
                    <span className="font-sans text-sm text-ink/70">{attr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
