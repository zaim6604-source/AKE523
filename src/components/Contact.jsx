import { useState } from 'react';
import useInView from '../hooks/useInView';

export default function Contact() {
  const [ref, inView] = useInView();
  const [formType, setFormType] = useState('hiring');
  const [form, setForm] = useState({ name: '', phone: '', email: '', extra: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello ZB HR Services!%0A%0AI'm ${formType === 'hiring' ? 'hiring' : 'job seeking'}.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0A${formType === 'hiring' ? 'Company/Role' : 'Job Category'}: ${form.extra}%0AMessage: ${form.message}`
    );
    window.open(`https://wa.me/923008582313?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="section-pad bg-white overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-envelope text-primary/70 text-xs" /> GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading">Let's Start a Conversation</h2>
          <p className="text-ink/60 text-lg mt-3 max-w-2xl mx-auto">Reach out and we'll get back to you within 24 hours.</p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Form */}
          <div className={`bg-background rounded-2xl p-6 sm:p-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex gap-2 mb-6 bg-white rounded-xl p-1 shadow-sm">
              <button onClick={() => setFormType('hiring')} className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${formType === 'hiring' ? 'bg-primary text-white shadow-md' : 'text-ink/60 hover:text-primary'}`}>
                <i className="fas fa-building mr-1.5" /> I'm Hiring
              </button>
              <button onClick={() => setFormType('seeking')} className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${formType === 'seeking' ? 'bg-primary text-white shadow-md' : 'text-ink/60 hover:text-primary'}`}>
                <i className="fas fa-user mr-1.5" /> I'm Job Seeking
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required
                className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <input type="text" name="extra" value={form.extra} onChange={handleChange}
                placeholder={formType === 'hiring' ? 'Company Name / Role to Fill' : 'Job Category Interested In'} required
                className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Your Message..."
                className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none" />
              <button type="submit"
                className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 text-base">
                <i className="fab fa-whatsapp text-lg" /> Send via WhatsApp
              </button>
              <p className="text-xs text-ink/40 text-center">Your information is kept confidential. WhatsApp is our primary contact method.</p>
            </form>
          </div>

          {/* Info + Map */}
          <div className={`space-y-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>
            <div className="bg-background rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-whatsapp text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink/40 uppercase tracking-wider">WhatsApp</p>
                  <a href="https://wa.me/923008582313" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">0300-8582313</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink/40 uppercase tracking-wider">Email</p>
                  <a href="mailto:info@zbhrservices.pk" className="text-primary font-semibold hover:underline">info@zbhrservices.pk</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-location-dot text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink/40 uppercase tracking-wider">Address</p>
                  <p className="text-ink/70 text-sm">FORC+RCP, Service Rd, Islam Nagar, Zaman Colony, Lahore, Punjab</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-card border border-primary/5 h-64">
              <iframe title="ZB HR Services Location" src="https://www.google.com/maps?q=Service+Road+Islam+Nagar+Zaman+Colony+Lahore&hl=en&z=15&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
