import './index.css';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Sectors from './components/Sectors';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTABand from './components/CTABand';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import QuickApply from './components/QuickApply';

function App() {
  return (
    <>
      <Navbar />
      <Marquee />
      <main>
        <Hero />
        <Stats />
        <About />
        <Sectors />
        <Services />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <CTABand />
        <ContactForm />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <QuickApply />
    </>
  );
}

export default App;
