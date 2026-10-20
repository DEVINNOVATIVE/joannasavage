// 'use client'

// import Image from 'next/image'
// import { AnimatePresence, motion } from 'framer-motion'
// import { useEffect, useState } from 'react'
// import { Eyebrow } from '../shared/eyebrow'

// const charterImages = [
//   { src: '/assets/luxury-private-jet.jpg', alt: 'Private jet in flight' },
//   { src: '/assets/luxury-yacht-.jpg', alt: 'Luxury yacht at sea' },
//   { src: '/assets/luxury-real-estate.jpg', alt: 'Luxury waterfront property' },
// ]

// export function CharterBanner() {
//   const [activeImage, setActiveImage] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveImage((current) => (current + 1) % charterImages.length)
//     }, 5000)

//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <section className="relative flex min-h-[400px] items-center overflow-hidden text-white sm:min-h-[480px]">
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={charterImages[activeImage].src}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2, ease: 'easeInOut' }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={charterImages[activeImage].src}
//             alt={charterImages[activeImage].alt}
//             fill
//             priority={activeImage === 0}
//             className="object-cover"
//           />
//         </motion.div>
//       </AnimatePresence>
//       <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,18,0.82)_0%,rgba(7,20,18,0.45)_55%,rgba(7,20,18,0.25)_100%)]" />
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-20"
//       >
//         <Eyebrow light>Working exclusively with Sunseeker Global</Eyebrow>
//         <h2 className="mt-6 max-w-2xl font-display text-5xl leading-[0.92] sm:text-7xl">Bespoke Luxury Charters</h2>
//         <p className="mt-6 text-[11px] font-medium tracking-[0.32em] text-[#e8d5b0] uppercase">
//           Aviation · Yachts · Property
//         </p>
//       </motion.div>
//     </section>
//   )
// }




// 'use client'

// import Image from 'next/image'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useEffect, useState } from 'react'
// import { Eyebrow } from '../shared/eyebrow'

// const charterImages = [
//   { src: '/assets/luxury-private-jet.jpg', alt: 'Private jet in flight', label: 'AVIATION' },
//   { src: '/assets/luxury-yacht-.jpg', alt: 'Luxury yacht at sea', label: 'YACHTS' },
//   { src: '/assets/luxury-real-estate.jpg', alt: 'Luxury waterfront property', label: 'PROPERTY' },
//    { src: '/assets/Yacht.jpeg', alt: 'Yacht', label: 'PROPERTY' },
// ]

// export function CharterBanner() {
//   const [activeIndex, setActiveIndex] = useState(0)

//   // Automatically cycles the focal image every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % charterImages.length)
//     }, 5000)

//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <section className="relative flex min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] items-center overflow-hidden bg-[#1d2927] text-white">
//       {/* Cinematic Deep Horizon Background Gradient */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(12,38,34,0.7),transparent_70%)]" />

//       {/* Modern Overlapping Content Wrapper */}
//       <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:px-20">
        
//         {/* LEFT COLUMN: Clean Brand Typography (Uncluttered) */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
//           className="lg:col-span-5"
//         >
//           <Eyebrow light>Working exclusively with Sunseeker Global</Eyebrow>
//           <h2 className="mt-5 font-display text-5xl leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
//             Bespoke Luxury <br className="hidden lg:block" />
//             Charters
//           </h2>
//           <p className="mt-8 text-[11px] font-semibold tracking-[0.32em] text-[#e8d5b0] uppercase">
//             Aviation · Yachts · Property
//           </p>

//           {/* Minimal Step Indicator */}
//           <div className="mt-12 flex gap-3">
//             {charterImages.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className="group relative h-1 w-12 overflow-hidden rounded-full bg-white/20 transition-all"
//                 aria-label={`Go to slide ${index + 1}`}
//               >
//                 {/* Visual progression highlight bar */}
//                 <motion.div
//                   initial={{ transformOrigin: 'left' }}
//                   animate={{ scaleX: activeIndex === index ? 1 : 0 }}
//                   transition={{ duration: activeIndex === index ? 5 : 0.4, ease: 'linear' }}
//                   className="absolute inset-0 bg-[#e8d5b0]"
//                 />
//               </button>
//             ))}
//           </div>
//         </motion.div>

//         {/* RIGHT COLUMN: Natural Overlapping Photographic Showcase */}
//         <div className="relative flex items-center justify-center lg:col-span-7">
//           <div className="relative aspect-[4/3] w-full max-w-[620px] overflow-visible">
            
//             {/* LARGE HERO FRAME (Guarantees image remains sharp) */}
//             <div className="absolute right-0 top-0 h-full w-[85%] overflow-hidden rounded-lg bg-[#0e211d]/50 shadow-2xl ring-1 ring-white/15">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   initial={{ opacity: 0, scale: 1.05 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.98 }}
//                   transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
//                   className="relative h-full w-full"
//                 >
//                   <Image
//                     src={charterImages[activeIndex].src}
//                     alt={charterImages[activeIndex].alt}
//                     fill
//                     priority
//                     sizes="(max-width: 768px) 100vw, 550px"
//                     className="object-cover"
//                   />
//                   {/* Subtle Cinematic Vingette */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25" />
                  
//                   {/* Small automatic indicator on current overlay */}
//                   <div className="absolute bottom-6 left-6 text-[10px] font-semibold tracking-wider text-[#e8d5b0]/90 uppercase backdrop-blur-md bg-black/45 px-3 py-1.5 rounded border border-white/10">
//                     {charterImages[activeIndex].label}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* PREVIEW FILM-STRIP CARD (Floating visual anchor that helps prevent visual stretching) */}
//             <motion.div
//               animate={{ y: [0, -6, 0] }}
//               transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
//               className="absolute -left-2 top-12 z-20 aspect-square w-[32%] overflow-hidden rounded-lg bg-[#0c1815] p-2.5 shadow-2xl ring-1 ring-white/15"
//             >
//               <div className="relative h-full w-full overflow-hidden rounded-md">
//                 <Image
//                   src={charterImages[(activeIndex + 1) % charterImages.length].src}
//                   alt="Up next luxury preview"
//                   fill
//                   sizes="(max-width: 768px) 30vw, 150px"
//                   className="object-cover brightness-75 contrast-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-tr from-[#050e0c]/90 via-[#050e0c]/10 to-transparent" />
//                 <span className="absolute bottom-2.5 left-2.5 text-[8px] font-bold tracking-widest text-white/70 uppercase">
//                   UP NEXT
//                 </span>
//               </div>
//             </motion.div>

//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }


'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Eyebrow } from '../shared/eyebrow'

const charterImages = [
  { src: '/assets/luxury-private-jet.jpg', alt: 'Private jet in flight', label: 'AVIATION' },
  { src: '/assets/luxury-yacht-.jpg', alt: 'Luxury yacht at sea', label: 'YACHTS' },
  { src: '/assets/luxury-real-estate.jpg', alt: 'Luxury waterfront property', label: 'PROPERTY' },
  { src: '/assets/Yacht.jpeg', alt: 'Yacht', label: 'PROPERTY' },
]

export function CharterBanner() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Automatically cycles the focal image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % charterImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative flex min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] items-center overflow-hidden bg-[#1d2927] text-white  py-6">
      {/* Cinematic Deep Horizon Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(12,38,34,0.7),transparent_70%)]" />

      {/* Modern Overlapping Content Wrapper */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:px-20">
        
        {/* LEFT COLUMN: Clean Brand Typography (Uncluttered) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-5"
        >
          <Eyebrow light>Working exclusively with Sunseeker Global</Eyebrow>
          <h2 className="mt-5 font-display text-5xl leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
            Bespoke Luxury <br className="hidden lg:block" />
            Charters
          </h2>
          <p className="mt-8 text-[11px] font-semibold tracking-[0.32em] text-[#e8d5b0] uppercase">
            Aviation · Yachts · Property
          </p>

          {/* Dynamic Step Indicators (Auto-adapts to 4 or more items) */}
          <div className="mt-12 flex gap-3">
            {charterImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative h-1 flex-1 max-w-[60px] overflow-hidden rounded-full bg-white/20 transition-all"
                aria-label={`Go to slide ${index + 1}`}
              >
                {/* Visual progression highlight bar */}
                <motion.div
                  initial={{ transformOrigin: 'left' }}
                  animate={{ scaleX: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: activeIndex === index ? 5 : 0.4, ease: 'linear' }}
                  className="absolute inset-0 bg-[#e8d5b0]"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Natural Overlapping Photographic Showcase */}
        <div className="relative flex items-center justify-center lg:col-span-7">
          <div className="relative aspect-[4/3] w-full max-w-[620px] overflow-visible">
            
            {/* LARGE HERO FRAME (Guarantees image remains sharp) */}
            <div className="absolute right-0 top-0 h-full w-[85%] overflow-hidden rounded-lg bg-[#0e211d]/50 shadow-2xl ring-1 ring-white/15">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={charterImages[activeIndex].src}
                    alt={charterImages[activeIndex].alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover"
                  />
                  {/* Subtle Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25" />
                  
                  {/* Small automatic indicator on current overlay */}
                  <div className="absolute bottom-6 left-6 text-[10px] font-semibold tracking-wider text-[#e8d5b0]/90 uppercase backdrop-blur-md bg-black/45 px-3 py-1.5 rounded border border-white/10">
                    {charterImages[activeIndex].label}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* PREVIEW FILM-STRIP CARD (Floating visual anchor) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -left-2 top-12 z-20 aspect-square w-[32%] overflow-hidden rounded-lg bg-[#0c1815] p-2.5 shadow-2xl ring-1 ring-white/15"
            >
              <div className="relative h-full w-full overflow-hidden rounded-md">
                <Image
                  src={charterImages[(activeIndex + 1) % charterImages.length].src}
                  alt="Up next luxury preview"
                  fill
                  sizes="(max-width: 768px) 30vw, 150px"
                  className="object-cover brightness-75 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050e0c]/90 via-[#050e0c]/10 to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 text-[8px] font-bold tracking-widest text-white/70 uppercase">
                  UP NEXT
                </span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}