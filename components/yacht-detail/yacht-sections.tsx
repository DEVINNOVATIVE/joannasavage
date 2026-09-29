'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  Ruler, 
  Zap, 
  ArrowLeft, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Info 
} from 'lucide-react'
import { SiteHeader } from '../shared/site-header'
import { Eyebrow } from '../shared/eyebrow'
import { Reveal } from '../shared/reveal'
import type { Yacht } from './yacht-data'

export function YachtHero({ yacht }: { yacht: Yacht }) {
  const [activeImg, setActiveImg] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [showSpecsModal, setShowSpecsModal] = useState(false)

  const next = useCallback(() => {
    setActiveImg((prev) => (prev + 1) % yacht.gallery.length)
  }, [yacht.gallery.length])

  const previous = useCallback(() => {
    setActiveImg((prev) => (prev - 1 + yacht.gallery.length) % yacht.gallery.length)
  }, [yacht.gallery.length])

  useEffect(() => {
    if (isPaused || yacht.gallery.length <= 1) return
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [isPaused, next, yacht.gallery.length])

  const fullSpeed = yacht.specs.find(([label]) => 
    label.toLowerCase().includes('speed')
  )?.[1]

  return (
    <section
      className="relative flex min-h-screen flex-col justify-between overflow-x-hidden bg-[#0a1211] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <SiteHeader />

      <div className="relative z-10 flex flex-1 flex-col justify-between pt-24 pb-8">
        {/* Top Header & Navigation bar */}
        <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-8 lg:px-12">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/yachts"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-md transition-colors hover:border-white/30 hover:text-white"
            >
              <ArrowLeft className="size-3" /> Back to inventory
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#d0bc99]">
                {yacht.subtitle} · {yacht.year}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/50">
                <span className="size-1.5 rounded-full bg-[#a9cf8f]" /> Available
              </span>
            </div>
          </div>
        </div>

        {/* 3-Panel Peek Carousel */}
        <div className="relative my-auto flex w-full items-center justify-center overflow-visible py-4">
          <div className="relative flex h-[52vh] min-h-[420px] max-h-[640px] w-full items-center justify-center">
            {[-1, 0, 1].map((offset) => {
              const index = (activeImg + offset + yacht.gallery.length) % yacht.gallery.length
              const isActive = offset === 0

              return (
                <motion.div
                  key={`${activeImg}-${offset}`}
                  onClick={() => {
                    if (offset === -1) previous()
                    if (offset === 1) next()
                  }}
                  animate={{
                    x: offset === 0 ? '0%' : offset < 0 ? '-76%' : '76%',
                    scale: isActive ? 1 : 0.94,
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 20 : 10,
                  }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute top-0 h-full w-[88vw] max-w-[1020px] shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-[filter] duration-500 ${
                    isActive ? 'cursor-default' : 'hover:opacity-60'
                  }`}
                >
                  {/* Clean Yacht Imagery (Unobstructed by dark overlay gradients) */}
                  <Image
                    src={yacht.gallery[index]}
                    alt={`${yacht.title} slide ${index + 1}`}
                    fill
                    priority={isActive}
                    className="object-cover object-center"
                  />

                  {/* Dim cover for side preview cards */}
                  {!isActive && <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />}

                  {/* Active Slide: Corner Circular Info Button */}
                  {isActive && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setShowSpecsModal(!showSpecsModal)
                      }}
                      aria-label="View yacht specifications"
                      className="absolute right-6 bottom-6 z-30 flex size-10 items-center justify-center rounded-full bg-white text-black shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 sm:size-12"
                    >
                      <Info className="size-5 sm:size-6" />
                    </button>
                  )}

                  {/* Corner Specs Overlay drawer toggled by the info button */}
                  <AnimatePresence>
                    {isActive && showSpecsModal && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        className="absolute right-6 bottom-20 z-30 max-w-xs rounded-xl border border-white/15 bg-[#0a1514]/90 p-4 text-xs shadow-2xl backdrop-blur-xl"
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d0bc99]">
                          Vessel Specs
                        </p>
                        <h4 className="mt-1 font-semibold text-white">{yacht.title}</h4>
                        <div className="mt-3 divide-y divide-white/10 text-white/80">
                          {yacht.specs.slice(0, 4).map(([lbl, val]) => (
                            <div key={lbl} className="flex justify-between py-1.5 text-[11px]">
                              <span className="text-white/50">{lbl}</span>
                              <span className="font-medium text-white">{val}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* Carousel Arrow Controls */}
          {yacht.gallery.length > 1 && (
            <div className="pointer-events-none absolute inset-x-4 z-30 mx-auto flex max-w-[1200px] justify-between sm:inset-x-8">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous view"
                className="pointer-events-auto flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-black/70"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next view"
                className="pointer-events-auto flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-black/70"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        {/* Floating Spec Bar Dock & Navigation Thumbnails */}
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-8">
          <div className="rounded-2xl border border-white/10 bg-[#0d1d1a]/80 p-3.5 shadow-2xl backdrop-blur-xl sm:p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Spec Chips */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-2 rounded-xl bg-white/[0.06] px-3 py-2 text-xs text-white/80">
                  <MapPin className="size-3.5 text-[#d0bc99]" /> {yacht.location}
                </span>
                <span className="flex items-center gap-2 rounded-xl bg-white/[0.06] px-3 py-2 text-xs text-white/80">
                  <Ruler className="size-3.5 text-[#d0bc99]" /> {yacht.length}
                </span>
                {fullSpeed && (
                  <span className="flex items-center gap-2 rounded-xl bg-white/[0.06] px-3 py-2 text-xs text-white/80">
                    <Zap className="size-3.5 text-[#d0bc99]" /> {fullSpeed}
                  </span>
                )}
                <span className="rounded-xl border border-[#d0bc99]/40 bg-[#d0bc99]/10 px-3.5 py-2 text-xs font-semibold text-[#d0bc99]">
                  {yacht.price}
                </span>
              </div>

              {/* Gallery Thumbnails & Enquire CTA */}
              <div className="flex items-center justify-between gap-3 sm:justify-end">
                {yacht.gallery.length > 1 && (
                  <div className="hidden sm:flex items-center gap-1.5">
                    {yacht.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(i)}
                        aria-label={`View thumbnail ${i + 1}`}
                        className={`relative h-10 w-14 overflow-hidden rounded-lg border transition-all ${
                          activeImg === i
                            ? 'border-[#d0bc99] scale-105 opacity-100 shadow-md ring-1 ring-[#d0bc99]'
                            : 'border-transparent opacity-40 hover:opacity-80'
                        }`}
                      >
                        <Image src={img} alt={`View thumbnail ${i + 1}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d0bc99] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#071614] transition-all hover:scale-105 hover:bg-white"
                >
                  Enquire now <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function YachtSpecs({ yacht }: { yacht: Yacht }) {
  return (
    <section className="bg-[#fbfaf8] px-6 py-24 sm:px-10 lg:px-20 text-[#192327]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left: Overview description & Key Highlights */}
          <div>
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                {yacht.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#5a686c]">
                {yacht.description}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12">
                <Eyebrow>Key Highlights</Eyebrow>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {yacht.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-3 rounded-xl border border-neutral-200/80 bg-white p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0b1818]">
                        <Check className="size-3 text-[#d0bc99]" />
                      </span>
                      <span className="text-xs font-medium text-[#2d3a3d]">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Specifications Table Card */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-neutral-200/70 bg-white p-7 shadow-xl shadow-neutral-100/70">
              <Eyebrow>Specifications</Eyebrow>
              <div className="mt-6 divide-y divide-neutral-100">
                {yacht.specs.map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center gap-4 py-3.5">
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#937b58]">
                      {label}
                    </span>
                    <span className="text-right text-sm font-semibold text-neutral-800">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}


export function YachtEnquiry({ yacht }: { yacht: Yacht }) {
  return (
    <section id="enquire" className="bg-[#091715] px-6 py-20 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <Eyebrow>Private Acquisition</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Interested in {yacht.title}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/65">
            Connect directly with our team to arrange a confidential private inspection, 
            request the complete GA specification brochure, or discuss delivery logistics.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/contact?subject=${encodeURIComponent(`Enquiry for ${yacht.title}`)}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#d0bc99] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#091715] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              Contact Us <ArrowRight className="size-3.5" />
            </Link>
            <a
              href="tel:+971562330110"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-colors hover:border-[#d0bc99] hover:text-[#d0bc99]"
            >
              Call +971 56 233 0110
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}