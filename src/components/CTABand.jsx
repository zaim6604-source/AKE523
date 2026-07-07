export default function CTABand() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-secondary/10"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Start your overseas journey today with Afnan Recruiting Agency. Apply now or reach out
          on WhatsApp.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/923445937116"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta text-white px-8 py-3.5 rounded-lg text-base font-bold hover:bg-cta/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <i className="fas fa-paper-plane"></i>
            Apply Now
          </a>
          <a
            href="https://wa.me/923445937116"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/15 text-white border border-white/30 px-8 py-3.5 rounded-lg text-base font-bold hover:bg-white/25 transition-all inline-flex items-center gap-2"
          >
            <i className="fab fa-whatsapp"></i>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}