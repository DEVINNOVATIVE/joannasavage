'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-efmNQUU5E5ZahvvGPgbEcdsQ2Aoq3q.jpeg'
const aboutHeroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SPDSnE0hTpqqHhDYgxZ9CGvmygsfl5.png'
const portraitImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-efmNQUU5E5ZahvvGPgbEcdsQ2Aoq3q.jpeg'
const yachtImage = 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1200&q=85'
const aviationImage = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85'
const realEstateImage = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85'
const consultingImage = 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85'
const globeImage = 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1200&q=85'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#a8865c]">{children}</p>
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 text-white sm:px-10 lg:px-20">
      <a href="#top" className="font-serif text-2xl italic tracking-tight">Joanna Savage</a>
      <div className="flex items-center gap-5">
        <a href="#contact" className="rounded-full bg-[#b49a72] px-5 py-2 text-xs font-medium text-white transition hover:bg-[#c5ad89]">Contact</a>
        <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="rounded-full p-1 hover:bg-white/10">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="absolute right-6 top-16 flex w-48 flex-col gap-4 rounded-2xl border border-white/15 bg-[#0b1818]/95 p-5 text-sm shadow-xl sm:right-10 lg:right-20"><a onClick={() => setOpen(false)} href="#about">About me</a><a onClick={() => setOpen(false)} href="/services">Services</a><a onClick={() => setOpen(false)} href="/yachts">Yachts</a><a onClick={() => setOpen(false)} href="#contact">Contact</a></nav>}
    </header>
  )
}

export function Hero() {
  return <section id="top" className="relative flex min-h-[650px] items-center justify-center overflow-hidden bg-[#122020] text-center text-white sm:min-h-[720px]"><Image src={heroImage} alt="Luxury car outside a waterfront residence" fill priority className="object-cover opacity-65" /><div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/55" /><Header /><div className="relative z-10 px-6 pt-16"><p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-[#d0bc99]">Private aviation · Super yachts · Real estate</p><h1 className="font-sans text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">Welcome</h1></div><span className="absolute bottom-6 right-6 flex size-8 items-center justify-center rounded-full border border-white/60 text-xs">✧</span></section>
}

export function AboutSection() {
  return <section id="about" className="bg-[#f7f6f3] px-6 py-24 sm:px-10 lg:px-20 lg:py-32"><div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24"><div className="relative mx-auto aspect-[0.78] w-full max-w-[420px] overflow-hidden rounded-md"><Image src={portraitImage} alt="Joanna Savage in a city residence" fill className="object-cover grayscale" /></div><div className="max-w-xl"><Eyebrow>Redefining luxury with expertise & philanthropy</Eyebrow><h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#192327] sm:text-4xl">About Me</h2><div className="mt-7 space-y-4 text-sm leading-7 text-[#526064]"><p>Joanna is a highly successful and experienced luxury sales broker with an impressive career that spans across Superyachts, Real Estate, Luxury Performance Yachts and Private Aviation. Making her a trusted advisor to many high-profile clients.</p><p>She held a number of senior positions within globally recognised brands and family offices to include; Lamborghini, Harrods and Knight Frank, before stepping down to consult privately.</p><p>Besides her impressive track record, Joanna also has a deep vested interest in philanthropic efforts that support the 17 sustainable development goals set by the United Nations.</p></div></div></div></section>
}

export function CharterBanner() {
  return <section className="relative flex min-h-[330px] items-center justify-center overflow-hidden text-center text-white"><Image src={aboutHeroImage} alt="A luxury yacht viewed from above" fill className="object-cover" /><div className="absolute inset-0 bg-[#071919]/60" /><div className="relative z-10"><Eyebrow>Working exclusively with Sunseeker Global</Eyebrow><h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Bespoke Luxury Charters</h2><p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#dac9ac]">Aviation · Yachts · Property</p></div></section>
}

const services = [{ title: 'Private Aviation', image: aviationImage, body: 'Seamless, discreet travel solutions tailored to your world.' }, { title: 'Super Yachts', image: yachtImage, body: 'Exceptional vessels and unforgettable journeys across the globe.' }, { title: 'Real Estate', image: realEstateImage, body: 'Distinctive properties for a life less ordinary.' }]

export function ServicesSection() {
  return <section id="services" className="bg-[#f7f6f3] px-6 py-24 sm:px-10 lg:px-20"><div className="mx-auto max-w-6xl"><Eyebrow>Elevate the extraordinary</Eyebrow><h2 className="mt-3 text-3xl font-semibold text-[#192327]">Services</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{services.map((service) => <article key={service.title} className="group relative min-h-[310px] overflow-hidden rounded-md text-white shadow-lg"><Image src={service.image} alt={service.title} fill className="object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" /><div className="absolute inset-x-6 bottom-6"><h3 className="text-lg font-semibold uppercase">{service.title}</h3><p className="mt-2 max-w-[220px] text-xs leading-5 text-white/80">{service.body}</p></div></article>)}</div><div className="mt-6 flex justify-end"><a href="#contact" className="rounded-full border border-[#192327] px-5 py-2 text-xs text-[#192327] transition hover:bg-[#192327] hover:text-white">View all services</a></div></div></section>
}

export function ConsultingSection() {
  return <section className="bg-[#f7f6f3] px-6 pb-24 sm:px-10 lg:px-20"><div className="mx-auto max-w-6xl bg-white p-6 sm:p-10 lg:p-14"><div className="grid items-center gap-12 lg:grid-cols-2"><div className="relative aspect-[1.7] overflow-hidden rounded-md"><Image src={consultingImage} alt="Artificial intelligence and human creativity" fill className="object-cover" /></div><div><Eyebrow>Future-forward consulting</Eyebrow><h2 className="mt-3 text-2xl font-semibold text-[#192327] sm:text-3xl">Making the unbelievable - believable</h2><p className="mt-5 text-sm leading-7 text-[#526064]">With an eye for the extraordinary, we bring clarity, strategy and access to ambitious ideas. From concept to execution, every detail is considered and every opportunity is made meaningful.</p><p className="mt-4 text-sm leading-7 text-[#526064]">Our business development and project consulting service connects the right people, places and possibilities.</p></div></div><div className="mt-16 grid items-center gap-12 lg:grid-cols-2"><div><Eyebrow>Strategic growth & global reach</Eyebrow><h2 className="mt-3 text-2xl font-semibold text-[#192327] sm:text-3xl">Business development & project consulting</h2><p className="mt-5 text-sm leading-7 text-[#526064]">A discreet, hands-on approach to building partnerships, refining propositions and taking exceptional projects to the next level.</p></div><div className="relative aspect-[1.35] overflow-hidden rounded-md"><Image src={globeImage} alt="Globe representing international business" fill className="object-cover" /></div></div><div className="mt-16 text-center"><h2 className="text-2xl font-semibold text-[#192327]">Exclusive Affiliations</h2><div className="mt-10 grid grid-cols-2 gap-8 font-serif text-2xl italic text-[#192327] sm:grid-cols-5"><span>Sunseeker</span><span>lamborghini</span><span>Gaya</span><span>Harrods</span><span>SDG</span></div></div></div></section>
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  return <section id="contact" className="bg-[#f7f6f3] px-6 py-24 sm:px-10 lg:px-20"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.5fr]"><div><Eyebrow>Joanna Savage</Eyebrow><h2 className="mt-4 text-3xl font-semibold text-[#192327]">Get in touch</h2><p className="mt-8 text-[10px] uppercase tracking-[0.22em] text-[#a8865c]">Info and appointments</p><a href="tel:+97156233010" className="mt-2 block text-sm text-[#526064]">+971 56 233 0110</a></div><div><h2 className="text-2xl font-semibold text-[#192327]">Request a call back</h2><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="mt-6 grid gap-4 sm:grid-cols-2"><input required aria-label="First name" placeholder="Name" className="h-12 rounded-md border border-[#e3e2de] bg-white px-4 text-sm outline-none focus:border-[#a8865c]" /><input required aria-label="Last name" placeholder="Last Name" className="h-12 rounded-md border border-[#e3e2de] bg-white px-4 text-sm outline-none focus:border-[#a8865c]" /><input required type="email" aria-label="Email" placeholder="Email" className="h-12 rounded-md border border-[#e3e2de] bg-white px-4 text-sm outline-none focus:border-[#a8865c]" /><input aria-label="Telephone" placeholder="Telephone" className="h-12 rounded-md border border-[#e3e2de] bg-white px-4 text-sm outline-none focus:border-[#a8865c]" /><textarea required aria-label="Message" placeholder="Message" className="min-h-32 resize-y rounded-md border border-[#e3e2de] bg-white px-4 py-3 text-sm outline-none focus:border-[#a8865c] sm:col-span-2" /><input required aria-label="Human check" placeholder="Are you human? 3 + 1 =" className="h-12 rounded-md border border-[#e3e2de] bg-white px-4 text-sm outline-none focus:border-[#a8865c]" /><div className="sm:col-span-2"><button type="submit" className="rounded-full border border-[#192327] px-6 py-3 text-xs font-medium text-[#192327] transition hover:bg-[#192327] hover:text-white">Submit</button>{submitted && <p role="status" className="mt-3 text-sm text-[#a8865c]">Thank you — we will be in touch shortly.</p>}</div></form></div></div></section>
}

export function JoannaSite() {
  return <main className="bg-[#f7f6f3] text-[#192327]"><Hero /><AboutSection /><CharterBanner /><ServicesSection /><ConsultingSection /><ContactSection /></main>
}
