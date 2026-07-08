import { useState } from 'react';
import FadeUp from './FadeUp';

export default function ContactMap() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello HKB International! I'm ${form.name} (${form.phone}). ${form.message}`;
    window.open(`https://wa.me/923036784034?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-phone" />
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
            Get in Touch
          </h2>
        </FadeUp>

        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          {/* Contact info + form */}
          <FadeUp delay={100} className="flex-1">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100">
              <h3 className="font-extrabold text-lg text-ink mb-4">Reach Us</h3>

              {/* Contact details */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: 'fa-map-marker-alt', label: 'Address', value: 'Block No. 25, Pathar Bazar, Dera Ghazi Khan, Punjab' },
                  { icon: 'fa-phone', label: 'Phone', value: '064-2462267', href: 'tel:0642462267' },
                  { icon: 'fab fa-whatsapp', label: 'WhatsApp (Primary)', value: '0303-6784034', href: 'https://wa.me/923036784034' },
                  { icon: 'fab fa-whatsapp', label: 'WhatsApp (Secondary)', value: '0300-6784084', href: 'https://wa.me/923006784084' },
                  { icon: 'fa-envelope', label: 'Email', value: 'info@hairokhanbuzdar.pk', href: 'mailto:info@hairokhanbuzdar.pk' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <i className={`fas ${item.icon} text-sm`} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-ink/50 uppercase tracking-wider">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-ink hover:text-primary">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-semibold text-ink">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <h3 className="font-extrabold text-lg text-ink mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-extrabold py-3.5 rounded-xl text-base hover:brightness-110 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
              </form>
              <p className="text-[11px] text-ink/40 mt-2 text-center">
                <i className="fas fa-info-circle" /> Your details are shared via WhatsApp — no data stored.
              </p>
            </div>
          </FadeUp>

          {/* Map */}
          <FadeUp delay={200} className="flex-1">
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-full min-h-[300px]">
              <iframe
                title="HKB International Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=70.6%2C30.0%2C70.7%2C30.1&layer=mapnik&marker=30.05%2C70.65"
                width="100%"
                height="100%"
                style={{ minHeight: 400 }}
                className="border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-ink/40 mt-2 text-center">
              <i className="fas fa-map-marker-alt" /> Pathar Bazar, Dera Ghazi Khan, Punjab
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}