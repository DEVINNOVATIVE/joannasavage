'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { SiteHeader } from './site-header'

const heroVideo = {
  mp4: 'https://joannasavage.com/wp-content/themes/jo-savage/video/VELA%20by%20OMNIYAT.mp4',
  webm: 'https://joannasavage.com/wp-content/themes/jo-savage/video/VELA%20by%20OMNIYAT.webm',
  ogv: 'https://joannasavage.com/wp-content/themes/jo-savage/video/VELA%20by%20OMNIYAT.ogv',
}

type VideoHeroProps = {
  title: string
  eyebrow?: string
  description?: string
  action?: { href: string; label: string }
  scrollTarget?: string
  className?: string
}

export function VideoHero({
  title,
  eyebrow = 'Private aviation · Super yachts · Real estate',
  description,
  action,
  scrollTarget,
  className = '',
}: VideoHeroProps) {
  return (
    <section
      id="top"
      className={`relative flex min-h-screen items-center overflow-hidden bg-[#071412] text-white ${className}`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo.mp4} type="video/mp4" />
        <source src={heroVideo.webm} type="video/webm" />
        <source src={heroVideo.ogv} type="video/ogg" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,18,0.58)_0%,rgba(7,20,18,0.68)_45%,rgba(7,20,18,0.94)_100%)]" />
      <SiteHeader />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 sm:px-10 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium tracking-[0.38em] text-[#e8d5b0] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="mt-6 max-w-4xl font-display text-6xl leading-[0.9] tracking-[-0.03em] drop-shadow-[0_3px_18px_rgba(0,0,0,0.45)] sm:text-7xl lg:text-8xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 max-w-xl text-base leading-8 text-white/88 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-lg"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {action ? (
            <a
              href={action.href}
              className="rounded-full bg-[#c9a96a] px-7 py-3.5 text-[11px] font-semibold tracking-[0.18em] text-[#071412] uppercase transition-colors hover:bg-[#e8d5b0]"
            >
              {action.label}
            </a>
          ) : (
            <>
              <Link
                href="/contact"
                className="rounded-full bg-[#c9a96a] px-7 py-3.5 text-[11px] font-semibold tracking-[0.18em] text-[#071412] uppercase transition-colors hover:bg-[#e8d5b0]"
              >
                Private enquiry
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/25 px-7 py-3.5 text-[11px] font-medium tracking-[0.18em] text-white uppercase transition-colors hover:border-[#c9a96a] hover:text-[#c9a96a]"
              >
                Explore services
              </Link>
            </>
          )}
        </motion.div>
      </div>
      {scrollTarget && (
        <a
          href={scrollTarget}
          aria-label="Scroll to the next section"
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.28em] text-white/60 uppercase"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex size-10 items-center justify-center rounded-full border border-white/25"
          >
            <ArrowDown className="size-4" />
          </motion.span>
        </a>
      )}
    </section>
  )
}
