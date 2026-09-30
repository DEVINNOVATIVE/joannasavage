import Link from 'next/link'
import Image from 'next/image'
import { Eyebrow } from './eyebrow'

export function SiteFooter() {
  return (
    <footer className="bg-linear-to-br from-[#081414] via-[#0b1818] to-[#172727] px-6 py-16 text-white sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="Joanna Savage home"
              className="group inline-flex rounded-full transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/assets/js logo.png"
                alt="Joanna Savage logo"
                width={96}
                height={96}
                className="rounded-full"
              />
            </Link>
          </div>
          <p className="mt-4 text-xs leading-6 text-white/50">
            Private aviation, super yachts, real estate and future-forward business consulting.
          </p>
        </div>
        <div>
          <Eyebrow>Explore</Eyebrow>
          <ul className="mt-4 space-y-3 text-xs text-white/70">
            <li><Link href="/about" className="transition-colors hover:text-[#c5ad89]">About</Link></li>
            <li><Link href="/services" className="transition-colors hover:text-[#c5ad89]">Services</Link></li>
            <li><Link href="/yachts" className="transition-colors hover:text-[#c5ad89]">Yachts</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-[#c5ad89]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <Eyebrow>Contact</Eyebrow>
          <ul className="mt-4 space-y-3 text-xs text-white/70">
            <li><a href="tel:+971562330110" className="transition-colors hover:text-[#c5ad89]">+971 56 233 0110</a></li>
            <li><a href="mailto:joanna@joannasavage.com" className="transition-colors hover:text-[#c5ad89]">joanna@joannasavage.com</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center text-[10px] uppercase tracking-[0.2em] text-white/40">
        © {new Date().getFullYear()} Joanna Savage. All rights reserved.
      </div>
    </footer>
  )
}
