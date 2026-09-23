'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { VideoHero } from './shared/video-hero'
import { Eyebrow } from './shared/eyebrow'
import { Reveal } from './shared/reveal'

const aviation = '/assets/luxury-private-jet.jpg'
const aircraftInterior = '/assets/luxury-private-jet.jpg'
const yacht = '/assets/luxury-yacht-.jpg'
const property = '/assets/luxury-real-estate (1).jpg'
const marina = '/assets/luxury-dubai.jpg'

export function ServicesPage() {
  return (
    <main className="bg-[#f8f7f4] text-[#192327]">
      <VideoHero title="Services" />

      {/* Aviation */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 sm:px-12 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div>
            <Eyebrow>Global access to luxury aviation</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold">Private Jets: Sales, Acquisition &amp; Charter</h2>
            <p className="mt-6 text-sm leading-7 text-[#526064]">
              When it comes to flying on your private jet, bespoke expertise goes hand in hand with
              exceptional service. From sourcing and acquisition to charter, we make every journey
              effortless, discreet and deeply personal.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#526064]">
              Joanna&apos;s dedication to excellence extends across every detail, from selecting the
              right aircraft to negotiating the right terms.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative h-[380px]">
            <Image src={aviation} alt="Private jet" fill className="rounded object-cover grayscale" />
            <Image
              src={aircraftInterior}
              alt="Aircraft interior"
              width={230}
              height={230}
              className="absolute -bottom-8 -left-8 rounded border-4 border-[#f8f7f4] object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Yachts */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:px-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[1.8] overflow-hidden rounded">
            <Image src={yacht} alt="Luxury super yacht at sea" fill className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div>
            <Eyebrow>Elevate your yachting experience</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold">Trusted Super Yacht Sales &amp; Charter Expert</h2>
            <p className="mt-6 text-sm leading-7 text-[#526064]">
              From new builds to pre-owned yachts, Joanna&apos;s expertise spans the entire lifecycle.
              Her global network and knowledge ensure every client receives a tailored, discreet and
              rewarding experience.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Real Estate */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:px-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <Eyebrow>Unveiling exclusive Dubai real estate</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold">Luxury Sales &amp; Off-Plan Investments</h2>
            <p className="mt-6 text-sm leading-7 text-[#526064]">
              Discover investment opportunities in exceptional locations, from waterfront residences to
              landmark developments. Joanna provides a considered path through every stage of
              acquisition.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative aspect-[1.4] overflow-hidden rounded">
            <Image src={property} alt="Luxury waterfront residence" fill className="object-cover" />
          </div>
        </Reveal>
      </section>

      {/* Spotlight */}
      <section className="px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold">Spotlight Projects</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[property, marina, aviation].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Image
                  src={src}
                  alt="Spotlight project"
                  width={500}
                  height={340}
                  className="h-72 w-full rounded object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
