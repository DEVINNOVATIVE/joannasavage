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
    <section className="relative flex min-h-[520px] items-center overflow-hidden text-white sm:min-h-[620px]">
      <video
        autoPlay
        loop
        muted
        controls={true}
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={charterVideo.mp4} type="video/mp4" />
        <source src={charterVideo.webm} type="video/webm" />
        <source src={charterVideo.ogv} type="video/ogg" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,18,0.82)_0%,rgba(7,20,18,0.45)_55%,rgba(7,20,18,0.25)_100%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-20"
      >
        <Eyebrow light>Working exclusively with Sunseeker Global</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-display text-5xl leading-[0.92] sm:text-7xl">Bespoke Luxury Charters</h2>
        <p className="mt-6 text-[11px] font-medium tracking-[0.32em] text-[#e8d5b0] uppercase">
          Aviation · Yachts · Property
        </p>
      </motion.div>
    </section>
  )
}
