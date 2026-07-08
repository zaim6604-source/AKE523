import { useState } from 'react';
import useInView from '../hooks/useInView';
import PillBadge from '../components/PillBadge';

const JOB_CATEGORIES = [
  'Construction Worker',
  'Driver',
  'Electrician',
  'Factory Worker',
  'Healthcare Worker',
  'Hospitality Staff',
  'IT Professional',
  'Plumber',
  'Security Guard',
  'Technician',
  'Other',
];

const FAQS = [
  {
    q: 'How do I apply for a job?',
    a: 'You can apply directly through our Jobs Portal by clicking "View & Apply" on any job card. This will open a WhatsApp chat with your selected job details prefilled. You can also use the Quick Apply button on any page.',
  },
  {
    q: 'What documents do I need?',
    a: 'Typically you need a valid passport, CNIC, passport-size photos, and relevant experience/educational certificates. Specific requirements are listed on each job detail page.',
  },
  {
    q: 'How long does the process take?',
    a: 'The timeline varies by country and employer, but typically ranges from 2 to 8 weeks from application to departure, depending on visa processing and documentation.',
  },
  {
    q: 'Is Gulalai Overseas a government-licensed agency?',
    a: 'Yes, we are a fully licensed Overseas Employment Promoter (OEP) operating under Government of Pakistan regulations. Our license number is FF-227.',
  },
  {
    q: 'Are there any fees?',
    a: 'We believe in transparency. Any applicable service fees will be clearly communicated upfront. We do not charge hidden fees.',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We currently have active positions in Saudi Arabia, UAE, Qatar, Oman, Germany, Poland, Romania, Malaysia, and Greece. Our network continues to expand.',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, category, message } = form;
    const text = `Hello Gulalai Overseas Employment! I'd like to get in touch.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AJob Category: ${encodeURIComponent(category)}%0AMessage: ${encodeURIComponent(message)}`;
    const waUrl = `https://wa.me/923341999588?text=${text}`;
    const mailUrl = `mailto:info@gulalaioverseas.pk?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCategory: ${category}\n\n${message}`)}`;

    const win = window.open(waUrl, '_blank');
    if (!win) {
      window.location.href = mailUrl;
    }
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', category: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="page-enter">
      {/* ─── Header ─── */}
      <section className="bg-gradient-to-br from-[#1B4965] to-[#0B3954] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PillBadge text="GET IN TOUCH" index={2} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 leading-tight">
            Let's Start Your{' '}
            <span className="text-[#FF6B35]">Journey</span>
          </h1>
          <p className="text-[#C9CCD5] mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            Ready to take the leap? Reach out to us and we'll guide you every step of the way.
          </p>
        </div>
      </section>

      {/* ─── Contact Form + Info ─── */}
      <section className="py-12 sm:py-16" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Contact Form */}
            <div className={`bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-[#C9CCD5]/20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#5FA8D3] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2436] mb-2">Thank You!</h3>
                  <p className="text-[#0B2436]/60">Your inquiry has been submitted. We'll reach out to you shortly on WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold text-[#0B2436] mb-2">Send Us a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#1B4965] focus:ring-2 focus:ring-[#1B4965]/20 outline-none bg-[#F2F6F9] text-[#0B2436]"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#1B4965] focus:ring-2 focus:ring-[#1B4965]/20 outline-none bg-[#F2F6F9] text-[#0B2436]"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address (optional)"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#1B4965] focus:ring-2 focus:ring-[#1B4965]/20 outline-none bg-[#F2F6F9] text-[#0B2436]"
                  />
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#1B4965] focus:ring-2 focus:ring-[#1B4965]/20 outline-none bg-[#F2F6F9] text-[#0B2436]"
                  >
                    <option value="">Select Job Category</option>
                    {JOB_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#1B4965] focus:ring-2 focus:ring-[#1B4965]/20 outline-none bg-[#F2F6F9] text-[#0B2436] resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-whatsapp" />
                    Send via WhatsApp
                  </button>
                  <p className="text-[10px] text-[#0B2436]/40 text-center">
                    By submitting, you agree to be contacted via WhatsApp. We'll respond within 24 hours.
                  </p>
                </form>
              )}

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <a href="https://wa.me/923341999588" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#0B2436]/70 hover:text-[#FF6B35] transition-colors">
                  <div className="w-9 h-9 rounded-full bg-[#FF6B35]/10 flex items-center justify-center shrink-0">
                    <i className="fab fa-whatsapp text-[#FF6B35] text-xs" />
                  </div>
                  <span>+92-334-1999588</span>
                </a>
                <a href="mailto:info@gulalaioverseas.pk" className="flex items-center gap-3 text-sm text-[#0B2436]/70 hover:text-[#FF6B35] transition-colors">
                  <div className="w-9 h-9 rounded-full bg-[#1B4965]/10 flex items-center justify-center shrink-0">
                    <i className="fas fa-envelope text-[#1B4965] text-xs" />
                  </div>
                  <span>info@gulalaioverseas.pk</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-[#0B2436]/70">
                  <div className="w-9 h-9 rounded-full bg-[#5FA8D3]/10 flex items-center justify-center shrink-0">
                    <i className="fas fa-location-dot text-[#5FA8D3] text-xs" />
                  </div>
                  <span className="text-xs sm:text-sm">FF-227, Deans Trade Center, Peshawar Cantonment, KPK</span>
                </div>
              </div>
            </div>

            {/* Right - Map & WhatsApp */}
            <div className="space-y-6">
              <div className={`rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[350px] border border-[#C9CCD5]/20 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <iframe
                  title="Gulalai Overseas Employment Location"
                  src="https://www.google.com/maps?q=34.001843052405775,71.5450493&hl=en&z=17&output=embed"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className={`bg-gradient-to-br from-[#FF6B35] to-[#e85d2a] rounded-2xl shadow-xl p-6 text-white transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <i className="fab fa-whatsapp text-2xl" />
                  <div>
                    <h3 className="font-bold text-lg">WhatsApp Only</h3>
                    <p className="text-sm text-white/80">We respond within 24 hours</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/923341999588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-[#FF6B35] hover:bg-gray-100 font-bold py-3 rounded-xl text-sm transition-all text-center mt-4 shadow-lg"
                >
                  <i className="fab fa-whatsapp mr-2" />
                  Chat Now — 0334-1999588
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-12 sm:py-16 bg-white" ref={faqRef}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <PillBadge text="FAQ" index={1} />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2436] mt-4">
              Frequently Asked{' '}
              <span className="text-[#1B4965]">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`bg-[#F2F6F9] rounded-xl overflow-hidden transition-all duration-500 ${
                  faqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-semibold text-[#0B2436] text-sm sm:text-base pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-down text-[#1B4965] text-xs transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-4 text-sm text-[#0B2436]/70 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}