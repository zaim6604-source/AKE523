import { FaWhatsapp, FaUsers, FaStar, FaHandshake } from 'react-icons/fa';
import useInView from '../hooks/useInView';
import { useState } from 'react';

export default function Hero() {
  const [ref, inView] = useInView();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#FFF0F3] -z-10" />

      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-72 h-72 border border-[#D7263D]/5 rounded-full" />
        <div className="absolute top-40 right-[15%] w-48 h-48 border border-[#D7263D]/5 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#7768AE]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="pill-badge bg-[#D7263D]/10 text-[#D7263D] mb-6">
              Your Trusted Partner
            </span>

            <div className="w-16 h-1 bg-[#7768AE] rounded-full mb-6" />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#340710] leading-[1.1] mb-6">
              Fresh Thinking,{' '}
              <span className="text-[#D7263D]">Real Opportunities</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#340710]/60 leading-relaxed mb-8 max-w-xl">
              Innovative World connects Nowshera's people and businesses with the right opportunities — recruitment, staffing, and professional services you can trust.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/923335553256"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-base px-8 py-3.5"
              >
                <FaWhatsapp />
                Get Started
              </a>
              <a
                href="https://wa.me/923335553256"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base px-8 py-3.5"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
              <img
                src={imgError ? '/images/fallback.svg' : '/images/hero-office.jpg'}
                alt="Innovative World team office"
                className={`w-full h-[400px] md:h-[500px] object-cover img-hover-zoom ${imgLoaded ? 'loaded' : 'loading'}`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2.5 animate-float">
                <FaUsers className="text-[#D7263D] text-sm" />
                <span className="text-sm font-semibold text-[#340710]">500+ Placed</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2.5 animate-float" style={{ animationDelay: '1.5s' }}>
                <FaStar className="text-[#02C39A] text-sm" />
                <span className="text-sm font-semibold text-[#340710]">98% Satisfied</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2.5 animate-float" style={{ animationDelay: '0.8s' }}>
                <FaHandshake className="text-[#7768AE] text-sm" />
                <span className="text-sm font-semibold text-[#340710]">Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
