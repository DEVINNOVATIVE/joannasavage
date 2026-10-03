'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
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
  { label: 'Email', value: 'joanna@joannasavage.com', href: 'mailto:joanna@joannasavage.com' },
  { label: 'Location', value: 'Palm Jumeirah, Dubai - UAE', href: null },
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
    <main className="bg-[#f3efe6] text-[#071412]">
      <VideoHero
        title="Let's begin"
        eyebrow="Private aviation · Super yachts · Real estate"
        description="We look forward to hearing from you — every enquiry is handled personally and in confidence."
      />

      <section className="border-b border-[#e7e1d4] bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Reveal>
            <div>
              <Eyebrow>A considered first step</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">
                Let&apos;s make the extraordinary feel effortless.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-lg text-[15px] leading-8 text-[#5d6668]">
              Every enquiry begins with a conversation. Tell us what you are looking for and we will
              connect you with considered advice, trusted access and a clear next step.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-[#071412] text-white shadow-[0_24px_70px_rgba(7,20,18,0.18)]">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/assets/joanna-savage-black.jpg"
                  alt="Joanna Savage"
                  fill
                  className="object-cover object-[center_28%] grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071412] via-[#071412]/20 to-transparent" />
                <p className="absolute bottom-5 left-8 text-[11px] tracking-[0.25em] text-[#c9a96a] uppercase">
                  Private advisory
                </p>
              </div>
              <div className="p-8 sm:p-10">
                <h2 className="font-display text-4xl">Request a call back</h2>
                <p className="mt-5 text-sm leading-7 text-white/60">
                  Whether you are looking for a private jet, a super yacht, an exclusive property or
                  strategic consulting — Joanna and her team are ready to help.
                </p>
                <div className="mt-10 space-y-6">
                  {contactDetails.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] text-[#c9a96a] uppercase">
                        {item.label === 'Phone' && <Phone className="size-3.5" />}
                        {item.label === 'Email' && <Mail className="size-3.5" />}
                        {item.label === 'Location' && <MapPin className="size-3.5" />}
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} className="mt-1.5 block text-sm text-white/80 transition-colors hover:text-white">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1.5 text-sm text-white/80">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-10 border-t border-white/10 pt-6">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-0.5 size-4 text-[#c9a96a]" />
                    <div>
                      <p className="text-sm font-medium text-white">A response within 24 hours</p>
                      <p className="mt-1 text-xs leading-5 text-white/50">Discreet, personal and tailored to your enquiry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(7,20,18,0.08)] sm:p-10">
              <h2 className="font-display text-4xl">Send a message</h2>
              <p className="mt-2 text-sm text-[#5d6668]">Fill in the form below and we&apos;ll get back to you within 24 hours.</p>
              <div className="mt-6">
                <p className="text-[11px] tracking-[0.22em] text-[#c9a96a] uppercase">I&apos;m interested in</p>
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

      <section className="border-y border-[#e7e1d4] bg-white px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div>
              <Eyebrow>From enquiry to insight</Eyebrow>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">What happens next</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#5d6668]">
                A simple, considered process designed around your priorities and your time.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              ['01', 'Share your brief', 'Tell us what you are looking for and when you would like to move.'],
              ['02', 'Personal response', 'We will review your enquiry and come back with the right questions.'],
              ['03', 'A clear direction', 'Together, we shape the next step with discretion and clarity.'],
            ].map(([number, title, description], index) => (
              <Reveal key={number} delay={index * 0.1}>
                <div className="border-t border-[#c9a96a] pt-5">
                  <p className="font-display text-3xl italic text-[#c9a96a]">{number}</p>
                  <h3 className="mt-4 text-sm font-semibold tracking-[0.08em] uppercase">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5d6668]">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Trusted relationships</Eyebrow>
                <h2 className="mt-3 font-display text-4xl tracking-tight">Built on experience</h2>
              </div>
              <a
                href="mailto:joanna@joannasavage.com"
                className="group inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] text-[#071412] uppercase transition-colors hover:text-[#c9a96a]"
              >
                Start a conversation
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-10 opacity-65 sm:grid-cols-3 lg:grid-cols-5">
            {affiliationLogos.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <div className="flex h-16 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0">
                  <Image src={item.logo} alt={item.name} width={150} height={64} className="max-h-12 w-auto object-contain" />
                </div>
              </Reveal>
            ))}
          </div>
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
      className={`rounded-full border px-4 py-2 text-[11px] font-medium tracking-[0.1em] uppercase transition-all ${
        selected
          ? 'border-[#071412] bg-[#071412] text-white'
          : 'border-[#e7e1d4] bg-[#f3efe6] text-[#5d6668] hover:border-[#c9a96a] hover:text-[#c9a96a]'
      }`}
    >
      {label}
    </motion.button>
  )
}
