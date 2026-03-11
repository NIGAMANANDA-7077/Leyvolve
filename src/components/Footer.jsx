import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
]

const services = [
  'Web Development',
  'SEO Optimization',
  'Digital Marketing',
  'Social Media',
  'Influencer Marketing',
]

const socials = [
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Dribbble',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
  },
]

const handleScroll = (href) => {
  if (href === '#') return
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 rounded-md bg-gradient-to-br from-blue-600 to-green-500" />
                <div className="absolute inset-[2px] rounded-[4px] bg-slate-900 flex items-center justify-center">
                  <span className="text-gradient text-[10px] font-display font-black">L</span>
                </div>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">Leyvolve</span>
            </div>

            <p className="font-body text-sm text-slate-400 leading-relaxed mb-6 max-w-[220px]">
              Building digital experiences that drive measurable growth for modern brands.
            </p>

            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="w-8 h-8 rounded-lg border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-300"
                  aria-label={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-xs text-slate-500 tracking-widest uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="font-body text-sm text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-xs text-slate-500 tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleScroll('#services')}
                    className="font-body text-sm text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-xs text-slate-500 tracking-widest uppercase mb-5">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:hello@leyvolve.com" className="flex items-center gap-2 font-body text-sm text-slate-400 hover:text-white transition-colors duration-300">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                hello@leyvolve.com
              </a>

              <div>
                <div className="font-mono text-[10px] text-white/20 tracking-widest uppercase mb-2">Availability</div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-body text-xs text-slate-400">Open for new projects</span>
                </div>
              </div>

              <button
                onClick={() => handleScroll('#contact')}
                className="group inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full text-xs font-display font-medium text-white border border-blue-500/40 bg-blue-500/10 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300"
              >
                Start a Project
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
          <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-slate-500">
            © {new Date().getFullYear()} Leyvolve. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="font-body text-xs text-slate-500 hover:text-slate-300 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
