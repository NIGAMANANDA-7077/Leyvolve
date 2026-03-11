import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const cards = [
  {
    id: 1,
    title: 'Web Development & Design',
    description: "We've helped startups and brands across industries launch stunning, high-performance websites that captivate and convert. Here are some of our selected works.",
    year: '2025',
    role: 'Lead Designer',
    services: ['Website Design', 'Product Design', 'Branding', 'Development'],
    accent: '#6366f1',
    tag: 'Ps',
    mockupBg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    mockupAccent: 'rgba(99,102,241,0.3)',
    mockupTitle: 'Archin Design Studio',
    mockupSubtitle: 'Web & Brand Identity',
  },
  {
    id: 2,
    title: 'Influencer Marketing',
    description: "Connecting brands with the right creators for measurable reach. We identify, manage, and track influencer campaigns that deliver authentic results and real conversions.",
    year: '2025',
    role: 'Campaign Lead',
    services: ['Influencer Strategy', 'Creator Outreach', 'Campaign Tracking', 'ROI Analysis'],
    accent: '#f472b6',
    tag: 'Ai',
    mockupBg: 'linear-gradient(135deg, #2e1a2e 0%, #3d0f3d 50%, #5c0a3f 100%)',
    mockupAccent: 'rgba(244,114,182,0.3)',
    mockupTitle: 'Nova Creator Network',
    mockupSubtitle: 'Influencer Campaigns',
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: "Full-funnel digital strategies built to scale. From paid acquisition to email funnels, we help startups build predictable revenue engines — no guesswork, just growth.",
    year: '2025',
    role: 'Growth Strategist',
    services: ['PPC Ads', 'Email Marketing', 'Conversion Funnels', 'Analytics'],
    accent: '#fb923c',
    tag: 'Xd',
    mockupBg: 'linear-gradient(135deg, #2e1a0a 0%, #3d2a10 50%, #5c3a18 100%)',
    mockupAccent: 'rgba(251,146,60,0.3)',
    mockupTitle: 'Launchpad Growth Co.',
    mockupSubtitle: 'Digital Marketing Suite',
  },
  {
    id: 4,
    title: 'Social Media Management',
    description: "Strategic social presence that builds community and drives engagement. We create, schedule, and optimize content across all major platforms with data at the helm.",
    year: '2025',
    role: 'Social Strategist',
    services: ['Content Creation', 'Scheduling', 'Instagram', 'LinkedIn'],
    accent: '#34d399',
    tag: 'Fg',
    mockupBg: 'linear-gradient(135deg, #0a2e1a 0%, #103d20 50%, #155c30 100%)',
    mockupAccent: 'rgba(52,211,153,0.3)',
    mockupTitle: 'Greenwave Social Hub',
    mockupSubtitle: 'Social Media Strategy',
  },
  {
    id: 5,
    title: 'SEO Optimization',
    description: "Dominate search rankings with technical precision. Keyword research, on-page optimization, authority building — compounding organic traffic that grows month over month.",
    year: '2025',
    role: 'SEO Lead',
    services: ['Technical SEO', 'Keyword Research', 'Link Building', 'Content Strategy'],
    accent: '#38bdf8',
    tag: 'In',
    mockupBg: 'linear-gradient(135deg, #0a1a2e 0%, #0f2a40 50%, #153d5c 100%)',
    mockupAccent: 'rgba(56,189,248,0.3)',
    mockupTitle: 'Apex Search Consulting',
    mockupSubtitle: 'SEO & Content Strategy',
  },
]

// Device mockup SVG component
function LaptopMockup({ card }) {
  return (
    <div className="relative w-full flex items-center justify-center">

      {/* Ambient glow behind mockup */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 60%, ${card.mockupAccent} 0%, transparent 70%)`,
          filter: 'blur(30px)',
        }}
      />

      {/* Laptop shell */}
      <div className="relative w-[85%] max-w-[520px]">

        {/* Screen */}
        <div
          className="relative rounded-t-2xl overflow-hidden border border-white/10"
          style={{ paddingTop: '62%', background: card.mockupBg }}
        >
          {/* Screen content */}
          <div className="absolute inset-0 p-5 flex flex-col justify-between">
            {/* Fake nav bar */}
            <div className="flex items-center gap-2 mb-3">
              <div
                className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded"
                style={{ backgroundColor: card.accent, color: '#000' }}
              >
                {card.tag}
              </div>
              <div className="flex-1 h-1 rounded bg-white/5" />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: card.accent }} />
            </div>

            {/* Fake hero image area */}
            <div
              className="flex-1 rounded-xl overflow-hidden relative flex items-end p-4"
              style={{
                background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%), ${card.mockupBg}`,
                border: `1px solid ${card.accent}25`,
              }}
            >
              {/* Abstract building/pattern */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bottom-0 rounded-t-sm"
                    style={{
                      left: `${10 + i * 14}%`,
                      width: '10%',
                      height: `${30 + (i % 3) * 20}%`,
                      backgroundColor: card.accent,
                      opacity: 0.4 + (i % 3) * 0.2,
                    }}
                  />
                ))}
              </div>

              {/* Text overlay */}
              <div className="relative z-10">
                <p className="text-white/50 text-[9px] uppercase tracking-widest mb-1">{card.mockupSubtitle}</p>
                <h3 className="text-white font-bold text-base leading-tight">{card.mockupTitle}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop base/hinge */}
        <div className="h-2.5 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b border-t border-white/5" />
        <div className="h-1.5 bg-gradient-to-b from-[#1a1a1a] to-[#111] rounded-b-xl mx-4 border-x border-b border-white/5" />

        {/* Small device (phone) in corner */}
        <div
          className="absolute -bottom-4 -right-4 w-[22%] rounded-xl overflow-hidden border border-white/10 shadow-xl"
          style={{ aspectRatio: '9/16', background: card.mockupBg }}
        >
          <div className="p-1.5 h-full flex flex-col gap-1">
            <div className="w-full rounded bg-white/10 flex-1" style={{ background: `${card.accent}25` }} />
            <div className="w-2/3 h-1 rounded bg-white/10" />
            <div className="w-1/2 h-1 rounded bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ScrollCard({ card, index, totalCards }) {
  const wrapperRef = useRef(null)

  // Track the scrolling of *this specific wrapper component*
  // This causes the card to scale down slightly as it scrolls UP while pinned.
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start'] // 100vh range
  })

  // Scale down when this card gets pushed back by the next card
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  // Fade out completely so the previous card disappears
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Top offset is identical for all cards so they stack directly on top of each other
  const topOffset = `12vh`

  return (
    <div ref={wrapperRef} className="w-full relative" style={{ height: '100vh' }}>
      <div
        className="sticky w-full flex justify-center px-4 md:px-10"
        style={{ top: topOffset }}
      >
        <motion.div
          style={{
            scale: index === totalCards - 1 ? 1 : scale,
            opacity: index === totalCards - 1 ? 1 : opacity,
            transformOrigin: 'top center',
          }}
          className="relative w-full max-w-[85rem] rounded-[32px] overflow-hidden"
        >
          {/* Card Base Style */}
          <div
            className="absolute inset-0 bg-black/95 border border-white/10"
            style={{
              background: 'linear-gradient(180deg, #111 0%, #050505 100%)',
              boxShadow: `0 -10px 40px rgba(0,0,0,0.1), 0 30px 60px rgba(0,0,0,0.4)`,
            }}
          />

          {/* Subtle top shimmer */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent 0%, ${card.accent}80 50%, transparent 100%)` }}
          />

          {/* Content grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[280px_1fr_240px]" style={{ height: 'clamp(380px, 75vh, 650px)' }}>

            {/* LEFT COL: description */}
            <div className="flex flex-col justify-between p-8 md:p-12 border-r border-white/5">
              <div className="mt-8">
                <p className="text-[#a0a0a0] text-[15px] leading-relaxed">
                  {card.description}
                </p>
              </div>
              <button
                className="self-start text-xs font-medium px-5 py-2.5 rounded-full border transition-all hover:opacity-80"
                style={{ color: card.accent, borderColor: `${card.accent}40`, backgroundColor: `${card.accent}12` }}
              >
                View Work →
              </button>
            </div>

            {/* CENTER COL: mockup */}
            <div className="flex items-center justify-center px-6 py-8 relative">
              <LaptopMockup card={card} />
            </div>

            {/* RIGHT COL: metadata */}
            <div className="flex flex-col justify-center gap-8 p-8 md:p-12 border-l border-white/5">
              <div>
                <p className="text-[#555] text-[10px] uppercase tracking-[0.15em] mb-2 font-semibold">Year</p>
                <p className="text-white font-bold text-2xl">{card.year}</p>
              </div>
              <div>
                <p className="text-[#555] text-[10px] uppercase tracking-[0.15em] mb-2 font-semibold">Role</p>
                <p className="text-[#f0f0f0] text-sm">{card.role}</p>
              </div>
              <div>
                <p className="text-[#555] text-[10px] uppercase tracking-[0.15em] mb-2 font-semibold">Services</p>
                <div className="flex flex-col gap-1.5">
                  {card.services.map((s, i) => (
                    <p key={i} className="text-[#f0f0f0] font-medium text-[13px]">{s}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar: title + counter */}
          <div
            className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 md:px-12 py-5 border-t border-white/5"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}
          >
            <h3 className="text-white font-bold text-lg tracking-tight">{card.title}</h3>
            <span className="text-[#555] font-mono text-sm tracking-widest font-semibold">
              0{card.id} / 0{totalCards}
            </span>
          </div>

        </motion.div>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" className="relative bg-[#f4f4f4] pt-20 pb-32">

      {/* Huge subtle text in the background */}
      <div className="sticky top-10 w-full flex justify-center pointer-events-none z-0 overflow-hidden select-none">
        <h2
          className="font-display font-black text-[clamp(4rem,14vw,12rem)] text-[#e8e8e8] leading-none tracking-tight"
          style={{ textShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
        >
          Recent Works
        </h2>
      </div>

      <div className="relative z-10 w-full mx-auto pb-20">

        {/* Section info text */}
        <div className="flex-shrink-0 pt-4 pb-0 text-center relative z-20">
          <span className="font-mono text-[11px] text-[#555] tracking-[0.3em] uppercase">(Why clients love us)</span>
        </div>

        {/* Mapped stacked cards */}
        <div className="mt-10">
          {cards.map((card, i) => (
            <ScrollCard
              key={card.id}
              card={card}
              index={i}
              totalCards={cards.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
