'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Ruler, Zap, ArrowLeft, ArrowRight, Check, Anchor, Gauge, Fuel } from 'lucide-react'
import { SiteHeader } from '../shared/site-header'
import { Eyebrow } from '../shared/eyebrow'
import { Reveal, RevealClip, RevealScale } from '../shared/reveal'
import type { Yacht } from './yacht-data'

const heroVideo = {
  mp4: 'https://joannasavage.com/wp-content/themes/jo-savage/video/VELA%20by%20OMNIYAT.mp4',
  webm: 'https://joannasavage.com/wp-content/themes/jo-savage/video/VELA%20by%20OMNIYAT.webm',
  ogv: 'https://joannasavage.com/wp-content/themes/jo-savage/video/VELA%20by%20OMNIYAT.ogv',
}

export function YachtHero({ yacht }: { yacht: Yacht }) {
  const [activeImg, setActiveImg] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.9])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section ref={ref} className="relative min-h-[100vh] overflow-hidden bg-[#0b1818] text-white">
      <SiteHeader />

      {/* Video background with scroll scale */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo.mp4} type="video/mp4" />
          <source src={heroVideo.webm} type="video/webm" />
          <source src={heroVideo.ogv} type="video/ogg" />
        </video>
        {/* Fallback image while video loads */}
        <Image
          src={yacht.gallery[activeImg]}
          alt={yacht.title}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dynamic overlay that darkens on scroll */}
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0b1818]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Content with scroll-driven parallax */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex min-h-[100vh] flex-col justify-end px-6 pb-16 pt-32 sm:px-10 lg:px-20"
      >
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
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#d0bc99]"
              >
                {yacht.subtitle} · {yacht.year}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
              >
                {yacht.title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-5 flex flex-wrap gap-5 text-sm text-white/70"
              >
                <span className="flex items-center gap-2"><MapPin className="size-4 text-[#d0bc99]" /> {yacht.location}</span>
                <span className="flex items-center gap-2"><Ruler className="size-4 text-[#d0bc99]" /> {yacht.length}</span>
                <span className="flex items-center gap-2"><Zap className="size-4 text-[#d0bc99]" /> {yacht.specs.find(([l]) => l === 'Full Speed (knots)')?.[1]} knots top speed</span>
              </motion.div>
            </div>

            {/* Right: quick price + CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md"
            >
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
            </motion.div>
          </div>

          {/* Thumbnail strip */}
          {yacht.gallery.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex gap-3"
            >
              {yacht.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative h-16 w-24 overflow-hidden rounded-md border-2 transition-all ${
                    activeImg === i ? 'border-[#d0bc99]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}

export function YachtSpecs({ yacht }: { yacht: Yacht }) {
  const topSpeed = yacht.specs.find(([l]) => l === 'Full Speed (knots)')?.[1]
  const cruiseSpeed = yacht.specs.find(([l]) => l === 'Cruise Speed (knots)')?.[1]
  const fuel = yacht.specs.find(([l]) => l.startsWith('Fuel Capacity'))?.[1]

  return (
    <section className="bg-[#f8f7f4] px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Quick stat cards with scale-in */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: Ruler, label: 'Length', value: yacht.length },
            { icon: Zap, label: 'Top Speed', value: `${topSpeed} kn` },
            { icon: Gauge, label: 'Cruise', value: `${cruiseSpeed} kn` },
            { icon: Fuel, label: 'Fuel', value: fuel ? `${fuel} L` : 'POA' },
          ].map((stat, i) => (
            <RevealScale key={stat.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-[#e3e2de] bg-white p-5 text-center transition-all hover:border-[#d0bc99] hover:shadow-lg">
                <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-[#0b1818]">
                  <stat.icon className="size-5 text-[#d0bc99]" />
                </div>
                <p className="mt-3 text-lg font-semibold text-[#192327]">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#a8865c]">{stat.label}</p>
              </div>
            </RevealScale>
          ))}
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left: description + highlights */}
          <div>
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">{yacht.title}</h2>
              <p className="mt-6 text-sm leading-8 text-[#526064]">{yacht.description}</p>
            </Reveal>

            <RevealClip delay={0.1}>
              <div className="mt-10">
                <Eyebrow>Key highlights</Eyebrow>
                <ul className="mt-5 space-y-3">
                  {yacht.highlights.map((h, i) => (
                    <motion.li
                      key={h}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start gap-3 text-sm text-[#192327]"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0b1818]">
                        <Check className="size-3 text-[#d0bc99]" />
                      </span>
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </RevealClip>
          </div>

          {/* Right: specs table with clip-path reveal */}
          <RevealClip delay={0.15}>
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
          </RevealClip>
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

          <RevealClip delay={0.15}>
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
          </RevealClip>
        </div>
      </div>
    </section>
  )
}
