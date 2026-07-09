import useScrollReveal from '../hooks/useScrollReveal';

export default function CtaBand() {
  const revealRef = useScrollReveal();

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3CAC] to-[#784BA0]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3CAC] to-[#784BA0]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div ref={revealRef} className="reveal">
          <i className="fas fa-feather-alt text-4xl sm:text-5xl text-[#00F5D4] mb-6" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Take Flight?
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Take the first step toward a rewarding international career. We&apos;re here to help every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/923339319471"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-[#2B86C5] rounded-full hover:bg-[#2470a5] hover:shadow-xl hover:shadow-[#2B86C5]/30 transition-all no-underline"
            >
              <i className="fas fa-feather-alt" />
              Apply Now
            </a>
            <a
              href="https://wa.me/923339319471"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white border-2 border-white/40 rounded-full hover:bg-white/10 transition-all no-underline"
            >
              <i className="fab fa-whatsapp text-lg" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}