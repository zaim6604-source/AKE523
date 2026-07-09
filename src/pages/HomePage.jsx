import MarqueeBar from '../components/MarqueeBar';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import About from '../components/About';
import Services from '../components/Services';
import Countries from '../components/Countries';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import CTABand from '../components/CTABand';
import FAQs from '../components/FAQs';

export default function HomePage() {
  return (
    <>
      <MarqueeBar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Countries />
      <Process />
      <Testimonials />
      <Gallery />
      <CTABand />
      <FAQs />
    </>
  );
}