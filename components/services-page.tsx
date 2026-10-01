'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { VideoHero } from './shared/video-hero'
import { Eyebrow } from './shared/eyebrow'
import { Reveal } from './shared/reveal'
import { CharterBanner } from './home/charter-banner'

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
            <div className="relative h-115 overflow-hidden rounded-2xl">
              <Image src={jetMain} alt="Private jet exterior" fill className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <Eyebrow>Global access to luxury aviation</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Private Jets: Sales, Acquisition &amp; Charter
              </h2>
              <p className="mt-6 text-sm leading-7 text-[#526064]">
                When it comes to selling your private jet, Joanna leverages her expertise and worldwide
                connections to ensure maximum exposure and the best possible outcome. She employs targeted
                marketing strategies and a comprehensive approach to attract qualified buyers and facilitate
                a seamless transaction.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#526064]">
                Joanna&apos;s dedication to exceptional service extends beyond the buying and selling process.
                She offers ongoing support and guidance, helping clients with aircraft management, charter
                services, and maintenance. Her commitment to delivering unparalleled customer satisfaction
                sets her apart in the industry.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Aircraft Sourcing', 'Acquisition', 'Charter Management', 'Discreet Travel'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d0bc99] bg-[#f7f6f3] px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest text-[#a8865c]"
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
                When it comes to super yacht sales, Joanna&apos;s expertise shines through. With her extensive
                network and industry knowledge, she offers a curated selection of the finest super yachts on
                the market. Whether you&apos;re looking for a sleek and contemporary vessel or a classic and
                timeless beauty, Joanna has the expertise to guide you towards the perfect match. She ensures
                that each transaction is smooth, transparent, and tailored to your specific needs and
                preferences.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#526064]">
                For those seeking the ultimate luxury getaway, Joanna&apos;s super yacht charter services are
                second to none. With access to a wide range of luxurious and meticulously maintained yachts,
                she can help you plan the perfect charter experience. Whether you desire a thrilling adventure
                in exotic destinations or a serene escape to secluded islands, Joanna&apos;s attention to detail
                and commitment to excellence ensure that every moment of your charter is unforgettable.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['New Builds', 'Pre-Owned', 'Charter', 'Lifecycle Management'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d0bc99] bg-[#f7f6f3] px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest text-[#a8865c]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative h-115 overflow-hidden rounded-2xl">
              <Image src={yachtMain} alt="Luxury super yacht at sea" fill className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Real Estate — full-bleed split with secondary image overlay */}
      <section className="px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative h-115 overflow-hidden rounded-2xl">
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
                When it comes to luxury sales, Joanna&apos;s expertise is unmatched. She offers a remarkable
                portfolio of prestigious properties, including stunning villas, opulent mansions, and
                exclusive luxury estates. Whether you&apos;re searching for a luxurious residence in a prime
                location or an investment property with high potential, Joanna&apos;s extensive network and
                market insights ensure that you find the perfect match.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#526064]">
                In addition to luxury sales, Joanna specializes in off-plan investments. She provides exclusive
                access to a wide range of off-plan developments, allowing investors to capitalize on promising
                opportunities in the ever-growing UAE real estate market. Joanna&apos;s in-depth knowledge of
                upcoming projects, market trends, and potential returns empowers her clients to make informed
                investment decisions and maximize their returns on investment.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Off-Plan', 'Waterfront', 'Landmark Developments', 'Investment Advisory'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d0bc99] bg-[#f7f6f3] px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest text-[#a8865c]"
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
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
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

      {/* Secondary aviation video — full-width banner */}
      <section className="relative flex min-h-100 items-center overflow-hidden text-white sm:min-h-115">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={charterVideo.mp4} type="video/mp4" />
          <source src={charterVideo.webm} type="video/webm" />
          <source src={charterVideo.ogv} type="video/ogg" />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-[#061111]/90 via-[#071919]/55 to-[#071919]/35" />
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

      {/* <CharterBanner /> */}
    </main>
  )
}
