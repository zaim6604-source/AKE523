import { useState } from 'react';
import { Phone, X } from 'lucide-react';

export default function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*HR-Pro Quick Inquiry*\n\nName: ${name}\nPhone: ${phone}\nInterest: ${interest}`;
    window.open(`https://wa.me/923121124692?text=${encodeURIComponent(text)}`, '_blank');
    setOpen(false);
    setName('');
    setPhone('');
    setInterest('');
  };

  return (
    <>
      <style>{`
        .fw-wrap { position:fixed; bottom:24px; right:24px; z-index:9998; display:flex; flex-direction:column; align-items:flex-end; gap:12px; }
        .fw-btn { width:56px;height:56px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(216,17,89,.35);transition:transform .25s,box-shadow .25s;position:relative;z-index:2; }
        .fw-btn:hover { transform:scale(1.1); box-shadow:0 8px 30px rgba(216,17,89,.5); }
        .fw-card { background:#fff; border-radius:16px; padding:20px; width:300px; box-shadow:0 12px 40px rgba(0,0,0,.12); border:1px solid rgba(0,107,166,.08); transition:transform .25s,opacity .25s; transform-origin:bottom right; }
        .fw-card.closed { transform:scale(.8) translateY(20px); opacity:0; pointer-events:none; }
        .fw-card.open { transform:scale(1) translateY(0); opacity:1; }
        .fw-title { font-family:"Plus Jakarta Sans",sans-serif; font-weight:800; font-size:15px; color:#06283D; margin-bottom:4px; }
        .fw-sub { font-size:12px; color:#555; margin-bottom:14px; }
        .fw-field { margin-bottom:10px; }
        .fw-field input { width:100%; padding:10px 14px; border-radius:10px; border:1px solid rgba(0,107,166,.10); font-size:13px; font-family:"Inter",sans-serif; color:#06283D; outline:none; transition:border-color .2s; box-sizing:border-box; }
        .fw-field input:focus { border-color:#006BA6; box-shadow:0 0 0 2px rgba(0,107,166,.06); }
        .fw-send { width:100%; padding:10px; border-radius:10px; border:none; background:#006BA6; color:#fff; font-weight:700; font-size:13px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; transition:transform .2s; }
        .fw-send:hover { transform:translateY(-1px); }
      `}</style>

      <div className="fw-wrap">
        {/* Card */}
        <div className={`fw-card ${open ? 'open' : 'closed'}`}>
          <div className="fw-title">Quick Inquiry</div>
          <div className="fw-sub">Share your details and we'll connect on WhatsApp</div>
          <form onSubmit={handleSubmit}>
            <div className="fw-field">
              <input
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div className="fw-field">
              <input
                placeholder="Phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="fw-field">
              <input
                placeholder="What are you interested in?"
                value={interest}
                onChange={e => setInterest(e.target.value)}
              />
            </div>
            <button type="submit" className="fw-send">
              <Phone size={14} /> Send
            </button>
          </form>
        </div>

        {/* Button */}
        <button
          className="fw-btn"
          onClick={() => setOpen(!open)}
          style={{ background: open ? '#06283D' : '#D81159' }}
          aria-label="Get Started"
        >
          {open ? (
            <X size={22} color="#fff" />
          ) : (
            <Phone size={22} color="#fff" />
          )}
        </button>
      </div>
    </>
  );
}