'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Ruler, ArrowRight, Anchor, Zap } from 'lucide-react'
import { VideoHero } from './shared/video-hero'
import { Eyebrow } from './shared/eyebrow'
import { Reveal } from './shared/reveal'
import { allYachts } from './yacht-detail/yacht-data'
import { CharterBanner } from './home/charter-banner'

const filters = ['All', 'Sport Yacht', 'Motor Yacht', 'Super Yacht']

export function YachtsPage() {
  const [active, setActive] = useState('All')

  const visible = active === 'All'
    ? allYachts
    : allYachts.filter((y) => y.subtitle === active)

  return (
    <main className="bg-[#e9efec] text-[#12211f]">
      <VideoHero
        title="Inventory for Sale"
        eyebrow="New & used yachts, exclusively for sale"
        action={{ href: '#inventory', label: 'Explore Yachts' }}
        scrollTarget="#inventory"
      />

      {/* Stats strip */}
      <div className="border-y border-white/10 bg-[#102522] px-6 py-8 text-white sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
          {[
            { value: '4', label: 'Vessels in inventory' },
            { value: '2023', label: 'Model year' },
            { value: 'Sunseeker', label: 'Exclusive brand partner' },
            { value: 'POA', label: 'Price on application' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-serif text-2xl italic text-[#d0bc99]">{item.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/50">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Inventory */}
      <section id="inventory" className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Exclusively for sale</Eyebrow>
                <h2 className="mt-2 max-w-md text-4xl font-semibold tracking-tight sm:text-5xl">A considered fleet.</h2>
              </div>
              {/* Filter pills */}
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className={`rounded-full border px-5 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-all ${
                      active === f
                        ? 'border-[#0b1818] bg-[#0b1818] text-white'
                        : 'border-[#cbd6d1] bg-white/60 text-[#526064] hover:border-[#102522] hover:text-[#12211f]'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visible.map((yacht, i) => (
                <motion.article
                  key={yacht.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-[2rem] bg-[#102522] shadow-[0_18px_50px_rgba(16,37,34,0.12)] ring-1 ring-[#102522]/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_65px_rgba(16,37,34,0.22)] hover:ring-[#d0bc99]/60"
                >
                  {/* Image */}
                  <div className="relative aspect-[1.55] overflow-hidden">
                    <Image
                      src={yacht.hero}
                      alt={yacht.title}
                      fill
                      className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-[1.12]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Top gradient bar for badge contrast */}
                    <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black/40 to-transparent" />

                    {/* Badges */}
                    <div className="absolute left-4 top-4 flex gap-2">
                      <span className="rounded-full bg-[#d0bc99] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#0b1818] shadow-sm">
                        {yacht.badge}
                      </span>
                      <span className="rounded-full border border-white/20 bg-[#102522]/75 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-xl">
                        {yacht.year}
                      </span>
                    </div>

                    {/* Hover overlay quick specs */}
                    <div className="absolute right-4 top-4 flex gap-1.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="rounded-xl border border-white/20 bg-[#102522]/70 px-2.5 py-1.5 backdrop-blur-xl">
                        <span className="flex items-center gap-1 text-[10px] font-medium text-white">
                          <Zap className="size-2.5 text-[#d0bc99]" />
                          {yacht.specs?.find((s) => s[0] === 'Full Speed (knots)')?.[1] ?? '—'} kn
                        </span>
                      </div>
                    </div>

                    {/* Bottom overlay info */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#d0bc99]">{yacht.subtitle}</p>
                      <h3 className="mt-1 text-xl font-semibold text-white">{yacht.title}</h3>
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

                  {/* Card footer */}
                  <div className="bg-[#102522] px-5 py-5">
                    <p className="line-clamp-2 text-xs leading-5 text-white/60">{yacht.description}</p>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <div className="flex gap-2.5">
                        <div className="rounded-xl bg-white/10 px-3 py-2 text-center ring-1 ring-white/10">
                          <p className="text-[9px] uppercase tracking-[0.15em] text-[#a8865c]">Price</p>
                          <p className="text-xs font-semibold text-white">{yacht.price}</p>
                        </div>
                        <div className="rounded-xl bg-white/10 px-3 py-2 text-center ring-1 ring-white/10">
                          <p className="text-[9px] uppercase tracking-[0.15em] text-[#a8865c]">Length</p>
                          <p className="text-xs font-semibold text-white">{yacht.length}</p>
                        </div>
                      </div>
                      <Link
                        href={`/yachts/${yacht.slug}`}
                        className="group/btn flex items-center gap-2 rounded-full bg-[#0b1818] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#d0bc99] hover:text-[#0b1818] hover:shadow-md"
                      >
                        View
                        <ArrowRight className="size-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Bottom accent line on hover */}
                  <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-[#d0bc99] to-[#a8865c] transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {visible.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-20 text-center text-sm text-[#526064]"
            >
              No yachts found in this category.
            </motion.p>
          )}
        </div>
      </section>

       <CharterBanner />
    </main>
  )
}
