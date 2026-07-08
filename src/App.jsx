import Navbar from './Navbar';
import MarqueeTicker from './MarqueeTicker';
import Hero from './Hero';
import StatBand from './StatBand';
import About from './About';
import Services from './Services';
import CountryGuide from './CountryGuide';
import Process from './Process';
import Testimonials from './Testimonials';
import GalleryStrip from './GalleryStrip';
import CTABand from './CTABand';
import Contact from './Contact';
import FAQs from './FAQs';
import Footer from './Footer';
import QuickApply from './QuickApply';

function App() {
  return (
    <div className="min-h-screen bg-[#F8EEFF]">
      <Navbar />
      <MarqueeTicker />
      <Hero />
      <StatBand />
      <About />
      <Services />
      <CountryGuide />
      <Process />
      <Testimonials />
      <GalleryStrip />
      <CTABand />
      <Contact />
      <FAQs />
      <Footer />
      <QuickApply />
    </div>
  );
}

export default App;