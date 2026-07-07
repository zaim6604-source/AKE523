import { useState, useRef, useEffect } from 'react';

const WA = '923194139360';

const trades = [
  'Welder (3G/6G)', 'Electrician', 'Plumber', 'Mason', 'Steel Fixer',
  'Shuttering Carpenter', 'AC / HVAC Technician', 'Heavy & Light Driver',
  'Auto Mechanic', 'Pipe Fitter', 'Painter', 'Duct Man', 'Other Trade',
];

const buildMsg = (d) =>
  encodeURIComponent(
    `🌟 *New Enquiry — New Trademan*\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `👤 *Name:*         ${d.name}\n` +
    `📞 *Phone:*        ${d.phone}\n` +
    `🔧 *Trade/Course:* ${d.trade}\n` +
    `📋 *Type:*         ${d.type}\n` +
    `📅 *Preferred Date:* ${d.date || 'Not specified'}\n\n` +
    `📝 *Message:*\n${d.msg}\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `_Sent from New Trademan website_`
  );

export default function ContactForm() {
  const ref = useRef(null);
  const [f, setF] = useState({ name: '', phone: '', trade: '', type: 'Training', date: '', msg: '' });
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const ch = (k) => (e) => { setF(p => ({ ...p, [k]: e.target.value })); if (err[k]) setErr(p => ({ ...p, [k]: '' })); };

  const validate = () => {
    const e = {};
    if (!f.name.trim() || f.name.trim().length < 3) e.name = 'Please enter your full name.';
    if (!f.phone.trim() || !/^[0-9+\-\s]{7,15}$/.test(f.phone.trim())) e.phone = 'Enter a valid phone number.';
    if (!f.trade) e.trade = 'Please select a trade or course.';
    if (!f.msg.trim() || f.msg.trim().length < 10) e.msg = 'Message must be at least 10 characters.';
    return e;
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErr(errs); return; }
    window.open(`https://wa.me/${WA}?text=${buildMsg({ name: f.name, phone: f.phone, trade: f.trade, type: f.type, date: f.date, msg: f.msg })}`, '_blank');
    setDone(true);
    setTimeout(() => { setDone(false); setF({ name: '', phone: '', trade: '', type: 'Training', date: '', msg: '' }); }, 4500);
  };

  return (
    <>
      <style>{`
        .gf-section {
          background: #fff;
          padding: 96px 24px;
          position: relative;
          overflow: hidden;
        }
        .gf-section::before {
          content: '';
          position: absolute;
          top: -160px; right: -160px;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,32,110,0.07), transparent 70%);
          pointer-events: none;
        }
        .gf-section::after {
          content: '';
          position: absolute;
          bottom: -120px; left: -120px;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(65,234,212,0.07), transparent 70%);
          pointer-events: none;
        }
        .gf-inner { max-width: 1160px; margin: 0 auto; position: relative; z-index: 1; }
        .gf-layout {
          display: grid; grid-template-columns: 2fr 3fr;
          gap: 40px; align-items: start;
        }
        @media(max-width:900px){ .gf-layout { grid-template-columns: 1fr; } }
        .gf-left { display: flex; flex-direction: column; gap: 16px; }
        .gf-why-card {
          background: linear-gradient(145deg, #FF206E 0%, #D4005A 60%, #7B2D8E 100%);
          border-radius: 22px; padding: 32px; color: #fff;
          box-shadow: 0 16px 48px rgba(255,32,110,0.25);
        }
        .gf-why-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800; font-size: 20px; margin-bottom: 24px;
          color: #FBFF12;
        }
        .gf-why-item { display: flex; gap: 14px; margin-bottom: 18px; }
        .gf-why-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; flex-shrink: 0;
        }
        .gf-why-name {
          font-family: 'Inter', sans-serif;
          font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 3px;
        }
        .gf-why-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.5;
        }
        .gf-wa-direct {
          display: flex; align-items: center; gap: 12px;
          background: linear-gradient(135deg, #41EAD4, #2dd4bf);
          border-radius: 16px; padding: 20px; color: #1A1423;
          text-decoration: none;
          transition: transform .25s, box-shadow .25s;
          box-shadow: 0 6px 24px rgba(65,234,212,0.25);
        }
        .gf-wa-direct:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(65,234,212,0.4); }
        .gf-wa-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(26,20,35,0.1);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .gf-wa-text { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 15px; color: #1A1423; }
        .gf-wa-sub  { font-family: 'Inter', sans-serif; font-size: 12px; color: rgba(26,20,35,0.6); margin-top: 2px; }
        .gf-form-card {
          background: #fff; border: 1px solid rgba(255,32,110,0.12);
          border-radius: 24px; padding: 40px;
          box-shadow: 0 8px 40px rgba(255,32,110,0.09);
        }
        @media(max-width:600px){ .gf-form-card { padding: 24px; } }
        .gf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media(max-width:600px){ .gf-row { grid-template-columns: 1fr; } }
        .gf-label {
          display: block; font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 700; color: #374151; margin-bottom: 7px;
        }
        .gf-req { color: #ef4444; }
        .gf-error {
          font-family: 'Inter', sans-serif;
          font-size: 12px; color: #ef4444; margin-top: 5px;
          display: flex; align-items: center; gap: 4px;
        }
        .gf-char { font-family: 'Inter', sans-serif; font-size: 11px; color: #94a3b8; text-align: right; margin-top: 4px; }
        .gf-note { font-family: 'Inter', sans-serif; font-size: 12px; color: #94a3b8; text-align: center; margin-top: 12px; }
        .gf-success {
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; padding: 48px 24px; text-align: center;
        }
        .gf-suc-circle {
          width: 80px; height: 80px; border-radius: 50%;
          background: linear-gradient(135deg, #FF206E, #41EAD4);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 8px 32px rgba(255,32,110,0.3);
        }
        .btn-wa {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          width: 100%; padding: 16px;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: #fff; font-family: 'Inter', sans-serif;
          font-size: 16px; font-weight: 700; border: none;
          border-radius: 14px; cursor: pointer;
          transition: transform .25s, box-shadow .25s;
          box-shadow: 0 4px 20px rgba(37,211,102,0.3);
        }
        .btn-wa:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,211,102,0.45); }
        .field {
          width: 100%; padding: 11px 14px;
          border: 1.5px solid #FFD6E4; border-radius: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #1A1423; outline: none;
          transition: border-color .2s, box-shadow .2s; box-sizing: border-box;
          background: #fff;
        }
        .field:focus { border-color: #FF206E; box-shadow: 0 0 0 3px rgba(255,32,110,0.1); }
        .field.err { border-color: #ef4444; }
        .field::placeholder { color: #94a3b8; }
      `}</style>

      <section className="gf-section" ref={ref}>
        <div className="gf-inner">
          <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
            <div className="pill-badge" style={{ margin: '0 auto 18px' }}>
              Send an Enquiry
            </div>
            <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(28px,4.5vw,46px)', color: '#1A1423', marginBottom: 16, letterSpacing: '-0.8px' }}>
              Book Your{' '}
              <span style={{ color: '#FF206E' }}>Trade Test</span>
            </h2>
            <p style={{ color: '#4B4453', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.7, fontFamily: "'Inter',sans-serif" }}>
              Fill out the form and we'll reply via WhatsApp. Your certification journey starts here.
            </p>
          </div>

          <div className="gf-layout">
            <div className="gf-left reveal-l">
              <div className="gf-why-card">
                <div className="gf-why-title">Why Choose Us?</div>
                {[
                  { e: '🔧', t: 'Hands-On Training', d: 'Real workshop practice with industry-standard tools.' },
                  { e: '✅', t: 'Certified Testing', d: 'Professional trade tests by qualified assessors.' },
                  { e: '📜', t: 'Recognised Certificates', d: 'Certificates valued by employers locally and abroad.' },
                  { e: '💬', t: 'Quick WhatsApp Response', d: 'We respond to all enquiries within hours.' },
                ].map((b, i) => (
                  <div key={i} className="gf-why-item">
                    <div className="gf-why-icon">{b.e}</div>
                    <div>
                      <div className="gf-why-name">{b.t}</div>
                      <div className="gf-why-desc">{b.d}</div>
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 700 }}>Contact Details</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 2 }}>
                    <div>📍 Faram Stop, Baghdada–Par Hoti Rd</div>
                    <div style={{ paddingLeft: 20 }}>Sikandari Hoti, Mardan, 23200, KPK</div>
                    <div>📞 0316-9139128</div>
                    <div>📱 +92-319-4139360</div>
                    <div>✉️ newtrademan@gmail.com</div>
                  </div>
                </div>
              </div>

              <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" className="gf-wa-direct">
                <div className="gf-wa-icon">
                  <svg width="22" height="22" fill="#1A1423" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </div>
                <div>
                  <div className="gf-wa-text">Chat on WhatsApp Now</div>
                  <div className="gf-wa-sub">+92-319-4139360 · Direct chat</div>
                </div>
                <svg style={{ marginLeft: 'auto', opacity: .7 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1423" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>

            <div className="reveal-r" style={{ transitionDelay: '.15s' }}>
              <div className="gf-form-card">
                {done ? (
                  <div className="gf-success">
                    <div className="gf-suc-circle">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 24, color: '#FF206E', marginBottom: 8 }}>
                      Message Sent!
                    </h3>
                    <p style={{ fontFamily: "'Inter',sans-serif", color: '#4B4453', fontSize: 15, maxWidth: 280 }}>
                      Your enquiry was sent via WhatsApp. We'll respond shortly. Thank you!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 22, color: '#FF206E', marginBottom: 6 }}>Send Us a Message</h3>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: '#4B4453', marginBottom: 28 }}>Fields marked <span style={{ color: '#ef4444' }}>*</span> are required.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                      <div className="gf-row">
                        <div>
                          <label className="gf-label">Full Name <span className="gf-req">*</span></label>
                          <input className={`field${err.name ? ' err' : ''}`} type="text" placeholder="Muhammad Ali" value={f.name} onChange={ch('name')} />
                          {err.name && <div className="gf-error">⚠ {err.name}</div>}
                        </div>
                        <div>
                          <label className="gf-label">Phone Number <span className="gf-req">*</span></label>
                          <input className={`field${err.phone ? ' err' : ''}`} type="tel" placeholder="0316-9139128" value={f.phone} onChange={ch('phone')} />
                          {err.phone && <div className="gf-error">⚠ {err.phone}</div>}
                        </div>
                      </div>

                      <div className="gf-row">
                        <div>
                          <label className="gf-label">Trade / Course <span className="gf-req">*</span></label>
                          <select className={`field${err.trade ? ' err' : ''}`} value={f.trade} onChange={ch('trade')} style={{ cursor: 'pointer' }}>
                            <option value="">Select trade…</option>
                            {trades.map(j => <option key={j} value={j}>{j}</option>)}
                          </select>
                          {err.trade && <div className="gf-error">⚠ {err.trade}</div>}
                        </div>
                        <div>
                          <label className="gf-label">Type</label>
                          <select className="field" value={f.type} onChange={ch('type')} style={{ cursor: 'pointer' }}>
                            <option>Training</option>
                            <option>Trade Testing</option>
                            <option>Both</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="gf-label">Preferred Date <span style={{ color: '#94a3b8', fontWeight: 400 }}>(optional)</span></label>
                        <input className="field" type="date" value={f.date} onChange={ch('date')} />
                      </div>

                      <div>
                        <label className="gf-label">Message <span className="gf-req">*</span></label>
                        <textarea
                          className={`field${err.msg ? ' err' : ''}`}
                          rows={4} style={{ resize: 'none' }}
                          placeholder="Tell us about your trade experience, what you'd like to be trained or tested in, and any questions…"
                          value={f.msg} onChange={ch('msg')}
                        />
                        {err.msg && <div className="gf-error">⚠ {err.msg}</div>}
                        <div className="gf-char">{f.msg.length} / 500 characters</div>
                      </div>

                      <button type="submit" className="btn-wa">
                        <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        Send via WhatsApp
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </button>

                      <p className="gf-note">WhatsApp will open with your info pre-filled. 100% free &amp; confidential.</p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
