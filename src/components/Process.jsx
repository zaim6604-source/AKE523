import { useEffect, useRef } from 'react';
import { Phone, Heart, Users, Share2, Target } from 'lucide-react';

const steps = [
  { Icon: Phone, num: 1, title: 'Reach Out', desc: 'Contact us via WhatsApp, phone, or visit our community office in Larama, Peshawar.', color: '#FFDD00' },
  { Icon: Heart, num: 2, title: 'Donate or Volunteer', desc: 'Choose how you want to help — financial support, supplies, or your time as a volunteer.', color: '#E29578' },
  { Icon: Users, num: 3, title: 'Join a Drive', desc: 'Participate in our food distribution, health camps, awareness drives, and community events.', color: '#FFDD00' },
  { Icon: Share2, num: 4, title: 'Spread the Word', desc: 'Share our mission with your network. Every voice amplifies our reach and impact.', color: '#E29578' },
  { Icon: Target, num: 5, title: 'Make an Impact', desc: 'Together, we bring real change — feeding families, supporting children, and uplifting our community.', color: '#FFDD00' },
];

export default function Process() {
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
      <section id="involve" className="py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #006D77 0%, #E29578 100%)' }} ref={ref}>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-accent text-[11px] font-bold tracking-[.12em] uppercase px-4 py-1.5 rounded-full mb-[18px] mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              GET INVOLVED
            </div>
            <h2 className="font-heading font-black text-[clamp(28px,3.5vw,42px)] text-white mb-3">
              How You Can <span className="text-accent">Help</span>
            </h2>
            <p className="text-white/80 text-[15px] max-w-[550px] mx-auto leading-relaxed">
              Every contribution — big or small — makes a difference. Here's how you can be part of our mission.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-5 bg-white/8 backdrop-blur border border-white/12 rounded-xl p-6 px-7 transition-all duration-300 hover:translate-x-1.5 hover:bg-white/12 reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center font-heading font-black text-xl shrink-0 bg-white/12 text-white" style={{ borderColor: s.color, borderWidth: 2 }}>
                  {s.num}
                </div>
                <div className="flex-1">
                  <div className="font-heading font-extrabold text-[17px] text-white mb-1.5">{s.title}</div>
                  <div className="text-sm text-white/85 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
