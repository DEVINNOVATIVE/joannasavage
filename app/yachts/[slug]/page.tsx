import { notFound } from 'next/navigation'
import { getYacht, YachtDetailPage } from '@/components/yacht-detail'

export function generateStaticParams() {
  return ['sunseeker-74', 'sunseeker-65', 'sunseeker-manhattan-68', 'sunseeker-100'].map((slug) => ({ slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const yacht = getYacht(slug)
  if (!yacht) notFound()
  return <YachtDetailPage yacht={yacht} />
}
