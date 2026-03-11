import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {
  const [badgeVisible, setBadgeVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setBadgeVisible(window.scrollY < 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Top Badge - full width wrapper centering avoids scrollbar offset */}
      <AnimatePresence>
        {badgeVisible && (
          <motion.div
            key="badge"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 inset-x-0 z-[9999] flex justify-center pointer-events-none"
          >
            <div className="inline-flex items-center gap-2.5 px-7 pt-2.5 pb-2.5 bg-[#2d2d2d] text-white rounded-b-2xl shadow-md pointer-events-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
              <span className="text-[13px] font-medium tracking-wide">Available for New Projects</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative min-h-[90vh] flex flex-col items-center pt-40 pb-20 overflow-hidden bg-[#f4f4f4] rounded-b-[3rem]">

        {/* Content wrapper */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-4 flex flex-col items-center text-center">

          {/* Avatars & Trusted text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="flex -space-x-3">
              <img className="w-9 h-9 rounded-full border-[3px] border-[#f4f4f4] object-cover filter grayscale" src="https://i.pravatar.cc/150?img=11" alt="Avatar 1" />
              <img className="w-9 h-9 rounded-full border-[3px] border-[#f4f4f4] object-cover filter grayscale" src="https://i.pravatar.cc/150?img=12" alt="Avatar 2" />
              <img className="w-9 h-9 rounded-full border-[3px] border-[#f4f4f4] object-cover" src="https://i.pravatar.cc/150?img=33" alt="Avatar 3" />
            </div>
            <span className="text-gray-500 font-medium text-[15px]">Trusted by founders.</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="font-display font-bold text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-tight text-[#1a1a1a] max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 mb-2">
              <span>Effortless</span>
              <span className="w-[clamp(3.5rem,8vw,5.5rem)] h-[clamp(3.5rem,8vw,5.5rem)] rounded-full overflow-hidden shadow-sm bg-orange-100 flex items-center justify-center p-1.5 transform -rotate-6">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=200&h=200&auto=format&fit=crop" alt="Phone" className="w-full h-full object-cover rounded-full mix-blend-multiply" />
              </span>
              <span className="text-[#ff5c00]">Design</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 mb-2">
              <span className="text-gray-500 font-medium text-[clamp(2rem,5vw,4.5rem)]">for</span>
              <span className="w-[clamp(3.5rem,8vw,5.5rem)] h-[clamp(3.5rem,8vw,5.5rem)] rounded-full overflow-hidden shadow-sm bg-stone-800 p-0.5">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200&h=200&auto=format&fit=crop" alt="Working" className="w-full h-full object-cover rounded-full opacity-90" />
              </span>
              <span>Design Startups</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4">
              <span className="text-gray-500 font-medium text-[clamp(2rem,5vw,4.5rem)]">based in</span>
              <span>INDIA</span>
              <span className="w-[clamp(3.5rem,8vw,5.5rem)] h-[clamp(3.5rem,8vw,5.5rem)] rounded-full overflow-hidden border-2 border-slate-200">
                <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=200&h=200&auto=format&fit=crop" alt="INDIA" className="w-full h-full object-cover" />
              </span>
          
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 font-body text-[clamp(0.9rem,1.5vw,1.1rem)] text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            We make it easy for startups to launch, grow, and scale with clean,
            <br className="hidden md:block" /> conversion focused designs — no delays, no drama.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <button
              onClick={() => scrollTo('#pricing')}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#3d3d3d] hover:bg-[#222] text-white rounded-full font-medium text-[15px] transition-all duration-300 shadow-md transform hover:scale-105"
            >
              View Plans
              <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>

        </div>
      </section>
    </>
  )
}
