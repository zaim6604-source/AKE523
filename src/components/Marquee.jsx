export default function Marquee() {
  return (
    <>
      <style>{`
        .mq-wrap { background:#006BA6; overflow:hidden; padding:12px 0; border-top:1px solid rgba(255,255,255,.10); border-bottom:1px solid rgba(255,255,255,.10); }
        .mq-track { display:flex; gap:48px; white-space:nowrap; animation:marquee 30s linear infinite; width:max-content; }
        .mq-item { font-size:13px; font-weight:600; letter-spacing:.02em; color:#fff; display:flex; align-items:center; gap:12px; }
        .mq-item span { color:#FFBC42; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>
      <div className="mq-wrap">
        <div className="mq-track">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 48 }}>
              <span className="mq-item">◆ <span>Staff & Payroll Outsourcing</span></span>
              <span className="mq-item">• <span>Recruitment & Executive Search</span></span>
              <span className="mq-item">• <span>Blended Learning & Training</span></span>
              <span className="mq-item">• <span>Org Design & Restructuring</span></span>
              <span className="mq-item">• <span>Leadership Development</span></span>
              <span className="mq-item">◆ <span>Karachi</span></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}