import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from './nav'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#071412] px-6 py-20 text-white sm:px-10 lg:px-20">
      <Image
        src="/assets/footer_img.jpg"
        alt="Luxury cars in Dubai"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#071412]/95" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div>
            <Link href="/" aria-label="Joanna Savage home" className="inline-block">
              <Image
                src="/assets/js logo.png"
                alt="Joanna Savage logo"
                width={270}
                height={90}
                className="h-auto w-[180px]"
              />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              Private aviation, super yachts, real estate and future-forward consulting — delivered with
              discretion for those who expect the extraordinary.
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.28em] text-[#c9a96a] uppercase">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-[#c9a96a]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.28em] text-[#c9a96a] uppercase">Studio</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href="tel:+971562330110" className="transition-colors hover:text-[#c9a96a]">
                  +971 56 233 0110
                </a>
              </li>
              <li>
                <a href="mailto:joanna@joannasavage.com" className="transition-colors hover:text-[#c9a96a]">
                  joanna@joannasavage.com
                </a>
              </li>
              <li>Palm Jumeirah, Dubai — UAE</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[11px] tracking-[0.2em] text-white/35 uppercase sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Joanna Savage. All rights reserved.</p>
          <p>Private brokerage · Global advisory</p>
        </div>
      </div>
    </footer>
  )
}
