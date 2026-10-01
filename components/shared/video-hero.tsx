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
      <div className="absolute inset-0 bg-linear-to-t from-[#061111]/95 via-black/55 to-black/35" />
      <div className="absolute inset-0 bg-[#061111]/15" />
      <SiteHeader />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.14 }}
        className="relative z-10 max-w-3xl px-6 pt-16 drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 text-[10px] font-medium uppercase tracking-[0.38em] text-[#e5cca4]"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-5xl font-semibold uppercase leading-[0.95] tracking-[-0.02em] sm:text-7xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            className="mx-auto mt-7 max-w-md text-sm font-medium leading-6 text-white/95 sm:text-base"
          >
            {description}
          </motion.p>
        )}
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
          className="absolute bottom-7 left-1/2 z-10 flex h-12 w-7 -translate-x-1/2 items-start justify-center rounded-full border border-white/80 pt-2"
        >
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-white"
          />
        </a>
      )}
    </section>
  )
}