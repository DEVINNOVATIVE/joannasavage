'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Eyebrow } from '../shared/eyebrow'
import { Reveal } from '../shared/reveal'

const consultingImage =
  'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85'
const globeImage =
  'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1200&q=85'

const affiliations = ['Sunseeker', 'Lamborghini', 'Gaya', 'Harrods', 'SDG']

export function ConsultingSection() {
  return (
    <section className="bg-[#f7f6f3] px-6 pb-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl bg-white p-6 sm:p-10 lg:p-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[1.7] overflow-hidden rounded-md">
              <Image
                src={consultingImage}
                alt="Artificial intelligence and human creativity"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <Eyebrow>Future-forward consulting</Eyebrow>
              <h2 className="mt-3 text-2xl font-semibold text-[#192327] sm:text-3xl">
                Making the unbelievable - believable
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#526064]">
                With an eye for the extraordinary, we bring clarity, strategy and access to ambitious
                ideas. From concept to execution, every detail is considered and every opportunity is
                made meaningful.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#526064]">
                Our business development and project consulting service connects the right people,
                places and possibilities.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <Eyebrow>Strategic growth &amp; global reach</Eyebrow>
              <h2 className="mt-3 text-2xl font-semibold text-[#192327] sm:text-3xl">
                Business development &amp; project consulting
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#526064]">
                A discreet, hands-on approach to building partnerships, refining propositions and
                taking exceptional projects to the next level.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[1.35] overflow-hidden rounded-md">
              <Image
                src={globeImage}
                alt="Globe representing international business"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-[#192327]">Exclusive Affiliations</h2>
          <div className="mt-10 grid grid-cols-2 gap-8 font-serif text-2xl italic text-[#192327] sm:grid-cols-5">
            {affiliations.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
