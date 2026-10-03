'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
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
    <section id="services" className="bg-[#f3efe6] px-6 py-28 text-[#071412] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-[#d8d2c4] pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Embrace the Extraordinary</Eyebrow>
            <h2 className="mt-4 font-display text-5xl tracking-tight sm:text-6xl">Services</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#5d6668]">
              Considered access to exceptional aircraft, yachts and property, shaped around the way you
              want to live.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 self-start rounded-full bg-[#071412] px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-[#c9a96a] hover:text-[#071412]"
          >
            Explore all
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Link
                href={service.href}
                className="group relative block h-[480px] overflow-hidden rounded-[2rem] bg-[#071412] shadow-[0_20px_50px_rgba(7,20,18,0.12)]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,18,0.15)_0%,rgba(7,20,18,0.35)_40%,rgba(7,20,18,0.88)_100%)]" />
                <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.28em] text-white/70">{service.index}</span>
                  <span className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#c9a96a] group-hover:text-[#071412]">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <div className="absolute inset-x-6 bottom-7 z-10 text-white">
                  <span className="text-[11px] tracking-[0.22em] text-[#e8d5b0] uppercase">{service.category}</span>
                  <h3 className="mt-2 font-display text-3xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{service.body}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
