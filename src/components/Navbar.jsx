import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Works', href: '#works' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          scrolled
            ? 'top-4 px-4'
            : 'top-16 px-6'
        }`}
      >
        <div className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-full px-6 py-3' : 'bg-transparent py-2'}`}>
          {/* Logo - kept exactly from previous */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600 to-green-500 group-hover:from-blue-500 group-hover:to-green-400 transition-all duration-300" />
              <div className="absolute inset-[2px] rounded-[5px] bg-white flex items-center justify-center">
                <span className="text-gradient text-xs font-display font-black">L</span>
              </div>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
              Leyvolve
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => handleNav(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                className="relative text-[15px] font-body text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              onClick={() => handleNav('#contact')}
              className="px-7 py-2.5 text-sm font-medium text-white bg-slate-700 hover:bg-slate-800 rounded-full transition-colors duration-300"
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-6 h-px bg-slate-800 origin-center transition-all"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? -10 : 0 }}
              className="block w-4 h-px bg-slate-800"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-6 h-px bg-slate-800 origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  onClick={() => handleNav(link.href)}
                  className="text-3xl font-display font-bold text-slate-700 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => handleNav('#contact')}
                className="mt-4 px-8 py-3 text-lg font-medium text-white rounded-full bg-slate-700"
              >
                Contact
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
