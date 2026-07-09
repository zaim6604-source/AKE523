import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const jobCategories = [
  'Construction & Labor', 'Hospitality & Catering', 'Healthcare & Caregiving',
  'Manufacturing & Factory', 'Logistics & Transport', 'IT & Engineering',
  'Agriculture & Farming', 'Security & Facilities', 'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });
  const [toast, setToast] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Zanib Recruiting Agency! I am interested in overseas employment.%0A%0A--- Application Details ---%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0AJob Category: ${encodeURIComponent(form.category)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/923335020040?text=${text}`, '_blank');
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <SectionWrapper id="contact" badge="GET IN TOUCH" badgeColor="primary">
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-2 font-display">
        Ready to Start Your Journey?
      </h2>
      <p className="text-ink/60 mb-10 max-w-2xl">
        Drop us a message or visit our office on 6th Road, Rawalpindi.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Full Name</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Phone Number</label>
                <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                  placeholder="03XX-XXXXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Job Category</label>
              <select name="category" required value={form.category} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                <option value="">Select a category</option>
                {jobCategories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Message</label>
              <textarea name="message" rows="3" value={form.message} onChange={handleChange}
                placeholder="Tell us about your background and goals..."
                className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" />
            </div>
            <button type="submit"
              className="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-lg">
              <i className="fab fa-whatsapp mr-2" />Submit via WhatsApp
            </button>
          </form>

          <p className="text-center text-xs text-ink/40 mt-4">
            By submitting, you agree to be contacted. Email us at{' '}
            <a href="mailto:info@zanibra.pk" className="text-primary hover:underline">info@zanibra.pk</a>
          </p>

          <div className="mt-8 space-y-3 pt-6 border-t border-ink/10">
            <a href="https://wa.me/923335020040" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-ink/70 hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <i className="fab fa-whatsapp" />
              </span>
              <span className="font-medium">0333-5020040</span>
            </a>
            <a href="tel:+92514846430"
              className="flex items-center gap-3 text-ink/70 hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <i className="fas fa-phone" />
              </span>
              <span className="font-medium">051-4846430</span>
            </a>
            <div className="flex items-start gap-3 text-ink/70">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                <i className="fas fa-map-marker-alt" />
              </span>
              <span className="font-medium text-sm">
                Flat No. 5, 1st Floor, Al-Mustafa Plaza,<br />
                6th Road, Rawalpindi, Punjab
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-auto">
          <iframe
            title="Zanib Recruiting Agency location"
            src="https://www.google.com/maps?q=33.64187638118618,73.07547162698569&hl=en&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '400px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-ink text-white px-6 py-3 rounded-full shadow-2xl animate-slide-up text-sm font-medium">
          <i className="fab fa-whatsapp mr-2 text-accent" />WhatsApp opened in a new tab!
        </div>
      )}
    </SectionWrapper>
  );
}
