import useScrollReveal from '../hooks/useScrollReveal';
import OptimizedImage from './OptimizedImage';

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section id="hero" className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E8F5FF] rounded-bl-[6rem] -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#0496FF]/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={revealRef} className="reveal grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0496FF]/10 text-[#0496FF] rounded-full text-xs font-semibold mb-4 sm:mb-6 tracking-wide">
              <i className="fas fa-check-circle text-[10px]" />
              License #2243/KAR — Govt. Registered
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#062A45] leading-tight mb-4 sm:mb-6">
              Quick Visas, Confirmed Tickets,<br />Trusted Departures
            </h1>

            <p className="text-base sm:text-lg text-[#062A45]/70 mb-6 sm:mb-8 max-w-xl leading-relaxed">
              Shafay International handles Gulf visas and travel end-to-end — with offices in
              Karachi and Rawalpindi and satisfaction guaranteed.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="https://wa.me/923002141262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white bg-[#FB5607] rounded-full hover:bg-[#e04e06] hover:shadow-xl hover:shadow-[#FB5607]/30 transition-all no-underline"
              >
                <i className="fab fa-whatsapp" />
                Apply Now
              </a>
              <a
                href="https://wa.me/923002141262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-[#0496FF] border-2 border-[#0496FF] rounded-full hover:bg-[#0496FF] hover:text-white transition-all no-underline"
              >
                <i className="fab fa-whatsapp text-lg" />
                WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="chip">
                <i className="fas fa-passport text-[#0496FF]" />
                <span>10,000+ Visas Processed</span>
              </div>
              <div className="chip">
                <i className="fas fa-globe text-[#0496FF]" />
                <span>9+ Countries</span>
              </div>
              <div className="chip">
                <i className="fas fa-building text-[#0496FF]" />
                <span>Karachi & Rawalpindi</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="arc-panel overflow-hidden shadow-2xl shadow-[#0496FF]/20">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80"
                alt="Modern professional travel and visa office"
                className="aspect-[4/3]"
                icon="fas fa-building"
              />
            </div>
            <div className="absolute -bottom-12 -left-3 sm:-bottom-20 sm:-left-5 bg-white rounded-xl shadow-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#0496FF] flex items-center justify-center text-white font-bold text-xs sm:text-sm font-[Plus_Jakarta_Sans]">
                2243
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-gray-500">License No.</div>
                <div className="text-xs sm:text-sm font-bold text-[#062A45]">2243/KAR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
