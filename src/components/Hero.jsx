import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

const IMAGES = {
  skyline: '/images/skyline.jpg',
  departures: '/images/departures.jpg',
  worker: '/images/worker.jpg',
};

export default function Hero() {
  return (
    <section id="home" className="pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-[#F2F6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left - Text */}
          <FadeUp className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#FF6B35]/15 text-[#FF6B35] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4 border border-[#FF6B35]/30">
              <i className="fa-solid fa-certificate mr-1.5 text-[#FF6B35]"></i>
              Govt. Licensed OEP 2235/RWP
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B2436] leading-tight mb-4 font-jakarta">
              Reaching New Heights in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4965] to-[#5FA8D3]">
                Overseas Recruitment
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#2A4A62]/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Highland International places Rawalpindi&apos;s workers with trusted Gulf and European employers — licensed and precise.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/923335243790"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF6B35] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#e55a2b] transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>Apply via WhatsApp
              </a>
              <a
                href="https://wa.me/923335243790"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#1B4965] text-[#1B4965] font-semibold px-7 py-3.5 rounded-full hover:bg-[#1B4965] hover:text-white transition-all text-sm sm:text-base"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>Chat with Us
              </a>
            </div>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              <span className="bg-white text-[#0B2436] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm border border-[#C9CCD5]/30">
                <i className="fa-solid fa-check-circle text-[#5FA8D3] mr-1"></i>License 2235/RWP
              </span>
              <span className="bg-white text-[#0B2436] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm border border-[#C9CCD5]/30">
                <i className="fa-solid fa-globe text-[#5FA8D3] mr-1"></i>Gulf &amp; Europe
              </span>
              <span className="bg-white text-[#0B2436] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm border border-[#C9CCD5]/30">
                <i className="fa-solid fa-users text-[#5FA8D3] mr-1"></i>5000+ Placed
              </span>
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
              <div className="absolute bottom-10 left-10 w-16 h-16 rounded-xl bg-[#1B4965] shadow-lg float-anim" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-0 left-1/3 w-12 h-12 rounded-full bg-[#FF6B35] shadow-lg float-anim" style={{ animationDelay: '2s' }}></div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-[#FF6B35] text-white font-extrabold text-sm px-4 py-2 rounded-full shadow-lg rotate-12">
                2235/RWP
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}