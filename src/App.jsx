import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ThinkHR from './components/ThinkHR';
import Sectors from './components/Sectors';
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
        <StatsBand />
        <About />
        <Services />
        <ThinkHR />
        <Sectors />
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

function StatsBand() {
  return (
    <div style={{ background: '#006BA6', padding: '52px 24px' }}>
      <div className="st-grid-inner" style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
        {[
          { n: '150+', l: 'Organizations Served', c: '#FFBC42' },
          { n: '5,000+', l: 'Professionals Trained', c: '#FFBC42' },
          { n: '2,000+', l: 'Roles Filled', c: '#FFBC42' },
          { n: '15+', l: 'Years of Expertise', c: '#FFBC42' },
        ].map((s, i) => (
          <div key={i} style={{
            textAlign: 'center', padding: '0 16px',
            borderRight: i < 3 ? '1px solid rgba(255,255,255,.15)' : 'none',
          }}>
            <div style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,42px)', color: s.c, lineHeight: 1, marginBottom: 6 }}>
              {s.n}
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.85)' }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:640px){
          .st-grid-inner { grid-template-columns:repeat(2,1fr) !important; gap:24px !important; }
        }
      `}</style>
    </div>
  );
}

export default App;