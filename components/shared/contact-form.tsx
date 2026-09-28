'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Loader2, AlertCircle } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm({ selectedService }: { selectedService?: string }) {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: String(formData.get('firstName') || ''),
      lastName: String(formData.get('lastName') || ''),
      email: String(formData.get('email') || ''),
      telephone: String(formData.get('telephone') || ''),
      message: String(formData.get('message') || ''),
      humanCheck: String(formData.get('humanCheck') || ''),
      serviceType: selectedService || 'General Enquiry',
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong')
      }

      setState('success')
      formRef.current?.reset()
    } catch (err) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message')
    }
  }

  return (
    <motion.form
      ref={formRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="mt-8 grid gap-4 sm:grid-cols-2"
    >
      <FormField name="firstName" label="Name" required />
      <FormField name="lastName" label="Last Name" required />
      <FormField name="email" label="Email" type="email" required />
      <FormField name="telephone" label="Telephone" />
      <FormField name="message" label="Message" textarea required className="sm:col-span-2" />
      <FormField name="humanCheck" label="Are you human? 3 + 1 =" required />

      <div className="sm:col-span-2">
        <motion.button
          type="submit"
          disabled={state === 'loading' || state === 'success'}
          whileHover={state === 'idle' ? { scale: 1.02 } : undefined}
          whileTap={state === 'idle' ? { scale: 0.98 } : undefined}
          className="group inline-flex items-center gap-2 rounded-full bg-[#0b1818] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#172727] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === 'loading' && (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending...
            </>
          )}
          {state === 'success' && (
            <>
              <Check className="size-4 text-[#d0bc99]" />
              Sent
            </>
          )}
          {state === 'error' && (
            <>
              <AlertCircle className="size-4 text-[#c97b7b]" />
              Try again
            </>
          )}
          {state === 'idle' && (
            <>
              Send message
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </motion.button>

        {state === 'success' && (
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

        {state === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
            className="mt-4 flex items-center gap-2 text-sm text-[#c97b7b]"
          >
            <AlertCircle className="size-4" />
            {errorMsg || 'Something went wrong. Please try again or call us directly.'}
          </motion.p>
        )}
      </div>
    </motion.form>
  )
}

function FormField({
  name,
  label,
  type = 'text',
  required = false,
  textarea = false,
  className = '',
}: {
  name: string
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
          name={name}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={(e) => setFocused(e.target.value !== '')}
          className={`${baseClass} ${borderClass} min-h-36 resize-y pt-6`}
        />
      ) : (
        <input
          name={name}
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
