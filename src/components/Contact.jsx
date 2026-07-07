import { useRef, useEffect, useState } from 'react';
import { MapPin, Phone, Heart, MessageSquare } from 'lucide-react';

const LAT = 34.05092466240541;
const LNG = 71.57720677116428;

export default function Contact() {
  const ref = useRef(null);
  const [formType, setFormType] = useState('general');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*Awaz e Insan Inquiry*\n\nName: ${name}\nPhone: ${phone}\nType: ${interest || formType}\nMessage: ${message}`;
    window.open(`https://wa.me/923159942780?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="bg-white py-24 px-6" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 reveal">
          <div className="pill-badge mx-auto mb-[18px]">
            <span className="pill-dot" />
            GET IN TOUCH
          </div>
          <h2 className="font-heading font-black text-[clamp(28px,3.5vw,42px)] text-ink mb-2.5">
            We'd Love to <span className="text-primary">Hear From You</span>
          </h2>
          <p className="text-[#555] text-[15px] max-w-[500px] mx-auto leading-relaxed">
            Whether you want to help, seek support, or learn more — reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="reveal-l">
            <div className="form-toggle">
              {['Donate', 'Volunteer', 'Seek Help', 'General'].map(t => (
                <button key={t}
                  className={`flex-1 px-4 py-2.5 rounded-xl border-none cursor-pointer font-semibold text-[13px] transition-all duration-250 ${formType === t.toLowerCase() ? 'bg-white text-primary shadow-sm' : 'bg-transparent text-[#555]'}`}
                  onClick={() => setFormType(t.toLowerCase())}>
                  {t}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-3.5">
                <label className="block text-xs font-semibold text-[#555] mb-1.5">Your Name</label>
                <input placeholder="Full name" value={name} onChange={e => setName(e.target.value)} required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-primary/10 text-sm font-body text-ink outline-none transition-border duration-200 focus:border-primary focus:shadow-[0_0_0_2px_rgba(0,109,119,.06)] box-border" />
              </div>
              <div className="mb-3.5">
                <label className="block text-xs font-semibold text-[#555] mb-1.5">Phone Number</label>
                <input placeholder="03XX-XXXXXXX" value={phone} onChange={e => setPhone(e.target.value)} required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-primary/10 text-sm font-body text-ink outline-none transition-border duration-200 focus:border-primary focus:shadow-[0_0_0_2px_rgba(0,109,119,.06)] box-border" />
              </div>
              <div className="mb-3.5">
                <label className="block text-xs font-semibold text-[#555] mb-1.5">I want to</label>
                <select value={interest} onChange={e => setInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-primary/10 text-sm font-body text-ink outline-none transition-border duration-200 focus:border-primary focus:shadow-[0_0_0_2px_rgba(0,109,119,.06)] box-border">
                  <option value="">Select...</option>
                  <option value="Donate">Donate</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Seek Help">Seek Help</option>
                  <option value="General">General Inquiry</option>
                </select>
              </div>
              <div className="mb-3.5">
                <label className="block text-xs font-semibold text-[#555] mb-1.5">Message</label>
                <textarea placeholder="Tell us how you'd like to connect..." value={message} onChange={e => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-primary/10 text-sm font-body text-ink outline-none transition-border duration-200 focus:border-primary focus:shadow-[0_0_0_2px_rgba(0,109,119,.06)] box-border resize-y min-h-[80px]" />
              </div>
              <button type="submit"
                className="w-full py-3 rounded-xl border-none bg-primary text-white font-bold text-sm cursor-pointer flex items-center justify-center gap-2 transition-transform duration-200 hover:-translate-y-0.5">
                <MessageSquare size={16} /> Send via WhatsApp
              </button>
            </form>

            <div className="text-center mt-4">
              <span className="text-xs text-[#999]">or email us at </span>
              <a href="mailto:info@awazeinsan.pk" className="text-[13px] text-primary font-semibold no-underline">info@awazeinsan.pk</a>
            </div>
          </div>

          <div className="reveal-r" style={{ transitionDelay: '.12s' }}>
            <div className="flex items-start gap-3.5 p-4 bg-background border border-primary/8 rounded-[14px] mb-3 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={18} color="#006D77" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wide text-primary mb-1">WhatsApp</div>
                <div className="text-[13px] font-medium text-[#555] leading-relaxed">0315-9942780</div>
              </div>
            </div>
            <div className="flex items-start gap-3.5 p-4 bg-background border border-primary/8 rounded-[14px] mb-3 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={18} color="#006D77" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wide text-primary mb-1">Community Office</div>
                <div className="text-[13px] font-medium text-[#555] leading-relaxed">3H2G+8V4, Larama Rd, Larama Hazrat Jan Colony<br />Peshawar, KPK, Pakistan</div>
              </div>
            </div>
            <div className="flex items-start gap-3.5 p-4 bg-background border border-primary/8 rounded-[14px] mb-3 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-accent/12 flex items-center justify-center shrink-0">
                <Heart size={18} color="#b39b00" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wide text-primary mb-1">Follow Us</div>
                <div className="text-[13px] font-medium text-[#555] leading-relaxed">
                  <a href="https://www.facebook.com/awaze.insan/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold no-underline inline-flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#006D77"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Awaz e Insan on Facebook
                  </a>
                  <br />
                  <a href="https://www.facebook.com/people/Awaz-e-insan-Founder-Malik-Yousaf-khan-charsadda-road-larrammah-peshawar/100064377954004/" target="_blank" rel="noopener noreferrer" className="text-[#555] text-xs no-underline">
                    Founder: Malik Yousaf Khan
                  </a>
                </div>
              </div>
            </div>

            <div className="map-container mt-6">
              <div className="absolute top-3.5 left-3.5 z-10 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl text-[13px] font-semibold text-ink flex items-center gap-1.5 shadow-sm border border-primary/10">
                <MapPin size={14} color="#006D77" />
                Larama, Peshawar
              </div>
              <iframe
                title="Awaz e Insan Location"
                src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
                width="100%"
                height="320"
                style={{ display: 'block', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}