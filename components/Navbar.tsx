"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Our Desserts", href: "/shop" },
  { label: "SENSOH", href: "/sensoh" },
  { label: "SENSCAFE", href: "/senscafe" },
  { label: "About", href: "/about" },
  { label: "Recipes", href: "/recipes" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the forest hero the bar is transparent with cream text;
  // once scrolled it becomes a cream bar with ink text.
  const onLight = scrolled;
  const linkColor = onLight ? "text-ink/60 hover:text-ink" : "text-cream/75 hover:text-cream";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          onLight
            ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(26,31,26,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          >
            <span
              className={`grid place-items-center w-9 h-9 rounded-full transition-colors ${
                onLight ? "bg-stone" : "bg-cream/15"
              }`}
            >
              <Image
                src="/assets/cropped-Logo-Tan-soon-mui-1-270x270.png"
                alt="TSMFood"
                width={26}
                height={26}
                className="object-contain"
              />
            </span>
            <span
              className={`font-display font-semibold text-base tracking-tight leading-none transition-colors ${
                onLight ? "text-ink" : "text-cream"
              }`}
            >
              TSMFood
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 flex-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`font-sans text-sm font-medium transition-colors px-3 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${linkColor}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <Link
              href="/contact"
              className={`font-sans text-sm font-medium transition-colors rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${linkColor}`}
            >
              Contact
            </Link>
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 rounded-full bg-lime text-ink pl-5 pr-1.5 py-1.5 font-sans text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              Shop now
              <span className="grid place-items-center w-7 h-7 rounded-full bg-ink text-lime transition-transform duration-200 group-hover:translate-x-0.5">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
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
          </div>

          {/* Mobile hamburger */}
          <button
            className="ml-auto md:hidden p-2 -mr-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-5 h-px ${onLight || menuOpen ? "bg-ink" : "bg-cream"} ${
                  i < 2 ? "mb-1.5" : ""
                } transition-all duration-200`}
                style={{
                  transformOrigin: "center",
                  transform: menuOpen
                    ? i === 0
                      ? "translateY(4px) rotate(45deg)"
                      : i === 2
                      ? "translateY(-4px) rotate(-45deg)"
                      : ""
                    : "",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream flex flex-col pt-20 px-6 pb-8 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-1 flex-1">
          {[...navLinks, { label: "Contact", href: "/contact" }].map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-display font-semibold text-2xl text-ink py-3.5 border-b border-ink/10 hover:text-ink/60 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/shop"
          onClick={() => setMenuOpen(false)}
          className="rounded-full bg-lime text-ink px-7 py-3.5 font-sans text-base font-semibold text-center transition-transform hover:scale-[1.02]"
        >
          Shop now
        </Link>
      </div>
    </>
  );
}
