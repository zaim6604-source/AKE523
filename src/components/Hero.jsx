import useInView from '../hooks/useInView';

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16 bg-background">
      <div className="absolute top-20 left-10 text-primary text-2xl animate-float opacity-30"><i className="fas fa-star" /></div>
      <div className="absolute top-40 right-20 text-accent text-xl animate-float opacity-25" style={{ animationDelay: '1s' }}><i className="fas fa-sparkle" /></div>
      <div className="absolute bottom-32 left-1/4 text-highlight text-3xl animate-float opacity-20" style={{ animationDelay: '0.5s' }}><i className="fas fa-star" /></div>

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-4 w-full ${inView ? 'fade-up in-view' : 'fade-up'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          <div className="lg:col-span-7 bento-tile bg-white p-8 md:p-10 shadow-xl border border-primary/10">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-primary text-white mb-5">
              <i className="fas fa-certificate mr-1.5" />Lic. 2315/RWP — Govt. Licensed
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-ink leading-tight mb-4 font-display">
              Bright Futures Start at
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-highlight to-primary"> Zanib's Door</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/70 max-w-xl mb-8 leading-relaxed">
              Zanib Recruiting Agency connects Rawalpindi's workers to trusted Gulf and European employers — licensed, honest, complete.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/923335020040"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cta text-ink px-8 py-3.5 rounded-full text-lg font-bold hover:brightness-110 transition-all shadow-xl shadow-cta/40 animate-pulse-glow inline-flex items-center gap-2"
              >
                <i className="fas fa-bolt" />Apply Now
              </a>
              <a
                href="https://wa.me/923335020040"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-full text-lg font-bold hover:bg-primary hover:text-white transition-all inline-flex items-center gap-2"
              >
                <i className="fab fa-whatsapp" />WhatsApp Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 bento-tile bg-primary text-white p-6 flex flex-col justify-center items-center text-center shadow-xl">
            <i className="fas fa-users text-3xl mb-3 text-accent" />
            <div className="text-3xl font-extrabold">5000+</div>
            <div className="text-sm text-white/80">Workers Placed</div>
          </div>

          <div className="lg:col-span-3 bento-tile bg-highlight text-white p-6 flex flex-col justify-center items-center text-center shadow-xl">
            <i className="fas fa-globe-asia text-3xl mb-3 text-accent" />
            <div className="text-3xl font-extrabold">9+</div>
            <div className="text-sm text-white/80">Countries Worldwide</div>
          </div>

          <div className="lg:col-span-5 bento-tile bg-white p-6 shadow-xl border border-primary/10 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl flex-shrink-0">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div>
              <div className="font-bold text-ink">6th Road, Rawalpindi</div>
              <div className="text-sm text-ink/60">Flat No. 5, Al-Mustafa Plaza — Walk-ins Welcome</div>
            </div>
          </div>

          <div className="lg:col-span-7 bento-tile bg-ink text-white p-6 shadow-xl flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent text-2xl flex-shrink-0">
              <i className="fas fa-phone" />
            </div>
            <div>
              <div className="font-bold text-lg">051-4846430</div>
              <div className="text-sm text-white/60">Call or WhatsApp 0333-5020040 for free consultation</div>
            </div>
            <a
              href="https://wa.me/923335020040"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto bg-accent text-ink px-5 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all flex-shrink-0"
            >
              <i className="fab fa-whatsapp mr-1.5" />Chat Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
