import Link from 'next/link'
import { Eyebrow } from './eyebrow'

export function SiteFooter() {
  return (
    <footer className="bg-[#0b1818] px-6 py-16 text-white sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl italic">Joanna Savage</p>
          <p className="mt-4 text-xs leading-6 text-white/50">
            Private aviation, super yachts, real estate and future-forward business consulting.
          </p>
        </div>
        <div>
          <Eyebrow>Explore</Eyebrow>
          <ul className="mt-4 space-y-3 text-xs text-white/70">
            <li><Link href="/#about" className="transition-colors hover:text-[#c5ad89]">About</Link></li>
            <li><Link href="/services" className="transition-colors hover:text-[#c5ad89]">Services</Link></li>
            <li><Link href="/yachts" className="transition-colors hover:text-[#c5ad89]">Yachts</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-[#c5ad89]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <Eyebrow>Contact</Eyebrow>
          <ul className="mt-4 space-y-3 text-xs text-white/70">
            <li><a href="tel:+971562330110" className="transition-colors hover:text-[#c5ad89]">+971 56 233 0110</a></li>
            <li><a href="mailto:info@joannasavage.com" className="transition-colors hover:text-[#c5ad89]">info@joannasavage.com</a></li>
          </ul>
        </div>
        <div>
          <Eyebrow>Affiliations</Eyebrow>
          <div className="mt-4 flex flex-wrap gap-3 font-serif text-sm italic text-white/60">
            <span>Sunseeker</span>
            <span>Lamborghini</span>
            <span>Harrods</span>
            <span>Gaya</span>
            <span>SDG</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center text-[10px] uppercase tracking-[0.2em] text-white/40">
        © {new Date().getFullYear()} Joanna Savage. All rights reserved.
      </div>
    </footer>
  )
}
