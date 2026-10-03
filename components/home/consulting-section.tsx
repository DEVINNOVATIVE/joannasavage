'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Eyebrow } from '../shared/eyebrow'
import { Reveal } from '../shared/reveal'

const consultingImage = '/assets/proptech-page.jpg'
const globeImage = '/assets/TCH1.jpeg'

const affiliations = [
  { name: 'Sunseeker', logo: '/assets/sunskeer.png' },
  { name: 'Lamborghini', logo: '/assets/lamborghini.png' },
  { name: 'Gaya', logo: '/assets/gayo.png' },
  { name: 'Harrods', logo: '/assets/harrods.png' },
  { name: 'SDG', logo: '/assets/impact-funds.png' },
]

export function ConsultingSection() {
  return (
    <section className="bg-[#f8f5ef] px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl border-b border-[#d8d2c4] pb-12">
            <Eyebrow>Beyond the expected</Eyebrow>
            <h2 className="mt-5 font-display text-5xl leading-none text-[#071412] sm:text-7xl">Ideas with impact.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#5d6668]">
              Strategic thinking, meaningful connections and a clear path from ambitious idea to exceptional
              outcome.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="group relative aspect-[1.65] overflow-hidden rounded-[2rem] bg-[#071412]">
              <Image
                src={consultingImage}
                alt="Artificial intelligence and human creativity"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
              <span className="absolute bottom-6 left-6 text-[11px] tracking-[0.25em] text-white/80 uppercase">
                01 / Vision to execution
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <Eyebrow>Future-forward consulting</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[#071412] sm:text-5xl">
                Making the unbelievable — believable
              </h2>
              <p className="mt-6 text-[15px] leading-8 text-[#5d6668]">
                With an eye for the extraordinary, we bring clarity, strategy and access to ambitious ideas.
                From concept to execution, every detail is considered and every opportunity is made
                meaningful.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-[#5d6668]">
                Our business development and project consulting service connects the right people, places and
                possibilities.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid items-center gap-12 border-t border-[#d8d2c4] pt-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <Eyebrow>Strategic growth &amp; global reach</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[#071412] sm:text-5xl">
                Business development &amp; project consulting
              </h2>
              <p className="mt-6 text-[15px] leading-8 text-[#5d6668]">
                A discreet, hands-on approach to building partnerships, refining propositions and taking
                exceptional projects to the next level.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="group relative aspect-[1.35] overflow-hidden rounded-[2rem] bg-[#071412]">
              <Image
                src={globeImage}
                alt="Globe representing international business"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/45 to-transparent" />
              <span className="absolute bottom-6 left-6 text-[11px] tracking-[0.25em] text-white/80 uppercase">
                02 / Global perspective
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-[#d8d2c4] pt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Trusted by exceptional brands</Eyebrow>
              <h2 className="mt-4 font-display text-3xl text-[#071412]">Exclusive Affiliations</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#5d6668] sm:text-right">
              A global network built on discretion, trust and shared standards.
            </p>
          </div>
          <div className="relative mt-10 overflow-hidden" aria-label="Affiliation logos">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="flex w-max items-center gap-16 pr-16"
            >
              {[...affiliations, ...affiliations].map((item, i) => (
                <div
                  key={`${item.name}-${i}`}
                  aria-hidden={i >= affiliations.length}
                  className="flex h-20 w-40 shrink-0 items-center justify-center"
                >
                  <Image
                    src={item.logo}
                    alt={i >= affiliations.length ? '' : item.name}
                    width={180}
                    height={90}
                    className="h-16 w-auto max-w-full object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
