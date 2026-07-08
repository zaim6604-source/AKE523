import { useState } from 'react';
import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';

const FALLBACK_IMG = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22800%22 height%3D%22600%22%3E%3Crect width%3D%22800%22 height%3D%22600%22 fill%3D%22%23FFF3E6%22%2F%3E%3Ccircle cx%3D%22400%22 cy%3D%22300%22 r%3D%2280%22 fill%3D%22%23FFD23F%22%2F%3E%3C%2Fsvg%3E';

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="home" className="relative min-h-screen bg-[#FFF3E6] pt-16 lg:pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
          {/* Left Column - Content */}
          <div className="flex-1 flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-0" ref={ref}>
            <div className="w-full max-w-xl">
              {/* Kicker Pill */}
              <div className={`mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <PillBadge text="Govt. Licensed OEP 2174/RWP" index={2} />
              </div>

              {/* Headline */}
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#2B1200] leading-[1.1] mb-6 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="block">Rise.</span>
                <span className="block text-[#FF4500]">Renew.</span>
                <span className="block bg-gradient-to-r from-[#FF7F11] to-[#FFD23F] bg-clip-text text-transparent">
                  Relocate.
                </span>
              </h1>

              {/* Subhead */}
              <p className={`text-base sm:text-lg lg:text-xl text-[#2B1200]/70 leading-relaxed mb-8 max-w-lg transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Connecting the workers of <strong className="text-[#FF4500]">Rawalpindi</strong> and <strong className="text-[#FF4500]">Punjab</strong> to trusted employers worldwide — with government-licensed integrity and a relentless drive for your success.
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap gap-3 sm:gap-4 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0098b8] text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
                >
                  <i className="fas fa-paper-plane" />
                  Apply Now
                </a>
                <a
                  href="https://wa.me/923465320238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#2B1200]/20 hover:border-[#FF4500] text-[#2B1200] hover:text-[#FF4500] font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all"
                >
                  <i className="fab fa-whatsapp" />
                  WhatsApp Us
                </a>
              </div>

              {/* Trust indicators */}
              <div className={`flex items-center gap-6 mt-10 pt-8 border-t border-[#FFD23F]/40 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center gap-2">
                  <i className="fas fa-building text-[#00B4D8] text-sm" />
                  <span className="text-xs text-[#2B1200]/60">Saddar, Rawalpindi</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-globe text-[#FF7F11] text-sm" />
                  <span className="text-xs text-[#2B1200]/60">10+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-[#FF4500] text-sm" />
                  <span className="text-xs text-[#2B1200]/60">100% Govt. Licensed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Full-height Image */}
          <div className="hidden lg:block relative w-[45%] xl:w-[42%] shrink-0 overflow-hidden">
            {/* SVG wave overlay on left edge */}
            <svg
              className="absolute left-0 top-0 h-full z-10"
              style={{ width: '120px' }}
              preserveAspectRatio="none"
              viewBox="0 0 120 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M120,0 C60,120 20,250 100,380 C180,510 0,640 100,770 C180,900 40,950 120,1000 L0,1000 L0,0 Z"
                fill="#FFF3E6"
              />
            </svg>

            {/* Image */}
            <img
              src={imgError ? FALLBACK_IMG : "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=800&q=80"}
              alt="Skilled workers heading abroad"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              onError={() => setImgError(true)}
              onLoad={() => setImgLoaded(true)}
              loading="eager"
            />

            {/* Floating Stat Chips */}
            <div className="absolute top-[15%] right-8 z-20 float-animate">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 border-l-4 border-[#FFD23F]">
                <div className="text-[#FF4500] font-black text-xl">3500+</div>
                <div className="text-[10px] text-[#2B1200]/60 font-medium">Workers Placed</div>
              </div>
            </div>
            <div className="absolute bottom-[25%] right-8 z-20 float-animate" style={{ animationDelay: '1.5s' }}>
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 border-l-4 border-[#00B4D8]">
                <div className="text-[#00B4D8] font-black text-xl">10+</div>
                <div className="text-[10px] text-[#2B1200]/60 font-medium">Countries</div>
              </div>
            </div>
            <div className="absolute bottom-[10%] left-[15%] z-20 float-animate" style={{ animationDelay: '0.8s' }}>
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 border-l-4 border-[#FF7F11]">
                <div className="text-[#FF7F11] font-black text-xl">100%</div>
                <div className="text-[10px] text-[#2B1200]/60 font-medium">Govt. Licensed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFF3E6] to-transparent pointer-events-none" />
    </section>
  );
}