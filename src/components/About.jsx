import { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

const features = [
  'Government licensed & registered',
  'Transparent recruitment process',
  'End-to-end placement support',
  'Experienced & dedicated team',
];

const trustChips = [
  'Government Licensed 2201/MLK',
  'Ethical Recruitment',
  'No Hidden Fees',
  'End-to-End Support',
  'Pre-Departure Training',
];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="blob blob-crimson hidden lg:block" style={{ width: 350, height: 350, top: '-15%', right: '-8%' }} />
      <div className="blob blob-mint hidden lg:block" style={{ width: 250, height: 250, bottom: '-10%', left: '-5%' }} />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal"><SectionHeader tag="Who We Are" title="About Habib Brothers" /></div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-center">
          {/* Framed photo */}
          <div className="reveal">
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-xl">
                <img
                  src="/images/about.jpg"
                  alt="Habib Brothers team"
                  className="w-full h-[400px] object-cover"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80'; }}
                />
              </div>
              {/* Floating badge */}
              <div className="floating-3 absolute -bottom-4 -right-4 bg-white rounded-2xl px-5 py-4 flex items-center gap-4 shadow-2xl"
                style={{ boxShadow: '0 20px 60px rgba(215,38,61,.15)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white"
                  style={{ background: 'var(--color-primary)' }}>
                  <i className="fas fa-award" />
                </div>
                <div>
                  <strong className="block text-sm text-[#340710]">Licensed Agency</strong>
                  <span className="text-xs" style={{ color: 'var(--color-cta)' }}>2201/MLK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal">
            <p className="text-base leading-[1.85] mb-4" style={{ color: '#444' }}>
              <strong>Habib Brothers Recruiting Agency Pvt (Ltd)</strong> is a government-licensed overseas employment agency based in <strong>Mingora, Swat, KPK</strong>.
              With License <strong>2201/MLK</strong>, we are dedicated to connecting local workers with trusted employers across the Gulf and Europe.
            </p>
            <p className="text-sm leading-[1.8] mb-7" style={{ color: '#777' }}>
              We provide complete, honest recruitment services — from documentation and visa processing to medical coordination and
              pre-departure orientation. Our team ensures every candidate is fully prepared for their journey abroad. Located at <strong>G.T Road, Malakand Market, Sohrab Khan Chowk, Mingora, Swat</strong>, we have been serving the community with integrity and professionalism.
            </p>

            {/* Feature checkmarks */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {features.map(f => (
                <div key={f} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: '#444' }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--color-background)' }}>
                    <i className="fas fa-check text-[0.55rem]" style={{ color: 'var(--color-primary)' }} />
                  </span>
                  {f}
                </div>
              ))}
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2 mb-7">
              {trustChips.map((t, i) => (
                <span key={t}
                  className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: i % 2 === 0 ? 'var(--color-background)' : 'rgba(119,104,174,.08)',
                    color: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)',
                  }}>
                  <i className="fas fa-check-circle" />
                  {t}
                </span>
              ))}
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 rounded-xl p-5"
              style={{ background: 'var(--color-background)', border: '1px solid rgba(215,38,61,.1)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                style={{ background: 'var(--color-primary)' }}>
                <i className="fas fa-map-marker-alt text-sm" />
              </div>
              <div>
                <strong className="block text-sm text-[#340710] mb-0.5">Office Address</strong>
                <span className="text-sm" style={{ color: '#666' }}>G.T Road, Malakand Market, Sohrab Khan Chowk, Mingora, Swat, KPK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}