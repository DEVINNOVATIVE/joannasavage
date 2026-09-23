import { Hero } from './home/hero'
import { AboutSection } from './home/about-section'
import { CharterBanner } from './home/charter-banner'
import { ServicesSection } from './home/services-section'
import { ConsultingSection } from './home/consulting-section'
import { ContactCta } from './shared/contact-cta'
import { SiteFooter } from './shared/site-footer'

export function JoannaSite() {
  return (
    <main className="bg-[#f7f6f3] text-[#192327]">
      <Hero />
      <AboutSection />
      <CharterBanner />
      <ServicesSection />
      <ConsultingSection />
      <ContactCta
        title="Let's make the unbelievable — believable"
        subtitle="Reach out to discuss private aviation, super yachts, real estate or consulting."
      />
      <SiteFooter />
    </main>
  )
}
