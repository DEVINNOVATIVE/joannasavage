'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Eyebrow } from '../shared/eyebrow'

const aboutHeroImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SPDSnE0hTpqqHhDYgxZ9CGvmygsfl5.png'

export function CharterBanner() {
  return (
    <section className="relative flex min-h-[330px] items-center justify-center overflow-hidden text-center text-white">
      <Image
        src={aboutHeroImage}
        alt="A luxury yacht viewed from above"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#071919]/60" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <Eyebrow>Working exclusively with Sunseeker Global</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Bespoke Luxury Charters</h2>
        <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#dac9ac]">
          Aviation · Yachts · Property
        </p>
      </motion.div>
    </section>
  )
}
