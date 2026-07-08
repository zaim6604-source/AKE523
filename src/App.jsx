import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MarqueeBar from './components/MarqueeBar';
import QuickApply from './components/QuickApply';
import SectionDivider from './components/SectionDivider';
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
import AlNakhl from './pages/AlNakhl';

function IthmanziPage() {
  return (
    <div className="min-h-screen bg-[#FFF3E6] font-sans">
      <Navbar />
      <MarqueeBar />
      <QuickApply />

      <Hero />
      <StatsBand />

      <SectionDivider variant="accent" flip />
      <About />
      <SectionDivider variant="cta" />

      <Services />
      <SectionDivider variant="secondary" flip />

      <CountryGuide />
      <SectionDivider variant="primary" />

      <Process />
      <SectionDivider variant="highlight" flip />

      <Testimonials />
      <SectionDivider variant="accent" />

      <Gallery />
      <SectionDivider variant="cta" flip />

      <CtaBand />
      <SectionDivider variant="secondary" />

      <Contact />
      <SectionDivider variant="highlight" flip />

      <Faqs />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IthmanziPage />} />
        <Route path="/al-nakhl" element={<AlNakhl />} />
      </Routes>
    </BrowserRouter>
  );
}