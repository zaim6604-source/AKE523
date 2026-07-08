import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { faqs } from '../data/faq';

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
    const text = `Hello Reliance Overseas! New inquiry from ${form.name || 'N/A'}. Phone: ${form.phone || 'N/A'}. Email: ${form.email || 'N/A'}. Message: ${form.message || 'N/A'}.`;
    window.open(`https://wa.me/923158547604?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div>
      {/* Header */}
      <section className="hero-gradient pt-12 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFBE0B] font-[Plus Jakarta Sans]">
            Get in Touch
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-[Plus Jakarta Sans] text-white mt-3 mb-3">
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0496FF] font-[Plus Jakarta Sans]">
                Send a Message
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-[Plus Jakarta Sans] text-[#062A45] mt-2 mb-6">
                We&rsquo;ll Get Back to You
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#062A45]/70 mb-1.5 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-blue-100 focus:border-[#0496FF] focus:ring-2 focus:ring-[#0496FF]/10 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#062A45]/70 mb-1.5 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="03XX-XXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-blue-100 focus:border-[#0496FF] focus:ring-2 focus:ring-[#0496FF]/10 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#062A45]/70 mb-1.5 uppercase tracking-wider">Email (optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-blue-100 focus:border-[#0496FF] focus:ring-2 focus:ring-[#0496FF]/10 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#062A45]/70 mb-1.5 uppercase tracking-wider">Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest, preferred country, and role..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-blue-100 focus:border-[#0496FF] focus:ring-2 focus:ring-[#0496FF]/10 outline-none transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#FB5607] rounded-xl hover:bg-[#e04e06] hover:shadow-lg transition-all"
                >
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
                <p className="text-xs text-[#062A45]/40 text-center">
                  By submitting, you agree to be contacted via WhatsApp. Your data is kept private.
                </p>
              </form>
            </div>

            {/* Contact Info + Map */}
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 sm:p-5 bg-[#E8F5FF] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#0496FF]/10 flex items-center justify-center text-[#0496FF] flex-shrink-0">
                    <i className="fab fa-whatsapp text-lg" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-[Plus Jakarta Sans] text-[#062A45]">WhatsApp</h3>
                    <a
                      href="https://wa.me/923158547604"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#0496FF] hover:underline no-underline"
                    >
                      0315-8547604
                    </a>
                    <p className="text-xs text-[#062A45]/50 mt-0.5">Fastest response — click to chat</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 sm:p-5 bg-[#E8F5FF] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#0496FF]/10 flex items-center justify-center text-[#0496FF] flex-shrink-0">
                    <i className="fas fa-phone text-lg" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-[Plus Jakarta Sans] text-[#062A45]">Phone</h3>
                    <a href="tel:0514852599" className="text-sm text-[#0496FF] hover:underline no-underline">051-4852599</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 sm:p-5 bg-[#E8F5FF] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#0496FF]/10 flex items-center justify-center text-[#0496FF] flex-shrink-0">
                    <i className="fas fa-envelope text-lg" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-[Plus Jakarta Sans] text-[#062A45]">Email</h3>
                    <a href="mailto:reliance.oep@gmail.com" className="text-sm text-[#0496FF] hover:underline no-underline">reliance.oep@gmail.com</a>
                    <p className="text-xs text-[#062A45]/50 mt-0.5">Also: info@reliance-overseas.pk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 sm:p-5 bg-[#E8F5FF] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#0496FF]/10 flex items-center justify-center text-[#0496FF] flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-lg" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-[Plus Jakarta Sans] text-[#062A45]">Address</h3>
                    <p className="text-sm text-[#062A45]/70">
                      Office No. 20, 2nd Floor, 78A<br />
                      Ali Arcade Plaza, Opp. Habib Bank<br />
                      6th Road, Satellite Town, Rawalpindi
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-blue-100">
                <iframe
                  title="Reliance Overseas Location"
                  src="https://www.google.com/maps?q=33.6413861818727,73.07933175767145&output=embed"
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
      <section ref={faqRef} className="reveal py-16 sm:py-24 bg-[#E8F5FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0496FF] font-[Plus Jakarta Sans]">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-[Plus Jakarta Sans] text-[#062A45] mt-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-[Plus Jakarta Sans] font-semibold text-sm sm:text-base text-[#062A45] hover:bg-[#E8F5FF]/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs text-[#0496FF] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                  <div>
                    <div className="px-5 pb-4 text-sm text-[#062A45]/70 leading-relaxed">
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