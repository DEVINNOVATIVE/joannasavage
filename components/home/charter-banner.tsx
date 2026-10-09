'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Eyebrow } from '../shared/eyebrow'

const charterImages = [
  { src: '/assets/luxury-private-jet.jpg', alt: 'Private jet in flight' },
  { src: '/assets/luxury-yacht-.jpg', alt: 'Luxury yacht at sea' },
  { src: '/assets/luxury-real-estate (1).jpg', alt: 'Luxury waterfront property' },
]

export function CharterBanner() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % charterImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative flex min-h-[400px] items-center overflow-hidden text-white sm:min-h-[480px]">
      <AnimatePresence mode="sync">
        <motion.div
          key={charterImages[activeImage].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={charterImages[activeImage].src}
            alt={charterImages[activeImage].alt}
            fill
            priority={activeImage === 0}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
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
