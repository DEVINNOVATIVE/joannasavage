'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Eyebrow } from '../shared/eyebrow'
import { Reveal } from '../shared/reveal'

const portraitImage = '/assets/joanna-savage-black.jpg'

export function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-[#f7f6f3] px-6 py-24 sm:px-10 lg:px-20 lg:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <Reveal y={30} className="lg:order-2">
          <div className="relative mx-auto w-full max-w-105 pl-3 pt-3">
            <div className="absolute left-0 top-0 h-28 w-28 border-l border-t border-[#b49a72]" />
            <div className="relative aspect-[0.78] overflow-hidden rounded-md bg-[#192327]">
            <Image
              src={portraitImage}
              alt="Joanna Savage in a city residence"
              fill
              className="object-cover grayscale transition-transform duration-700 hover:scale-105"
            />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="absolute -bottom-5 -right-3 bg-[#b49a72] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white shadow-lg sm:-right-6"
            >
              Luxury with purpose
            </motion.div>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="lg:order-1">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <Eyebrow>Pioneering luxury with expertise &amp; philanthropy</Eyebrow>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-4xl font-semibold leading-none tracking-tight text-[#192327] sm:text-5xl"
            >
              About Me
            </motion.h2>
            <div className="mt-8 space-y-5 text-sm leading-7 text-[#526064] sm:text-[15px]">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Joanna is a highly successful and experienced luxury sales broker with an impressive career
                that spans across Supercars, Real Estate, Luxury Performance Yachts and Private Aviation,
                making her a trusted advisor to many high-profile clients.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.42 }}
              >
                Prior to beginning her private consulting work, she held numerous key leadership roles
                within globally renowned brands to include Lamborghini, Harrods and Knight Frank as well
                as global VC&apos;s and Family Offices.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.54 }}
              >
                Besides her impressive track record, Joanna has a deep vested interest in philanthropic
                efforts that support the 17 sustainable development goals set by the United Nations;
                serving as Chief Commercial Officer of the SDG Impact Fund as well as sitting on a number
                of Advisory Boards, globally.
              </motion.p>
            </div>
            <motion.div
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 h-px w-24 bg-[#b49a72]"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
