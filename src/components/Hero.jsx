import { useEffect, useRef, useState } from 'react';
import { Heart, Hand } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.querySelectorAll('.h-rev').forEach((el, i) => {
        setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, i * 120);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const wa = () => window.open('https://wa.me/923159942780', '_blank');

  return (
    <>
      <style>{`
        .h-rev { opacity:0; transform:translateY(28px); transition:opacity .7s ease, transform .7s ease; }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .stat-chip { position:absolute; display:flex; align-items:center; gap:10px; background:rgba(255,255,255,.92); backdrop-filter:blur(12px); border:1px solid rgba(0,109,119,.15); padding:12px 18px; border-radius:14px; box-shadow:0 4px 20px rgba(0,0,0,.05); animation:floatY 4s ease-in-out infinite; }
        @media(max-width:900px){ .stat-chip{display:none!important} }
      `}</style>

      <section id="home" ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-[120px] pb-[60px] bg-gradient-to-br from-background via-[#e8f4f5] to-background">
        {/* Floating stat chips */}
       

        <div className="relative z-10 max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="h-rev inline-flex items-center gap-2.5 bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold tracking-widest uppercase px-[18px] py-[7px] rounded-full mb-6">
              <span className="w-[6px] h-[6px] rounded-full bg-primary" />
              Serving Humanity
            </div>

            <h1 className="h-rev font-heading font-black text-[clamp(34px,5vw,56px)] text-highlight leading-tight mb-4" style={{ transitionDelay: '.08s' }}>
              A Voice for Humanity,<br />
              <span className="text-primary">A Hand for Those in Need</span>
            </h1>

            <p className="h-rev text-[clamp(15px,1.6vw,18px)] text-[#555] leading-relaxed max-w-[560px] mb-3" style={{ transitionDelay: '.16s' }}>
              Awaz e Insan serves Peshawar's communities through welfare, relief, and support — driven by compassion
              and the belief that every person matters.
            </p>

            <div className="h-rev flex flex-wrap gap-3 mt-8" style={{ transitionDelay: '.24s' }}>
              <button className="btn-cta" onClick={wa} style={{ fontSize: 15, padding: '15px 32px' }}>
                <Heart size={16} /> Get Involved
              </button>
              <button className="btn-wa" onClick={wa} style={{ fontSize: 15, padding: '14px 32px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Chat on WhatsApp
              </button>
            </div>

            {/* Yellow accent line */}
            <div className="h-rev mt-10 w-20 h-0.5 rounded-full bg-accent" style={{ transitionDelay: '.32s' }} />
          </div>

          {/* Right image */}
          <div className="h-rev relative" style={{ transitionDelay: '.12s' }}>
            <div className="img-zoom-wrap rounded-3xl shadow-[0_8px_40px_rgba(0,109,119,.15)]">
              <img
                src={err ? '/images/community-volunteers.jpg' : '/images/community-volunteers.jpg'}
                alt="Awaz e Insan community volunteers"
                className="w-full h-[480px] object-cover block"
                onError={() => setErr(true)}
              />
            </div>
            <div className="float absolute -top-4 -right-4 bg-white rounded-2xl px-5 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,.08)] border border-primary/10">
              <div className="font-heading font-black text-2xl text-primary leading-none">5,000+</div>
              <div className="text-[11px] text-[#555] font-semibold mt-0.5">Lives Touched</div>
            </div>
            <div className="float absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,.08)] border border-primary/10" style={{ animationDelay: '2s' }}>
              <div className="font-heading font-black text-2xl text-cta leading-none">10+</div>
              <div className="text-[11px] text-[#555] font-semibold mt-0.5">Years Serving</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}