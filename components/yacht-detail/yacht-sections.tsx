'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Ruler, Zap, ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { SiteHeader } from '../shared/site-header'
import { Eyebrow } from '../shared/eyebrow'
import { Reveal } from '../shared/reveal'
import type { Yacht } from './yacht-data'

export function YachtHero({ yacht }: { yacht: Yacht }) {
  const [activeImg, setActiveImg] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setActiveImg((prev) => (prev + 1) % yacht.gallery.length)
  }, [yacht.gallery.length])

  useEffect(() => {
    if (isPaused || yacht.gallery.length <= 1) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [isPaused, next, yacht.gallery.length])

  return (
    <section
      className="relative min-h-[90vh] bg-[#0b1818] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <SiteHeader />

      {/* Full bleed background with crossfade slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeImg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={yacht.gallery[activeImg]}
              alt={`${yacht.title} view ${activeImg + 1}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#0b1818]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Slider progress dots */}
      {yacht.gallery.length > 1 && (
        <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2 sm:flex">
          {yacht.gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              aria-label={`View ${i + 1}`}
              className="group relative h-2 w-2 overflow-hidden rounded-full"
            >
              <span
                className={`absolute inset-0 rounded-full transition-colors ${
                  activeImg === i ? 'bg-[#d0bc99]' : 'bg-white/30 group-hover:bg-white/50'
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] flex-col justify-end px-6 pb-16 pt-32 sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-6xl"
        >
          {/* Back link */}
          <Link
            href="/yachts"
            className="mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-3" /> Back to inventory
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
            {/* Left: title + meta */}
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#d0bc99]">{yacht.subtitle} · {yacht.year}</p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">{yacht.title}</h1>
              <div className="mt-5 flex flex-wrap gap-5 text-sm text-white/70">
                <span className="flex items-center gap-2"><MapPin className="size-4 text-[#d0bc99]" /> {yacht.location}</span>
                <span className="flex items-center gap-2"><Ruler className="size-4 text-[#d0bc99]" /> {yacht.length}</span>
                <span className="flex items-center gap-2"><Zap className="size-4 text-[#d0bc99]" /> {yacht.specs.find(([l]) => l === 'Full Speed (knots)')?.[1]} knots top speed</span>
              </div>
            </div>

            {/* Right: quick price + CTA */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#d0bc99]">Asking price</p>
              <p className="mt-1 text-3xl font-semibold">{yacht.price}</p>
              <a
                href="#enquire"
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#d0bc99] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#0b1818] transition-colors hover:bg-white"
              >
                Enquire now <ArrowRight className="size-3" />
              </a>
              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white/80 transition-colors hover:border-white hover:text-white"
              >
                Request a call back
              </Link>
            </div>
          </div>

          {/* Thumbnail strip with active progress */}
          {yacht.gallery.length > 1 && (
            <div className="mt-8 flex gap-3">
              {yacht.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative h-16 w-24 overflow-hidden rounded-lg border-2 transition-all ${
                    activeImg === i ? 'border-[#d0bc99]' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" />
                  {activeImg === i && !isPaused && (
                    <motion.div
                      key={`progress-${activeImg}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4, ease: 'linear' }}
                      className="absolute bottom-0 left-0 h-1 bg-[#d0bc99]"
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export function YachtSpecs({ yacht }: { yacht: Yacht }) {
  return (
    <section className="bg-[#f8f7f4] px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left: description + highlights */}
          <div>
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">{yacht.title}</h2>
              <p className="mt-6 text-sm leading-8 text-[#526064]">{yacht.description}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10">
                <Eyebrow>Key highlights</Eyebrow>
                <ul className="mt-5 space-y-3">
                  {yacht.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-[#192327]">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0b1818]">
                        <Check className="size-3 text-[#d0bc99]" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: specs table */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-white p-6 shadow-md sm:p-8">
              <Eyebrow>Specifications</Eyebrow>
              <div className="mt-5 divide-y divide-[#f0ede8]">
                {yacht.specs.map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 py-3">
                    <span className="text-xs text-[#a8865c] uppercase tracking-[0.1em] whitespace-nowrap">{label}</span>
                    <span className="text-right text-xs font-medium text-[#192327]">{value}</span>
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
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: String(fd.get('firstName') || ''),
          lastName: String(fd.get('lastName') || ''),
          email: String(fd.get('email') || ''),
          telephone: String(fd.get('telephone') || ''),
          message: String(fd.get('message') || `I am interested in the ${yacht.title}. Please send me more information.`),
          serviceType: `Yacht Enquiry — ${yacht.title}`,
        }),
      })
      if (res.ok) setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="enquire" className="bg-[#0b1818] px-6 py-20 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Enquire</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Interested in this vessel?</h2>
            <p className="mt-5 text-sm leading-7 text-white/60">
              Fill in your details and Joanna will be in touch to arrange a private viewing or answer any
              questions about the {yacht.title}.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#d0bc99]">Phone</p>
                <a href="tel:+971562330110" className="mt-1 block text-white/70 hover:text-white">+971 56 233 0110</a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#d0bc99]">Email</p>
                <a href="mailto:info@joannasavage.com" className="mt-1 block text-white/70 hover:text-white">info@joannasavage.com</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-10 text-center"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-[#d0bc99]">
                  <Check className="size-7 text-[#0b1818]" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">Enquiry sent!</h3>
                <p className="mt-3 text-sm text-white/60">We will be in touch shortly to discuss the {yacht.title}.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                {[
                  { name: 'firstName', label: 'First Name', required: true },
                  { name: 'lastName', label: 'Last Name', required: true },
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  { name: 'telephone', label: 'Telephone' },
                ].map((f) => (
                  <input
                    key={f.name}
                    name={f.name}
                    type={f.type || 'text'}
                    required={f.required}
                    placeholder={f.label + (f.required ? ' *' : '')}
                    className="h-12 rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-[#d0bc99] focus:bg-white/15"
                  />
                ))}
                <textarea
                  name="message"
                  rows={3}
                  placeholder={`I am interested in the ${yacht.title}...`}
                  className="resize-none rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-[#d0bc99] focus:bg-white/15 sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 rounded-full bg-[#d0bc99] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-[#0b1818] transition-colors hover:bg-white disabled:opacity-60"
                  >
                    {loading ? 'Sending...' : 'Send enquiry'}
                    {!loading && <ArrowRight className="size-3" />}
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
