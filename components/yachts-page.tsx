'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { VideoHero } from './shared/video-hero'
import { Eyebrow } from './shared/eyebrow'

const yachtCards: [string, string, string, string][] = [
  ['SUNSEEKER 74 SPORT YACHT', 'Dubai', '/assets/luxury-yacht-.jpg', 'sunseeker-74'],
  ['SUNSEEKER 65 SPORT', 'Dubai', '/assets/luxury-yacht-.jpg', 'sunseeker-65'],
  ['SUNSEEKER MANHATTAN 68', 'Dubai', '/assets/luxury-yacht-.jpg', 'sunseeker-manhattan-68'],
  ['SUNSEEKER 100 YACHT', 'London', '/assets/luxury-yacht-.jpg', 'sunseeker-100'],
]

export function YachtsPage() {
  return (
    <main className="bg-[#f8f7f4] text-[#192327]">
      <VideoHero
        title="Inventory for Sale"
        eyebrow="New & used yachts, exclusively for sale"
        action={{ href: '#inventory', label: 'Explore Yachts' }}
        scrollTarget="#inventory"
      />

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
