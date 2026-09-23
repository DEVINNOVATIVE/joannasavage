'use client'

import { motion } from 'framer-motion'
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
      className={`relative flex min-h-140 items-center justify-center overflow-hidden bg-[#122020] text-center text-white sm:min-h-170 ${className}`}
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
      <div className="absolute inset-0 bg-black/50" />
      <SiteHeader />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 px-6 pt-16"
      >
        <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-[#d0bc99]">{eyebrow}</p>
        <h1 className="text-4xl font-semibold uppercase tracking-[-0.02em] sm:text-7xl">{title}</h1>
        {description && <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-white/75">{description}</p>}
        {action && (
          <a
            href={action.href}
            className="mt-7 inline-block rounded-full bg-[#b49a72] px-6 py-3 text-xs transition-colors hover:bg-[#c5ad89]"
          >
            {action.label}
          </a>
        )}
      </motion.div>
      {scrollTarget && (
        <a
          href={scrollTarget}
          aria-label="Scroll to the next section"
          className="absolute bottom-7 left-1/2 z-10 flex h-12 w-7 -translate-x-1/2 items-start justify-center rounded-full border border-white/70 pt-2"
        >
          <span className="h-2 w-1 rounded-full bg-white/90" />
        </a>
      )}
    </section>
  )
}