import Image from "next/image";
import Link from "next/link";

const productLinks = [
  "Grass Jelly",
  "SENSOH Slurp-Up",
  "SENSCAFE",
  "Herbal Drinks",
  "Seaweed Jelly",
  "Mini Packs",
];

const companyLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Recipes", href: "/recipes" },
  { label: "SENSOH", href: "/sensoh" },
  { label: "SENSCAFE", href: "/senscafe" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/tsmfood" },
  { label: "Instagram", href: "https://www.instagram.com/tsmfood.sg" },
  { label: "TikTok", href: "https://www.tiktok.com/@tansoonmui1974" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Promo + subscribe banner ── */}
        <div className="border-b border-cream/10 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-chinese text-lime text-sm mb-3">礼盒装 · 自家制</p>
            <h2 className="font-display font-semibold text-4xl lg:text-5xl tracking-tight leading-[1.05] text-cream">
              Save up to 50% on
              <br />
              bundle gift sets.
            </h2>
            <p className="font-sans text-cream/60 mt-4 max-w-md leading-relaxed">
              Join the TSMFood family for seasonal recipes, new flavours, and members-only
              dessert bundles delivered island-wide.
            </p>
          </div>

          {/* Subscribe pill */}
          <form className="lg:justify-self-end w-full max-w-md">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <div className="flex items-center gap-2 rounded-full bg-cream/10 ring-1 ring-cream/20 p-1.5 pl-5 focus-within:ring-cream/40 transition-shadow">
              <input
                id="footer-email"
                type="email"
                required
                placeholder="you@email.com"
                className="flex-1 bg-transparent text-cream placeholder:text-cream/40 font-sans text-sm outline-none min-w-0"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-lime text-ink pl-5 pr-2 py-2 font-sans text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
              >
                Subscribe
                <span className="grid place-items-center w-7 h-7 rounded-full bg-ink text-lime transition-transform duration-200 group-hover:translate-x-0.5">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M3 11L11 3M11 3H4.5M11 3V9.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* ── Link columns ── */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-cream/10">
                <Image
                  src="/assets/cropped-Logo-Tan-soon-mui-1-270x270.png"
                  alt="TSMFood"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </span>
              <span className="font-display font-semibold text-lg tracking-tight text-cream">
                TSMFood
              </span>
            </div>
            <p className="font-sans text-sm text-cream/55 leading-relaxed max-w-xs">
              Singapore&apos;s leading Asian dessert manufacturer since 1974. Natural herbs, no
              preservatives, trusted by families for over 50&nbsp;years.
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-cream/40 font-semibold mb-5">
              Products
            </p>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="/shop"
                    className="font-sans text-sm text-cream/65 hover:text-cream transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-cream/40 font-semibold mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-cream/65 hover:text-cream transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-cream/40 font-semibold mb-5">
              Get in touch
            </p>
            <address className="not-italic space-y-3 mb-6">
              <p className="font-sans text-sm text-cream/65 leading-relaxed">
                3 Second Chin Bee Road
                <br />
                Singapore 618770
              </p>
              <a
                href="tel:+6567567626"
                className="block font-sans text-sm text-cream/65 hover:text-cream transition-colors"
              >
                +65 6756 7626
              </a>
              <a
                href="mailto:sales@tsmfood.com"
                className="block font-sans text-sm text-cream/65 hover:text-cream transition-colors"
              >
                sales@tsmfood.com
              </a>
            </address>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-cream/45 hover:text-cream transition-colors uppercase tracking-widest"
                >
                  {s.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-cream/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs text-cream/35">
            © {new Date().getFullYear()} Tan Soon Mui Food Industries Pte Ltd. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/30">Free local delivery on orders over $45</p>
        </div>

        {/* ── Concept disclaimer ── */}
        <div className="border-t border-cream/10 py-5 text-center">
          <p className="font-sans text-xs text-cream/40 leading-relaxed max-w-2xl mx-auto">
            This site is a visual concept redesign created for design demonstration purposes only.
            It is not affiliated with, endorsed by, or operated by Tan Soon Mui Food Industries.
            Products, prices, and ordering are illustrative and non-functional.
          </p>
        </div>
      </div>
    </footer>
  );
}
