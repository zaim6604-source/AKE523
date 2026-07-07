import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

const trustChips = [
  { label: 'Community-Led', desc: 'Rooted in Peshawar, run by people who live and serve alongside their neighbors.' },
  { label: 'Compassionate', desc: 'Every action is guided by empathy, dignity, and respect for those we serve.' },
  { label: 'Transparent', desc: 'Open about how resources are used — our community trusts us because we are honest.' },
];

export default function About() {
  const ref = useRef(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @media(max-width:900px){ .ab-grid{grid-template-columns:1fr !important; gap:48px !important} }
      `}</style>
      <section id="about" className="bg-white py-24 px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <div className="pill-badge mx-auto mb-[18px]">
              <span className="pill-dot" />
              WHO WE ARE
            </div>
            <h2 className="font-heading font-black text-[clamp(30px,4vw,46px)] text-ink mb-3.5">
              About <span className="text-primary">Awaz e Insan</span>
            </h2>
            <p className="text-[#555] text-base max-w-[560px] mx-auto leading-relaxed">
              A community welfare organization serving Peshawar — giving voice and support to those in need since 2014.
            </p>
          </div>

          <div className="ab-grid grid grid-cols-2 gap-16 items-center">
            <div className="relative reveal-l">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={err ? '/images/helping-hands.jpg' : '/images/helping-hands.jpg'}
                  alt="Awaz e Insan community work"
                  className="w-full h-[460px] object-cover block shadow-sm"
                  onError={() => setErr(true)}
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white border border-primary/15 rounded-2xl px-5 py-3.5 shadow-md float">
                <div className="font-heading font-black text-2xl text-primary leading-none">10+</div>
                <div className="text-[11px] text-[#555] font-semibold mt-0.5">Years of Service</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-primary/15 rounded-2xl px-5 py-3.5 shadow-md float" style={{ animationDelay: '2s' }}>
                <div className="font-heading font-black text-2xl text-primary leading-none">5,000+</div>
                <div className="text-[11px] text-[#555] font-semibold mt-0.5">Lives Touched</div>
              </div>
            </div>

            <div className="reveal-r">
              <div className="pill-badge mb-[18px] bg-primary/8 border-primary/15 text-primary">
                <span className="pill-dot" />
                Peshawar, KPK — Pakistan
              </div>
              <h3 className="font-heading font-black text-[clamp(26px,3.2vw,38px)] text-ink mb-4">
                A Voice for<br />
                <span className="text-primary">Every Person</span>
              </h3>
              <p className="text-[15px] leading-relaxed text-[#555] mb-3.5">
                <strong>Awaz e Insan</strong> ("Voice of Humanity") is a social welfare community organization founded by
                Malik Yousaf Khan, based in Larama, Peshawar. We believe that every person deserves to be heard,
                supported, and uplifted.
              </p>
              <p className="text-[15px] leading-relaxed text-[#555] mb-3.5">
                From food distribution and emergency relief to health camps, education support, and advocacy —
                we work hand-in-hand with our community to bring hope, dignity, and tangible change to those
                who need it most.
              </p>

              <div className="mt-6">
                <div className="flex items-start gap-3 p-3.5 px-[18px] bg-background border border-primary/10 rounded-xl mb-3">
                  <div className="w-[38px] h-[38px] rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} color="#006D77" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">Community Office</div>
                    <div className="text-sm font-semibold text-[#555] leading-relaxed">3H2G+8V4, Larama Rd, Larama Hazrat Jan Colony<br />Peshawar, KPK, Pakistan</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 px-[18px] bg-background border border-accent/20 rounded-xl mb-3">
                  <div className="w-[38px] h-[38px] rounded-xl bg-accent/12 flex items-center justify-center shrink-0">
                    <span className="text-base">👤</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">Founder</div>
                    <div className="text-sm font-semibold text-[#555] leading-relaxed">Malik Yousaf Khan</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {trustChips.map((c, i) => (
                  <div key={i} className="flex-1 min-w-[160px] bg-background border border-primary/10 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className="font-bold text-sm text-primary mb-1.5">{c.label}</div>
                    <div className="text-[13px] text-[#555] leading-relaxed">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
