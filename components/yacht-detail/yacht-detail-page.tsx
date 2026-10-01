import { SiteFooter } from '../shared/site-footer'
import { YachtHero, YachtSpecs,YachtEnquiry  } from './yacht-sections'
import type { Yacht } from './yacht-data'

export function YachtDetailPage({ yacht }: { yacht: Yacht }) {
  return (
    <main className="text-[#192327]">
      <YachtHero yacht={yacht} />
      <YachtSpecs yacht={yacht} />
      <YachtEnquiry yacht={yacht} />
      <SiteFooter />
    </main>
  )
}
