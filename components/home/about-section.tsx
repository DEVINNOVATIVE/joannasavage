'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Eyebrow } from '../shared/eyebrow'
import { Reveal } from '../shared/reveal'

const portraitImage = '/assets/joanna-savage-black.jpg'

export function AboutSection() {
  return (
    <section id="first_section" className="overflow-hidden bg-[#f3efe6] px-6 py-24 sm:px-10 lg:px-20 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <Reveal delay={0.1}>
          <div className="max-w-xl">
            <Eyebrow>Pioneering luxury with expertise &amp; philanthropy</Eyebrow>
            <h2 className="mt-5 font-display text-5xl leading-none text-[#071412] sm:text-6xl">About Me</h2>
            <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#5d6668]">
              <p>
                Joanna is a highly successful and experienced luxury sales broker with an impressive career
                that spans across Supercars, Real Estate, Luxury Performance Yachts and Private Aviation,
                making her a trusted advisor to many high-profile clients.
              </p>
              <p>
                Prior to beginning her private consulting work, she held numerous key leadership roles
                within globally renowned brands to include Lamborghini, Harrods and Knight Frank as well
                as global VC&apos;s and Family Offices.
              </p>
              <p>
                Besides her impressive track record, Joanna has a deep vested interest in philanthropic
                efforts that support the 17 sustainable development goals set by the United Nations;
                serving as Chief Commercial Officer of the SDG Impact Fund as well as sitting on a number
                of Advisory Boards, globally.
              </p>
            </div>
            <div className="gold-rule mt-10" />
          </div>
        </Reveal>
        <Reveal y={30}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[2rem] border-l border-t border-[#c9a96a]" />
            <div className="relative aspect-[0.78] overflow-hidden rounded-[2rem] bg-[#071412] shadow-[0_30px_80px_rgba(7,20,18,0.18)]">
              <Image
                src={portraitImage}
                alt="Joanna Savage in a city residence"
                fill
                className="object-cover grayscale transition-transform duration-700 hover:scale-105 hover:grayscale-0"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="absolute -bottom-5 right-6 rounded-full bg-[#c9a96a] px-6 py-3 text-[10px] font-semibold tracking-[0.22em] text-[#071412] uppercase shadow-lg"
            >
              Luxury with purpose
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
