import { useState } from 'react';
import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';

const FALLBACK_IMG = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22800%22 height%3D%22600%22%3E%3Crect width%3D%22800%22 height%3D%22600%22 fill%3D%22%23F2F6F9%22%2F%3E%3Ccircle cx%3D%22400%22 cy%3D%22300%22 r%3D%2280%22 fill%3D%22%23C9CCD5%22%2F%3E%3C%2Fsvg%3E';

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="home" className="relative min-h-screen bg-[#F2F6F9] pt-16 lg:pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
          {/* Left Column - Content */}
          <div className="flex-1 flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-0" ref={ref}>
            <div className="w-full max-w-xl">
              {/* Kicker Pill */}
              <div className={`mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <PillBadge text="License 2264/RWP" index={0} />
              </div>

              {/* Headline */}
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0B2436] leading-[1.1] mb-6 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="block">Trusted Trade,</span>
                <span className="block text-[#1B4965]">Tested Results,</span>
                <span className="block bg-gradient-to-r from-[#FF6B35] to-[#5FA8D3] bg-clip-text text-transparent">
                  Real Departures.
                </span>
              </h1>

              {/* Subhead */}
              <p className={`text-base sm:text-lg lg:text-xl text-[#0B2436]/70 leading-relaxed mb-8 max-w-lg transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <strong className="text-[#1B4965]">M. G. Traders</strong> places Rawalpindi's workers with vetted Gulf and European employers — licensed and precise.
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap gap-3 sm:gap-4 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <a
                  href="https://wa.me/923330572222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
                >
                  <i className="fab fa-whatsapp" />
                  Apply on WhatsApp
                </a>
                <a
                  href="https://wa.me/923330572222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#1B4965]/30 hover:border-[#FF6B35] text-[#0B2436] hover:text-[#FF6B35] font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all"
                >
                  <i className="fab fa-whatsapp" />
                  WhatsApp
                </a>
              </div>

              {/* Trust indicators */}
              <div className={`flex items-center gap-6 mt-10 pt-8 border-t border-[#C9CCD5]/60 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center gap-2">
                  <i className="fas fa-building text-[#1B4965] text-sm" />
                  <span className="text-xs text-[#0B2436]/60">Rehmanabad Chowk, Rawalpindi</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-globe text-[#5FA8D3] text-sm" />
                  <span className="text-xs text-[#0B2436]/60">8+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-[#FF6B35] text-sm" />
                  <span className="text-xs text-[#0B2436]/60">License 2264/RWP</span>
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
                fill="#F2F6F9"
              />
            </svg>

            {/* Image */}
            <img
              src={imgError ? FALLBACK_IMG : "/images/hero-bg.jpg"}
              alt="Workers heading abroad"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              onError={() => setImgError(true)}
              onLoad={() => setImgLoaded(true)}
              loading="eager"
            />

            {/* Floating Stat Chips */}
            <div className="absolute top-[15%] right-8 z-20 float-animate">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 border-l-4 border-[#FF6B35]">
                <div className="text-[#1B4965] font-black text-xl">5000+</div>
                <div className="text-[10px] text-[#0B2436]/60 font-medium">Workers Placed</div>
              </div>
            </div>
            <div className="absolute bottom-[25%] right-8 z-20 float-animate" style={{ animationDelay: '1.5s' }}>
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 border-l-4 border-[#5FA8D3]">
                <div className="text-[#1B4965] font-black text-xl">8+</div>
                <div className="text-[10px] text-[#0B2436]/60 font-medium">Countries</div>
              </div>
            </div>
            <div className="absolute bottom-[10%] left-[15%] z-20 float-animate" style={{ animationDelay: '0.8s' }}>
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 border-l-4 border-[#1B4965]">
                <div className="text-[#1B4965] font-black text-xl">2264</div>
                <div className="text-[10px] text-[#0B2436]/60 font-medium">License /RWP</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F2F6F9] to-transparent pointer-events-none" />
    </section>
  );
}
