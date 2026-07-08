import Navbar from './components/Navbar';
import MarqueeBar from './components/MarqueeBar';
import Hero from './components/Hero';
import StatBand from './components/StatBand';
import WaveDivider from './components/WaveDivider';
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
      <Hero />
      <StatBand />
      <WaveDivider color="#F2F6F9" flip />
      <About />
      <WaveDivider color="#1B4965" />
      <Services />
      <WaveDivider color="#F2F6F9" flip />
      <Countries />
      <WaveDivider color="#0B3954" />
      <Process />
      <WaveDivider color="#F2F6F9" flip />
      <Testimonials />
      <WaveDivider color="#1B4965" />
      <Gallery />
      <WaveDivider color="#F2F6F9" flip />
      <CTABand />
      <WaveDivider color="#F2F6F9" flip />
      <Contact />
      <WaveDivider color="#F2F6F9" flip />
      <FAQ />
      <Footer />
      <QuickApply />
    </>
  );
}