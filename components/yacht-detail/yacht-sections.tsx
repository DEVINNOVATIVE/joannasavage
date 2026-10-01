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

function LegacyYachtHero({ yacht }: { yacht: Yacht }) {
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
      className="relative flex min-h-screen flex-col justify-between overflow-x-hidden bg-[#f7f6f3] text-[#192327]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <SiteHeader transparent={false} />

      <div className="relative z-10 flex flex-1 flex-col justify-between pt-24 pb-8">
        {/* Top Header & Navigation bar */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[1680px] px-4 sm:px-8 lg:px-12"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/yachts"
              className="inline-flex items-center gap-2 rounded-full border border-[#192327]/15 bg-white/75 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#526064] backdrop-blur-md transition-colors hover:border-[#192327]/40 hover:text-[#192327]"
            >
              <ArrowLeft className="size-3" /> Back to inventory
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#a8865c]">
                {yacht.subtitle} · {yacht.year}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#526064]">
                <span className="size-1.5 rounded-full bg-[#6d9a70]" /> Available
              </span>
            </div>
          </div>
        </motion.div>

        {/* 3-Panel Peek Carousel */}
        <div className="relative my-auto flex w-full items-center justify-center overflow-visible py-4">
          <div className="relative flex h-[52vh] min-h-105 max-h-160 w-full items-center justify-center">
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
                    x: offset === 0 ? '0%' : offset < 0 ? '-88%' : '88%',
                    scale: isActive ? 1 : 0.84,
                    opacity: isActive ? 1 : 0.58,
                    zIndex: isActive ? 20 : 10,
                  }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute top-0 h-full w-[62vw] max-w-255 shrink-0 cursor-pointer overflow-hidden rounded-sm bg-white shadow-[0_24px_70px_rgba(25,35,39,0.16)] transition-[filter] duration-500 ${
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

                  {/* Active Slide: Corner Circular Info Button */}
                  {isActive && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setShowSpecsModal(!showSpecsModal)
                      }}
                      aria-label="View yacht specifications"
                      className="absolute right-6 bottom-6 z-30 flex size-10 items-center justify-center rounded-full bg-[#192327] text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 sm:size-12"
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
            <div className="pointer-events-none absolute inset-x-4 z-30 mx-auto flex max-w-300 justify-between sm:inset-x-8">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous view"
                className="pointer-events-auto flex size-12 items-center justify-center rounded-full border border-[#192327]/15 bg-white/85 text-[#192327] shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:bg-white"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next view"
                className="pointer-events-auto flex size-12 items-center justify-center rounded-full border border-[#192327]/15 bg-white/85 text-[#192327] shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:bg-white"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        {/* Floating Spec Bar Dock & Navigation Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-300 px-4 sm:px-8"
        >
          <div className="rounded-2xl border border-[#192327]/10 bg-white/90 p-3.5 shadow-[0_14px_40px_rgba(25,35,39,0.1)] backdrop-blur-xl sm:p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Spec Chips */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-2 rounded-xl bg-[#192327]/6 px-3 py-2 text-xs text-[#526064]">
                  <MapPin className="size-3.5 text-[#d0bc99]" /> {yacht.location}
                </span>
                <span className="flex items-center gap-2 rounded-xl bg-[#192327]/6 px-3 py-2 text-xs text-[#526064]">
                  <Ruler className="size-3.5 text-[#d0bc99]" /> {yacht.length}
                </span>
                {fullSpeed && (
                  <span className="flex items-center gap-2 rounded-xl bg-[#192327]/6 px-3 py-2 text-xs text-[#526064]">
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
        </motion.div>
      </div>
    </section>
  )
}

export function YachtHero({ yacht }: { yacht: Yacht }) {
  const [activeImg, setActiveImg] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setActiveImg((current) => (current + 1) % yacht.gallery.length)
  }, [yacht.gallery.length])

  const previous = useCallback(() => {
    setActiveImg((current) => (current - 1 + yacht.gallery.length) % yacht.gallery.length)
  }, [yacht.gallery.length])

  useEffect(() => {
    if (isPaused || yacht.gallery.length <= 1) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [isPaused, next, yacht.gallery.length])

  const nextImg = (activeImg + 1) % yacht.gallery.length
  const fullSpeed = yacht.specs.find(([label]) => label.toLowerCase().includes('speed'))?.[1]

  return (
    <section className="bg-[#0b1818] text-white" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <SiteHeader />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-32 sm:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20 lg:px-12 lg:pb-24 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#a8865c]">
            <span className="size-2 rounded-full bg-[#6d9a70]" />
            {yacht.subtitle} · {yacht.year} · Available
          </div>
          <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {yacht.title}
          </h1>
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/65 line-clamp-4">
            {yacht.description}
          </p>

          <div className="mt-9 grid max-w-md grid-cols-3 border-y border-white/15 py-5">
            <div>
              <p className="font-serif text-2xl italic text-[#a8865c]">{yacht.length}</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/45">Length</p>
            </div>
            <div className="border-l border-white/15 pl-4">
              <p className="font-serif text-2xl italic text-[#a8865c]">{fullSpeed ?? 'POA'}</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/45">Top speed</p>
            </div>
            <div className="border-l border-white/15 pl-4">
              <p className="font-serif text-2xl italic text-[#a8865c]">{yacht.price}</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/45">Price</p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#enquire"
              className="inline-flex items-center gap-3 rounded-full bg-[#d0bc99] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0b1818] shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5"
            >
              Enquire about this yacht <ArrowRight className="size-4" />
            </a>
            <Link href="/yachts" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/65 hover:text-[#d0bc99]">
              <ArrowLeft className="size-4" /> Inventory
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 min-w-0 lg:order-2"
        >
          <div className="relative">
            <div className="relative aspect-[1.15] overflow-hidden rounded-[2rem] bg-[#172727] shadow-[0_28px_70px_rgba(0,0,0,0.35)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65 }}
                  className="absolute inset-0"
                >
                  <Image src={yacht.gallery[activeImg]} alt={`${yacht.title} view ${activeImg + 1}`} fill priority className="object-cover" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-linear-to-t from-[#071614]/45 via-transparent to-transparent" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-white sm:inset-x-8">
                <span>Sunseeker</span>
                <span>{String(activeImg + 1).padStart(2, '0')} / {String(yacht.gallery.length).padStart(2, '0')}</span>
              </div>
              <div className="absolute bottom-6 right-6 flex gap-2">
                <button type="button" onClick={previous} aria-label="Previous yacht image" className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-[#162421]"><ChevronLeft className="size-4" /></button>
                <button type="button" onClick={next} aria-label="Next yacht image" className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-[#162421]"><ChevronRight className="size-4" /></button>
              </div>
            </div>

            <button type="button" onClick={next} aria-label="Show next yacht image" className="absolute -bottom-8 -left-4 hidden aspect-[1.25] w-40 overflow-hidden rounded-2xl border-8 border-[#0b1818] bg-[#172727] shadow-[0_18px_45px_rgba(0,0,0,0.3)] sm:block lg:-left-10 lg:w-48">
              <Image src={yacht.gallery[nextImg]} alt="Next yacht view" fill className="object-cover transition-transform duration-500 hover:scale-105" />
              <span className="absolute inset-x-3 bottom-3 text-left text-[9px] font-medium uppercase tracking-[0.16em] text-white drop-shadow-md">Next view</span>
            </button>
          </div>
          <div className="mt-12 flex justify-end gap-2">
            {yacht.gallery.map((image, index) => (
              <button key={image} type="button" onClick={() => setActiveImg(index)} aria-label={`Show yacht image ${index + 1}`} className={`relative h-12 w-16 overflow-hidden rounded-lg transition ${activeImg === index ? 'ring-2 ring-[#a8865c] ring-offset-2 ring-offset-[#0b1818]' : 'opacity-50 hover:opacity-100'}`}>
                <Image src={image} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function YachtSpecs({ yacht }: { yacht: Yacht }) {
  return (
    <section className="border-t border-[#e3e2de] bg-[#f7f6f3] px-6 py-24 text-[#192327] sm:px-10 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left: Overview description & Key Highlights */}
          <div>
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#192327] sm:text-4xl">
                {yacht.title}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#526064]">
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
                      className="flex items-center gap-3 rounded-xl border border-[#e3e2de] bg-white p-3.5 shadow-[0_12px_30px_rgba(25,35,39,0.06)]"
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
            <div className="rounded-3xl border border-[#e3e2de] bg-white p-7 shadow-[0_24px_70px_rgba(25,35,39,0.08)] sm:p-8">
              <Eyebrow>Specifications</Eyebrow>
              <div className="mt-6 divide-y divide-[#e3e2de]">
                {yacht.specs.map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center gap-4 py-3.5">
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#937b58]">
                      {label}
                    </span>
                    <span className="text-right text-sm font-semibold text-[#192327]">
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
    <section id="enquire" className="border-t border-[#d8d5cd] bg-[#f1eee8] px-6 py-20 text-[#192327] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <Eyebrow>Private Acquisition</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Interested in {yacht.title}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#526064]">
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
              className="inline-flex items-center gap-2 rounded-full border border-[#192327]/15 bg-white/60 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-[#192327] backdrop-blur-sm transition-colors hover:border-[#a8865c] hover:text-[#a8865c]"
            >
              Call +971 56 233 0110
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}