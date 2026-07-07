export default function CTABand() {
  return (
    <section className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #006D77 0%, #E29578 100%)" }}>
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white animate-blob" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white animate-blob" style={{ animationDelay: "-4s" }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold rounded-full tracking-widest uppercase" style={{ backgroundColor: "#FFDD00", color: "#003844" }}>
          Let's Get Started
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "Plus Jakarta Sans" }}>
          Jobs, Visas, or Immigration — <span style={{ color: "#FFDD00" }}>Let's Get You Moving.</span>
        </h2>
        <p className="text-white/80 mb-8 max-w-lg mx-auto">
          Ready to take the next step? Our team is here to guide you through every stage of the process.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/923219115599"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 text-sm font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            style={{ backgroundColor: "#FFFFFF", color: "#006D77" }}
          >
            Get Started
          </a>
          <a
            href="https://wa.me/923219115599"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 text-sm font-bold rounded-full transition-all duration-200 border-2 hover:-translate-y-0.5"
            style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.4)" }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
