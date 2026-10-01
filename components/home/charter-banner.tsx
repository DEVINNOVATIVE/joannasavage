'use client'

import { motion } from 'framer-motion'
import { Eyebrow } from '../shared/eyebrow'

const charterVideo = {
  mp4: 'https://joannasavage.com/wp-content/themes/jo-savage/video/view-from-copter.mp4',
  webm: 'https://joannasavage.com/wp-content/themes/jo-savage/video/view-from-copter.webm',
  ogv: 'https://joannasavage.com/wp-content/themes/jo-savage/video/view-from-copter.ogv',
}

export function CharterBanner() {
  return (
    <section className="relative flex min-h-120 items-center justify-center overflow-hidden text-center text-white sm:min-h-135">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={charterVideo.mp4} type="video/mp4" />
        <source src={charterVideo.webm} type="video/webm" />
        <source src={charterVideo.ogv} type="video/ogg" />
      </video>
      <div className="absolute inset-0 bg-linear-to-t from-[#061111]/90 via-[#071919]/55 to-[#071919]/45" />
      <div className="absolute inset-x-6 top-8 h-px bg-white/25 sm:inset-x-10 lg:inset-x-20" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-2xl px-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Eyebrow>Working exclusively with Sunseeker Global</Eyebrow>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-5 text-4xl font-semibold leading-none tracking-tight sm:text-6xl"
        >
          Bespoke Luxury Charters
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="mt-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#e5cca4]"
        >
          Aviation · Yachts · Property
        </motion.p>
      </motion.div>
    </section>
  )
}
