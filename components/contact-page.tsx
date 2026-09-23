'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { VideoHero } from './shared/video-hero'
import { SiteFooter } from './shared/site-footer'
import { Eyebrow } from './shared/eyebrow'
import { ContactForm } from './shared/contact-form'

const affiliationLogos = [
  { name: 'Sunseeker', logo: '/assets/sunskeer.png' },
  { name: 'Lamborghini', logo: '/assets/lamborghini.png' },
  { name: 'Gaya', logo: '/assets/gayo.png' },
  { name: 'Harrods', logo: '/assets/harrods.png' },
  { name: 'SDG', logo: '/assets/impact-funds.png' },
]

export function ContactPage() {
  return (
    <main className="bg-[#f7f6f3] text-[#192327]">
      <VideoHero title="Get in touch" description="We look forward to hearing from you." />

      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.5fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Joanna Savage</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Request a call back</h2>
            <p className="mt-6 text-sm leading-7 text-[#526064]">
              Whether you are looking for a private jet, a super yacht, an exclusive property or strategic
              consulting — Joanna and her team are ready to help.
            </p>
            <div className="mt-10 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#a8865c]">Phone</p>
                <a href="tel:+971562330110" className="mt-1 block text-sm text-[#526064] transition-colors hover:text-[#192327]">
                  +971 56 233 0110
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#a8865c]">Email</p>
                <a href="mailto:info@joannasavage.com" className="mt-1 block text-sm text-[#526064] transition-colors hover:text-[#192327]">
                  info@joannasavage.com
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#a8865c]">Affiliations</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {affiliationLogos.map((item) => (
                    <Image
                      key={item.name}
                      src={item.logo}
                      alt={item.name}
                      width={64}
                      height={32}
                      className="h-7 w-auto object-contain opacity-60 transition-opacity hover:opacity-100"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <div>
            <h2 className="text-2xl font-semibold text-[#192327]">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
