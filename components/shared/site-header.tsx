'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from './nav'

export function SiteHeader({ transparent = true }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isSolid = !transparent || scrolled || open

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-[1600px] items-center justify-between px-5 py-2 transition-all duration-500 sm:px-8 lg:px-12 ${
          isSolid
            ? 'mt-0 bg-[#071412]/88 shadow-[0_12px_40px_rgba(7,20,18,0.35)] backdrop-blur-xl'
            : 'mt-2 bg-[#071412]/35 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none'
        }`}
      >
        <Link
          href="/"
          aria-label="Joanna Savage home"
          className={`relative z-50 shrink-0 transition-opacity ${open ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
        >
          <Image
            src="/assets/js logo.png"
            alt="Joanna Savage"
            width={270}
            height={90}
            sizes="(max-width: 639px) 140px, (max-width: 1023px) 180px, 200px"
            fetchPriority="high"
            className="h-auto w-[140px] sm:w-[180px] lg:w-[200px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md lg:flex">
          {navLinks.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors ${
                  active ? 'text-[#071412]' : 'text-white/75 hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[#c9a96a]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+971562330110"
            className="text-[11px] tracking-[0.14em] text-white/55 uppercase transition-colors hover:text-[#c9a96a]"
          >
            +971 56 233 0110
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-[#c9a96a] px-5 py-2.5 text-[11px] font-semibold tracking-[0.16em] text-[#071412] uppercase transition-all hover:bg-[#e8d5b0]"
          >
            Enquire
          </Link>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={`relative z-50 flex size-11 items-center justify-center rounded-2xl border text-white backdrop-blur-md transition-colors lg:hidden ${
            open
              ? 'pointer-events-none border-transparent bg-transparent text-transparent opacity-0'
              : 'border-white/15 bg-white/10'
          }`}
        >
          {open ? <X className="size-5" strokeWidth={2.25} /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-[#071412]/80 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex h-full w-full flex-col justify-between bg-[linear-gradient(145deg,rgba(7,20,18,0.99),rgba(15,34,31,0.98))] px-6 pb-8 pt-6 shadow-[0_-20px_60px_rgba(0,0,0,0.28)] sm:px-10 sm:pb-10"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <Image
                    src="/assets/js logo.png"
                    alt="Joanna Savage"
                    width={270}
                    height={90}
                    className="h-auto w-[150px]"
                  />
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="flex size-11 items-center justify-center rounded-2xl border border-[#c9a96a]/70 bg-[#c9a96a] text-[#071412] transition-transform hover:scale-105"
                  >
                    <X className="size-5" strokeWidth={2.25} />
                  </button>
                </div>
                <p className="mt-8 text-[10px] tracking-[0.3em] text-[#c9a96a] uppercase">Private access</p>
              </div>

              <nav className="my-8 flex flex-1 flex-col justify-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between border-b border-white/10 py-3.5 font-display text-3xl leading-none transition-colors sm:text-4xl ${
                        (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href))
                          ? 'text-[#c9a96a]'
                          : 'text-white/90 hover:text-[#c9a96a]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="font-sans text-[10px] tracking-[0.2em] text-white/35">0{index + 1}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="space-y-3 border-t border-white/10 pt-6 text-sm text-white/60">
                <a href="tel:+971562330110" className="block hover:text-[#c9a96a]">
                  +971 56 233 0110
                </a>
                <a href="mailto:joanna@joannasavage.com" className="block hover:text-[#c9a96a]">
                  joanna@joannasavage.com
                </a>
                <p className="text-[11px] tracking-[0.2em] text-[#c9a96a] uppercase">Palm Jumeirah, Dubai</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
