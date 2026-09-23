'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiteHeader } from '../shared/site-header'
import { Reveal } from '../shared/reveal'
import type { Yacht } from './yacht-data'

export function YachtHero({ yacht }: { yacht: Yacht }) {
  return (
    <section className="relative pt-20">
      <SiteHeader />
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 items-center gap-5 overflow-hidden">
        <div className="col-span-2 hidden h-64 opacity-60 md:block">
          <Image src={yacht.side[0]} alt="Yacht detail" width={400} height={300} className="h-full w-full object-cover" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 h-72 sm:h-[390px] md:col-span-8"
        >
          <Image src={yacht.hero} alt={yacht.title} width={1200} height={700} className="h-full w-full object-cover" priority />
        </motion.div>
        <div className="col-span-2 hidden h-64 opacity-60 md:block">
          <Image src={yacht.side[1]} alt="Yacht detail" width={400} height={300} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="flex justify-center py-8">
        <button className="rounded-full border border-[#192327] px-6 py-2 text-xs transition-colors hover:bg-[#192327] hover:text-white">
          Fullscreen Gallery
        </button>
      </div>
    </section>
  )
}

export function YachtSpecs({ yacht }: { yacht: Yacht }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-12">
      <Reveal>
        <h1 className="text-2xl font-semibold sm:text-3xl">{yacht.title}</h1>
        <p className="mt-5 max-w-5xl text-sm leading-7 text-[#526064]">{yacht.description}</p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-12 overflow-x-auto border border-[#ddd9d1]">
          <table className="w-full min-w-[650px] border-collapse text-xs">
            <tbody>
              {yacht.specs.map(([label, value]) => (
                <tr key={label} className="border-b border-[#e5e2dc] last:border-0 transition-colors hover:bg-[#f7f6f3]">
                  <td className="w-1/3 border-r border-[#e5e2dc] px-3 py-2 text-[#526064]">{label}</td>
                  <td className="px-3 py-2 text-[#526064]">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  )
}
