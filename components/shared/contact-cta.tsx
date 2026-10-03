'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Eyebrow } from './eyebrow'

export function ContactCta({
  title = 'Ready to elevate your experience?',
  subtitle = 'Get in touch',
  eyebrow = 'Joanna Savage',
}: {
  title?: string
  subtitle?: string
  eyebrow?: string
}) {
  return (
    <section className="relative overflow-hidden bg-[#0f221f] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-20">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,169,106,0.16),transparent_62%)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1.35fr_0.65fr]"
      >
        <div>
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">{title}</h2>
        </div>
        <div className="border-t border-white/15 pt-6">
          <p className="max-w-sm text-sm leading-7 text-white/65">{subtitle}</p>
          <Link
            href="/contact"
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#c9a96a] px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-[#071412] uppercase transition-colors hover:bg-[#e8d5b0]"
          >
            Request a call back
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
