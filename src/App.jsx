import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTABand from './components/CTABand';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ImpactBand />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <CTABand />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWidget />
    </>
  );
}

function ImpactBand() {
  return (
    <div className="bg-primary py-14 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-6 gap-0">
        {[
          { n: '5,000+', l: 'Families Helped', c: '#FFDD00' },
          { n: '50+', l: 'Relief Drives', c: '#FFDD00' },
          { n: '200+', l: 'Volunteers', c: '#FFDD00' },
          { n: '10+', l: 'Years Serving', c: '#FFDD00' },
        ].map((s, i) => (
          <div key={i} className="text-center px-4" style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,.15)' : 'none' }}>
            <div className="font-heading font-black text-[clamp(28px,3.5vw,42px)] leading-none mb-1.5" style={{ color: s.c }}>
              {s.n}
            </div>
            <div className="text-[13px] font-medium text-white/85">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;