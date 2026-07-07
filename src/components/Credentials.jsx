import { useEffect, useRef } from 'react';

const milestones = [
  {
    year: '2006–07',
    title: 'President, Islamabad District Bar Association',
    desc: 'Elected President of the IDBA, leading the legal community in the federal capital.',
  },
  {
    year: '2011–12',
    title: 'Pioneer President, Islamabad High Court Bar Association',
    desc: 'Elected as the first / Pioneer President of the IHC Bar Association, establishing its foundational traditions.',
  },
  {
    year: '2013',
    title: 'Led Bar Delegations to Paris, Madrid & Zurich',
    desc: 'Represented the Pakistani legal fraternity at international Bar conferences and exchanges.',
  },
  {
    year: '2014',
    title: 'MOU with Paris Bar Association',
    desc: 'First Pakistani Bar leader to sign a Memorandum of Understanding with the Paris Bar Association for a mutual exchange programme.',
  },
  {
    year: '2015',
    title: 'Member, PEMRA',
    desc: 'Appointed Member of the Pakistan Electronic Media Regulatory Authority by the President of Pakistan.',
  },
  {
    year: '2015',
    title: 'Chairman, Prime Minister\'s Legal Reforms Committee',
    desc: 'Formulated recommendations for speedy justice reform and briefed the Senate of Pakistan on the committee\'s findings.',
  },
];

export default function Credentials() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="credentials" className="py-24 relative overflow-hidden bg-white" ref={ref}>
      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <span className="section-pill">CREDENTIALS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#0B2545]">
            Distinguished Career &amp; Honours
          </h2>
          <div className="gold-divider mt-4" />
          <p className="text-sm mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            A record of leadership, service, and recognition in the legal profession.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block timeline-line" />

          <div className="flex flex-col gap-8">
            {milestones.map((m, i) => (
              <div key={i}
                className="reveal relative flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl white-card"
                style={{ transitionDelay: `${i * 0.08}s` }}>

                {/* Year badge */}
                <div className="flex-shrink-0 w-[90px] md:w-[100px]">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(201, 162, 39, 0.1)', color: 'var(--color-accent)' }}>
                    <i className="fas fa-calendar text-[0.55rem]" />
                    {m.year}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-[#0B2545] mb-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}