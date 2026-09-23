'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { VideoHero } from './shared/video-hero'
import { SiteFooter } from './shared/site-footer'
import { Eyebrow } from './shared/eyebrow'
import { Reveal } from './shared/reveal'
import { ContactCta } from './shared/contact-cta'

const portraitImage = '/assets/joanna-savage-black.jpg'
const dubaiImage = '/assets/luxury-dubai.jpg'
const yachtImage = '/assets/luxury-yacht-.jpg'
const jetImage = '/assets/luxury-private-jet.jpg'
const realEstateImage = '/assets/luxury-real-estate (1).jpg'
const consultingImage = '/assets/proptech-page.jpg'

const careerHighlights = [
  { title: 'Lamborghini', role: 'Senior Position', description: 'Representing the pinnacle of Italian automotive luxury and performance.' },
  { title: 'Harrods', role: 'Senior Position', description: 'Delivering world-class service at London\'s most iconic luxury department store.' },
  { title: 'Knight Frank', role: 'Senior Position', description: 'Advising on prime and super-prime real estate for global HNW clients.' },
]

const expertise = [
  { label: 'Superyachts', image: yachtImage, description: 'Sales, charter, and lifecycle management of luxury performance yachts.' },
  { label: 'Private Aviation', image: jetImage, description: 'Sourcing, acquisition, and charter of private jets with full discretion.' },
  { label: 'Real Estate', image: realEstateImage, description: 'Off-plan investments and luxury property acquisitions in prime locations.' },
]

const affiliationLogos = [
  { name: 'Sunseeker', logo: '/assets/sunskeer.png' },
  { name: 'Lamborghini', logo: '/assets/lamborghini.png' },
  { name: 'Gaya', logo: '/assets/gayo.png' },
  { name: 'Harrods', logo: '/assets/harrods.png' },
  { name: 'SDG', logo: '/assets/impact-funds.png' },
]

export function AboutPage() {
  return (
    <main className="bg-[#f7f6f3] text-[#192327]">
      <VideoHero title="About Me" eyebrow="Redefining luxury with expertise & philanthropy" />

      {/* Portrait + Bio */}
      <section className="px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal y={30}>
            <div className="relative mx-auto aspect-[0.78] w-full max-w-[420px] overflow-hidden rounded-md">
              <Image
                src={portraitImage}
                alt="Joanna Savage"
                fill
                className="object-cover grayscale"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="max-w-xl">
              <Eyebrow>Meet Joanna</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">About Me</h2>
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

      {/* Career Highlights */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center">
              <Eyebrow>A career in luxury</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Career Highlights</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {careerHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-lg border border-[#e3e2de] bg-[#f7f6f3] p-8"
              >
                <h3 className="font-serif text-xl italic text-[#192327]">{item.title}</h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#a8865c]">{item.role}</p>
                <p className="mt-4 text-sm leading-6 text-[#526064]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center">
              <Eyebrow>What I do</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Areas of Expertise</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {expertise.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative min-h-[280px] overflow-hidden rounded-md text-white shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <h3 className="text-lg font-semibold uppercase">{item.label}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philanthropy */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative aspect-[1.5] overflow-hidden rounded-md">
              <Image
                src={consultingImage}
                alt="Philanthropy and sustainable development"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <Eyebrow>Philanthropy</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Sustainable Development Goals</h2>
              <p className="mt-6 text-sm leading-7 text-[#526064]">
                Joanna has a deep vested interest in philanthropic efforts that support the 17 sustainable
                development goals set by the United Nations. Through strategic partnerships and
                impact-focused investments, she works to align luxury with responsibility.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#526064]">
                From impact funds to community-driven projects, the mission is to create meaningful,
                lasting change while delivering exceptional value to clients.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Global Reach */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div>
              <Eyebrow>Global reach</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Dubai & Beyond</h2>
              <p className="mt-6 text-sm leading-7 text-[#526064]">
                Based in Dubai and operating globally, Joanna serves clients across the Middle East,
                Europe, and beyond. Her international network spans family offices, developers, and
                luxury brands, ensuring access to the most exceptional opportunities worldwide.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[1.5] overflow-hidden rounded-md">
              <Image
                src={dubaiImage}
                alt="Dubai skyline"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Affiliations */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <Eyebrow>Trusted partnerships</Eyebrow>
          <h2 className="mt-3 text-2xl font-semibold">Exclusive Affiliations</h2>
          <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-5">
            {affiliationLogos.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title="Let's work together"
        subtitle="Reach out to discuss how Joanna can help you achieve the extraordinary."
      />
      <SiteFooter />
    </main>
  )
}
