import Navbar from './components/Navbar';
import MarqueeTicker from './components/MarqueeTicker';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <MarqueeTicker />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <Industries />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <CTA />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  );
}
