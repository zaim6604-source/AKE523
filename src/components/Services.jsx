import { useEffect, useRef } from 'react';
import { Heart, Hand, Users, GraduationCap, Stethoscope, BookOpen, Home, Volume2 } from 'lucide-react';

const programs = [
  { Icon: Heart, title: 'Food & Ration Distribution', desc: 'Essential food supplies and ration distributed to families in need across Peshawar.', color: '#006D77', bg: 'bg-primary/8' },
  { Icon: Hand, title: 'Relief & Emergency Aid', desc: 'Immediate assistance during emergencies, natural disasters, and crises.', color: '#E29578', bg: 'bg-cta/10' },
  { Icon: Users, title: 'Support for the Poor & Needy', desc: 'Ongoing support programs for the most vulnerable members of our community.', color: '#006D77', bg: 'bg-primary/8' },
  { Icon: GraduationCap, title: 'Community Awareness', desc: 'Educational awareness campaigns on health, rights, and social issues.', color: '#83C5BE', bg: 'bg-secondary/10' },
  { Icon: Stethoscope, title: 'Health & Medical Camps', desc: 'Free medical checkups, health camps, and basic healthcare services.', color: '#E29578', bg: 'bg-cta/10' },
  { Icon: BookOpen, title: 'Education Support', desc: 'Helping children access education through supplies, fees, and tutoring.', color: '#FFDD00', bg: 'bg-accent/12' },
  { Icon: Home, title: 'Widows & Orphans Support', desc: 'Special programs to support widows and orphans with care and dignity.', color: '#006D77', bg: 'bg-primary/8' },
  { Icon: Volume2, title: 'Voice for the Voiceless', desc: 'Advocacy and awareness for those whose voices are often unheard.', color: '#83C5BE', bg: 'bg-secondary/10' },
];

export default function Services() {
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
    <>
      <section id="work" className="bg-background py-24 px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <div className="pill-badge mx-auto mb-[18px]">
              <span className="pill-dot" />
              OUR WORK
            </div>
            <h2 className="font-heading font-black text-[clamp(28px,3.5vw,42px)] text-ink mb-3">
              Our <span className="text-primary">Programs</span>
            </h2>
            <p className="text-[#555] text-[15px] max-w-[600px] mx-auto leading-relaxed">
              From food to healthcare, education to advocacy — we work across multiple areas to serve Peshawar's communities.
            </p>
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
            {programs.map((p, i) => (
              <div key={i} className="rounded-xl p-7 bg-white border border-primary/8 transition-all duration-350 hover:-translate-y-1.5 hover:shadow-lg cursor-default reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${p.bg}`}>
                  <p.Icon size={22} color={p.color} strokeWidth={2} />
                </div>
                <div className="font-heading font-extrabold text-base text-ink mb-2">{p.title}</div>
                <div className="text-sm text-[#555] leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
