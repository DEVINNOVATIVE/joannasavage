'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

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
      <FormField label="Name" required />
      <FormField label="Last Name" required />
      <FormField label="Email" type="email" required />
      <FormField label="Telephone" />
      <FormField label="Message" textarea required className="sm:col-span-2" />
      <FormField label="Are you human? 3 + 1 =" required />

      <div className="sm:col-span-2">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group inline-flex items-center gap-2 rounded-full bg-[#0b1818] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#172727]"
        >
          {submitted ? 'Sent' : 'Send message'}
          {submitted ? (
            <Check className="size-4 text-[#d0bc99]" />
          ) : (
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </motion.button>
        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            role="status"
            className="mt-4 flex items-center gap-2 text-sm text-[#a8865c]"
          >
            <Check className="size-4" />
            Thank you — we will be in touch shortly.
          </motion.p>
        )}
      </div>
    </motion.form>
  )
}

function FormField({
  label,
  type = 'text',
  required = false,
  textarea = false,
  className = '',
}: {
  label: string
  type?: string
  required?: boolean
  textarea?: boolean
  className?: string
}) {
  const [focused, setFocused] = useState(false)

  const baseClass =
    'w-full rounded-xl border bg-[#f7f6f3] px-4 text-sm text-[#192327] outline-none transition-all duration-200'
  const borderClass = focused
    ? 'border-[#d0bc99] bg-white shadow-[0_0_0_3px_rgba(208,188,153,0.15)]'
    : 'border-[#e3e2de]'

  return (
    <div className={`relative ${className}`}>
      <label className="pointer-events-none absolute left-4 transition-all duration-200">
        <span
          className={`block ${
            focused
              ? '-translate-y-2.5 text-[10px] uppercase tracking-[0.15em] text-[#a8865c] bg-white px-1'
              : 'text-sm text-[#9ca3af] pt-3.5'
          }`}
        >
          {label}
          {required && <span className="text-[#c97b7b]"> *</span>}
        </span>
      </label>
      {textarea ? (
        <textarea
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={(e) => setFocused(e.target.value !== '')}
          className={`${baseClass} ${borderClass} min-h-36 resize-y pt-6`}
        />
      ) : (
        <input
          type={type}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={(e) => setFocused(e.target.value !== '')}
          className={`${baseClass} ${borderClass} h-14`}
        />
      )}
    </div>
  )
}
