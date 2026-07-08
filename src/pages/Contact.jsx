import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const faqs = [
  { q: 'What documents do I need to apply for a job abroad?', a: 'You\'ll need a valid passport (minimum 2 years validity), CNIC, passport-sized photographs, and any relevant experience or qualification certificates. We\'ll guide you through the complete list.' },
  { q: 'How long does the visa process take?', a: 'Processing times vary by country and role, but typically range from 2 to 8 weeks. We keep you updated at every stage.' },
  { q: 'Are there any hidden fees?', a: 'No. We believe in complete transparency. All costs are communicated clearly upfront before any payment is made.' },
  { q: 'Which countries do you recruit for?', a: 'We currently recruit for Saudi Arabia, UAE, Qatar, Oman, Kuwait, Germany, Poland, Greece, and Malaysia.' },
  { q: 'Do you provide pre-departure training?', a: 'Yes, we provide comprehensive pre-departure briefings covering cultural norms, labor laws, and practical tips for your destination country.' },
  { q: 'Can I contact you after I reach my destination?', a: 'Absolutely. Our support continues after placement. You can reach us anytime via WhatsApp or phone.' },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const revealRef = useScrollReveal();
  const faqRef = useScrollReveal();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Al-Atique Recruiting Agency! New inquiry from ${form.name || 'N/A'}. Phone: ${form.phone || 'N/A'}. Email: ${form.email || 'N/A'}. Message: ${form.message || 'N/A'}.`;
    window.open(`https://wa.me/923005668365?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="page-fade">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#FF1654] to-[#D60046] pt-12 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD400] font-[Plus+Jakarta+Sans]">
            Get in Touch
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-[Plus+Jakarta+Sans] text-white mt-3 mb-3">
            Let&rsquo;s Start Your Journey
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            Reach out to us — we&rsquo;re here to answer your questions and help you find the right opportunity.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Form */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF1654] font-[Plus+Jakarta+Sans]">
                Send a Message
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-[Plus+Jakarta+Sans] text-[#152935] mt-2 mb-6">
                We&rsquo;ll Get Back to You
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#152935]/70 mb-1.5 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-[#FFF3E0] focus:border-[#FF1654] focus:ring-2 focus:ring-[#FF1654]/10 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#152935]/70 mb-1.5 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="03XX-XXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-[#FFF3E0] focus:border-[#FF1654] focus:ring-2 focus:ring-[#FF1654]/10 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#152935]/70 mb-1.5 uppercase tracking-wider">Email (optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#FFF3E0] focus:border-[#FF1654] focus:ring-2 focus:ring-[#FF1654]/10 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#152935]/70 mb-1.5 uppercase tracking-wider">Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest, preferred country, and role..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#FFF3E0] focus:border-[#FF1654] focus:ring-2 focus:ring-[#FF1654]/10 outline-none transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#70C1B3] rounded-xl hover:bg-[#5daa9d] hover:shadow-lg transition-all"
                >
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
                <p className="text-xs text-[#152935]/40 text-center">
                  By submitting, you agree to be contacted via WhatsApp. Your data is kept private.
                </p>
              </form>
            </div>

            {/* Contact Info + Map */}
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 sm:p-5 bg-[#FFF3E0] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#70C1B3]/10 flex items-center justify-center text-[#70C1B3] flex-shrink-0">
                    <i className="fab fa-whatsapp text-lg" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-[Plus+Jakarta+Sans] text-[#152935]">WhatsApp</h3>
                    <a
                      href="https://wa.me/923005668365"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#70C1B3] hover:underline no-underline"
                    >
                      0300-5668365
                    </a>
                    <p className="text-xs text-[#152935]/50 mt-0.5">Fastest response — click to chat</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 sm:p-5 bg-[#FFF3E0] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#247BA0]/10 flex items-center justify-center text-[#247BA0] flex-shrink-0">
                    <i className="fas fa-phone text-lg" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-[Plus+Jakarta+Sans] text-[#152935]">Phone</h3>
                    <a href="tel:0925510726" className="text-sm text-[#247BA0] hover:underline no-underline">0925-510726</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 sm:p-5 bg-[#FFF3E0] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#FF1654]/10 flex items-center justify-center text-[#FF1654] flex-shrink-0">
                    <i className="fas fa-envelope text-lg" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-[Plus+Jakarta+Sans] text-[#152935]">Email</h3>
                    <a href="mailto:info@alatique.pk" className="text-sm text-[#FF1654] hover:underline no-underline">info@alatique.pk</a>
                    <p className="text-xs text-[#152935]/50 mt-0.5">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 sm:p-5 bg-[#FFF3E0] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#FFD400]/10 flex items-center justify-center text-[#FFD400] flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-lg" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-[Plus+Jakarta+Sans] text-[#152935]">Address</h3>
                    <p className="text-sm text-[#152935]/70">Qasmi Market, Tehsil Thall, Distt Hangu, KPK</p>
                  </div>
                </div>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#247BA0]/20 text-[#247BA0] hover:bg-[#247BA0]/5 transition-all no-underline"
                >
                  <i className="fab fa-facebook text-xl" />
                  <span className="text-sm font-semibold">Follow on Facebook</span>
                  <i className="fas fa-external-link-alt text-xs ml-auto" />
                </a>
              </div>

              {/* Address Query Map */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#FFF3E0]">
                <iframe
                  title="Al-Atique Location"
                  src="https://www.google.com/maps?q=Qasmi+Market+Thall+Hangu&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="reveal py-16 sm:py-24 bg-[#FFF3E0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF1654] font-[Plus+Jakarta+Sans]">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-[Plus+Jakarta+Sans] text-[#152935] mt-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#FFF3E0]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-[Plus+Jakarta+Sans] font-semibold text-sm sm:text-base text-[#152935] hover:bg-[#FFF3E0]/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs text-[#FF1654] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                  <div>
                    <div className="px-5 pb-4 text-sm text-[#152935]/70 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
