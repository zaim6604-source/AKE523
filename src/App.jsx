import Navbar from './components/Navbar';
import MarqueeBar from './components/MarqueeBar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Services from './components/Services';
import Countries from './components/Countries';
import JobsStrip from './components/JobsStrip';
import EligibilityWizard from './components/EligibilityWizard';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTABand from './components/CTABand';
import Contact from './components/Contact';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import QuickApply from './components/QuickApply';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <MarqueeBar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Countries />
      <JobsStrip />
      <EligibilityWizard />
      <Process />
      <Testimonials />
      <Gallery />
      <CTABand />
      <Contact />
      <FAQs />
      <Footer />
      <QuickApply />
      <ScrollToTop />
    </div>
  );
}

export default App;
