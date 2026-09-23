export type YachtSpec = readonly [string, string]

export type Yacht = {
  title: string
  hero: string
  side: string[]
  description: string
  specs: YachtSpec[]
}

const yachts = {
  'sunseeker-74': {
    title: 'SUNSEEKER 74 SPORTS YACHT',
    hero: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    side: [
      'https://images.pexels.com/photos/13914191/pexels-photo-13914191.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/27951598/pexels-photo-27951598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description:
      'The cues are all there. The low profile, the sleek yet elegant flowing lines, and beautiful craftsmanship complement cutting-edge technology and sophisticated interior finishes. The perfect yacht for socialising with guests, the 74 Sport Yacht has ample entertaining space, comfortable seating and generous storage for unforgettable days on the water.',
    specs: [
      ['Manufacturer', 'Sunseeker'],
      ['Model', '65 Sport Yacht'],
      ['Built', '2023'],
      ['LOA (ft/m)', '67.2 / 20.48'],
      ['Beam (ft/m)', '16.8 / 5.12'],
      ['Draft (ft/m)', '16.8 / 5.12'],
      ['Displacement (kg)', '37810'],
      ['Propulsion', 'PODS'],
      ['Engine', 'TWIN VOLVO IPS 1200 (2 X 900PS), TWIN VOLVO IPS 1350 (2 X 1000PS)'],
      ['Generator', '13.5 KW @ 50HZ – 13.5 KW @ 60HZ'],
      ['Fuel Capacity (litres/us gal)', '800 / 211.34'],
      ['Full Speed (knots)', '35'],
      ['Cruise Speed (knots)', '10'],
      ['Crew Cabins', '1'],
    ],
  },
  'sunseeker-65': {
    title: 'SUNSEEKER 65 SPORT YACHT',
    hero: 'https://images.pexels.com/photos/30710213/pexels-photo-30710213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    side: [
      'https://images.pexels.com/photos/15564494/pexels-photo-15564494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/24449061/pexels-photo-24449061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description:
      'The all-new multi-award winning 65 Sport Yacht joins an expanding range of next-generation yachts. With an open-plan layout, generous entertaining areas and seamless access to the water, every detail has been designed for effortless cruising and memorable adventures.',
    specs: [
      ['Manufacturer', 'Sunseeker'],
      ['Model', '65 Sport Yacht'],
      ['Built', '2023'],
      ['LOA (ft/m)', '67.2 / 20.48'],
      ['Beam (ft/m)', '16.8 / 5.12'],
      ['Draft (ft/m)', '16.8 / 5.12'],
      ['Displacement (kg)', '37810'],
      ['Propulsion', 'PODS'],
      ['Engine', 'TWIN VOLVO IPS 1200 (2 X 900PS), TWIN VOLVO IPS 1350 (2 X 1000PS)'],
      ['Generator', '13.5 KW @ 50HZ – 13.5 KW @ 60HZ'],
      ['Fuel Capacity (litres/us gal)', '800 / 211.34'],
      ['Full Speed (knots)', '35'],
      ['Cruise Speed (knots)', '10'],
      ['Crew Cabins', '1'],
    ],
  },
  'sunseeker-manhattan-68': {
    title: 'SUNSEEKER MANHATTAN 68',
    hero: 'https://images.pexels.com/photos/14011948/pexels-photo-14011948.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    side: [
      'https://images.pexels.com/photos/17860921/pexels-photo-17860921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description:
      'Built upon an exceptional family of award-winning Manhattan models, the Manhattan 68 offers an extraordinary level of comfort and luxury. Generous social spaces, an expansive main salon and beautifully considered interiors make this yacht ideal for long weekends and extended cruising.',
    specs: [
      ['Manufacturer', 'Sunseeker'],
      ['Model', 'Manhattan 68'],
      ['Built', '2023'],
      ['LOA (ft/m)', '67.7 / 20.63'],
      ['Beam (ft/m)', '17.3 / 5.27'],
      ['Draft (ft/m)', '5.4 / 1.65'],
      ['Displacement (kg)', '374002'],
      ['Propulsion', 'PODS'],
      ['Engine', 'TWIN MAN V8 1000 (2 X 1000PS), TWIN VOLVO IPS'],
      ['Generator', '17.5KW@50HZ – 21.5KW@50HZ'],
      ['Full Speed (knots)', '32'],
      ['Cruise Speed (knots)', '10'],
      ['Crew Cabins', '2'],
    ],
  },
  'sunseeker-100': {
    title: '2023 SUNSEEKER 100',
    hero: 'https://images.pexels.com/photos/17860921/pexels-photo-17860921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    side: [
      'https://images.pexels.com/photos/30710213/pexels-photo-30710213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14011948/pexels-photo-14011948.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description:
      'The Sunseeker 100 Yacht is set to surprise and delight at every turn. Elegant, powerful lines flow around sublime architecture. A secluded private terrace, sunbathing hideaways, and generous open-plan interiors create an exceptional experience at sea.',
    specs: [
      ['Manufacturer', 'Sunseeker'],
      ['Model', '100'],
      ['Built', '2023'],
      ['LOA (ft/m)', '97.1 / 29.6'],
      ['Beam (ft/m)', '22.8 / 6.95'],
      ['Draft (ft/m)', '6.1 / 1.86'],
      ['Displacement (kg)', '94119'],
      ['Propulsion', 'Shafts'],
      ['Engine', 'TWIN MTU 12V 2000 M96L SHAFT'],
      ['Generator', '2 x 35KW@50HZ'],
      ['Full Speed (knots)', '28'],
      ['Cruise Speed (knots)', '12'],
      ['Crew Cabins', '5'],
    ],
  },
} as const

export function getYacht(slug: string): Yacht | undefined {
  return yachts[slug as keyof typeof yachts]
}

export const yachtSlugs = Object.keys(yachts)
