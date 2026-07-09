import { useState } from 'react';
import FadeIn from '../components/FadeIn';

const faqs = [
  {
    q: 'Is Fowzan Traders government licensed?',
    a: 'Yes, absolutely. Fowzan Traders (Fowzan Global Employment Services) is a fully government-licensed Overseas Employment Promoter (OEP) under License No. 2309/SKT. We operate in full compliance with Pakistani overseas employment regulations.',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We currently recruit for Saudi Arabia, UAE, Qatar, Oman, Germany, Poland, Romania, Greece, and Malaysia. Our network of trusted employers across the globe continues to grow as we identify new, verified opportunities.',
  },
  {
    q: 'Where is your office located?',
    a: 'Our office is located at Circular Road, Daska, Sialkot, Punjab. We warmly welcome walk-in inquiries during business hours.',
  },
  {
    q: 'What documents do I need to apply?',
    a: 'You typically need a valid passport (minimum 6 months validity), educational certificates, professional experience letters, CNIC, and passport-sized photographs. Requirements vary by country and position — contact us for a personalized checklist.',
  },
  {
    q: 'How long does the visa process take?',
    a: 'Processing times vary by country and job category, but typically take 2 to 8 weeks. We keep you updated throughout and work to expedite every step.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fees are transparent and communicated upfront. There are no hidden charges. Visit our office at Circular Road, Daska for a detailed fee breakdown based on your desired destination and position.',
  },
];

const jobCategories = [
  'Construction Worker', 'Driver', 'Hospitality Staff', 'Nurse / Medical',
  'Skilled Trade', 'Factory Worker', 'Security Staff', 'IT Professional',
  'General Labour', 'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);
  const [toast, setToast] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Contact Form - Fowzan Traders%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email || 'N/A'}%0AJob Category: ${form.category || 'Not specified'}%0AMessage: ${form.message || 'N/A'}`
    );
    window.open(`https://wa.me/923006162506?text=${text}`, '_blank');
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <div>
      {/* Toast */}
      {toast && (
        <div className="fixed top-20 right-4 z-50 bg-white rounded-xl shadow-lg border px-5 py-3 flex items-center gap-3 animate-fade-in" style={{ borderColor: '#83C5BE' }}>
          <i className="fa-solid fa-circle-check" style={{ color: '#25D366' }} />
          <span className="text-sm font-medium" style={{ color: '#003844' }}>Opening WhatsApp...</span>
        </div>
      )}

      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: '#006D77' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFDD00' }}>
              <i className="fa-solid fa-phone" />
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Contact Us</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Have questions? Ready to apply? Reach out to our team and we'll respond promptly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Form */}
          <FadeIn>
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#003844' }}>Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#003844' }}>
                      Your Name <span style={{ color: '#E29578' }}>*</span>
                    </label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="Full name" required
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: '#83C5BE', color: '#003844' }}
                      onFocus={(e) => e.target.style.borderColor = '#006D77'}
                      onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#003844' }}>
                      Phone Number <span style={{ color: '#E29578' }}>*</span>
                    </label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="03XX-XXXXXXX" required
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: '#83C5BE', color: '#003844' }}
                      onFocus={(e) => e.target.style.borderColor = '#006D77'}
                      onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#003844' }}>Email Address</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                    style={{ borderColor: '#83C5BE', color: '#003844' }}
                    onFocus={(e) => e.target.style.borderColor = '#006D77'}
                    onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#003844' }}>Job Category</label>
                  <select
                    name="category" value={form.category} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                    style={{ borderColor: '#83C5BE', color: '#003844' }}
                    onFocus={(e) => e.target.style.borderColor = '#006D77'}
                    onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
                  >
                    <option value="">Select category</option>
                    {jobCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#003844' }}>Your Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    rows={4} placeholder="Tell us about your background and preferred destination..."
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200 resize-none"
                    style={{ borderColor: '#83C5BE', color: '#003844' }}
                    onFocus={(e) => e.target.style.borderColor = '#006D77'}
                    onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 text-white"
                  style={{ backgroundColor: '#E29578' }}
                >
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
              </form>
              <p className="text-center sm:text-left mt-4 text-sm" style={{ color: '#006D77' }}>
                Or email: <a href="mailto:fowzan_traders2012@yahoo.com" style={{ color: '#E29578' }}>fowzan_traders2012@yahoo.com</a>
              </p>
            </div>
          </FadeIn>

          {/* Info */}
          <div className="space-y-4">
            <FadeIn delay={1}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: '#83C5BE' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#003844' }}>
                  <i className="fa-solid fa-phone" style={{ color: '#006D77' }} /> Phone
                </h4>
                <p className="text-sm"><a href="tel:0526615953" style={{ color: '#006D77' }}>052-6615953</a></p>
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: '#83C5BE' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#003844' }}>
                  <i className="fab fa-whatsapp" style={{ color: '#25D366' }} /> WhatsApp
                </h4>
                <p><a href="https://wa.me/923006162506" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: '#25D366' }}>0300-6162506 (Primary)</a></p>
                <p className="mt-1"><a href="https://wa.me/923009612018" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: '#25D366' }}>0300-9612018</a></p>
                <p className="mt-1"><a href="https://wa.me/923006586706" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: '#25D366' }}>0300-6586706</a></p>
              </div>
            </FadeIn>

            <FadeIn delay={3}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: '#83C5BE' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#003844' }}>
                  <i className="fab fa-facebook" style={{ color: '#006D77' }} /> Facebook
                </h4>
                <a href="https://www.facebook.com/Fowzan-Global-Employment-Services" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: '#006D77' }}>
                  Fowzan Global Employment Services
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={4}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: '#83C5BE' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#003844' }}>
                  <i className="fa-solid fa-envelope" style={{ color: '#006D77' }} /> Email
                </h4>
                <p className="text-sm"><a href="mailto:fowzan_traders2012@yahoo.com" style={{ color: '#006D77' }}>fowzan_traders2012@yahoo.com</a></p>
              </div>
            </FadeIn>

            <FadeIn delay={5}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: '#83C5BE' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#003844' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: '#006D77' }} /> Address
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#006D77' }}>Circular Road, Daska, Sialkot, Punjab</p>
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={6}>
              <div className="rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: '#83C5BE' }}>
                <iframe
                  title="Fowzan Traders Location"
                  src="https://www.google.com/maps?q=30.281084247738274,73.73902995767145&hl=en&z=15&output=embed"
                  width="100%" height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#EDF6F9' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4 bg-[#006D77]/10 text-[#006D77]">
              <i className="fa-solid fa-circle-question" />
              FAQs
            </span>
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#003844' }}>Frequently Asked Questions</h2>
            <p className="text-base mb-10" style={{ color: '#006D77' }}>Quick answers to common questions.</p>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={Math.min(i + 1, 4)}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300" style={{ borderLeft: '4px solid #006D77' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer"
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    <span className="text-sm sm:text-base font-semibold pr-4" style={{ color: '#003844' }}>{faq.q}</span>
                    <i className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: '#006D77' }} />
                  </button>
                  <div className={`accordion-content ${openFaq === i ? 'open' : ''}`}>
                    <div>
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                        <p className="text-sm leading-relaxed m-0" style={{ color: '#006D77' }}>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
