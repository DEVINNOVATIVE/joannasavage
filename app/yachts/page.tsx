import { YachtsPage } from '@/components/yachts-page'
import { ContactCta } from '@/components/shared/contact-cta'
import { SiteFooter } from '@/components/shared/site-footer'

export const metadata = {
  title: 'Yachts for Sale | Joanna Savage',
  description: 'Explore new and used luxury yachts exclusively for sale with Joanna Savage.',
}

export default function Page() {
  return (
    <main>
      <YachtsPage />
      <ContactCta
        title="Found a yacht you love?"
        subtitle="Get in touch to arrange a viewing or learn more about any vessel."
        eyebrow="Luxury yachts"
      />
      <SiteFooter />
    </main>
  )
}
