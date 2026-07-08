export default function CtaBand() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-r from-primary via-primary to-cta overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
          Ready to Work Abroad?
        </h2>
        <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Get in touch with Al Rabaz International today and start your journey to a better career overseas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/923256561112"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent hover:text-ink transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            <i className="fa-brands fa-whatsapp text-xl" />
            Apply on WhatsApp
          </a>
          <a
            href="tel:0463361889"
            className="inline-flex items-center gap-2.5 border-2 border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/60 transition-all"
          >
            <i className="fas fa-phone text-xl" />
            Call 046-3361889
          </a>
        </div>
      </div>
    </section>
  )
}