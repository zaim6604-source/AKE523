import { useState, useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

const services = [
  { icon: 'fa-plane-departure', title: 'Overseas Recruitment', desc: 'We source and match qualified candidates with top international employers across multiple sectors and industries.', color: '#D7263D' },
  { icon: 'fa-passport',        title: 'Visa Assistance',      desc: 'Our experts guide you through the entire visa application process, ensuring all requirements are met.', color: '#F46197' },
  { icon: 'fa-briefcase',       title: 'Job Placement',        desc: 'We connect skilled professionals with verified job opportunities matching their qualifications.', color: '#7768AE' },
  { icon: 'fa-file-alt',        title: 'Documentation Support',desc: 'We assist with attestation, medical clearances, and all pre-departure documentation formalities.', color: '#02C39A' },
  { icon: 'fa-handshake',       title: 'Employer Liaison',     desc: 'We maintain strong relationships with reputable employers worldwide to secure the best opportunities.', color: '#D7263D' },
  { icon: 'fa-headset',         title: 'Post-Placement Support', desc: "Our support doesn't end at placement — we assist candidates even after they've started their roles abroad.", color: '#F46197' },
  { icon: 'fa-scale-balanced',  title: 'Contract Review',      desc: 'We help candidates understand their employment contracts and ensure fair terms and conditions.', color: '#7768AE' },
  { icon: 'fa-user-graduate',   title: 'Pre-Departure Training',desc: 'Orientation sessions covering cultural awareness, language basics, and workplace expectations.', color: '#02C39A' },
];

export default function Services() {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white" ref={ref}>
      <div className="blob blob-crimson" style={{ width: 400, height: 400, top: '20%', right: '-10%' }} />
      <div className="blob blob-mint" style={{ width: 300, height: 300, bottom: '10%', left: '-8%' }} />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="Our Services" title="What We Offer"
            sub="We provide comprehensive recruitment solutions to help you achieve your overseas career goals." />
        </div>

        {/* Honeycomb hexagon tiles */}
        <div className="reveal flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-0" style={{ maxWidth: 600 }}>
            {/* Row 1: 3 hexagons */}
            <div className="flex w-full justify-center gap-3 mb-[-8px]">
              {services.slice(0, 3).map((s, i) => (
                <div key={i}
                  onClick={() => setActiveIndex(i)}
                  className="hex-tile text-white"
                  style={{ background: s.color, transform: activeIndex === i ? 'scale(1.06)' : '' }}>
                  <i className={`fas ${s.icon}`} />
                  <span>{s.title}</span>
                </div>
              ))}
            </div>
            {/* Row 2: 2 hexagons offset */}
            <div className="flex w-full justify-center gap-3 mb-[-8px] ml-[-20px]">
              {services.slice(3, 5).map((s, i) => (
                <div key={i + 3}
                  onClick={() => setActiveIndex(i + 3)}
                  className="hex-tile text-white"
                  style={{ background: s.color, transform: activeIndex === i + 3 ? 'scale(1.06)' : '' }}>
                  <i className={`fas ${s.icon}`} />
                  <span>{s.title}</span>
                </div>
              ))}
            </div>
            {/* Row 3: 3 hexagons */}
            <div className="flex w-full justify-center gap-3">
              {services.slice(5).map((s, i) => (
                <div key={i + 5}
                  onClick={() => setActiveIndex(i + 5)}
                  className="hex-tile text-white"
                  style={{ background: s.color, transform: activeIndex === i + 5 ? 'scale(1.06)' : '' }}>
                  <i className={`fas ${s.icon}`} />
                  <span>{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description panel */}
        <div className="reveal max-w-2xl mx-auto text-center rounded-2xl p-8"
          style={{ background: 'var(--color-background)', border: '1px solid rgba(215,38,61,.1)' }}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 text-white"
            style={{ background: services[activeIndex].color }}>
            <i className={`fas ${services[activeIndex].icon}`} />
          </div>
          <h3 className="text-xl font-bold text-[#340710] mb-2">{services[activeIndex].title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{services[activeIndex].desc}</p>
          <a href="https://wa.me/923459510123" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-sm font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: 'var(--color-cta)' }}>
            Inquire Now <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
}