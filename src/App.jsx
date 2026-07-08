import Navbar from './components/Navbar';
import MarqueeBar from './components/MarqueeBar';
import QuickApply from './components/QuickApply';
import Hero from './components/Hero';
import StatsBand from './components/StatsBand';
import About from './components/About';
import Services from './components/Services';
import CountryGuide from './components/CountryGuide';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CtaBand from './components/CtaBand';
import Contact from './components/Contact';
import Faqs from './components/Faqs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2F6F9] font-sans">
      <Navbar />
      <MarqueeBar />
      <QuickApply />

      <Hero />
      <StatsBand />

      <About />
      <Services />

      <CountryGuide />
      <Process />

      <Testimonials />
      {/* <Gallery /> */}

      <CtaBand />

      <Contact />
      <Faqs />
      <Footer />
    </div>
  );
}