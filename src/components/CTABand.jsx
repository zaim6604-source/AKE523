import { useEffect, useRef } from 'react';

export default function CtaBand() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden gradient-cta" ref={ref}>
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.04) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />

      <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Seeking Trusted Legal Counsel?
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed">
            Request a consultation to discuss your legal matter with an experienced Supreme Court advocate.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/923335107178" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm transition-all duration-200 shadow-lg btn-gold">
              <i className="fab fa-whatsapp text-base" /> Book Consultation
            </a>
            <a href="https://wa.me/923335107178" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-200">
              <i className="fab fa-whatsapp" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}