import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaFacebook } from 'react-icons/fa';

const WA = '923194139360';
const MAP_EMBED = 'https://www.google.com/maps?q=Baghdada+Par+Hoti+Road+Sikandari+Hoti+Mardan&hl=en&z=15&output=embed';

export default function ContactMap() {
  useReveal('.ct-reveal');
  const [formType, setFormType] = useState('testing');
  const [form, setForm] = useState({ name: '', phone: '', email: '', trade: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const typeLabel = formType === 'testing' ? 'Trade Testing' : 'Training';
    const text = `*New Trademan Enquiry*\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nTrade: ${form.trade}\nType: ${typeLabel}\nMessage: ${form.message}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#FFF8E0' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 ct-reveal reveal">
          <span className="pill-badge">GET IN TOUCH</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#1A1423' }}>
            Contact Us
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#4B4453' }}>
            Ready to enroll or book a trade test? Reach out to us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="ct-reveal reveal-l">
            <div className="rounded-2xl p-6 md:p-8" style={{ background: '#fff', border: '1px solid rgba(255,32,110,0.08)' }}>
              <div className="flex gap-2 mb-6 p-1 rounded-xl" style={{ background: '#FFF8E0' }}>
                {['testing', 'training'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setFormType(t)}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-semibold border-none cursor-pointer transition-all ${formType === t ? 'text-white' : 'text-[#4B4453]'}`}
                    style={{ background: formType === t ? '#FF206E' : 'transparent' }}
                  >
                    {t === 'testing' ? 'Book a Trade Test' : 'Enroll in Training'}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" placeholder="Full Name" required value={form.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm border outline-none bg-transparent"
                    style={{ borderColor: 'rgba(255,32,110,0.15)', color: '#1A1423' }} />
                  <input name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm border outline-none bg-transparent"
                    style={{ borderColor: 'rgba(255,32,110,0.15)', color: '#1A1423' }} />
                </div>
                <input name="email" type="email" placeholder="Email Address (optional)" value={form.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm border outline-none bg-transparent"
                  style={{ borderColor: 'rgba(255,32,110,0.15)', color: '#1A1423' }} />
                <input name="trade" placeholder="Trade / Course (e.g. Welder, Electrician)" value={form.trade} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm border outline-none bg-transparent"
                  style={{ borderColor: 'rgba(255,32,110,0.15)', color: '#1A1423' }} />
                <textarea name="message" placeholder="Your Message" rows={3} value={form.message} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm border outline-none bg-transparent resize-none"
                  style={{ borderColor: 'rgba(255,32,110,0.15)', color: '#1A1423' }} />
                <button type="submit" className="btn-primary w-full justify-center">
                  <FaPaperPlane size={14} /> Send via WhatsApp
                </button>
              </form>
              <div className="mt-4 text-center">
                <a href="mailto:newtrademan@gmail.com" className="text-xs" style={{ color: '#4B4453' }}>or email newtrademan@gmail.com</a>
                <span style={{ color: '#94a3b8', fontSize: 12, marginLeft: 8 }}>· fallback: info@newtrademan.pk</span>
              </div>
            </div>
          </div>

          {/* Info + Map */}
          <div className="ct-reveal reveal-r space-y-5">
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: '1px solid rgba(255,32,110,0.1)' }}>
              <div className="p-3 flex items-center gap-2" style={{ background: '#FF206E' }}>
                <FaMapMarkerAlt size={14} color="rgba(255,255,255,0.8)" />
                <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>New Trademan — Sikandari Hoti, Mardan</span>
              </div>
              <iframe title="New Trademan Location" src={MAP_EMBED} width="100%" height="300" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: FaPhone, label: 'Phone', value: '0316-9139128', href: 'tel:+923169139128' },
                { icon: FaWhatsapp, label: 'WhatsApp', value: '+92-319-4139360', href: `https://wa.me/${WA}` },
                { icon: FaMapMarkerAlt, label: 'Address', value: 'Faram Stop, Baghdada–Par Hoti Rd, Sikandari Hoti, Mardan, 23200' },
                { icon: FaFacebook, label: 'Facebook', value: 'New Trade Man', href: 'https://www.facebook.com/p/New-Trade-Man-100064054780648/' },
              ].map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: '#fff', border: '1px solid rgba(255,32,110,0.08)' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,32,110,0.08)' }}>
                      <Icon size={16} style={{ color: '#FF206E' }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#FF206E' }}>{item.label}</div>
                      <div className="text-sm font-medium" style={{ color: '#1A1423' }}>{item.value}</div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="no-underline">{content}</a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
