import { ServicesPage } from '@/components/services-page'
import { ContactCta } from '@/components/shared/contact-cta'
import { SiteFooter } from '@/components/shared/site-footer'

export const metadata = {
  title: 'Services | Joanna Savage',
  description: 'Private aviation, super yachts and luxury real estate services by Joanna Savage.',
}

export default function Page() {
  return (
    <main>
      <ServicesPage />
      <ContactCta
        title="Ready to explore your options?"
        subtitle="From private jets to super yachts and exclusive properties — let's find what's right for you."
      />
      <SiteFooter />
    </main>
  )
}
