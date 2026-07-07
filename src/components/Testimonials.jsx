import { useEffect, useRef } from 'react';

const testimonials = [
  { name: 'Muhammad Ali', area: 'Larama, Peshawar', quote: 'Awaz e Insan was there for my family when we needed help the most. The food distribution and support during difficult times gave us hope. Truly a blessing for our community.' },
  { name: 'Saima Bibi', area: 'Hazrat Jan Colony', quote: 'I will never forget how they helped my children continue their education when I couldn\'t afford supplies. Their education support program changed our lives.' },
  { name: 'Zubair Khan', area: 'Charsadda Road', quote: 'I volunteered for a health camp and saw firsthand how many people got free medical care. The dedication of Malik Yousaf Khan and his team is truly inspiring.' },
  { name: 'Fatima Gul', area: 'Larama, Peshawar', quote: 'When I lost my husband, Awaz e Insan stood by me. They gave me emotional support and helped me access resources for my family. I am forever grateful.' },
];

export default function Testimonials() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-background py-20 px-6" ref={ref}>
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-10 reveal">
          <div className="pill-badge mx-auto mb-[18px]">
            <span className="pill-dot" />
            VOICES
          </div>
          <h2 className="font-heading font-black text-[clamp(24px,3vw,36px)] text-ink mb-2">
            What People <span className="text-primary">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="text-accent text-sm mb-3 tracking-wider">★★★★★</div>
              <div className="text-sm text-[#555] leading-relaxed italic mb-4">"{t.quote}"</div>
              <div className="font-bold text-sm text-ink">{t.name}</div>
              <div className="text-xs text-secondary font-medium">{t.area}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}