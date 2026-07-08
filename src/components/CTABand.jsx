import useInView from '../hooks/useInView';

export default function CTABand() {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,20 C240,60 480,0 720,20 C960,40 1200,0 1440,20 L1440,0 L0,0 Z" fill="#FFEFF6" />
        </svg>
      </div>

      <div
        className="py-16 sm:py-20 lg:py-24 px-4"
        style={{ background: 'linear-gradient(135deg, #FF6FB5 0%, #E0218A 50%, #C2055E 100%)' }}
      >
        <div ref={ref} className={`fade-up ${visible ? 'visible' : ''} max-w-3xl mx-auto text-center space-y-6 sm:space-y-7`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white m-0 leading-tight">
            Simple, Fresh, and Ready When You Are.
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Take the first step toward your overseas career. We're here to make it simple.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#00BFA6', color: 'white' }}>
              <i className="fa-regular fa-paper-plane" />
              Apply Now
            </a>
            <a href="tel:0514419415"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold text-white border-2 border-white/60 transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <i className="fa-solid fa-phone" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}