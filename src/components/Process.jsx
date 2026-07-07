import useInView from '../hooks/useInView';
import { Search, ClipboardList, Settings, Users, RefreshCw } from 'lucide-react';

const steps = [
  { num: '01', Icon: Search, title: 'Discovery & Diagnostics', desc: 'We dive deep into your HR landscape — understanding challenges, goals, and opportunities through assessments and stakeholder interviews.' },
  { num: '02', Icon: ClipboardList, title: 'Strategy & Solution Design', desc: 'A tailored roadmap is crafted with clear objectives, timelines, and measurable outcomes aligned to your business strategy.' },
  { num: '03', Icon: Settings, title: 'Implementation', desc: 'Our team works alongside yours to deploy solutions seamlessly — from new processes to technology platforms and training programs.' },
  { num: '04', Icon: Users, title: 'Enablement & Training', desc: 'We build capability within your teams through targeted training, coaching, and knowledge transfer for lasting impact.' },
  { num: '05', Icon: RefreshCw, title: 'Review & Continuous Support', desc: 'Ongoing evaluation, feedback loops, and iterative improvements ensure your HR practices stay effective and relevant.' },
];

export default function Process() {
  const [ref, inView] = useInView();

  return (
    <>
      <style>{`
        .pr-section { padding:96px 24px; position:relative; overflow:hidden; }
        .pr-inner { max-width:1200px; margin:0 auto; position:relative; z-index:10; }
        .pr-steps { display:grid; grid-template-columns:repeat(5,1fr); gap:0; position:relative; }
        @media(max-width:1024px){ .pr-steps{grid-template-columns:repeat(3,1fr); gap:16px} }
        @media(max-width:640px){ .pr-steps{grid-template-columns:1fr; max-width:400px; margin:0 auto} }
        .pr-step { text-align:center; padding:32px 16px; position:relative; }
        .pr-arrow { display:flex; align-items:center; position:absolute; right:-12px; top:50%; transform:translateY(-50%); color:#FFBC42; font-size:20px; opacity:.6; z-index:5; }
        @media(max-width:1024px){ .pr-arrow{display:none} }
        .pr-circle { width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;box-shadow:0 4px 16px rgba(0,0,0,.15); }
        .pr-title { font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:15px;margin-bottom:8px;color:#fff; }
        .pr-desc { font-size:13px;line-height:1.65;color:rgba(255,255,255,.85); }
      `}</style>

      <section id="process" className="pr-section" ref={ref}>
        {/* Diagonal background */}
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(160deg, #006BA6 0%, #0496FF 100%)',
            transform: 'skewY(-2deg)',
            transformOrigin: 'top left',
            width: '100%', height: '120%', top: '-10%',
          }} />
        </div>

        {/* Wavy divider */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, zIndex: 5 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: '50px' }}>
            <path d="M0,30 C360,0 720,60 1440,20 L1440,60 L0,60 Z" fill="#E6F3FB" />
          </svg>
        </div>

        <div className="pr-inner">
          <div style={{ textAlign: 'center', marginBottom: 48 }} className={`reveal${inView ? ' show' : ''}`}>
            <div className="pill-badge" style={{ margin: '0 auto 18px', background: 'rgba(255,255,255,.12)', borderColor: 'rgba(255,255,255,.20)', color: '#fff' }}>
              <span className="pill-dot" style={{ background: '#FFBC42' }} />
              HOW WE WORK
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,42px)', color: '#fff', marginBottom: 14 }}>
              Our <span style={{ color: '#FFBC42' }}>Process</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 15, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
              A structured, proven approach to delivering HR solutions that make a real difference.
            </p>
          </div>

          <div className="pr-steps">
            {steps.map((p, i) => (
              <div key={i} className={`pr-step reveal${inView ? ' show' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                {i < steps.length - 1 && (
                  <div className="pr-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFBC42" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                  </div>
                )}
                <div className="pr-circle" style={{ background: i % 2 === 0 ? '#FFBC42' : '#fff', color: i % 2 === 0 ? '#005580' : '#006BA6' }}>
                  <p.Icon size={24} strokeWidth={2} />
                </div>
                <div className="pr-title">{p.title}</div>
                <div className="pr-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}