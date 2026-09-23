'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="mt-8 grid gap-4 sm:grid-cols-2"
    >
      <input
        required
        aria-label="First name"
        placeholder="Name"
        className="h-12 rounded-md border border-[#e3e2de] bg-white px-4 text-sm outline-none transition-colors focus:border-[#a8865c]"
      />
      <input
        required
        aria-label="Last name"
        placeholder="Last Name"
        className="h-12 rounded-md border border-[#e3e2de] bg-white px-4 text-sm outline-none transition-colors focus:border-[#a8865c]"
      />
      <input
        required
        type="email"
        aria-label="Email"
        placeholder="Email"
        className="h-12 rounded-md border border-[#e3e2de] bg-white px-4 text-sm outline-none transition-colors focus:border-[#a8865c]"
      />
      <input
        aria-label="Telephone"
        placeholder="Telephone"
        className="h-12 rounded-md border border-[#e3e2de] bg-white px-4 text-sm outline-none transition-colors focus:border-[#a8865c]"
      />
      <textarea
        required
        aria-label="Message"
        placeholder="Message"
        className="min-h-32 resize-y rounded-md border border-[#e3e2de] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#a8865c] sm:col-span-2"
      />
      <input
        required
        aria-label="Human check"
        placeholder="Are you human? 3 + 1 ="
        className="h-12 rounded-md border border-[#e3e2de] bg-white px-4 text-sm outline-none transition-colors focus:border-[#a8865c]"
      />
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="rounded-full border border-[#192327] px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#192327] transition-all hover:bg-[#192327] hover:text-white"
        >
          Submit
        </button>
        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            role="status"
            className="mt-4 text-sm text-[#a8865c]"
          >
            Thank you — we will be in touch shortly.
          </motion.p>
        )}
      </div>
    </motion.form>
  )
}
