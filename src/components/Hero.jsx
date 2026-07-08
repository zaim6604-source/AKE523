import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

const IMAGES = {
  skyline: '/images/skyline.jpg',
  departures: '/images/departures.jpg',
  worker: '/images/worker.jpg',
};

export default function Hero() {
  return (
    <section id="home" className="pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left - Text */}
          <FadeUp className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#FFD700]/20 text-[#B8004F] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4 border border-[#FFD700]/30">
              <i className="fa-solid fa-certificate mr-1.5 text-[#FFD700]"></i>
              Govt. Licensed OEP 2175/RWP
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3D0A1E] leading-tight mb-4">
              Your Gateway to the Gulf,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0115F] to-[#7B2D8E]">
                Done Right
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#5C1A32]/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Based in I-8 Markaz, Islamabad, Arabian Gulf International is a government-licensed
              overseas employment promoter connecting Pakistan's top talent with premium career
              opportunities across the Arabian Gulf.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#7B2D8E] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#E0115F] transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <i className="fa-solid fa-paper-plane mr-2"></i>Apply Now
              </a>
              <a
                href="tel:0514938271"
                className="border-2 border-[#7B2D8E] text-[#7B2D8E] font-semibold px-7 py-3.5 rounded-full hover:bg-[#7B2D8E] hover:text-white transition-all text-sm sm:text-base"
              >
                <i className="fa-solid fa-phone mr-2"></i>Call Us
              </a>
            </div>
          </FadeUp>

          {/* Right - Geometric shape collage */}
          <FadeUp delay={2} className="flex-1 relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] w-full">
              {/* Large circle - skyline photo */}
              <div className="absolute top-0 right-0 w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg float-anim img-zoom">
                <SafeImage src={IMAGES.skyline} alt="Dubai skyline" className="w-full h-full object-cover" type="hero" />
              </div>

              {/* Rounded square - departures */}
              <div className="absolute top-20 left-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-lg float-anim img-zoom" style={{ animationDelay: '0.5s' }}>
                <SafeImage src={IMAGES.departures} alt="Airport departures" className="w-full h-full object-cover" type="hero" />
              </div>

              {/* Pill shape - worker */}
              <div className="absolute bottom-0 right-10 w-36 h-28 sm:w-40 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg float-anim img-zoom" style={{ animationDelay: '1s' }}>
                <SafeImage src={IMAGES.worker} alt="Professional worker" className="w-full h-full object-cover" type="hero" />
              </div>

              {/* Solid color shapes */}
              <div className="absolute bottom-10 left-10 w-16 h-16 rounded-xl bg-[#E0115F] shadow-lg float-anim" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-0 left-1/3 w-12 h-12 rounded-full bg-[#FFD700] shadow-lg float-anim" style={{ animationDelay: '2s' }}></div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-[#FFD700] text-[#3D0A1E] font-extrabold text-sm px-4 py-2 rounded-full shadow-lg rotate-12">
                2175/RWP
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}