'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { VideoHero } from './shared/video-hero'
import { SiteFooter } from './shared/site-footer'
import { Eyebrow } from './shared/eyebrow'
import { Reveal } from './shared/reveal'
import { ContactForm } from './shared/contact-form'

const affiliationLogos = [
  { name: 'Sunseeker', logo: '/assets/sunskeer.png' },
  { name: 'Lamborghini', logo: '/assets/lamborghini.png' },
  { name: 'Gaya', logo: '/assets/gayo.png' },
  { name: 'Harrods', logo: '/assets/harrods.png' },
  { name: 'SDG', logo: '/assets/impact-funds.png' },
]

const contactDetails = [
  { label: 'Phone', value: '+971 56 233 0110', href: 'tel:+971562330110' },
  { label: 'Email', value: 'info@joannasavage.com', href: 'mailto:info@joannasavage.com' },
  { label: 'Location', value: 'Dubai, UAE', href: null },
]

const serviceOptions = [
  'Private Aviation',
  'Super Yachts',
  'Real Estate',
  'Business Consulting',
  'General Enquiry',
]

export function ContactPage() {
  const [selectedService, setSelectedService] = useState('General Enquiry')

  return (
    <main className="bg-[#f7f6f3] text-[#192327]">
      <VideoHero
        title="Get in touch"
        eyebrow="Private aviation · Super yachts · Real estate"
        description="We look forward to hearing from you."
      />

      {/* Contact section */}
      <section className="px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Left: Contact info panel */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b1818] to-[#172727] p-8 text-white sm:p-10">
              {/* Decorative image */}
              <div className="absolute -right-12 -top-12 h-48 w-48 opacity-10">
                <Image
                  src="/assets/js logo.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              <Eyebrow>Joanna Savage</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Request a call back</h2>
              <p className="mt-5 text-sm leading-7 text-white/60">
                Whether you are looking for a private jet, a super yacht, an exclusive property or
                strategic consulting — Joanna and her team are ready to help.
              </p>

              <div className="mt-10 space-y-6">
                {contactDetails.map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#d0bc99]">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1.5 block text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-sm text-white/80">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Affiliations */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d0bc99]">Affiliations</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  {affiliationLogos.map((item) => (
                    <Image
                      key={item.name}
                      src={item.logo}
                      alt={item.name}
                      width={64}
                      height={32}
                      className="h-7 w-auto object-contain opacity-50 transition-opacity hover:opacity-100"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Form panel */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-white p-8 shadow-lg sm:p-10">
              <h2 className="text-2xl font-semibold text-[#192327]">Send a message</h2>
              <p className="mt-2 text-sm text-[#526064]">
                Fill in the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {/* Service type pills */}
              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#a8865c]">I&apos;m interested in</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {serviceOptions.map((option) => (
                    <ServicePill
                      key={option}
                      label={option}
                      selected={selectedService === option}
                      onClick={() => setSelectedService(option)}
                    />
                  ))}
                </div>
              </div>

              <ContactForm selectedService={selectedService} />
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

function ServicePill({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className={`rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.1em] transition-all ${
        selected
          ? 'border-[#d0bc99] bg-[#0b1818] text-white'
          : 'border-[#e3e2de] bg-[#f7f6f3] text-[#526064] hover:border-[#d0bc99] hover:bg-white hover:text-[#a8865c]'
      }`}
    >
      {label}
    </motion.button>
  )
}
