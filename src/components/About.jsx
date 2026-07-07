import { useEffect, useRef } from 'react';

const chips = [
  'Supreme Court Advocate',
  'Bar Leader',
  '25+ Years Experience',
  'Constitutional Expert',
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
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <span className="section-pill">ABOUT</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#0B2545]">
            About the Advocate
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 items-center">
          {/* Portrait */}
          <div className="reveal">
            <div className="relative">
              <div className="img-frame shadow-xl"
                style={{ border: '1px solid rgba(201,162,39,.15)' }}>
                <img
                  src="./images/Ashraf.jpg"
                  alt="Ch. Muhammad Ashraf Gujjar"
                  className="w-full h-[420px] object-cover"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'; }}
                />
              </div>
              {/* Gold accent bar */}
              <div className="absolute -bottom-3 left-6 right-6 h-1 rounded-full"
                style={{ background: 'var(--color-accent)' }} />
            </div>
          </div>

          {/* Content */}
          <div className="reveal">
            <h3 className="text-xl font-bold text-[#0B2545] mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
              Ch. Muhammad Ashraf Gujjar
            </h3>
            <p className="text-sm font-semibold uppercase tracking-wider mb-5"
              style={{ color: 'var(--color-accent)' }}>
              Advocate Supreme Court of Pakistan
            </p>

            <div className="space-y-4 text-sm leading-[1.85]" style={{ color: '#4a5568' }}>
              <p>
                <strong className="text-[#0B2545]">Ch. Muhammad Ashraf Gujjar</strong> is an Advocate of the Supreme Court of Pakistan with over 25 years of distinguished legal practice. He has extensive experience appearing before all High Courts and the Supreme Court of Pakistan, representing numerous national and multinational organizations before judicial and quasi-judicial forums.
              </p>
              <p>
                A respected leader of the legal fraternity, Mr. Gujjar served as President of the <strong>Islamabad District Bar Association (2006–07)</strong> and was elected as the first / Pioneer President of the <strong>Islamabad High Court Bar Association (2011–12)</strong>. He led Bar delegations to Paris, Madrid, and Zurich, and was the first Pakistani Bar leader to sign an MOU with the Paris Bar Association for a mutual exchange programme.
              </p>
              <p>
                He was appointed a <strong>Member of PEMRA</strong> by the President of Pakistan and served as <strong>Chairman of the Prime Minister's Legal Reforms Committee</strong>, formulating recommendations for speedy justice and briefing the Senate in 2015.
              </p>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {chips.map(t => (
                <span key={t}
                  className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(201, 162, 39, 0.08)', color: 'var(--color-accent)' }}>
                  <i className="fas fa-check-circle text-[0.55rem]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}