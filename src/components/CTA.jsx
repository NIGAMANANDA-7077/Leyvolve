import { useRef } from 'react'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-[#f4f4f4] py-32 overflow-hidden flex flex-col items-center">

      {/* Huge subtle sticky text in the background */}
      <div className="absolute top-10 w-full flex justify-center pointer-events-none z-0 overflow-hidden select-none">
        <h2
          className="font-display font-black text-[clamp(4rem,14vw,14rem)] text-[#e8e8e8] leading-none tracking-tight whitespace-nowrap"
          style={{ textShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
        >
          Let's Connect
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-[85rem] px-4 md:px-8 mx-auto -mt-10">

        {/* The Black Card */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#0A0A0A] shadow-2xl min-h-[500px] flex flex-col justify-between">

          {/* Background Blurred Image Grid to match screenshot */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none" style={{ filter: 'blur(3px)' }}>
            <div className="grid grid-cols-4 gap-2 w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] opacity-50">
              {/* Simulating the grid of blurred project images */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-full bg-slate-800 rounded-sm"
                  style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(45deg, #1f2937, #374151)'
                      : (i % 3 === 0 ? 'linear-gradient(to right, #7e22ce, #db2777)' : 'linear-gradient(to bottom, #d97706, #b45309)'),
                    opacity: 0.3 + (Math.random() * 0.5)
                  }}
                />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" /> {/* Extra darken layer */}

          {/* Main Content Area */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between p-12 md:p-24 pb-16 gap-16 md:gap-8">

            {/* Left side: Headline */}
            <div className="flex-1 md:max-w-md">
              <h2 className="font-display font-bold text-white text-5xl md:text-6xl tracking-tight leading-[1.1] mb-6">
                Got a project in mind?
              </h2>
              <p className="text-[#a0a0a0] text-sm md:text-base">
                Let's make something happen together
              </p>
            </div>

            {/* Right side: Form */}
            <div className="flex-1 w-full max-w-lg">
              <form className="flex flex-col gap-8">

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-white font-semibold text-sm">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Your Name"
                    className="w-full bg-transparent border-0 border-b border-white/20 text-white placeholder-white/30 text-sm focus:ring-0 focus:border-white transition-colors py-2 px-0"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-white font-semibold text-sm">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    className="w-full bg-transparent border-0 border-b border-white/20 text-white placeholder-white/30 text-sm focus:ring-0 focus:border-white transition-colors py-2 px-0"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="desc" className="text-white font-semibold text-sm">Project Description</label>
                  <textarea
                    id="desc"
                    placeholder="Type Here..."
                    rows={2}
                    className="w-full bg-transparent border-0 border-b border-white/20 text-white placeholder-white/30 text-sm focus:ring-0 focus:border-white transition-colors py-2 px-0 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  className="w-full mt-4 bg-white/90 hover:bg-white text-black font-semibold text-sm rounded-full py-3 transition-colors text-center"
                >
                  Send Now!
                </button>

              </form>
            </div>
          </div>

          {/* Bottom Marquee Strip */}
          <div className="relative w-full overflow-hidden border-t border-white/10 py-6 mb-2">
            <div className="absolute inset-x-0 h-full bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div className="flex w-[200%] whitespace-nowrap animate-marquee">
              {/* We create 4 duplicate sequences for infinite scroll feeling */}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 px-4 text-white/50 text-xl font-display font-medium">
                  <span>franklin@agero.com</span>
                  <span className="text-sm">✖</span>
                  <span>franklin@agero.com</span>
                  <span className="text-sm">✖</span>
                  <span>franklin@agero.com</span>
                  <span className="text-sm">✖</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
