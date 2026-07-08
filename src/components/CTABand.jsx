import FadeUp from './FadeUp';

export default function CTABand() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background image */}
      <img
        src="/images/cta-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Overlay gradient red → coral */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/85 to-accent/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Take the first step toward a better job abroad. We're here to help — from D.G. Khan to
            the world.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="https://wa.me/923036784034"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cta text-ink font-extrabold px-8 py-4 rounded-full text-lg hover:brightness-110 transition-all shadow-xl"
            >
              <i className="fas fa-paper-plane" />
              Apply Now
            </a>
            <a
              href="https://wa.me/923036784034"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/15 text-white font-bold px-8 py-4 rounded-full text-lg border border-white/30 hover:bg-white/25 transition-all"
            >
              <i className="fab fa-whatsapp" />
              Chat on WhatsApp
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}