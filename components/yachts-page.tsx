'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SiteHeader } from './shared/site-header'
import { Eyebrow } from './shared/eyebrow'

const yachtsHero =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-waqbIvrXUiJDBZDmp58rox1YijaQrx.png'

const yachtCards: [string, string, string, string][] = [
  ['SUNSEEKER 74 SPORT YACHT', 'Dubai', 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=85', 'sunseeker-74'],
  ['SUNSEEKER 65 SPORT', 'Dubai', 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=800&q=85', 'sunseeker-65'],
  ['SUNSEEKER MANHATTAN 68', 'Dubai', 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=800&q=85', 'sunseeker-manhattan-68'],
  ['SUNSEEKER 100 YACHT', 'London', 'https://images.unsplash.com/photo-1566847438217-76e82d383f84?auto=format&fit=crop&w=800&q=85', 'sunseeker-100'],
]

export function YachtsPage() {
  return (
    <main className="bg-[#f8f7f4] text-[#192327]">
      {/* Hero */}
      <section className="relative flex min-h-[550px] items-center justify-center overflow-hidden text-center text-white">
        <Image src={yachtsHero} alt="Woman standing on a luxury yacht" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <SiteHeader />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <h1 className="text-4xl font-semibold uppercase sm:text-6xl">Inventory for Sale</h1>
          <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#d0bc99]">
            New &amp; used yachts, exclusively for sale
          </p>
          <a
            href="#inventory"
            className="mt-6 inline-block rounded-full bg-[#b49a72] px-6 py-3 text-xs transition-colors hover:bg-[#c5ad89]"
          >
            Explore Yachts
          </a>
        </motion.div>
      </section>

      {/* Inventory */}
      <section id="inventory" className="px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Exclusively for sale</Eyebrow>
          <h2 className="mt-3 text-xl font-semibold uppercase">All Yachts</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {yachtCards.map(([name, location, image, slug], i) => (
              <motion.article
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded border border-[#ddd9d1] bg-white shadow-sm"
              >
                <div className="relative aspect-[1.25]">
                  <Image src={image} alt={name} fill className="object-cover" />
                  <span className="absolute left-0 top-0 rounded-full bg-[#a69372] px-3 py-1 text-[10px] text-white">
                    Brand New
                  </span>
                  <span className="absolute right-0 top-0 rounded-full bg-[#ff555b] px-3 py-2 text-[10px] text-white">
                    2023
                  </span>
                </div>
                <div className="p-4 text-center">
                  <div className="flex justify-center gap-1 text-[10px] text-white">
                    <span className="rounded-full bg-[#a69372] px-2 py-1">Price: POA</span>
                    <span className="rounded-full bg-[#a69372] px-2 py-1">Length: 22.56m</span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{name}</h3>
                  <p className="mt-2 text-xs text-[#687174]">Location : {location}</p>
                  <Link
                    href={`/yachts/${slug}`}
                    className="mt-4 inline-block rounded-full bg-[#a69372] px-10 py-2 text-xs text-white transition-colors hover:bg-[#b49a72]"
                  >
                    View
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
