'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
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
    <section className="bg-[#0b1818] px-6 py-24 text-center text-white sm:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl"
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-4 text-sm leading-7 text-white/60">{subtitle}</p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-[#b49a72] px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-all hover:bg-[#c5ad89] hover:shadow-lg"
        >
          Request a call back
        </Link>
      </motion.div>
    </section>
  )
}
