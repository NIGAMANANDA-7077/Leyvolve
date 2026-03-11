import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import About from '../components/About.jsx'
import Process from '../components/Process.jsx'
import Portfolio from '../components/Portfolio.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
