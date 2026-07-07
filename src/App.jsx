import Navbar from "./components/Navbar";
import MarqueeTicker from "./components/MarqueeTicker";
import Hero from "./components/Hero";
import StatsBand from "./components/StatsBand";
import About from "./components/About";
import Services from "./components/Services";
import CountryGuide from "./components/CountryGuide";
import VisaImmigration from "./components/VisaImmigration";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import CTABand from "./components/CTABand";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingWidget from "./components/FloatingWidget";

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <MarqueeTicker />
      <Hero />
      <StatsBand />
      <About />
      <Services />
      <CountryGuide />
      <VisaImmigration />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <CTABand />
      <Contact />
      <FAQ />
      <Footer />
      <FloatingWidget />
    </div>
  );
}