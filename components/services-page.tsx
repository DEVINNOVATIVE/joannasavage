'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { VideoHero } from './shared/video-hero'
import { Eyebrow } from './shared/eyebrow'
import { Reveal } from './shared/reveal'

const jetMain = '/assets/joanna-savage-private-plane.jpg'
const jetSecondary = '/assets/private-jet-black.jpg'
const yachtMain = '/assets/Yacht.jpeg'
const propertyMain = '/assets/luxury-real-estate-1.jpg'
const propertySecondary = '/assets/luxury-real-estate (1).jpg'

const spotlightProjects = [
  { title: 'BUGATTI x Binghatti', location: 'Dubai', image: '/assets/BUGATTI x Binghatti.jpg' },
  { title: 'VELA — Dorchester Collection', location: 'Dubai', image: '/assets/VELA - Dorchester Collection.jpeg' },
  { title: 'Emma Beachfront', location: 'Dubai', image: '/assets/Emma Beachfront.jpeg' },
  { title: 'Custom Built — Off Market Mansions', location: 'Dubai', image: '/assets/CUSTOM BUILT - OFF MARKET MANSIONS.jpg' },
]

const serviceStats = [
  { value: '20+', label: 'Years of experience' },
  { value: '500+', label: 'Clients served' },
  { value: '5', label: 'Global brands partnered' },
  { value: '∞', label: 'Dedication to detail' },
]

export function ServicesPage() {
  return (
    <main className="bg-[#f8f7f4] text-[#192327]">
      <VideoHero title="Services" />

      {/* Stats bar */}
      <section className="border-b border-[#e3e2de] bg-white px-6 py-12 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {serviceStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-4xl italic text-[#a8865c]">{stat.value}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#526064]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Aviation — full-bleed split */}
      <section className="px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative h-[460px] overflow-hidden rounded-2xl">
              <Image src={jetMain} alt="Private jet exterior" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <Eyebrow>Global access to luxury aviation</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Private Jets: Sales, Acquisition &amp; Charter
              </h2>
              <p className="mt-6 text-sm leading-7 text-[#526064]">
                When it comes to flying on your private jet, bespoke expertise goes hand in hand with
                exceptional service. From sourcing and acquisition to charter, we make every journey
                effortless, discreet and deeply personal.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#526064]">
                Joanna&apos;s dedication to excellence extends across every detail, from selecting the
                right aircraft to negotiating the right terms.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Aircraft Sourcing', 'Acquisition', 'Charter Management', 'Discreet Travel'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d0bc99] bg-[#f7f6f3] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#a8865c]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Yachts — reversed split with overlay image */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <Eyebrow>Elevate your yachting experience</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Trusted Super Yacht Sales &amp; Charter Expert
              </h2>
              <p className="mt-6 text-sm leading-7 text-[#526064]">
                From new builds to pre-owned yachts, Joanna&apos;s expertise spans the entire lifecycle.
                Her global network and knowledge ensure every client receives a tailored, discreet and
                rewarding experience.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['New Builds', 'Pre-Owned', 'Charter', 'Lifecycle Management'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d0bc99] bg-[#f7f6f3] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#a8865c]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative h-[460px] overflow-hidden rounded-2xl">
              <Image src={yachtMain} alt="Luxury super yacht at sea" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Real Estate — full-bleed split with secondary image overlay */}
      <section className="px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative h-[460px] overflow-hidden rounded-2xl">
              <Image src={propertyMain} alt="Luxury waterfront residence" fill className="object-cover" />
              <Image
                src={propertySecondary}
                alt="Interior detail of luxury residence"
                width={220}
                height={220}
                className="absolute -bottom-6 -right-6 rounded-xl border-4 border-[#f8f7f4] object-cover shadow-xl"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <Eyebrow>Unveiling exclusive Dubai real estate</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Luxury Sales &amp; Off-Plan Investments
              </h2>
              <p className="mt-6 text-sm leading-7 text-[#526064]">
                Discover investment opportunities in exceptional locations, from waterfront residences to
                landmark developments. Joanna provides a considered path through every stage of
                acquisition.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Off-Plan', 'Waterfront', 'Landmark Developments', 'Investment Advisory'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d0bc99] bg-[#f7f6f3] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#a8865c]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Spotlight Projects — modern card grid */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center">
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Spotlight Projects</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#526064]">
                A curated selection of landmark developments and exclusive opportunities.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {spotlightProjects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="relative aspect-[1.6] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#d0bc99]">{project.location}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary aviation image — full-width banner */}
      <section className="relative h-[400px] overflow-hidden">
        <Image src={jetSecondary} alt="Private jet on tarmac" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-20">
          <Reveal>
            <div className="max-w-lg text-white">
              <Eyebrow>Discretion & excellence</Eyebrow>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Every journey, effortlessly yours</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                From the moment you enquire to the moment you arrive, every detail is handled with the
                utmost care and confidentiality.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
