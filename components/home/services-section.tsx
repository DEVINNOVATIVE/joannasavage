
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eyebrow } from '../shared/eyebrow'

const aviationImage = '/assets/luxury-private-jet.jpg'
const yachtImage = '/assets/luxury-yacht-.jpg'
const realEstateImage = '/assets/luxury-real-estate (1).jpg'

const services = [
  {
    index: '01',
    category: 'Sales | Charter',
    title: 'Private Aviation',
    image: aviationImage,
    body: 'Seamless, discreet travel solutions tailored to your world.',
    href: '/services',
  },
  {
    index: '02',
    category: 'Sales | Charter',
    title: 'Super Yachts',
    image: yachtImage,
    body: 'Exceptional vessels and unforgettable journeys across the globe.',
    href: '/yachts',
  },
  {
    index: '03',
    category: 'Sales | Off-Plan',
    title: 'Real Estate',
    image: realEstateImage,
    body: 'Distinctive properties for a life less ordinary.',
    href: '/services',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#f7f6f3] px-6 py-28 text-[#192327] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header with balanced modern split layout */}
        <div className="flex flex-col gap-6 border-b border-neutral-200 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Embrace the Extraordinary</Eyebrow>
            <h2 className="mt-3 text-4xl font-light tracking-tight text-[#192327] sm:text-5xl">
              Services
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#526064]">
              Considered access to exceptional aircraft, yachts and property, shaped around the way
              you want to live.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-neutral-300 bg-neutral-50 px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-[#192327] transition-all duration-300 hover:border-[#192327] hover:bg-[#192327] hover:text-white sm:self-auto"
          >
            <span>Explore All</span>
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Link
                href={service.href}
                className="group relative block h-120 overflow-hidden rounded-md bg-neutral-100 shadow-md transition-shadow duration-500 hover:shadow-2xl"
              >
                {/* Background Image with Zoom */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Dark Vignette Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-black/15 transition-opacity duration-500 group-hover:via-black/45" />

                {/* Top Badge Area: Index number and interactive arrow */}
                <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-white/70">
                    {service.index}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                    <svg
                      className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute inset-x-6 bottom-6 z-10 text-white">
                  {/* Category Pill / Subtitle */}
                  <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
                    {service.category}
                  </span>

                  {/* Main Title */}
                  <h3 className="mt-2 text-2xl font-light uppercase tracking-wide text-white">
                    {service.title}
                  </h3>

                  {/* Body description */}
                  <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-neutral-200/90">
                    {service.body}
                  </p>

                  {/* Animated hover accent bar */}
                  <div className="mt-5 h-px w-full overflow-hidden bg-white/20">
                    <div className="h-full w-0 bg-white transition-all duration-500 ease-out group-hover:w-full" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}