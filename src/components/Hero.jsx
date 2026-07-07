import useInView from '../hooks/useInView';

export default function Hero() {
  const [ref, inView] = useInView();

  return (
    <section id="home" className="relative pt-8 md:pt-16 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-background to-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-accent/40" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-primary/30" />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 rounded-full bg-cta/50" />
      </div>
      <div ref={ref} className="container-pad relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className={`flex-1 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4">
              <i className="fas fa-handshake text-primary/70 text-xs" /> Your HR Partner in Lahore
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink leading-tight mt-4 font-heading">
              People Are Your Best Asset <span className="text-primary">— We Help You Get Them Right</span>
            </h1>
            <p className="text-base sm:text-lg text-ink/60 mt-6 max-w-xl leading-relaxed">
              ZB HR Services delivers recruitment, staffing, payroll, and HR consulting for Lahore's growing businesses — and connects talent with the right roles.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://wa.me/923008582313?text=Hi!%20I%27d%20like%20to%20get%20started%20with%20ZB%20HR%20Services." target="_blank" rel="noopener noreferrer"
                className="bg-cta text-ink font-bold text-base px-8 py-3.5 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95 inline-flex items-center gap-2">
                <i className="fa-brands fa-whatsapp text-xl" /> Get Started
              </a>
              <a href="https://wa.me/923008582313" target="_blank" rel="noopener noreferrer"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2">
                <i className="fa-brands fa-whatsapp text-xl" /> Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className={`flex-1 w-full max-w-lg ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-purple-glow">
                <img src="/images/hero-team.jpg" alt="ZB HR Services team"
                  className="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-500 ease-in-out hover:scale-110 rounded-2xl"
                  onError={(e) => { e.target.src = '/images/fallback.svg'; }} loading="eager" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2 animate-float">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-ink">500+ Placements</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-cta" />
                <span className="text-sm font-semibold text-ink">120+ Companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
