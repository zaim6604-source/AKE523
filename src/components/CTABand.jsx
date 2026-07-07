import useInView from '../hooks/useInView';
import { Phone, MessageCircle } from 'lucide-react';

export default function CTABand() {
  const [ref, inView] = useInView();

  const wa = () => window.open('https://wa.me/923121124692', '_blank');

  return (
    <>
      <style>{`
        .cta-band { background:linear-gradient(135deg,#006BA6 0%,#0496FF 100%); padding:64px 24px; text-align:center; position:relative; overflow:hidden; }
        .cta-inner { max-width:800px; margin:0 auto; position:relative; z-index:2; }
        .cta-headline { font-family:"Plus Jakarta Sans",sans-serif; font-weight:900; font-size:clamp(24px,3vw,38px); color:#fff; margin-bottom:10px; }
        .cta-sub { font-size:15px; color:rgba(255,255,255,.85); margin-bottom:28px; }
        .cta-btn-wrap { display:flex; flex-wrap:wrap; gap:14px; justify-content:center; }
        .cta-circle { position:absolute; border-radius:50%; background:rgba(255,255,255,.03); pointer-events:none; }
      `}</style>

      <div className="cta-band" ref={ref}>
        <div className="cta-circle" style={{ width: 300, height: 300, top: '-100px', right: '-50px' }} />
        <div className="cta-circle" style={{ width: 200, height: 200, bottom: '-60px', left: '-30px' }} />
        <div className={`cta-inner reveal${inView ? ' show' : ''}`}>
          <div className="cta-headline">Ready to Transform Your HR? Let's Build Something Better.</div>
          <div className="cta-sub">Partner with HR-Pro Consulting for research-driven, results-focused HR solutions.</div>
          <div className="cta-btn-wrap">
            <button className="btn-cta" onClick={wa} style={{ fontSize: 15, padding: '15px 32px' }}>
              <Phone size={16} /> Get Started
            </button>
            <button
              className="btn-outline"
              onClick={wa}
              style={{ borderColor: 'rgba(255,255,255,.4)', color: '#fff', fontSize: 15, padding: '15px 32px' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.1)'; e.currentTarget.style.borderColor = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.4)'; }}
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}