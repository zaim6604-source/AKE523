import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(135deg, #0B2545 0%, #13315C 50%, #0B2545 100%)' }}
      ref={ref}
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.04) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 40%, rgba(201,162,39,.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(201,162,39,.04) 0%, transparent 50%)',
        }} />

      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="reveal">
              <span className="section-pill">
                <i className="fas fa-gavel mr-1.5 text-[0.5rem]" /> Est. Practice &bull; Islamabad
              </span>
            </div>

            <h1 className="reveal text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
              25 Years of Advocacy at the<br />
              <span style={{ color: 'var(--color-accent)' }}>Highest Courts</span> of Pakistan
            </h1>

            <p className="reveal text-base sm:text-lg text-white/65 max-w-[580px] leading-relaxed mb-8">
              The chambers of <strong className="text-white/85">Ch. Muhammad Ashraf Gujjar</strong>, Advocate Supreme Court of Pakistan — trusted counsel for individuals, corporations, and institutions.
            </p>

            <div className="reveal flex flex-wrap gap-4">
              <a href="https://wa.me/923335107178" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 shadow-lg btn-gold">
                <i className="fab fa-whatsapp text-base" /> Book Consultation
              </a>
              <a href="https://wa.me/923335107178" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-200">
                <i className="fab fa-whatsapp text-base" /> Chat on WhatsApp
              </a>
            </div>

            {/* Trust indicators */}
            <div className="reveal flex flex-wrap gap-6 mt-12 pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}>
              {[
                { icon: 'fa-scale-balanced', text: 'Supreme Court' },
                { icon: 'fa-building-columns', text: 'High Courts' },
                { icon: 'fa-landmark', text: '25+ Years' },
                { icon: 'fa-award', text: 'Bar Leader' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <i className={`fas ${item.icon} text-[#C9A227] text-sm`} />
                  <span className="text-white/60 text-xs font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="reveal hidden lg:flex justify-center">
            <div className="relative">
              {/* Main image */}
              <div className="w-[400px] h-[500px] rounded-[2rem] overflow-hidden shadow-2xl"
                style={{ border: '1px solid rgba(201,162,39,.2)' }}>
                <img
                  src="/src/assets/images/hero-img.jpg"
                  alt="Courthouse"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80'; }}
                />
              </div>

              {/* Seal badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-3 floating-1">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
                  style={{ background: 'var(--color-accent)' }}>
                  <i className="fas fa-scale-balanced" />
                </div>
                <div>
                  <strong className="block text-sm text-[#0B2545]">Adv. Supreme Court</strong>
                  <span className="text-[0.65rem] text-gray-500 font-medium">of Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}