import Navbar from './components/Navbar'
import MarqueeBar from './components/MarqueeBar'
import Hero from './components/Hero'
import StatBand from './components/StatBand'
import About from './components/About'
import Services from './components/Services'
import CountryGuide from './components/CountryGuide'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import CtaBand from './components/CtaBand'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Navbar />
      <MarqueeBar />
      <Hero />
      <StatBand />
      <About />
      <Services />
      <CountryGuide />
      <Process />
      <Testimonials />
      <Gallery />
      <CtaBand />
      <Contact />
      <Faq />
      <Footer />
    </div>
  )
}