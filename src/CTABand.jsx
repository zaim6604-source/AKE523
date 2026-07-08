import { COMPANY } from './constants';
import useInView from './useInView';

export default function CTABand() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9C27B0] to-[#FF4081]"></div>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div
        ref={ref}
        className={`container-main relative z-10 text-center transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
          Need Qualified Manpower or a Job Abroad?<br />
          <span className="text-[#FFD740]">Let's Talk.</span>
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8">
          Whether you're an employer looking for skilled workers or a professional seeking overseas opportunities,
          we're here to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFD740] hover:bg-[#FFC400] text-[#2A1033] font-bold text-sm md:text-base px-8 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-black/20 hover:scale-105"
          >
            <i className="fas fa-paper-plane"></i> Apply Now
          </a>
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 font-semibold text-sm md:text-base px-8 py-3.5 rounded-full transition-all border border-white/30"
          >
            <i className="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}