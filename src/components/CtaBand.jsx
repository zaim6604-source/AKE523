import useInView from '../hooks/useInView';

export default function CTABand() {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,20 C240,60 480,0 720,20 C960,40 1200,0 1440,20 L1440,0 L0,0 Z" fill="#EDF6F9" />
        </svg>
      </div>

      <div
        className="py-16 sm:py-20 lg:py-24 px-4"
        style={{ background: 'linear-gradient(135deg, #006D77 0%, #003844 50%, #006D77 100%)' }}
      >
        <div ref={ref} className={`fade-up ${visible ? 'visible' : ''} max-w-3xl mx-auto text-center space-y-6 sm:space-y-7`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white m-0 leading-tight">
            Ready to Start Your Journey Abroad?
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Take the first step toward your overseas career. We're here to make it happen.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="https://wa.me/923335520190?text="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#E29578', color: 'white' }}
            >
              <i className="fa-regular fa-paper-plane" />
              Apply Now
            </a>
            <a href="tel:0514442289"
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