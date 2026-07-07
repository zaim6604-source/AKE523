import { Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { l: 'Home', id: 'home' },
  { l: 'About', id: 'about' },
  { l: 'Services', id: 'services' },
  { l: 'Think HR', id: 'thinkhr' },
  { l: 'Process', id: 'process' },
  { l: 'FAQs', id: 'faqs' },
  { l: 'Contact', id: 'contact' },
];

const services = [
  'Staff Outsourcing',
  'Payroll Outsourcing',
  'Recruitment & Executive Search',
  'Blended Learning',
  'HR Management Solutions',
  'Organization Development',
  'Talent Assessment',
  'HR Advisory & Compliance',
];

const thinkServices = [
  'Org Design & Restructuring',
  'Innovation',
  'Leading Change',
  'Leadership Development',
  'Executive Coaching',
  'Culture & Transformation',
];

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  return (
    <>
      <style>{`
        .ft { background:#005580; color:#fff; }
        .ft-body { max-width:1200px; margin:0 auto; padding:56px 24px; display:grid; grid-template-columns:1.6fr 1fr 1fr 1.3fr; gap:40px; }
        @media(max-width:900px){ .ft-body{grid-template-columns:1fr 1fr; gap:32px} }
        @media(max-width:560px){ .ft-body{grid-template-columns:1fr} }
        .ft-col-title { font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:20px;display:flex;align-items:center;gap:8px; }
        .ft-col-title::before { content:'';width:20px;height:2px;border-radius:99px;background:#FFBC42; }
        .ft-link { display:block;color:rgba(255,255,255,.7);font-size:13px;margin-bottom:8px;cursor:pointer;background:none;border:none;text-align:left;padding:0;transition:color .2s; }
        .ft-link:hover { color:#FFBC42; }
        .ft-logo { display:flex;align-items:center;gap:12px;margin-bottom:16px; }
        .ft-logo-icon { width:44px;height:44px;border-radius:12px;background:#006BA6;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 14px rgba(0,107,166,.25);color:#fff;font-weight:900;font-size:20px; }
        .ft-logo-name { font-weight:900;font-size:16px;color:#fff;line-height:1.2;font-family:"Plus Jakarta Sans",sans-serif; }
        .ft-logo-sub  { font-size:10px;font-weight:600;color:#0496FF;letter-spacing:.06em; }
        .ft-tagline { font-size:13px;color:rgba(255,255,255,.65);line-height:1.8;margin-bottom:16px; }
        .ft-addr-item { display:flex;align-items:flex-start;gap:10px;margin-bottom:12px;font-size:13px;color:rgba(255,255,255,.7);line-height:1.6; }
        .ft-addr-item a { color:#0496FF;text-decoration:none;transition:color .2s; }
        .ft-addr-item a:hover { color:#FFBC42; }
        .ft-soc { display:flex;gap:10px;margin-top:16px; }
        .ft-soc-btn { width:38px;height:38px;border-radius:10px;border:1px solid rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;text-decoration:none;transition:all .2s;color:#fff; }
        .ft-soc-btn:hover { border-color:#FFBC42; background:rgba(255,188,66,.10); transform:translateY(-2px); color:#FFBC42; }
        .ft-bottom { border-top:1px solid rgba(255,255,255,.08); padding:20px 24px; }
        .ft-bottom-inner { max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px; }
        .ft-bottom-copy { font-size:13px;color:rgba(255,255,255,.5); }
        .ft-cta-row { display:flex;align-items:center;gap:12px;margin-top:12px;flex-wrap:wrap; }
        .ft-wa-btn { display:inline-flex;align-items:center;gap:8px;background:#25D366;color:#fff;font-weight:700;font-size:13px;padding:10px 20px;border-radius:10px;border:none;cursor:pointer;text-decoration:none;transition:transform .2s,box-shadow .2s; }
        .ft-wa-btn:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(37,211,102,.25); }
      `}</style>

      <footer className="ft">
        <div className="ft-body">
          {/* Brand */}
          <div>
            <div className="ft-logo">
              <div className="ft-logo-icon">H</div>
              <div>
                <div className="ft-logo-name">HR-Pro</div>
                <div className="ft-logo-sub">Consulting & Services • Karachi</div>
              </div>
            </div>
            <p className="ft-tagline">
              HR-Pro Consulting & Services delivers research-driven, state-of-the-art HR solutions — outsourcing,
              executive search, blended learning, and strategic consulting — transforming organizations across Karachi.
            </p>
            <div className="ft-cta-row">
              <a href="https://wa.me/923121124692" target="_blank" rel="noopener noreferrer" className="ft-wa-btn">
                <Phone size={14} /> 0312-1124692
              </a>
            </div>
            <div className="ft-soc">
              <a href="https://www.linkedin.com/company/hr-pro-consulting-services/" target="_blank" rel="noopener noreferrer" className="ft-soc-btn" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.facebook.com/people/HR-Pro-Consulting-Services/61564620787478/" target="_blank" rel="noopener noreferrer" className="ft-soc-btn" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="ft-col-title">Quick Links</div>
            {quickLinks.map(({ l, id }) => (
              <button key={id} className="ft-link" onClick={() => go(id)}>{l}</button>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="ft-col-title">Our Services</div>
            {services.map(s => (
              <button key={s} className="ft-link" onClick={() => go('services')}>{s}</button>
            ))}
            <div className="ft-col-title" style={{ marginTop: 20 }}>Think HR Consulting</div>
            {thinkServices.map(s => (
              <button key={s} className="ft-link" onClick={() => go('thinkhr')}>{s}</button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="ft-col-title">Contact Info</div>
            <div className="ft-addr-item">
              <MapPin size={14} color="#0496FF" style={{ marginTop: 2, flexShrink: 0 }} />
              <span>40/12, Area 1-D Rd, Sector 37-B<br />Landhi Town, Karachi, Sindh</span>
            </div>
            <div className="ft-addr-item">
              <Phone size={14} color="#0496FF" style={{ marginTop: 2, flexShrink: 0 }} />
              <a href="https://wa.me/923121124692" target="_blank" rel="noopener noreferrer">0312-1124692</a>
            </div>
            <div className="ft-addr-item">
              <Mail size={14} color="#0496FF" style={{ marginTop: 2, flexShrink: 0 }} />
              <a href="mailto:info@hr-pro.co">info@hr-pro.co</a>
            </div>
            <div className="ft-addr-item" style={{ marginTop: 16 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0496FF" style={{ marginTop: 2, flexShrink: 0 }}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <a href="https://www.linkedin.com/company/hr-pro-consulting-services/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="ft-addr-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0496FF" style={{ marginTop: 2, flexShrink: 0 }}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <a href="https://www.facebook.com/people/HR-Pro-Consulting-Services/61564620787478/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <div className="ft-bottom-inner">
            <span className="ft-bottom-copy">
              &copy; {new Date().getFullYear()} HR-Pro Consulting & Services (Pvt) Ltd. All rights reserved.
            </span>
            <span className="ft-bottom-copy">Karachi, Sindh, Pakistan</span>
          </div>
        </div>
      </footer>
    </>
  );
}