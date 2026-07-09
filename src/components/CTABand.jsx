export default function CTABand() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary via-highlight to-primary relative overflow-hidden">
      <div className="absolute top-6 left-10 text-white/20 text-3xl"><i className="fas fa-star" /></div>
      <div className="absolute bottom-6 right-10 text-white/20 text-2xl"><i className="fas fa-sparkle" /></div>
      <div className="absolute top-1/2 right-1/4 text-white/10 text-4xl"><i className="fas fa-star" /></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 font-display">
          Your Bright Future Starts Here
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          One conversation with Zanib can change your life. Let's get started today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/923335020040"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-ink px-8 py-3.5 rounded-full text-lg font-bold hover:brightness-110 transition-all shadow-xl shadow-accent/40"
          >
            <i className="fab fa-whatsapp mr-2" />Apply on WhatsApp
          </a>
          <a
            href="tel:+92514846430"
            className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-3.5 rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-all"
          >
            <i className="fas fa-phone mr-2" />Call 051-4846430
          </a>
        </div>
      </div>
    </section>
  );
}
