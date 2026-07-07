import { useEffect, useRef } from 'react';
import { Heart, Shield, BarChart3, Users } from 'lucide-react';

const reasons = [
  { Icon: Heart, title: 'Community-Rooted', desc: 'We are part of the community we serve — our team lives in Peshawar and understands local needs firsthand.', color: '#006D77', bg: 'bg-primary/8' },
  { Icon: Shield, title: 'Transparent Use of Donations', desc: 'Every rupee is accounted for. We are open about our finances and ensure resources reach those who need them.', color: '#83C5BE', bg: 'bg-secondary/10' },
  { Icon: BarChart3, title: 'Real Local Impact', desc: 'From food distribution to health camps, our work creates measurable, tangible change in Peshawar\'s communities.', color: '#E29578', bg: 'bg-cta/10' },
  { Icon: Users, title: 'Every Contribution Counts', desc: 'Whether you give time, money, or voice — your support matters and is valued with deep gratitude.', color: '#FFDD00', bg: 'bg-accent/12' },
];

export default function WhyUs() {
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
    <section id="impact" className="bg-white py-20 px-6" ref={ref}>
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-10 reveal">
          <div className="pill-badge mx-auto mb-[18px]">
            <span className="pill-dot" />
            WHY AWAZ E INSAN
          </div>
          <h2 className="font-heading font-black text-[clamp(24px,3vw,36px)] text-ink mb-2">
            Why <span className="text-primary">Support Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
          {reasons.map((r, i) => (
            <div key={i} className="rounded-2xl p-8 bg-white border border-primary/8 transition-all duration-350 hover:-translate-y-1.5 hover:shadow-lg cursor-default reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center mb-4 ${r.bg}`}>
                <r.Icon size={22} color={r.color} strokeWidth={2} />
              </div>
              <div className="font-heading font-extrabold text-[17px] text-ink mb-2">{r.title}</div>
              <div className="text-sm text-[#555] leading-relaxed">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}