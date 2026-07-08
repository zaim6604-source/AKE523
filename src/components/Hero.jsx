import { Link } from 'react-router-dom';
import FadeUp from './FadeUp';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5]">
      {/* Speed lines */}
      <div className="speed-line"></div>
      <div className="speed-line"></div>
      <div className="speed-line"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left - Text */}
          <FadeUp className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#FFD500]/20 text-[#141414] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4 border border-[#FFD500]/30 font-inter">
              <i className="fa-solid fa-certificate mr-1.5 text-[#FFD500]"></i>
              Govt. Licensed OEP 2263/RWP
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#141414] leading-tight mb-4 font-poppins">
              Consulting-Grade Recruitment,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E10600] to-[#FF4D4D]">
                Full Speed Ahead
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#444]/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-inter">
              Based in Chandni Chowk, Satellite Town, Rawalpindi, Gul Shahzad Corporation is a
              government-licensed overseas employment promoter connecting Pakistan's top talent
              with premium career opportunities worldwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/92311509987"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD500] text-[#141414] font-bold px-7 py-3.5 rounded-full hover:bg-[#E10600] hover:text-white transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>Apply Now
              </a>
              <a
                href="https://wa.me/92311509987"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#1C1C1C] text-[#141414] font-semibold px-7 py-3.5 rounded-full hover:bg-[#1C1C1C] hover:text-white transition-all text-sm sm:text-base"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>Chat on WhatsApp
              </a>
            </div>
          </FadeUp>

          {/* Right - Racing chronograph visual */}
          <FadeUp delay={2} className="flex-1 relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] w-full">
              {/* Main tachymeter ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-64 sm:h-64 rounded-full border-8 border-[#1C1C1C] shadow-2xl bg-[#1C1C1C]/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl mb-1">🏁</div>
                  <div className="text-[#E10600] font-bold text-sm font-poppins">2263/RWP</div>
                </div>
                {/* Tachymeter markings */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-3 bg-[#E10600]/40 rounded-full"
                    style={{
                      transform: `rotate(${i * 30}deg) translateY(-${112}px)`,
                      transformOrigin: '50% 50%',
                    }}
                  ></div>
                ))}
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 right-0 bg-[#E10600] text-white font-extrabold text-sm px-4 py-2 rounded-full shadow-lg rotate-6 font-poppins">
                <i className="fa-solid fa-bolt mr-1"></i>2263/RWP
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-10 left-0 w-16 h-16 rounded-xl bg-[#E10600] shadow-lg float-anim" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-0 left-1/4 w-12 h-12 rounded-full bg-[#FFD500] shadow-lg float-anim" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-[#1C1C1C] shadow-lg float-anim" style={{ animationDelay: '0.5s' }}></div>

              {/* Checkered strip */}
              <div className="absolute -bottom-4 left-1/4 right-1/4 h-2 rounded-full checkered-bg opacity-50"></div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}