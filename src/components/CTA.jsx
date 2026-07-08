import ScrollReveal from './ScrollReveal'

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Wavy divider top */}
      <div className="wavy-divider -mb-1">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-white fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="bg-gradient-to-r from-primary via-secondary to-cta py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-10" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step toward a well-paid career abroad. Contact us today for a free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/923459691639"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-extrabold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                <i className="fab fa-whatsapp text-2xl" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:0932413201"
                className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/40 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                <i className="fas fa-phone" />
                Call 0932-413201
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Wavy divider bottom */}
      <div className="wavy-divider -mt-1 rotate-180">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}