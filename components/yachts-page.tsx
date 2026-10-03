'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Ruler, ArrowRight, Zap } from 'lucide-react'
import { VideoHero } from './shared/video-hero'
import { Eyebrow } from './shared/eyebrow'
import { Reveal } from './shared/reveal'
import { allYachts } from './yacht-detail/yacht-data'
import { CharterBanner } from './home/charter-banner'

const filters = ['All', 'Sport Yacht', 'Motor Yacht', 'Super Yacht']

export function YachtsPage() {
  const [active, setActive] = useState('All')

  const visible = active === 'All' ? allYachts : allYachts.filter((y) => y.subtitle === active)

  return (
    <main className="bg-[#f3efe6] text-[#071412]">
      <VideoHero
        title="A considered fleet"
        eyebrow="New & used yachts, exclusively for sale"
        description="Sunseeker inventory selected for performance, presence and private ownership."
        action={{ href: '#inventory', label: 'Explore yachts' }}
        scrollTarget="#inventory"
      />

      <div className="bg-[#071412] px-6 py-10 text-white sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: '4', label: 'Vessels in inventory' },
            { value: '2023', label: 'Model year' },
            { value: 'Sunseeker', label: 'Exclusive brand partner' },
            { value: 'POA', label: 'Price on application' },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-display text-3xl italic text-[#c9a96a]">{item.value}</p>
              <p className="mt-1 text-[11px] tracking-[0.2em] text-white/45 uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <section id="inventory" className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Exclusively for sale</Eyebrow>
                <h2 className="mt-3 font-display text-5xl tracking-tight">Inventory</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className={`rounded-full border px-5 py-2 text-[11px] font-medium tracking-[0.14em] uppercase transition-all ${
                      active === f
                        ? 'border-[#071412] bg-[#071412] text-white'
                        : 'border-[#d8d2c4] bg-white text-[#5d6668] hover:border-[#071412] hover:text-[#071412]'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visible.map((yacht, i) => (
                <motion.article
                  key={yacht.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group overflow-hidden rounded-[2rem] bg-[#071412] shadow-[0_24px_60px_rgba(7,20,18,0.14)]"
                >
                  <div className="relative aspect-[1.55] overflow-hidden">
                    <Image
                      src={yacht.hero}
                      alt={yacht.title}
                      fill
                      className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 flex gap-2">
                      <span className="rounded-full bg-[#c9a96a] px-3 py-1 text-[10px] font-semibold tracking-widest text-[#071412] uppercase">
                        {yacht.badge}
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] text-white backdrop-blur-xl">
                        {yacht.year}
                      </span>
                    </div>
                    <div className="absolute right-5 top-5 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="rounded-full border border-white/20 bg-black/35 px-3 py-1.5 backdrop-blur-xl">
                        <span className="flex items-center gap-1 text-[10px] text-white">
                          <Zap className="size-3 text-[#c9a96a]" />
                          {yacht.specs?.find((s) => s[0] === 'Full Speed (knots)')?.[1] ?? '—'} kn
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-[11px] tracking-[0.22em] text-[#e8d5b0] uppercase">{yacht.subtitle}</p>
                      <h3 className="mt-1 font-display text-3xl text-white">{yacht.title}</h3>
                      <div className="mt-2 flex items-center gap-4 text-xs text-white/70">
                        <span className="flex items-center gap-1">
                          <MapPin className="size-3" />
                          {yacht.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Ruler className="size-3" />
                          {yacht.length}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-6">
                    <p className="line-clamp-2 text-sm leading-6 text-white/55">{yacht.description}</p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] tracking-[0.18em] text-[#c9a96a] uppercase">Price</p>
                        <p className="font-display text-2xl text-white">{yacht.price}</p>
                      </div>
                      <Link
                        href={`/yachts/${yacht.slug}`}
                        className="group/btn inline-flex items-center gap-2 rounded-full bg-[#c9a96a] px-5 py-2.5 text-[11px] font-semibold tracking-[0.14em] text-[#071412] uppercase transition-colors hover:bg-white"
                      >
                        View yacht
                        <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {visible.length === 0 && (
            <p className="mt-20 text-center text-sm text-[#5d6668]">No yachts found in this category.</p>
          )}
        </div>
      </section>

      <CharterBanner />
    </main>
  )
}
