import { useState } from 'react';
import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';

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

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, category, message } = form;
    const text = `Hello Ithmanzi Recruiting Agency! I'd like to get in touch.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AJob Category: ${encodeURIComponent(category)}%0AMessage: ${encodeURIComponent(message)}`;
    const waUrl = `https://wa.me/923465320238?text=${text}`;
    const mailUrl = `mailto:info@ithmanzi.pk?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCategory: ${category}\n\n${message}`)}`;

    // Try WhatsApp first, fallback to mailto
    const win = window.open(waUrl, '_blank');
    if (!win) {
      window.location.href = mailUrl;
    }
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', category: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-[#FFF3E6] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="GET IN TOUCH" index={1} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1200] mt-4 leading-tight">
            Let's Start Your{' '}
            <span className="text-[#00B4D8]">Journey</span>
          </h2>
          <p className="text-[#2B1200]/60 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            Ready to take the leap? Reach out to us and we'll guide you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Contact Form */}
          <div className={`bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-[#FFD23F]/20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#FFD23F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-2xl text-[#2B1200]" />
                </div>
                <h3 className="text-xl font-black text-[#2B1200] mb-2">Thank You!</h3>
                <p className="text-[#2B1200]/60">Your inquiry has been submitted. We'll reach out to you shortly on WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none bg-gray-50 text-[#2B1200]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none bg-gray-50 text-[#2B1200]"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address (optional)"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none bg-gray-50 text-[#2B1200]"
                />
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none bg-gray-50 text-[#2B1200]"
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
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none bg-gray-50 text-[#2B1200] resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#00B4D8] hover:bg-[#0098b8] text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
                <p className="text-[10px] text-[#2B1200]/40 text-center">
                  By submitting, you agree to be contacted via WhatsApp. We'll respond within 24 hours.
                </p>
              </form>
            )}

            {/* Contact Info Rows */}
            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
              <a href="tel:0515110610" className="flex items-center gap-3 text-sm text-[#2B1200]/70 hover:text-[#FF4500] transition-colors">
                <div className="w-9 h-9 rounded-full bg-[#FFD23F]/20 flex items-center justify-center shrink-0">
                  <i className="fas fa-phone text-[#FF7F11] text-xs" />
                </div>
                <span>051-5110610</span>
              </a>
              <a href="https://wa.me/923465320238" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#2B1200]/70 hover:text-[#FF4500] transition-colors">
                <div className="w-9 h-9 rounded-full bg-[#00B4D8]/10 flex items-center justify-center shrink-0">
                  <i className="fab fa-whatsapp text-[#00B4D8] text-xs" />
                </div>
                <span>+92-346-5320238</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-[#2B1200]/70">
                <div className="w-9 h-9 rounded-full bg-[#FF4500]/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-location-dot text-[#FF4500] text-xs" />
                </div>
                <span className="text-xs sm:text-sm">Office # 10, Al-Riaz Plaza, Attalian Shoes, Street Bank Road, Saddar, Rawalpindi, Punjab</span>
              </div>
            </div>
          </div>

          {/* Right - Google Maps */}
          <div className={`rounded-3xl overflow-hidden shadow-xl h-[300px] sm:h-[400px] lg:h-full min-h-[400px] border border-[#FFD23F]/20 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <iframe
              title="Ithmanzi Recruiting Agency Location"
              src="https://www.google.com/maps?q=Al-Riaz+Plaza+Bank+Road+Saddar+Rawalpindi+Punjab&hl=en&z=16&output=embed"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}