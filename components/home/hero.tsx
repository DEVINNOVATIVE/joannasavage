'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiteHeader } from '../shared/site-header'

const heroImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-efmNQUU5E5ZahvvGPgbEcdsQ2Aoq3q.jpeg'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[650px] items-center justify-center overflow-hidden bg-[#122020] text-center text-white sm:min-h-[720px]"
    >
      <Image
        src={heroImage}
        alt="Luxury car outside a waterfront residence"
        fill
        priority
        className="object-cover opacity-65"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/55" />
      <SiteHeader />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 px-6 pt-16"
      >
        <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-[#d0bc99]">
          Private aviation · Super yachts · Real estate
        </p>
        <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">Welcome</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 max-w-md mx-auto text-sm leading-6 text-white/70"
        >
          Discreet, bespoke luxury services for those who expect the extraordinary.
        </motion.p>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 right-6 flex size-8 items-center justify-center rounded-full border border-white/60 text-xs"
      >
        ✧
      </motion.span>
    </section>
  )
}
