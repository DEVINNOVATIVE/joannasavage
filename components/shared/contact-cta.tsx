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
    <section className="bg-linear-to-br from-[#081414] via-[#0b1818] to-[#172727] px-6 py-24 text-white sm:px-10 sm:py-28 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24"
      >
        <div>
         
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-3xl text-4xl font-light leading-[0.98] tracking-tight sm:text-6xl"
          >
            {title}
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/20 pt-6"
        >
          <p className="max-w-sm text-sm leading-7 text-white/65">{subtitle}</p>
          <Link
            href="/contact"
            className="group mt-7 inline-flex items-center gap-3 border-b border-[#d0bc99] pb-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:text-[#d0bc99]"
          >
            Request a call back
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
