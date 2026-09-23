import { ContactCta } from '../shared/contact-cta'
import { SiteFooter } from '../shared/site-footer'
import { YachtHero, YachtSpecs } from './yacht-sections'
import type { Yacht } from './yacht-data'

export function YachtDetailPage({ yacht }: { yacht: Yacht }) {
  return (
    <main className="bg-white text-[#192327]">
      <YachtHero yacht={yacht} />
      <YachtSpecs yacht={yacht} />
      <ContactCta
        title="Enquire about this yacht"
        subtitle="Interested in this vessel? Get in touch to arrange a viewing or request more details."
        eyebrow="Luxury yachts"
      />
      <SiteFooter />
    </main>
  )
}
