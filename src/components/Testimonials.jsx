import { useEffect, useRef } from 'react';

const testimonials = [
  {
    type: 'Corporate Client, Islamabad',
    text: 'Exceptional legal counsel. Mr. Gujjar\'s command of constitutional law and his presence before the Supreme Court gave us confidence throughout our litigation. Highly professional and thorough.',
  },
  {
    type: 'Business Owner, Rawalpindi',
    text: 'I approached the chambers for a complex commercial dispute. The strategy and representation were outstanding. Grateful for the clear communication and diligent follow-through.',
  },
  {
    type: 'Institutional Client, Lahore',
    text: 'Having worked with many law firms over the years, I find the level of dedication and legal acumen at Ashraf Gujjar Law Associates to be among the best. Truly distinguished practice.',
  },
  {
    type: 'Individual Client, F-8 Islamabad',
    text: 'A property dispute that had dragged on for years was resolved efficiently. The personal attention and courtroom experience made all the difference. Strongly recommend.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-white" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <span className="section-pill">CLIENT CONFIDENCE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#0B2545]">
            What Clients Say
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i}
              className="reveal white-card rounded-2xl p-7 flex flex-col"
              style={{ transitionDelay: `${i * 0.08}s` }}>
              {/* Gold quote mark */}
              <i className="fas fa-quote-left text-lg mb-4" style={{ color: 'var(--color-accent)', opacity: 0.5 }} />
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#555' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2 pt-4" style={{ borderTop: '1px solid rgba(201,162,39,.1)' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs"
                  style={{ background: 'var(--color-accent)' }}>
                  <i className="fas fa-user" />
                </div>
                <div>
                  <strong className="block text-xs text-[#0B2545]">{t.type}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}