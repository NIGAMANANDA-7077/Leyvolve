import { useState } from 'react'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Project Title',
    link: '#',
  },
  {
    id: 2,
    number: '02',
    title: 'Project Title',
    link: '#',
  },
  {
    id: 3,
    number: '03',
    title: 'Project Title',
    link: '#',
  },
  {
    id: 4,
    number: '04',
    title: 'Project Title',
    link: '#',
  },
  {
    id: 5,
    number: '05',
    title: 'Project Title',
    link: '#',
  },
]

export default function Portfolio() {
  const [activeCard, setActiveCard] = useState(1)

  return (
    <section id="portfolio" className="relative bg-[#F4F7FA] py-24">

      {/* Ambient background gradients and mesh blobs to break the whiteness */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[50%] rounded-full bg-orange-50/40 blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[30%] rounded-full bg-indigo-50/60 blur-[130px]" />
      </div>

      {/* Huge subtle text in the background */}
      <div className="sticky top-10 w-full flex justify-center pointer-events-none z-0 overflow-hidden select-none">
        <h2
          className="font-display font-black text-[clamp(4rem,14vw,12rem)] text-slate-200/40 leading-none tracking-tight whitespace-nowrap"
          style={{ textShadow: '0 10px 30px rgba(0,0,0,0.01)' }}
        >
          Our Portfolio
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 -mt-20">

        {/* Section Header */}
        <div className="flex-shrink-0 pt-4 pb-0 text-center relative z-20 mb-12">
          <span className="font-mono text-[11px] text-[#555] tracking-[0.3em] uppercase">(Selected Works)</span>
        </div>

        {/* Horizontal Cards Container */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 min-h-[500px]">
          {projects.map((project) => {
            const isActive = activeCard === project.id

            return (
              <a
                key={project.id}
                href={project.link}
                onMouseEnter={() => setActiveCard(project.id)}
                className={`
                  relative group flex flex-col justify-between p-8 rounded-2xl border border-slate-200/60 
                  bg-gradient-to-br from-white to-slate-50 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  overflow-hidden cursor-pointer
                  ${isActive ? 'md:flex-[2.5] ring-1 ring-slate-200' : 'md:flex-1'}
                `}
                style={{
                  minHeight: '200px'
                }}
              >
                {/* Active/Hover Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-tr from-slate-100/80 via-white to-blue-50/30 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  style={{ zIndex: 0 }}
                />

                {/* Ambient glow inside card for active state */}
                {isActive && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5A1F]/5 blur-3xl pointer-events-none z-0" />
                )}

                {/* Card Number */}
                <div className="relative z-10 w-full flex justify-between items-start">
                  <span className={`font-display font-black leading-none transition-all duration-500 ${isActive ? 'text-6xl text-slate-800' : 'text-4xl text-slate-300 group-hover:text-slate-500'}`}>
                    {project.number}
                  </span>

                  {/* Arrow Icon appears when active */}
                  <div className={`
                    w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center
                    transition-all duration-500 transform
                    ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                  `}>
                    <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Card Content (Title & Link) */}
                <div className={`relative z-10 transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 md:opacity-100'}`}>
                  <h3 className={`font-bold text-slate-900 transition-all duration-500 ${isActive ? 'text-2xl mb-2' : 'text-lg md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-0 md:left-8 mb-0 whitespace-nowrap'}`}>
                    {project.title}
                  </h3>

                  <div className={`
                    flex items-center gap-2 text-sm font-medium text-[#FF5A1F]
                    transition-all duration-500 md:h-auto overflow-hidden
                    ${isActive ? 'max-h-12 opacity-100 md:mt-2' : 'max-h-0 opacity-0'}
                  `}>
                    View Project
                    <div className="w-8 h-[1px] bg-[#FF5A1F]/60" />
                  </div>
                </div>

              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}
