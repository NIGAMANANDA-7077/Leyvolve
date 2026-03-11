import { motion } from 'framer-motion'
import { useRef } from 'react'

const topRibbonItems = [
  'Brand Design',
  'Logo Design',
  'Website Design',
  'Brand Design',
  'Logo Design',
  'Website Design',
]

const bottomRibbonItems = [
  '10 Years of Experience',
  'Over 100 Customers',
  'Senior Designer',
  '10 Years of Experience',
  'Over 100 Customers',
  'Senior Designer',
]

// Custom Separator Component
const Separator = () => (
  <span className="mx-6 md:mx-10 text-xl font-light opacity-80 select-none">✦</span>
)

export default function Services() {
  const containerRef = useRef(null)

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#f4f4f4] py-32 flex flex-col justify-center items-center -mt-16"
      style={{ zIndex: 10 }}
    >
      {/* Add custom keyframes block for marquee since Tailwind doesn't have it built-in by default */}
      <style>{`
        @keyframes marquee-left-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-right-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-lr {
          animation: marquee-left-right 25s linear infinite;
        }
        .animate-marquee-rl {
          animation: marquee-right-left 25s linear infinite;
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Edge Gradients for Smooth Fade Effect */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#f4f4f4] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#f4f4f4] to-transparent z-20 pointer-events-none" />

      {/* --- TOP RIBBON (Orange, moving Left to Right) --- */}
      <div className="w-[110vw] md:w-[120vw] relative left-1/2 -translate-x-1/2 transform rotate-[-3deg] origin-center mb-6 z-10">
        <div className="bg-[#FF5A1F] py-4 text-white shadow-xl overflow-hidden flex cursor-default">
          <div className="flex w-max animate-marquee-lr hover-pause will-change-transform">
            {/* Array duplicated 4 times to ensure enough width for seamless -50% translation */}
            {[...topRibbonItems, ...topRibbonItems, ...topRibbonItems, ...topRibbonItems, ...topRibbonItems, ...topRibbonItems].map((item, i) => (
              <div key={i} className="flex items-center text-xl md:text-2xl font-bold uppercase tracking-wider whitespace-nowrap">
                {item}
                <Separator />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- BOTTOM RIBBON (Black, moving Right to Left) --- */}
      <div className="w-[110vw] md:w-[120vw] relative left-1/2 -translate-x-1/2 transform rotate-[3deg] origin-center z-0">
        <div className="bg-[#000000] py-4 text-white shadow-xl overflow-hidden flex cursor-default">
          <div className="flex w-max animate-marquee-rl hover-pause will-change-transform">
            {[...bottomRibbonItems, ...bottomRibbonItems, ...bottomRibbonItems, ...bottomRibbonItems, ...bottomRibbonItems, ...bottomRibbonItems].map((item, i) => (
              <div key={i} className="flex items-center text-xl md:text-2xl font-bold uppercase tracking-wider text-gray-200 whitespace-nowrap">
                {item}
                <Separator />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
