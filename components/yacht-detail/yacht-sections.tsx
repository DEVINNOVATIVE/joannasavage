'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { VideoHero } from '../shared/video-hero'
import { Reveal } from '../shared/reveal'
import type { Yacht } from './yacht-data'

export function YachtHero({ yacht }: { yacht: Yacht }) {
  return (
    <VideoHero title={yacht.title} eyebrow="Private yacht sales" />
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
