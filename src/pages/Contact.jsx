import { useState } from 'react';
import FadeUp from '../components/FadeUp';

const FAQS = [
  { q: 'What documents do I need to apply for overseas employment?', a: 'You typically need a valid passport (6+ months validity), educational certificates, professional experience letters, CNIC, and passport-sized photographs. Our team will guide you through the complete checklist once you register.' },
  { q: 'How long does the visa process take?', a: 'Visa processing times vary by country and position. On average, it takes 2 to 8 weeks. We keep you updated at every stage and work to expedite the process.' },
  { q: 'Does Pak. Arsalan Corporation charge any fees?', a: 'We maintain transparent practices. Any applicable processing fees for document attestation, medical tests, or visa applications are communicated clearly upfront with proper receipts.' },
  { q: 'Which countries do you recruit for?', a: 'We recruit for Saudi Arabia, UAE, Qatar, Kuwait, Oman, Germany, Poland, South Korea, and Turkey — across construction, healthcare, hospitality, IT, and industrial sectors.' },
  { q: 'How can I contact Pak. Arsalan Corporation?', a: 'You can reach us via WhatsApp at 0300-5096511, phone at 0997-310612, or visit our office at Gul Market, near Bus Stand, Alamgir Chowk, Batagram, KPK. Our team is available to answer your questions and guide you through the application process.' },
  { q: 'Is there a guarantee of job placement?', a: 'We work with verified employers and strive to match your skills with available opportunities. While we cannot guarantee specific placements, our high success rate speaks to our commitment and extensive employer network.' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `New Inquiry - Pak. Arsalan Corporation\n\nName: ${form.name}\nPhone: ${form.phone}\nInterest: ${form.interest}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/923005096511?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-[#1C1C1C] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="inline-block bg-[#FFD500]/20 text-[#FFD500] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
              <i className="fa-solid fa-certificate mr-1.5"></i>GET IN TOUCH
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[Poppins] mb-4">
              Contact Us
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Ready to start your journey? Reach out to Pak. Arsalan Corporation — we're here to help.
            </p>
          </FadeUp>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD500] via-[#E10600] to-transparent"></div>
      </section>

      {/* Contact + Map */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Form */}
            <FadeUp className="w-full lg:w-1/2">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#141414] mb-1">Full Name *</label>
                      <input type="text" required value={form.name} onChange={handleChange('name')}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#141414] mb-1">Phone *</label>
                      <input type="tel" required value={form.phone} onChange={handleChange('phone')}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm" placeholder="03XX-XXXXXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#141414] mb-1">I want to...</label>
                    <select value={form.interest} onChange={handleChange('interest')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm">
                      <option value="">Select an option</option>
                      <option value="Apply for a Job">Apply for a Job</option>
                      <option value="Visa Inquiry">Visa Inquiry</option>
                      <option value="General Question">General Question</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#141414] mb-1">Message</label>
                    <textarea rows={4} value={form.message} onChange={handleChange('message')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm resize-none"
                      placeholder="Tell us about your experience and desired role..."></textarea>
                  </div>
                  <button type="submit"
                    className="w-full bg-[#FFD500] text-[#141414] font-bold py-3.5 rounded-lg hover:bg-[#E10600] hover:text-white transition-all shadow-md text-sm">
                    <i className="fa-brands fa-whatsapp mr-2"></i>Send via WhatsApp
                  </button>
                </form>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-[#FFD500]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-check text-3xl text-[#1C1C1C]"></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#141414] mb-2 font-[Poppins]">Message Sent!</h3>
                  <p className="text-[#141414]/60 mb-6">WhatsApp has been opened with your message. Send it to complete your inquiry.</p>
                  <a href="mailto:info@pakarsalan.pk"
                    className="inline-block bg-[#1C1C1C] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#E10600] transition-all shadow-md">
                    <i className="fa-solid fa-envelope mr-2"></i>Email Instead
                  </a>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', interest: '', message: '' }); }}
                    className="block mx-auto mt-4 text-sm text-gray-500 hover:text-[#E10600]">New Inquiry</button>
                </div>
              )}

              {/* Contact Info */}
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-[#141414]">
                  <span className="w-9 h-9 bg-[#E10600]/10 rounded-full flex items-center justify-center text-[#E10600]"><i className="fa-brands fa-whatsapp"></i></span>
                  <a href="https://wa.me/923005096511" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[#E10600]">0300-5096511</a>
                </div>
                <div className="flex items-center gap-3 text-[#141414]">
                  <span className="w-9 h-9 bg-[#E10600]/10 rounded-full flex items-center justify-center text-[#E10600]"><i className="fa-solid fa-phone"></i></span>
                  <a href="tel:0997310612" className="font-medium hover:text-[#E10600]">0997-310612</a>
                </div>
                <div className="flex items-start gap-3 text-[#141414]">
                  <span className="w-9 h-9 bg-[#E10600]/10 rounded-full flex items-center justify-center text-[#E10600] shrink-0 mt-0.5"><i className="fa-solid fa-location-dot"></i></span>
                  <span className="font-medium">Gul Market, near Bus Stand, Alamgir Chowk, Batagram, KPK</span>
                </div>
              </div>
            </FadeUp>

            {/* Map */}
            <FadeUp delay={2} className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[550px] map-container">
                <iframe src="https://www.google.com/maps?q=Gul+Market+Alamgir+Chowk+Batagram&hl=en&z=15&output=embed"
                  title="Pak. Arsalan Corporation Office Location" loading="lazy"></iframe>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="inline-block bg-[#1C1C1C]/10 text-[#1C1C1C] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
              FAQS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141414] font-[Poppins]">Frequently Asked Questions</h2>
            <p className="text-[#141414]/60 mt-3">Everything you need to know about working with Pak. Arsalan Corporation.</p>
          </FadeUp>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FadeUp key={i} delay={(i % 6) + 1}>
                <div className={`border-l-4 rounded-xl overflow-hidden transition-all ${
                  openFAQ === i ? 'border-[#E10600] bg-[#F5F5F5] shadow-md' : 'border-[#E10600]/20 bg-white shadow-sm'
                }`}>
                  <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left">
                    <span className="font-semibold text-[#141414] text-sm md:text-base pr-4">{faq.q}</span>
                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm transition-all ${
                      openFAQ === i ? 'bg-[#E10600] rotate-180' : 'bg-[#1C1C1C]'
                    }`}>
                      <i className="fa-solid fa-chevron-down"></i>
                    </span>
                  </button>
                  <div className={`accordion-content ${openFAQ === i ? 'active' : ''}`}>
                    <p className="px-4 md:px-5 pb-4 md:pb-5 text-[#141414]/60 text-sm md:text-base leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}