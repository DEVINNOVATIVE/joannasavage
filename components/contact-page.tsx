'use client'

import { motion } from 'framer-motion'
import { SiteHeader } from './shared/site-header'
import { SiteFooter } from './shared/site-footer'
import { Eyebrow } from './shared/eyebrow'
import { ContactForm } from './shared/contact-form'

const heroImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SPDSnE0hTpqqHhDYgxZ9CGvmygsfl5.png'

export function ContactPage() {
  return (
    <main className="bg-[#f7f6f3] text-[#192327]">
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden text-center text-white">
        <img
          src={heroImage}
          alt="Luxury yacht from above"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
        <SiteHeader />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 px-6"
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-[#d0bc99]">
            Private aviation · Super yachts · Real estate
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Get in touch</h1>
          <p className="mt-4 text-sm text-white/70">
            We look forward to hearing from you.
          </p>
        </motion.div>
      </section>

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
                <div className="mt-2 flex flex-wrap gap-3 font-serif text-sm italic text-[#192327]/70">
                  <span>Sunseeker</span>
                  <span>Lamborghini</span>
                  <span>Harrods</span>
                  <span>Gaya</span>
                  <span>SDG</span>
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
