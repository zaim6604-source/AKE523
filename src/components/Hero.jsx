import { useState } from 'react';

const statChips = [
  { icon: 'fa-certificate', text: 'License 2201/MLK' },
  { icon: 'fa-users', text: '5000+ Placed' },
  { icon: 'fa-globe', text: '20+ Countries' },
  { icon: 'fa-star', text: '10+ Years Exp' },
];

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-highlight) 50%, var(--color-accent) 100%)' }}>
      {/* Decorative blobs */}
      <div className="blob blob-crimson" style={{ width: 500, height: 500, top: '-10%', left: '-5%' }} />
      <div className="blob blob-mint" style={{ width: 400, height: 400, bottom: '-8%', right: '-5%' }} />
      <div className="blob blob-violet" style={{ width: 300, height: 300, top: '40%', left: '60%' }} />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />

      <div className="relative z-10 max-w-[1180px] mx-auto px-6 w-full">
        <div className="grid md:grid-cols-[1fr_1fr] gap-10 items-center">
          {/* Left: Content */}
          <div className="py-16">
            {/* Stat chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {statChips.map((p, i) => (
                <span key={i}
                  className={`glass-pill inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-[0.7rem] font-semibold tracking-wide floating-${i + 1}`}
                >
                  <i className={`fas ${p.icon}`} />
                  {p.text}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.08] tracking-tight mb-4">
              A Brotherhood That Delivers<br />
              <span className="gradient-text-mint">Real Jobs Abroad</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/70 max-w-[520px] leading-relaxed mb-8">
              Habib Brothers Recruiting Agency guides Swat&apos;s workers into trusted Gulf and European employment — licensed and complete.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="https://wa.me/923459510123" target="_blank" rel="noopener noreferrer"
                className="btn-mint inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-semibold text-[0.95rem] transition-all duration-200">
                <i className="fab fa-whatsapp text-lg" /> Apply Now
              </a>
              <a href="https://wa.me/923459510123" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-[0.95rem] hover:bg-white/10 hover:border-white/70 transition-all duration-200">
                <i className="fab fa-whatsapp text-lg" /> WhatsApp
              </a>
            </div>

            {/* License badge */}
            <div className="glass-pill inline-flex items-center gap-3 px-5 py-3 rounded-xl">
              <i className="fas fa-certificate text-2xl" style={{ color: 'var(--color-cta)' }} />
              <div>
                <span className="block text-white text-sm font-bold">License 2201/MLK</span>
                <span className="block text-white/50 text-[0.65rem]">Bureau of Immigration & Overseas Employment</span>
              </div>
            </div>
          </div>

          {/* Right: Arc-panel photo */}
          <div className="hidden md:block relative">
            <div className="arc-panel-clip overflow-hidden rounded-2xl md:rounded-none md:rounded-l-[3rem] h-[520px]">
              {!imgError ? (
                <img
                  src="/images/hero-bg.jpg"
                  alt="Habib Brothers team"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,.08)' }}>
                  <i className="fas fa-users text-6xl text-white/30" />
                </div>
              )}
            </div>
            {/* Floating badge */}
            <div className="floating-2 absolute -bottom-4 -left-6 bg-white rounded-2xl px-5 py-4 flex items-center gap-4 shadow-2xl"
              style={{ boxShadow: '0 20px 60px rgba(179,0,27,.2)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white"
                style={{ background: 'var(--color-primary)' }}>
                <i className="fas fa-passport" />
              </div>
              <div>
                <strong className="block text-sm text-[#340710]">Govt. Licensed</strong>
                <span className="text-xs" style={{ color: 'var(--color-cta)' }}>2201/MLK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}