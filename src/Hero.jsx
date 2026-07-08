import { COMPANY } from './constants';
import useInView from './useInView';

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#F8EEFF] to-white pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#CE93D8]/20 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9C27B0]/10 rounded-full blur-3xl -z-0"></div>

      <div
        ref={ref}
        className={`container-main grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Left content */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="pill-badge">
              <i className="fas fa-certificate text-[10px] mr-1.5"></i>
              {COMPANY.licenseLine}
            </span>
            <span className="inline-flex items-center gap-1 bg-[#FFD740]/20 text-[#D4A017] text-xs font-bold px-3 py-1 rounded-full">
              <i className="fas fa-star text-[10px]"></i> 3 Offices
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#2A1033]">
            {COMPANY.heroHeadline}
          </h1>
          <p className="text-base md:text-lg text-[#2A1033]/60 leading-relaxed max-w-lg">
            {COMPANY.heroSubhead}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={COMPANY.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFD740] hover:bg-[#FFC400] text-[#2A1033] font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-[#FFD740]/30 hover:scale-105"
            >
              <i className="fas fa-paper-plane"></i> Apply Now
            </a>
            <a
              href={COMPANY.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#9C27B0] text-[#9C27B0] hover:bg-[#9C27B0] hover:text-white font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-all"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right content */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Main image placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#CE93D8] to-[#9C27B0] overflow-hidden shadow-2xl shadow-[#9C27B0]/20 relative">
              <img
                src="/images/hero.jpg"
                alt="H.A. International Office"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '';
                  e.target.style.display = 'none';
                }}
              />
              {/* Fallback gradient if image fails */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#CE93D8] to-[#9C27B0] flex items-center justify-center -z-10">
                <div className="text-center text-white/80">
                  <i className="fas fa-building text-5xl mb-3"></i>
                  <p className="font-heading font-semibold">{COMPANY.name}</p>
                </div>
              </div>
            </div>

            {/* License badge */}
            <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg px-4 py-2 border border-[#CE93D8]/30">
              <span className="text-[10px] font-bold text-[#9C27B0]">LICENSE</span>
              <p className="text-xs font-bold text-[#2A1033]">{COMPANY.license}</p>
            </div>

            {/* Floating stat chips */}
            <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg px-4 py-2.5 border border-[#CE93D8]/30 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FFD740] flex items-center justify-center">
                <i className="fas fa-users text-xs text-[#2A1033]"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-[#2A1033]">5000+</p>
                <p className="text-[10px] text-[#2A1033]/60">Workers Placed</p>
              </div>
            </div>

            <div className="absolute top-1/4 -right-4 bg-white rounded-xl shadow-lg px-3 py-2 border border-[#CE93D8]/30 hidden md:flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#9C27B0] flex items-center justify-center">
                <i className="fas fa-check text-[10px] text-white"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-[#2A1033]">Govt. Approved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}