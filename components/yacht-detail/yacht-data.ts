export type YachtSpec = readonly [string, string]

export type Yacht = {
  title: string
  subtitle: string
  location: string
  year: string
  length: string
  price: string
  badge: string
  hero: string
  gallery: readonly string[]
  description: string
  specs: readonly YachtSpec[]
  highlights: readonly string[]
}

const yachts = {
  'sunseeker-74': {
    title: 'SUNSEEKER 74 SPORT YACHT',
    subtitle: 'Sport Yacht',
    location: 'Dubai, UAE',
    year: '2023',
    length: '20.48m',
    price: 'POA',
    badge: 'Brand New',
    hero: '/assets/Sunseeker-74-Sport.jpg',
    gallery: [
      '/assets/Sunseeker-74-Sport.jpg',
      '/assets/luxury-yacht-.jpg',
      '/assets/Yacht.jpeg',
    ],
    description:
      'The cues are all there. The low profile, the sleek yet elegant flowing lines, and beautiful craftsmanship complement cutting-edge technology and sophisticated interior finishes. The perfect yacht for socialising with guests, the 74 Sport Yacht has ample entertaining space, comfortable seating and generous storage for unforgettable days on the water.',
    highlights: [
      'Twin Volvo IPS 1200 engines',
      'Ample entertaining deck space',
      'Sophisticated interior finishes',
      'State-of-the-art navigation',
    ],
    specs: [
      ['Manufacturer', 'Sunseeker'],
      ['Model', '74 Sport Yacht'],
      ['Built', '2023'],
      ['LOA (ft/m)', '74.1 / 22.6'],
      ['Beam (ft/m)', '19.7 / 6.0'],
      ['Draft (ft/m)', '3.6 / 1.1'],
      ['Displacement (kg)', '37810'],
      ['Propulsion', 'PODS'],
      ['Engine', 'TWIN VOLVO IPS 1200 (2 × 900PS)'],
      ['Generator', '13.5 KW @ 50HZ – 13.5 KW @ 60HZ'],
      ['Fuel Capacity (litres)', '800'],
      ['Full Speed (knots)', '35'],
      ['Cruise Speed (knots)', '28'],
      ['Crew Cabins', '1'],
    ],
  },
  'sunseeker-65': {
    title: 'SUNSEEKER 65 SPORT YACHT',
    subtitle: 'Sport Yacht',
    location: 'Dubai, UAE',
    year: '2023',
    length: '20.48m',
    price: 'POA',
    badge: 'Brand New',
    hero: '/assets/Sunseeker-65-Sport.jpg',
    gallery: [
      '/assets/Sunseeker-65-Sport.jpg',
      '/assets/luxury-yacht-.jpg',
      '/assets/Yacht.jpeg',
    ],
    description:
      'The all-new multi-award winning 65 Sport Yacht joins an expanding range of next-generation yachts. With an open-plan layout, generous entertaining areas and seamless access to the water, every detail has been designed for effortless cruising and memorable adventures.',
    highlights: [
      'Multi-award winning design',
      'Open-plan main deck layout',
      'Seamless water access',
      'Twin Volvo IPS 1350 engines',
    ],
    specs: [
      ['Manufacturer', 'Sunseeker'],
      ['Model', '65 Sport Yacht'],
      ['Built', '2023'],
      ['LOA (ft/m)', '67.2 / 20.48'],
      ['Beam (ft/m)', '16.8 / 5.12'],
      ['Draft (ft/m)', '4.2 / 1.28'],
      ['Displacement (kg)', '37810'],
      ['Propulsion', 'PODS'],
      ['Engine', 'TWIN VOLVO IPS 1350 (2 × 1000PS)'],
      ['Generator', '13.5 KW @ 50HZ – 13.5 KW @ 60HZ'],
      ['Fuel Capacity (litres)', '800'],
      ['Full Speed (knots)', '35'],
      ['Cruise Speed (knots)', '28'],
      ['Crew Cabins', '1'],
    ],
  },
  'sunseeker-manhattan-68': {
    title: 'SUNSEEKER MANHATTAN 68',
    subtitle: 'Motor Yacht',
    location: 'Dubai, UAE',
    year: '2023',
    length: '20.63m',
    price: 'POA',
    badge: 'Brand New',
    hero: '/assets/SUNSEEKER-MANHATTAN-68-1.jpg',
    gallery: [
      '/assets/SUNSEEKER-MANHATTAN-68-1.jpg',
      '/assets/luxury-yacht-.jpg',
      '/assets/Yacht.jpeg',
    ],
    description:
      'Built upon an exceptional family of award-winning Manhattan models, the Manhattan 68 offers an extraordinary level of comfort and luxury. Generous social spaces, an expansive main salon and beautifully considered interiors make this yacht ideal for long weekends and extended cruising.',
    highlights: [
      'Award-winning Manhattan lineage',
      'Expansive main salon',
      'Two crew cabins',
      'Twin MAN V8 1000 engines',
    ],
    specs: [
      ['Manufacturer', 'Sunseeker'],
      ['Model', 'Manhattan 68'],
      ['Built', '2023'],
      ['LOA (ft/m)', '67.7 / 20.63'],
      ['Beam (ft/m)', '17.3 / 5.27'],
      ['Draft (ft/m)', '5.4 / 1.65'],
      ['Displacement (kg)', '37400'],
      ['Propulsion', 'PODS'],
      ['Engine', 'TWIN MAN V8 1000 (2 × 1000PS)'],
      ['Generator', '17.5KW@50HZ – 21.5KW@50HZ'],
      ['Fuel Capacity (litres)', '1200'],
      ['Full Speed (knots)', '32'],
      ['Cruise Speed (knots)', '24'],
      ['Crew Cabins', '2'],
    ],
  },
  'sunseeker-100': {
    title: '2023 SUNSEEKER 100',
    subtitle: 'Super Yacht',
    location: 'London, UK',
    year: '2023',
    length: '29.6m',
    price: 'POA',
    badge: 'Brand New',
    hero: '/assets/Sunseeker-100.jpg',
    gallery: [
      '/assets/Sunseeker-100.jpg',
      '/assets/luxury-yacht-.jpg',
      '/assets/Yacht.jpeg',
    ],
    description:
      'The Sunseeker 100 Yacht is set to surprise and delight at every turn. Elegant, powerful lines flow around sublime architecture. A secluded private terrace, sunbathing hideaways, and generous open-plan interiors create an exceptional experience at sea.',
    highlights: [
      'Private terrace & sunbathing deck',
      'Five crew cabins',
      'Twin MTU shaft drives',
      'Open-plan luxury interiors',
    ],
    specs: [
      ['Manufacturer', 'Sunseeker'],
      ['Model', '100 Yacht'],
      ['Built', '2023'],
      ['LOA (ft/m)', '97.1 / 29.6'],
      ['Beam (ft/m)', '22.8 / 6.95'],
      ['Draft (ft/m)', '6.1 / 1.86'],
      ['Displacement (kg)', '94119'],
      ['Propulsion', 'Shafts'],
      ['Engine', 'TWIN MTU 12V 2000 M96L SHAFT'],
      ['Generator', '2 × 35KW@50HZ'],
      ['Fuel Capacity (litres)', '8000'],
      ['Full Speed (knots)', '28'],
      ['Cruise Speed (knots)', '22'],
      ['Crew Cabins', '5'],
    ],
  },
} as const

export function getYacht(slug: string): Yacht | undefined {
  return yachts[slug as keyof typeof yachts]
}

export const yachtSlugs = Object.keys(yachts)

export const allYachts = Object.entries(yachts).map(([slug, yacht]) => ({ slug, ...yacht }))
