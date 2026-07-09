import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

const IMAGES = {
  skyline: '/images/skyline.jpg',
  departures: '/images/departures.jpg',
  worker: '/images/worker.jpg',
  hero: '/images/hero-bg.jpg',
};

export default function Hero() {
  return (
    <section id="home" className="pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left - Text */}
          <FadeUp className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#FFD500]/20 text-[#A30000] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4 border border-[#FFD500]/30">
              <i className="fa-solid fa-certificate mr-1.5 text-[#FFD500]"></i>
              Govt. Licensed OEP 2312/RWP
            </span>
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1C1C1C] leading-tight mb-4">
              Blue Area's High-Performance Route to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E10600] to-[#FF4D4D]">
                Jobs Abroad
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#1C1C1C]/70 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Barkha International places Islamabad's workers with vetted Gulf and European employers — licensed and precise.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/923009050416"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD500] text-[#141414] font-bold px-7 py-3.5 rounded-full hover:bg-[#E10600] hover:text-white transition-all shadow-lg hover:shadow-xl text-sm sm:text-base pulse-cta"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>Apply via WhatsApp
              </a>
              <a
                href="https://wa.me/923009050416"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#FFD500] text-[#141414] font-semibold px-7 py-3.5 rounded-full hover:bg-[#FFD500] transition-all text-sm sm:text-base"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>WhatsApp
              </a>
            </div>
            {/* Stat chips */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              {[
                { icon: 'fa-check-circle', text: '2312/RWP Licensed', color: 'text-green-600' },
                { icon: 'fa-users', text: '5000+ Placed', color: 'text-[#E10600]' },
                { icon: 'fa-globe', text: '9 Countries', color: 'text-[#A30000]' },
              ].map((chip, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-white text-[#1C1C1C] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm border border-[#E10600]/10"
                >
                  <i className={`fa-solid ${chip.icon} ${chip.color}`}></i>
                  {chip.text}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* Right - Geometric shape collage */}
          <FadeUp delay={2} className="flex-1 relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] w-full">
              {/* Large circle - skyline photo */}
              <div className="absolute top-0 right-0 w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg float-anim img-zoom">
                <SafeImage src={IMAGES.skyline} alt="Islamabad skyline" className="w-full h-full object-cover" type="hero" />
              </div>

              {/* Rounded square - departures */}
              <div className="absolute top-20 left-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-lg float-anim img-zoom" style={{ animationDelay: '0.5s' }}>
                <SafeImage src={IMAGES.worker} alt="Professional workers" className="w-full h-full object-cover" type="hero" />
              </div>

              {/* Pill shape - departures */}
              <div className="absolute bottom-0 right-10 w-36 h-28 sm:w-40 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg float-anim img-zoom" style={{ animationDelay: '1s' }}>
                <SafeImage src={IMAGES.departures} alt="Airport departures" className="w-full h-full object-cover" type="hero" />
              </div>

              {/* Solid color shapes */}
              <div className="absolute bottom-10 left-10 w-16 h-16 rounded-xl bg-[#E10600] shadow-lg float-anim" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-0 left-1/3 w-12 h-12 rounded-full bg-[#FFD500] shadow-lg float-anim" style={{ animationDelay: '2s' }}></div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-[#FFD500] text-[#141414] font-extrabold text-sm px-4 py-2 rounded-full shadow-lg rotate-12">
                2312/RWP
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}