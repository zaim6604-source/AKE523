import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { faqs } from '../data/jobs';

const WA_NUMBER = '923008477507';

const jobCategories = [
  'Construction & Labor',
  'Hospitality & Catering',
  'Healthcare & Caregiving',
  'Manufacturing & Factory',
  'Logistics & Transport',
  'IT & Engineering',
  'Agriculture & Farming',
  'Security & Facilities',
  'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Rolla Corporation! I am interested in overseas employment.%0A%0A--- Application Details ---%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0AJob Category: ${encodeURIComponent(form.category)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-highlight to-primary py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-accent text-white mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading mb-4">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Ready to start your international career journey? Reach out to us today.
          </p>
        </div>
      </div>

      {/* Contact Form + Info */}
      <SectionWrapper badge="CONTACT" badgeColor="primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="03XX-XXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Job Category</label>
                <select
                  name="category"
                  required
                  value={form.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white"
                >
                  <option value="">Select a category</option>
                  {jobCategories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Message</label>
                <textarea
                  name="message"
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your background and goals..."
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cta text-white py-3.5 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-lg"
              >
                <i className="fab fa-whatsapp mr-2" />Submit via WhatsApp
              </button>
            </form>

            <p className="text-center text-xs text-ink/40 mt-4">
              By submitting, you agree to be contacted regarding your inquiry. Alternatively, email us at{' '}
              <a href="mailto:info@rollacorp.pk" className="text-primary hover:underline">info@rollacorp.pk</a>
            </p>

            {/* Contact info rows */}
            <div className="mt-8 space-y-3 pt-6 border-t border-ink/10">
              <a
                href="https://wa.me/923008477507"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink/70 hover:text-accent transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <i className="fab fa-whatsapp" />
                </span>
                <span className="font-medium">0300-8477507</span>
              </a>
              <a
                href="tel:042363003089"
                className="flex items-center gap-3 text-ink/70 hover:text-accent transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <i className="fas fa-phone" />
                </span>
                <span className="font-medium">042-36300308-9</span>
              </a>
              <div className="flex items-start gap-3 text-ink/70">
                <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 mt-1">
                  <i className="fas fa-map-marker-alt" />
                </span>
                <span className="font-medium text-sm">
                  Office No. 5, 1st Floor, Davis Heights,<br />
                  38-Davis Road, Lahore, Punjab
                </span>
              </div>
            </div>
          </div>

          {/* Right: Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-auto">
            <iframe
              title="Rolla Corporation location"
              src="https://www.google.com/maps?q=Davis+Heights+38+Davis+Road+Lahore&hl=en&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* FAQs */}
      <SectionWrapper badge="FAQS" badgeColor="secondary">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading mb-2">
          Got Questions?
        </h2>
        <p className="text-ink/60 mb-10 max-w-2xl">
          Everything you need to know about working with Rolla Corporation.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden border-l-4 transition-all ${
                openFaq === i ? 'border-accent shadow-lg' : 'border-ink/10 shadow-md'
              } bg-white`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenFaq(i === openFaq ? null : i)}
              >
                <span className="font-bold text-ink pr-4">{faq.q}</span>
                <span className={`text-accent transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>
                  <i className="fas fa-plus" />
                </span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-ink/70 leading-relaxed text-sm border-t border-ink/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}