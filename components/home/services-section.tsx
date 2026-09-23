'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eyebrow } from '../shared/eyebrow'

const aviationImage =
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85'
const yachtImage =
  'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1200&q=85'
const realEstateImage =
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85'

const services = [
  {
    title: 'Private Aviation',
    image: aviationImage,
    body: 'Seamless, discreet travel solutions tailored to your world.',
    href: '/services',
  },
  {
    title: 'Super Yachts',
    image: yachtImage,
    body: 'Exceptional vessels and unforgettable journeys across the globe.',
    href: '/yachts',
  },
  {
    title: 'Real Estate',
    image: realEstateImage,
    body: 'Distinctive properties for a life less ordinary.',
    href: '/services',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#f7f6f3] px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Eyebrow>Elevate the extraordinary</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold text-[#192327]">Services</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link href={service.href} className="group block">
                <article className="group relative min-h-[310px] overflow-hidden rounded-md text-white shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80" />
                  <div className="absolute inset-x-6 bottom-6">
                    <h3 className="text-lg font-semibold uppercase">{service.title}</h3>
                    <p className="mt-2 max-w-[220px] text-xs leading-5 text-white/80">
                      {service.body}
                    </p>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link
            href="/services"
            className="rounded-full border border-[#192327] px-5 py-2 text-xs text-[#192327] transition-colors hover:bg-[#192327] hover:text-white"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  )
}
