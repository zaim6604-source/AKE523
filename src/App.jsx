import Navbar from './components/Navbar';
import MarqueeBar from './components/MarqueeBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Countries from './components/Countries';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTABand from './components/CTABand';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import QuickApply from './components/QuickApply';

export default function App() {
  return (
    <>
      <Navbar />
      <MarqueeBar />
      <main>
        <Hero />
        <About />
        <Services />
        <Countries />
        <Process />
        <Testimonials />
        <Gallery />
        <CTABand />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <QuickApply />
    </>
  );
}