'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Eyebrow } from '../shared/eyebrow'
import { Reveal } from '../shared/reveal'

const portraitImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-efmNQUU5E5ZahvvGPgbEcdsQ2Aoq3q.jpeg'

export function AboutSection() {
  return (
    <section id="about" className="bg-[#f7f6f3] px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <Reveal y={30}>
          <div className="relative mx-auto aspect-[0.78] w-full max-w-[420px] overflow-hidden rounded-md">
            <Image
              src={portraitImage}
              alt="Joanna Savage in a city residence"
              fill
              className="object-cover grayscale"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="max-w-xl">
            <Eyebrow>Redefining luxury with expertise &amp; philanthropy</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#192327] sm:text-4xl">
              About Me
            </h2>
            <div className="mt-7 space-y-4 text-sm leading-7 text-[#526064]">
              <p>
                Joanna is a highly successful and experienced luxury sales broker with an impressive
                career that spans across Superyachts, Real Estate, Luxury Performance Yachts and Private
                Aviation. Making her a trusted advisor to many high-profile clients.
              </p>
              <p>
                She held a number of senior positions within globally recognised brands and family
                offices to include; Lamborghini, Harrods and Knight Frank, before stepping down to
                consult privately.
              </p>
              <p>
                Besides her impressive track record, Joanna also has a deep vested interest in
                philanthropic efforts that support the 17 sustainable development goals set by the
                United Nations.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
