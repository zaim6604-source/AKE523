import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import StatBand from './components/StatBand';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Credentials from './components/Credentials';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CtaBand from './components/CtaBand';
import Contact from './components/Contact';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Ticker />
      <Hero />
      <StatBand />
      <About />
      <PracticeAreas />
      <Credentials />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <CtaBand />
      <Contact />
      <Faqs />
      <Footer />
      <FloatingWidget />
    </div>
  );
}