'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { VideoHero } from './shared/video-hero'
import { Eyebrow } from './shared/eyebrow'
import { Reveal } from './shared/reveal'

const jetMain = '/assets/joanna-savage-private-plane.jpg'
const yachtMain = '/assets/Yacht.jpeg'
const propertyMain = '/assets/luxury-real-estate-1.jpg'
const propertySecondary = '/assets/luxury-real-estate (1).jpg'

const charterVideo = {
  mp4: 'https://joannasavage.com/wp-content/themes/jo-savage/video/view-from-copter.mp4',
  webm: 'https://joannasavage.com/wp-content/themes/jo-savage/video/view-from-copter.webm',
  ogv: 'https://joannasavage.com/wp-content/themes/jo-savage/video/view-from-copter.ogv',
}

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

function Tags({ items }: { items: string[] }) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {items.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-[#c9a96a]/50 bg-white px-4 py-1.5 text-[11px] font-medium tracking-widest text-[#8a6f3e] uppercase"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export function ServicesPage() {
  return (
    <main className="bg-[#f3efe6] text-[#071412]">
      <VideoHero
        title="Private access"
        description="Aviation, yachts and landmark property — curated with discretion and delivered with care."
      />

      <section className="border-b border-[#e7e1d4] bg-white px-6 py-14 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {serviceStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <p className="font-display text-5xl italic text-[#c9a96a]">{stat.value}</p>
              <p className="mt-2 text-[11px] tracking-[0.2em] text-[#5d6668] uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative h-[460px] overflow-hidden rounded-[2rem]">
              <Image src={jetMain} alt="Private jet exterior" fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <Eyebrow>Global access to luxury aviation</Eyebrow>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                Private Jets: Sales, Acquisition &amp; Charter
              </h2>
              <p className="mt-6 text-[15px] leading-8 text-[#5d6668]">
                When it comes to selling your private jet, Joanna leverages her expertise and worldwide
                connections to ensure maximum exposure and the best possible outcome. She employs targeted
                marketing strategies and a comprehensive approach to attract qualified buyers and facilitate
                a seamless transaction.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-[#5d6668]">
                Joanna&apos;s dedication to exceptional service extends beyond the buying and selling process.
                She offers ongoing support and guidance, helping clients with aircraft management, charter
                services, and maintenance.
              </p>
              <Tags items={['Aircraft Sourcing', 'Acquisition', 'Charter Management', 'Discreet Travel']} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <Eyebrow>Elevate your yachting experience</Eyebrow>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                Trusted Super Yacht Sales &amp; Charter Expert
              </h2>
              <p className="mt-6 text-[15px] leading-8 text-[#5d6668]">
                When it comes to super yacht sales, Joanna&apos;s expertise shines through. With her extensive
                network and industry knowledge, she offers a curated selection of the finest super yachts on
                the market. Whether you&apos;re looking for a sleek and contemporary vessel or a classic and
                timeless beauty, Joanna has the expertise to guide you towards the perfect match.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-[#5d6668]">
                For those seeking the ultimate luxury getaway, Joanna&apos;s super yacht charter services are
                second to none — from exotic destinations to secluded islands, every moment is considered.
              </p>
              <Tags items={['New Builds', 'Pre-Owned', 'Charter', 'Lifecycle Management']} />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative h-[460px] overflow-hidden rounded-[2rem]">
              <Image src={yachtMain} alt="Luxury super yacht at sea" fill className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative h-[460px] overflow-hidden rounded-[2rem]">
              <Image src={propertyMain} alt="Luxury waterfront residence" fill className="object-cover" />
              <Image
                src={propertySecondary}
                alt="Interior detail of luxury residence"
                width={220}
                height={220}
                className="absolute -bottom-5 -right-4 hidden rounded-2xl border-8 border-[#f3efe6] object-cover shadow-xl sm:block"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <Eyebrow>Unveiling exclusive Dubai real estate</Eyebrow>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                Luxury Sales &amp; Off-Plan Investments
              </h2>
              <p className="mt-6 text-[15px] leading-8 text-[#5d6668]">
                When it comes to luxury sales, Joanna&apos;s expertise is unmatched. She offers a remarkable
                portfolio of prestigious properties, including stunning villas, opulent mansions, and
                exclusive luxury estates.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-[#5d6668]">
                In addition to luxury sales, Joanna specializes in off-plan investments — exclusive access
                to developments across the ever-growing UAE real estate market.
              </p>
              <Tags items={['Off-Plan', 'Waterfront', 'Landmark Developments', 'Investment Advisory']} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mt-4 font-display text-5xl tracking-tight">Spotlight Projects</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#5d6668]">
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
                className="group relative overflow-hidden rounded-[2rem] shadow-lg"
              >
                <div className="relative aspect-[1.55] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-[11px] tracking-[0.22em] text-[#e8d5b0] uppercase">{project.location}</p>
                  <h3 className="mt-2 font-display text-3xl text-white">{project.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[420px] items-center overflow-hidden text-white">
        <video autoPlay loop muted playsInline preload="metadata" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover">
          <source src={charterVideo.mp4} type="video/mp4" />
          <source src={charterVideo.webm} type="video/webm" />
          <source src={charterVideo.ogv} type="video/ogg" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,18,0.88)_0%,rgba(7,20,18,0.45)_100%)]" />
        <div className="relative z-10 px-6 sm:px-10 lg:px-20">
          <Reveal>
            <div className="max-w-lg">
              <Eyebrow light>Discretion & excellence</Eyebrow>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">Every journey, effortlessly yours</h2>
              <p className="mt-5 text-sm leading-7 text-white/70">
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
