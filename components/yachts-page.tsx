'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { MapPin, Ruler, ArrowRight, Anchor } from 'lucide-react'
import { VideoHero } from './shared/video-hero'
import { Eyebrow } from './shared/eyebrow'
import { Reveal, RevealClip, RevealScale, ParallaxLayer } from './shared/reveal'
import { allYachts } from './yacht-detail/yacht-data'

const filters = ['All', 'Sport Yacht', 'Motor Yacht', 'Super Yacht']

export function YachtsPage() {
  const [active, setActive] = useState('All')

  const visible = active === 'All'
    ? allYachts
    : allYachts.filter((y) => y.subtitle === active)

  return (
    <main className="bg-[#f8f7f4] text-[#192327]">
      <VideoHero
        title="Inventory for Sale"
        eyebrow="New & used yachts, exclusively for sale"
        action={{ href: '#inventory', label: 'Explore Yachts' }}
        scrollTarget="#inventory"
      />

      {/* Stats strip with parallax scroll */}
      <div className="bg-[#0b1818] px-6 py-8 text-white sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
          {[
            { value: '4', label: 'Vessels in inventory' },
            { value: '2023', label: 'Model year' },
            { value: 'Sunseeker', label: 'Exclusive brand partner' },
            { value: 'POA', label: 'Price on application' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-2xl italic text-[#d0bc99]">{item.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/50">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inventory with clip-path reveal cards */}
      <section id="inventory" className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Exclusively for sale</Eyebrow>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">All Yachts</h2>
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
                        : 'border-[#ddd9d1] bg-white text-[#526064] hover:border-[#0b1818] hover:text-[#192327]'
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
                  initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                  animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                  exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
                >
                  {/* Image with parallax zoom on hover */}
                  <div className="relative aspect-[1.7] overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <Image
                        src={yacht.hero}
                        alt={yacht.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Badges */}
                    <div className="absolute left-4 top-4 flex gap-2">
                      <span className="rounded-full bg-[#d0bc99] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#0b1818]">
                        {yacht.badge}
                      </span>
                      <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                        {yacht.year}
                      </span>
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
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex gap-3">
                      <div className="rounded-lg bg-[#f7f6f3] px-3 py-2 text-center">
                        <p className="text-[9px] uppercase tracking-[0.15em] text-[#a8865c]">Price</p>
                        <p className="text-xs font-semibold text-[#192327]">{yacht.price}</p>
                      </div>
                      <div className="rounded-lg bg-[#f7f6f3] px-3 py-2 text-center">
                        <p className="text-[9px] uppercase tracking-[0.15em] text-[#a8865c]">Length</p>
                        <p className="text-xs font-semibold text-[#192327]">{yacht.length}</p>
                      </div>
                    </div>
                    <Link
                      href={`/yachts/${yacht.slug}`}
                      className="group/btn flex items-center gap-2 rounded-full bg-[#0b1818] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#d0bc99] hover:text-[#0b1818]"
                    >
                      View
                      <ArrowRight className="size-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
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

      {/* Charter banner with parallax scroll effect */}
      <ParallaxBannerSection />

      {/* Why choose us section with staggered reveals */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center">
              <Eyebrow>Why Joanna Savage</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">A new standard in yachting</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Anchor, title: 'Curated Inventory', desc: 'Every vessel is hand-selected for quality, performance, and pedigree.' },
              { icon: MapPin, title: 'Global Reach', desc: 'From Dubai to London, Joanna connects you to the world\'s finest yachts.' },
              { icon: Ruler, title: 'Full Lifecycle', desc: 'From new builds to charter and resale, every stage is expertly managed.' },
            ].map((item, i) => (
              <RevealScale key={item.title} delay={i * 0.12}>
                <div className="rounded-2xl border border-[#e3e2de] bg-[#f7f6f3] p-8 text-center transition-all hover:border-[#d0bc99] hover:shadow-lg">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#0b1818]">
                    <item.icon className="size-6 text-[#d0bc99]" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#526064]">{item.desc}</p>
                </div>
              </RevealScale>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function ParallaxBannerSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['40px', '-40px'])

  return (
    <section ref={ref} className="relative h-[420px] overflow-hidden sm:h-[500px]">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="/assets/luxury-yacht-.jpg"
          alt="Luxury yacht on the water"
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1818]/85 via-[#0b1818]/50 to-transparent" />
      <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-20">
        <motion.div style={{ y: textY }} className="max-w-xl text-white">
          <Eyebrow>Working exclusively with Sunseeker Global</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Bespoke Luxury Charters</h2>
          <p className="mt-3 text-sm leading-7 text-white/70">
            Beyond sales, Joanna arranges private charter experiences tailored to your world.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d0bc99] px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-[#0b1818] transition-colors hover:bg-white"
          >
            Enquire now <ArrowRight className="size-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
