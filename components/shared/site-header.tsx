'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/services' },
  { label: 'Yachts', href: '/yachts' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader({ transparent = true }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-20 ${
        transparent ? 'text-white' : 'text-[#192327]'
      }`}
    >
      <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
        <Image src="/assets/js logo.png" alt="Joanna Savage logo" width={36} height={36} className="rounded-full" />
        <span className="font-serif text-xl italic tracking-tight">Joanna Savage</span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-[#c5ad89]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="rounded-full bg-[#b49a72] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#c5ad89]"
        >
          Get in touch
        </Link>
      </nav>
      <button
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
        className="rounded-full p-1.5 transition-colors hover:bg-white/10 md:hidden"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-6 top-16 flex w-52 flex-col gap-4 rounded-2xl border border-white/15 bg-[#0b1818]/95 p-5 text-sm shadow-xl sm:right-10 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/90 transition-colors hover:text-[#c5ad89]"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
