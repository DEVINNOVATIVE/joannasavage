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
    description: [
      'The cues are all there. The low profile. The sleek yet elegant flowing lines. Undeniably a Sunseeker, the beautiful craftsmanship complements cutting-edge technology and sophisticated interior finishes.',
      'The perfect yacht for socialising with guests, the 74 Sport Yacht has ample entertaining space, including plenty of comfortable seating and large sunpads both fore and aft. The cockpit is shaded by the bridge deck, while hydraulic drop-away cockpit doors invite the outside into the interior living space.',
      'Up-top, you will find a stylish sports bridge providing additional social and storage space. Best of all, the sports bridge offers a spectacular vantage point, offering truly breath-taking views of your surroundings. The 74 Sport Yacht will now be available as an XPS limited edition. The yacht features dramatic new styling and numerous luxurious appointments that are only available together as part of a dedicated package.',
    ].join(' '),
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
      ['Fuel Capacity (litres / US gal)', '800 / 211.34'],
      ['Fresh Water Capacity (litres / US gal)', '800 / 211.34'],
      ['Full Speed (knots)', '35'],
      ['Cruise Speed (knots)', '10'],
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
    description: [
      'With no introduction necessary, the all-new, multi-award winning 65 Sport Yacht joins our expanding range of next-generation yachts. The SkyHelm, complete with IPS docking joystick, can be used in an upright position for low-speed manoeuvring or lowered to fall perfectly into outstretched arms when sat low in the bespoke helm seats cossetted by carbon fibre backrests and an integrated centre console.',
      'The modular layout allows for various specifications and enhancements, with space that adapts seamlessly to all kinds of socialising and adrenaline-seeking. Three cabins, including a full-beam master stateroom, can accommodate up to six guests in luxurious comfort, with a fully appointed crew cabin located forward of the garage.',
      'Take your Sport Yacht to new heights by carrying the tender on the bathing platform and reconfiguring the vacated space as a dedicated Beach Club, with direct sea access, bar, fridge, BBQ and free-standing seating. The perfect area for those happiest close to the water. With speeds of up to 35 knots, the 65 Sport Yacht cuts an equally impressive figure on the open water. Altogether, the experience is one of pure adrenaline, akin to driving a high-performance convertible supercar.',
      'Viewings are encouraged and will not disappoint.',
    ].join(' '),
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
      ['Engine', 'TWIN VOLVO IPS 1200 (2 X 900PS), TWIN VOLVO IPS 1350 (2 X 1000PS)'],
      ['Generator', '13.5 KW @ 50HZ – 13.5 KW @ 60HZ'],
      ['Fuel Capacity (litres / US gal)', '800 / 211.34'],
      ['Fresh Water Capacity (litres / US gal)', '800 / 211.34'],
      ['Full Speed (knots)', '35'],
      ['Cruise Speed (knots)', '10'],
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
    description: [
      'Built upon the exceptional family of award-winning Manhattan models, the Manhattan 68 offers an extraordinary level of comfort and luxury with incredible detailing. Throughout the main deck, there is a strong focus on creating generous, usable sociable spaces. The exterior lines flow effortlessly from the Portuguese-bridge bow seating and sunbathing areas to the expansive cockpit adjoining an innovative Beach Club with enhanced features, including a dedicated water level locker for two SeaBobs, delivering effortless enjoyment.',
      'Internally, the expansive main saloon benefits from sweeping glazing, extending below the TV console, revealing glimpses of the sea from all perspectives. The fully-equipped aft galley with a large dinette links seamlessly to the cockpit via full-width sliding doors, helping to bring everyone together.',
      'The innovative design layout allows owners to welcome guests with a strong focus on ambient lighting and interior detailing. Access to the spacious guest cabins is via the lower helm and elevated companion seating, whilst the sumptuous master cabin amidships is accessed via its very own staircase to port. This exceptional layout allows the owner and guests to move effortlessly between spaces. The interiors boast exquisite attention to detail with a new palate of upholstery that provides a cool, crisp, and contemporary look, unmistakably a Manhattan.',
      'Viewings are encouraged and will not disappoint.',
    ].join(' '),
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
      ['Engine', 'TWIN MAN V8 1000 (2 X 1000PS), TWIN MAN V8 1200 (2 X 1200PS), TWIN VOLVO IPS1350 (2 X 1000PS)'],
      ['Generator', '17.5KW@50HZ - 21.5KW@50HZ'],
      ['Fuel Capacity (litres / US gal)', '4000 / 1056.69'],
      ['Fresh Water Capacity (litres / US gal)', '900 / 237.75'],
      ['Full Speed (knots)', '32'],
      ['Cruise Speed (knots)', '10'],
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
    description: [
      'The Sunseeker 100 Yacht is set to surprise and delight at every turn. Every element has been carefully considered in meticulous detail, exuding sophistication found in custom superyachts. Her elegant, powerful lines flow around sublime architecture.',
      'A secluded private terrace, sunbathing hideaways, seamless flybridge with foredeck access, beautifully proportioned open-plan interior and generous Beach Club are just a few of her magnificent features. Its unique main deck, penthouse-style saloon and luxurious staterooms offer a new-found design direction and material selection providing elegant interiors to enchant any owner.',
      'The layering of textural elements and the mix of furnishings and fabrics feels timeless with a sophisticated aesthetic. Viewings are encouraged and will not disappoint.',
    ].join(' '),
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
      ['Engine', 'TWIN MTU 12V 2000 M96L SHAFT (2 X 1950PS), TWIN MTU 12V 2000 M96X SHAFT (2 X 2000PS), TWIN MTU 16V 2000 M96L SHAFT (2 X 2640PS)'],
      ['Generator', '2 X 35KW@50HZ - 2 X 32KW@60HZ'],
      ['Fuel Capacity (litres / US gal)', '12800 / 3381.4'],
      ['Fresh Water Capacity (litres / US gal)', '1800 / 475.51'],
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

export const allYachts = Object.entries(yachts).map(([slug, yacht]) => ({ slug, ...yacht }))
