
// 'use client'

// import Image from 'next/image'
// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
// import { useState } from 'react'

// type Affiliation = {
//   name: string
//   logo: string
//   category: string
// }

// const affiliations: Affiliation[] = [
//   {
//     name: 'Sunseeker',
//     logo: '/assets/sunskeer.png',
//     category: 'Luxury Yachting',
//   },
//   {
//     name: 'Lamborghini',
//     logo: '/assets/lamborghini.png',
//     category: 'Automotive',
//   },
//   {
//     name: 'Gaya',
//     logo: '/assets/gayo.png',
//     category: 'Luxury Lifestyle',
//   },
//   {
//     name: 'Harrods',
//     logo: '/assets/harrods.png',
//     category: 'Luxury Retail',
//   },
//   {
//     name: 'SDG',
//     logo: '/assets/impact-funds.png',
//     category: 'Impact & Investment',
//   },
// ]

// export default function ExclusiveAffiliations() {
//   const [active, setActive] = useState<number | null>(null)

//   const mouseX = useMotionValue(0)
//   const mouseY = useMotionValue(0)

//   const smoothX = useSpring(mouseX, {
//     stiffness: 40,
//     damping: 20,
//   })

//   const smoothY = useSpring(mouseY, {
//     stiffness: 40,
//     damping: 20,
//   })

//   const handleMouseMove = (
//     e: React.MouseEvent<HTMLDivElement>
//   ) => {
//     const rect = e.currentTarget.getBoundingClientRect()

//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top

//     mouseX.set(x - rect.width / 2)
//     mouseY.set(y - rect.height / 2)
//   }

//   return (
//     <section className="relative overflow-hidden bg-[#f3f1ea] py-24 md:py-32 lg:py-40">

//       {/* =====================================================
//           BACKGROUND
//       ====================================================== */}

//       <div className="pointer-events-none absolute inset-0">

//         <div
//           className="
//             absolute inset-0 opacity-[0.025]
//             [background-image:radial-gradient(#071412_0.7px,transparent_0.7px)]
//             [background-size:7px_7px]
//           "
//         />

//         <motion.div
//           style={{
//             x: useTransform(smoothX, [-500, 500], [-25, 25]),
//             y: useTransform(smoothY, [-500, 500], [-25, 25]),
//           }}
//           className="
//             absolute left-1/2 top-1/2
//             h-[500px] w-[500px]
//             -translate-x-1/2 -translate-y-1/2
//             rounded-full
//             bg-[#d7d0bf]/30
//             blur-[120px]
//           "
//         />

//       </div>

//       <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">

//         {/* =====================================================
//             INTRO
//         ====================================================== */}

//         <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

//           <div>
//             <div className="flex items-center gap-3">
//               <span className="h-px w-8 bg-[#071412]" />

//               <span className="text-[9px] uppercase tracking-[0.35em] text-[#77705f]">
//                 Exclusive Affiliations
//               </span>
//             </div>
//           </div>

//           <p className="max-w-xs text-xs leading-6 text-[#77705f] md:text-right">
//             A network of exceptional names connected through
//             trust, access and shared ambition.
//           </p>

//         </div>

//         {/* =====================================================
//             MAIN EXPERIENCE
//         ====================================================== */}

//         <div
//           onMouseMove={handleMouseMove}
//           onMouseLeave={() => {
//             mouseX.set(0)
//             mouseY.set(0)
//             setActive(null)
//           }}
//           className="relative mt-12 min-h-[650px] md:mt-16 lg:min-h-[760px]"
//         >

//           {/* Floating mouse light */}
//           <motion.div
//             style={{
//               x: smoothX,
//               y: smoothY,
//             }}
//             className="
//               pointer-events-none
//               absolute left-1/2 top-1/2
//               h-40 w-40
//               -translate-x-1/2 -translate-y-1/2
//               rounded-full
//               bg-white/60
//               blur-[60px]
//             "
//           />

//           {/* =================================================
//               CENTER
//           ================================================== */}

//           <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 text-center md:w-[380px] lg:w-[470px]">

//             <motion.div
//               animate={{
//                 opacity: active === null ? 1 : 0.45,
//                 scale: active === null ? 1 : 0.96,
//               }}
//               transition={{ duration: 0.5 }}
//             >

//               <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-[#77705f]">
//                 In exceptional company
//               </p>

//               <h2 className="font-display text-5xl leading-[0.88] tracking-[-0.04em] text-[#071412] md:text-7xl lg:text-[92px]">
//                 The right
//                 <span className="block italic text-[#77705f]">
//                   connections.
//                 </span>
//               </h2>

//               <p className="mx-auto mt-7 max-w-xs text-xs leading-6 text-[#626966]">
//                 Partnerships that extend beyond business,
//                 creating access to extraordinary possibilities.
//               </p>

//             </motion.div>

//             {/* Active information */}
//             {active !== null && (
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mt-8"
//               >
//                 <span className="text-[9px] uppercase tracking-[0.3em] text-[#77705f]">
//                   {affiliations[active].category}
//                 </span>

//                 <h3 className="mt-2 font-display text-2xl text-[#071412]">
//                   {affiliations[active].name}
//                 </h3>
//               </motion.div>
//             )}

//           </div>

//           {/* =================================================
//               SUNSEEKER
//           ================================================== */}

//           <MagneticLogo
//             item={affiliations[0]}
//             active={active === 0}
//             onEnter={() => setActive(0)}
//             className="
//               absolute
//               left-[3%] top-[7%]
//               md:left-[8%] md:top-[8%]
//               lg:left-[13%]
//             "
//             size="large"
//             rotate={-5}
//           />

//           {/* =================================================
//               LAMBORGHINI
//           ================================================== */}

//           <MagneticLogo
//             item={affiliations[1]}
//             active={active === 1}
//             onEnter={() => setActive(1)}
//             className="
//               absolute
//               right-[2%] top-[12%]
//               md:right-[8%] md:top-[15%]
//               lg:right-[13%]
//             "
//             size="medium"
//             rotate={5}
//           />

//           {/* =================================================
//               GAYA
//           ================================================== */}

//           <MagneticLogo
//             item={affiliations[2]}
//             active={active === 2}
//             onEnter={() => setActive(2)}
//             className="
//               absolute
//               left-[2%] top-[57%]
//               md:left-[12%] md:top-[58%]
//               lg:left-[17%]
//             "
//             size="medium"
//             rotate={4}
//           />

//           {/* =================================================
//               HARRODS
//           ================================================== */}

//           <MagneticLogo
//             item={affiliations[3]}
//             active={active === 3}
//             onEnter={() => setActive(3)}
//             className="
//               absolute
//               right-[1%] top-[58%]
//               md:right-[10%] md:top-[56%]
//               lg:right-[16%]
//             "
//             size="large"
//             rotate={-4}
//           />

//           {/* =================================================
//               SDG
//           ================================================== */}

//           <MagneticLogo
//             item={affiliations[4]}
//             active={active === 4}
//             onEnter={() => setActive(4)}
//             className="
//               absolute
//               bottom-[4%] left-1/2
//               -translate-x-1/2
//               md:bottom-[3%]
//             "
//             size="small"
//             rotate={2}
//           />

//           {/* Decorative small marks */}

//           <div className="absolute left-[30%] top-[18%] h-1 w-1 rounded-full bg-[#aaa493]" />
//           <div className="absolute right-[29%] top-[35%] h-1 w-1 rounded-full bg-[#aaa493]" />
//           <div className="absolute left-[27%] bottom-[23%] h-1 w-1 rounded-full bg-[#aaa493]" />
//           <div className="absolute right-[26%] bottom-[20%] h-1 w-1 rounded-full bg-[#aaa493]" />

//         </div>

//         {/* =====================================================
//             BOTTOM
//         ====================================================== */}

//         <div className="flex flex-col gap-5 border-t border-[#d3cec2] pt-7 md:flex-row md:items-center md:justify-between">

//           <span className="text-[9px] uppercase tracking-[0.3em] text-[#77705f]">
//             Five exceptional relationships
//           </span>

//           <div className="flex items-center gap-3">
//             <span className="h-px w-10 bg-[#bdb8aa]" />

//             <span className="text-[9px] uppercase tracking-[0.25em] text-[#77705f]">
//               Move through the network
//             </span>
//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }

// /* ============================================================
//    MAGNETIC LOGO
// ============================================================ */

// type MagneticLogoProps = {
//   item: Affiliation
//   active: boolean
//   onEnter: () => void
//   className: string
//   size: 'large' | 'medium' | 'small'
//   rotate: number
// }

// function MagneticLogo({
//   item,
//   active,
//   onEnter,
//   className,
//   size,
//   rotate,
// }: MagneticLogoProps) {
//   const sizes = {
//     large: 'w-[170px] md:w-[230px] lg:w-[270px]',
//     medium: 'w-[140px] md:w-[190px] lg:w-[220px]',
//     small: 'w-[120px] md:w-[160px] lg:w-[180px]',
//   }

//   return (
//     <motion.button
//       type="button"
//       onMouseEnter={onEnter}
//       onFocus={onEnter}
//       onClick={onEnter}
//       initial={{
//         opacity: 0,
//         y: 25,
//         rotate: 0,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         rotate,
//       }}
//       viewport={{ once: true }}
//       transition={{
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       animate={{
//         y: active ? -12 : [0, -7, 0],
//         scale: active ? 1.16 : 1,
//         rotate: active ? 0 : rotate,
//         opacity: active ? 1 : 0.65,
//       }}
//       whileHover={{
//         scale: 1.18,
//         rotate: 0,
//         opacity: 1,
//         y: -12,
//       }}
//       className={`
//         ${className}
//         ${sizes[size]}
//         group
//         z-20
//         cursor-pointer
//         outline-none
//       `}
//     >

//       <div className="relative flex items-center justify-center">

//         {/* Glow */}
//         <motion.div
//           animate={{
//             opacity: active ? 0.6 : 0,
//             scale: active ? 1 : 0.7,
//           }}
//           className="
//             absolute
//             h-28 w-28
//             rounded-full
//             bg-white
//             blur-[45px]
//           "
//         />

//         {/* Logo */}
//         <Image
//           src={item.logo}
//           alt={item.name}
//           width={400}
//           height={180}
//           className={`
//             relative z-10
//             h-auto
//             w-full
//             object-contain
//             transition-all
//             duration-700
//             ${
//               active
//                 ? 'grayscale-0 opacity-100'
//                 : 'grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100'
//             }
//           `}
//         />

//         {/* Name */}
//         <motion.span
//           initial={false}
//           animate={{
//             opacity: active ? 1 : 0,
//             y: active ? 0 : 8,
//           }}
//           className="
//             absolute
//             -bottom-7
//             left-1/2
//             -translate-x-1/2
//             whitespace-nowrap
//             text-[8px]
//             uppercase
//             tracking-[0.25em]
//             text-[#77705f]
//           "
//         >
//           {item.name}
//         </motion.span>

//       </div>

//     </motion.button>
//   )
// }





'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'

type Affiliation = {
  name: string
  logo: string
  category: string
}

const affiliations: Affiliation[] = [
  {
    name: 'Sunseeker',
    logo: '/assets/sunskeer.png',
    category: 'Luxury Yachting',
  },
  {
    name: 'Lamborghini',
    logo: '/assets/lamborghini.png',
    category: 'Automotive',
  },
  {
    name: 'Gaya',
    logo: '/assets/gayo.png',
    category: 'Luxury Lifestyle',
  },
  {
    name: 'Harrods',
    logo: '/assets/harrods.png',
    category: 'Luxury Retail',
  },
  {
    name: 'SDG',
    logo: '/assets/impact-funds.png',
    category: 'Impact & Investment',
  },
]

export default function ExclusiveAffiliations() {
  const [active, setActive] = useState<number | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 45,
    damping: 25,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 45,
    damping: 25,
  })

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect()

    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <section className="relative overflow-hidden bg-[#f4f1e9] py-10 sm:py-12 md:py-16 lg:py-20">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute inset-0 opacity-[0.02]
            [background-image:radial-gradient(#071412_0.7px,transparent_0.7px)]
            [background-size:8px_8px]
          "
        />

        <motion.div
          style={{
            x: useTransform(smoothX, [-500, 500], [-20, 20]),
            y: useTransform(smoothY, [-500, 500], [-20, 20]),
          }}
          className="
            absolute left-1/2 top-1/2
            h-[400px] w-[400px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#d8d1c1]/30
            blur-[100px]
          "
        />

        <div className="absolute left-[5%] top-0 h-full w-px bg-[#071412]/[0.035]" />
        <div className="absolute right-[5%] top-0 h-full w-px bg-[#071412]/[0.035]" />

      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-7 md:px-10 lg:px-14">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#071412] sm:w-9" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#77705f] sm:text-[10px] sm:tracking-[0.34em]">
                Exclusive Affiliations
              </span>
            </div>

            <h2
              className="
                mt-4
                font-display
                text-[38px]
                leading-[0.92]
                tracking-[-0.045em]
                text-[#071412]
                sm:text-5xl
                md:text-6xl
                lg:text-[68px]
              "
            >
              Connected to
              <span className="block italic text-[#77705f]">
                exceptional names.
              </span>
            </h2>

          </div>

          <p className="
            max-w-[310px]
            text-[12px]
            leading-6
            text-[#626966]
            md:pb-1
            md:text-right
            lg:text-[13px]
          ">
            Our work is strengthened through affiliations with
            exceptional names across luxury, lifestyle, automotive,
            retail and impact.
          </p>

        </div>

        {/* =====================================================
            NETWORK
        ====================================================== */}

        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            mouseX.set(0)
            mouseY.set(0)
            setActive(null)
          }}
          className="
            relative
            mt-7
            min-h-[400px]
            sm:mt-8
            sm:min-h-[440px]
            md:mt-10
            md:min-h-[480px]
          "
        >

          {/* Mouse light — desktop only */}
          <motion.div
            style={{
              x: smoothX,
              y: smoothY,
            }}
            className="
              pointer-events-none
              absolute left-1/2 top-1/2
              hidden
              h-40
              w-40
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/60
              blur-[60px]
              md:block
            "
          />

          {/* =================================================
              CONNECTING LINES
          ================================================== */}

          <div className="pointer-events-none absolute inset-0 hidden sm:block">

            <div className="
              absolute
              left-[22%]
              top-[23%]
              h-px
              w-[20%]
              rotate-[17deg]
              bg-[#071412]/[0.07]
            " />

            <div className="
              absolute
              right-[22%]
              top-[25%]
              h-px
              w-[20%]
              -rotate-[17deg]
              bg-[#071412]/[0.07]
            " />

            <div className="
              absolute
              left-[22%]
              bottom-[25%]
              h-px
              w-[20%]
              -rotate-[17deg]
              bg-[#071412]/[0.07]
            " />

            <div className="
              absolute
              right-[22%]
              bottom-[25%]
              h-px
              w-[20%]
              rotate-[17deg]
              bg-[#071412]/[0.07]
            " />

          </div>

          {/* =================================================
              CENTER
          ================================================== */}

          <motion.div
            animate={{
              scale: active !== null ? 0.96 : 1,
              opacity: active !== null ? 0.75 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="
              absolute
              left-1/2
              top-1/2
              z-10
              w-[230px]
              -translate-x-1/2
              -translate-y-1/2
              text-center
              sm:w-[290px]
              md:w-[370px]
              lg:w-[440px]
            "
          >

            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-5 bg-[#aaa493]" />

              <span className="
                text-[8px]
                uppercase
                tracking-[0.35em]
                text-[#77705f]
                sm:text-[9px]
              ">
                Affiliated With
              </span>

              <span className="h-px w-5 bg-[#aaa493]" />
            </div>

            <h3 className="
              font-display
              text-[32px]
              leading-[0.95]
              tracking-[-0.04em]
              text-[#071412]
              sm:text-4xl
              md:text-5xl
              lg:text-[56px]
            ">
              A network built
              <span className="block italic text-[#77705f]">
                around trust.
              </span>
            </h3>

            <p className="
              mx-auto
              mt-4
              max-w-[260px]
              text-[11px]
              leading-6
              text-[#626966]
              sm:max-w-xs
              sm:text-[12px]
              md:mt-5
              md:text-[13px]
            ">
              Distinguished affiliations that share our
              standards, vision and commitment to excellence.
            </p>

            {/* Active company */}
            <motion.div
              initial={false}
              animate={{
                opacity: active !== null ? 1 : 0,
                y: active !== null ? 0 : 8,
              }}
              className="mt-4"
            >
              {active !== null && (
                <>
                  <span className="
                    text-[8px]
                    uppercase
                    tracking-[0.28em]
                    text-[#77705f]
                  ">
                    {affiliations[active].category}
                  </span>

                  <p className="
                    mt-1
                    font-display
                    text-lg
                    text-[#071412]
                  ">
                    {affiliations[active].name}
                  </p>
                </>
              )}
            </motion.div>

          </motion.div>

          {/* =================================================
              LOGOS
          ================================================== */}

          <MagneticLogo
            item={affiliations[0]}
            active={active === 0}
            onEnter={() => setActive(0)}
            className="
              absolute
              left-[0%]
              top-[5%]
              sm:left-[4%]
              md:left-[7%]
              lg:left-[10%]
            "
            size="large"
            rotate={-5}
          />

          <MagneticLogo
            item={affiliations[1]}
            active={active === 1}
            onEnter={() => setActive(1)}
            className="
              absolute
              right-[0%]
              top-[10%]
              sm:right-[4%]
              md:right-[7%]
              lg:right-[10%]
            "
            size="medium"
            rotate={5}
          />

          <MagneticLogo
            item={affiliations[2]}
            active={active === 2}
            onEnter={() => setActive(2)}
            className="
              absolute
              left-[2%]
              top-[58%]
              sm:left-[7%]
              md:left-[11%]
              lg:left-[14%]
            "
            size="medium"
            rotate={4}
          />

          <MagneticLogo
            item={affiliations[3]}
            active={active === 3}
            onEnter={() => setActive(3)}
            className="
              absolute
              right-[1%]
              top-[59%]
              sm:right-[5%]
              md:right-[9%]
              lg:right-[13%]
            "
            size="large"
            rotate={-4}
          />

          <MagneticLogo
            item={affiliations[4]}
            active={active === 4}
            onEnter={() => setActive(4)}
            className="
              absolute
              bottom-[2%]
              left-1/2
              -translate-x-1/2
            "
            size="small"
            rotate={2}
          />

          {/* Small details */}
          <div className="
            absolute
            left-[27%]
            top-[18%]
            hidden
            h-1
            w-1
            rounded-full
            bg-[#aaa493]
            sm:block
          " />

          <div className="
            absolute
            right-[27%]
            top-[37%]
            hidden
            h-1
            w-1
            rounded-full
            bg-[#aaa493]
            sm:block
          " />

          <div className="
            absolute
            left-[27%]
            bottom-[22%]
            hidden
            h-1
            w-1
            rounded-full
            bg-[#aaa493]
            sm:block
          " />

        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="
          flex
          flex-col
          gap-3
          border-t
          border-[#d3cec2]
          pt-5
          sm:flex-row
          sm:items-center
          sm:justify-between
        ">

          <div>
            <span className="
              text-[8px]
              uppercase
              tracking-[0.32em]
              text-[#77705f]
              sm:text-[9px]
            ">
              Exclusive Affiliations
            </span>

            <p className="
              mt-1
              text-[11px]
              text-[#626966]
              sm:text-[12px]
            ">
              Five distinguished relationships. One connected network.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-px w-7 bg-[#bdb8aa]" />

            <span className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-[#77705f]
              sm:text-[9px]
            ">
              Explore our network
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}

/* ============================================================
   MAGNETIC LOGO
============================================================ */

type MagneticLogoProps = {
  item: Affiliation
  active: boolean
  onEnter: () => void
  className: string
  size: 'large' | 'medium' | 'small'
  rotate: number
}

function MagneticLogo({
  item,
  active,
  onEnter,
  className,
  size,
  rotate,
}: MagneticLogoProps) {
  const sizes = {
    large:
      'w-[100px] sm:w-[145px] md:w-[185px] lg:w-[220px]',
    medium:
      'w-[88px] sm:w-[125px] md:w-[155px] lg:w-[180px]',
    small:
      'w-[75px] sm:w-[105px] md:w-[130px] lg:w-[150px]',
  }

  return (
    <motion.button
      type="button"
      aria-label={`View ${item.name} affiliation`}
      onMouseEnter={onEnter}
      onFocus={onEnter}
      onClick={onEnter}
      initial={{
        opacity: 0,
        y: 15,
        rotate: 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate,
      }}
      viewport={{
        once: true,
        margin: '-50px',
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      animate={{
        y: active ? -8 : [0, -4, 0],
        scale: active ? 1.12 : 1,
        rotate: active ? 0 : rotate,
        opacity: active ? 1 : 0.65,
      }}
      whileHover={{
        scale: 1.14,
        rotate: 0,
        rotateX: 8,
        rotateY: rotate > 0 ? 10 : -10,
        opacity: 1,
        y: -8,
      }}
      whileTap={{ scale: 1.08 }}
      style={{ perspective: 900, transformStyle: 'preserve-3d' }}
      className={`
        ${className}
        ${sizes[size]}
        group
        z-20
        cursor-pointer
        touch-manipulation
        outline-none
      `}
    >

      <div className="relative flex items-center justify-center [transform-style:preserve-3d]">

        {/* Glow */}
        <motion.div
          animate={{
            opacity: active ? 0.55 : 0,
            scale: active ? 1 : 0.7,
          }}
          transition={{ duration: 0.4 }}
          className="
            pointer-events-none
            absolute
            h-24
            w-24
            rounded-full
            bg-white
            blur-[38px]
            sm:h-28
            sm:w-28
          "
        />

        {/* Logo */}
        <Image
          src={item.logo}
          alt={item.name}
          width={500}
          height={220}
          className={`
            relative
            z-10
            h-auto
            w-full
            object-contain
            transition-[filter,opacity,transform]
            duration-500
            [transform:translateZ(22px)]
            ${
              active
                ? 'grayscale-0 opacity-100 drop-shadow-[0_10px_20px_rgba(7,20,18,0.10)]'
                : 'grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-100'
            }
          `}
        />

        {/* Name */}
        <motion.span
          initial={false}
          animate={{
            opacity: active ? 1 : 0,
            y: active ? 0 : 5,
          }}
          className="
            pointer-events-none
            absolute
            -bottom-6
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            text-[7px]
            uppercase
            tracking-[0.25em]
            text-[#77705f]
          "
        >
          {item.name}
        </motion.span>

      </div>

    </motion.button>
  )
}

