import { useState } from 'react';
import useInView from '../hooks/useInView';

const jobCategories = [
  'Construction Worker',
  'Driver',
  'Technician',
  'Hospitality Staff',
  'Factory Worker',
  'Security Guard',
  'Healthcare Professional',
  'IT Professional',
  'Other',
];

export default function Contact() {
  const [ref, visible] = useInView(0.1);
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AJob Category: ${form.category}%0AMessage: ${form.message}`
    );
    window.location.href = `https://wa.me/923335520190?text=${text}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,20 C240,60 480,0 720,20 C960,40 1200,0 1440,20 L1440,0 L0,0 Z" fill="#EDF6F9" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Pill Badge */}
        <div className="flex justify-center mb-4">
          <span className="pill-4 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
            GET IN TOUCH
          </span>
        </div>

        <p className="text-center text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto text-[#006D77]">
          Ready to start your journey? Reach out to us today.
        </p>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left — Form */}
          <div className={`fade-up ${visible ? 'visible' : ''}`}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5 text-[#003844]">
                      Full Name <span className="text-[#E29578]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: '#83C5BE', backgroundColor: 'white', color: '#003844' }}
                      onFocus={(e) => e.target.style.borderColor = '#006D77'}
                      onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5 text-[#003844]">
                      Phone Number <span className="text-[#E29578]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="03XX-XXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: '#83C5BE', backgroundColor: 'white', color: '#003844' }}
                      onFocus={(e) => e.target.style.borderColor = '#006D77'}
                      onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5 text-[#003844]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                    style={{ borderColor: '#83C5BE', backgroundColor: 'white', color: '#003844' }}
                    onFocus={(e) => e.target.style.borderColor = '#006D77'}
                    onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5 text-[#003844]">
                    Job Category <span className="text-[#E29578]">*</span>
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                    style={{ borderColor: '#83C5BE', backgroundColor: 'white', color: '#003844' }}
                    onFocus={(e) => e.target.style.borderColor = '#006D77'}
                    onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
                  >
                    <option value="">Select a category</option>
                    {jobCategories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5 text-[#003844]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your experience and the role you're looking for..."
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200 resize-none"
                    style={{ borderColor: '#83C5BE', backgroundColor: 'white', color: '#003844' }}
                    onFocus={(e) => e.target.style.borderColor = '#006D77'}
                    onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: '#E29578', border: 'none' }}
                >
                  <i className="fa-brands fa-whatsapp" />
                  Send via WhatsApp
                </button>
              </form>
            ) : (
              <div className="text-center py-10 sm:py-14 space-y-5 rounded-2xl" style={{ backgroundColor: '#F0F9F8' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-md" style={{ backgroundColor: '#006D77' }}>
                  <i className="fa-solid fa-check text-white text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold m-0 text-[#003844]">
                  Inquiry Sent!
                </h3>
                <p className="text-sm sm:text-base max-w-md mx-auto text-[#006D77]/70">
                  Your message has been sent via WhatsApp. We'll get back to you promptly.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a href="tel:0514442289"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 text-white"
                    style={{ backgroundColor: '#006D77' }}>
                    <i className="fa-solid fa-phone" />
                    Call Us Instead
                  </a>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', category: '', message: '' }); }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{ borderColor: '#E29578', color: '#E29578', backgroundColor: 'white' }}
                  >
                    <i className="fa-solid fa-rotate-left" />
                    Submit Again
                  </button>
                </div>
              </div>
            )}

            {/* Contact Info Rows */}
            <div className="mt-6 space-y-3">
              <a href="tel:0514442289"
                className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 hover:shadow-sm"
                style={{ backgroundColor: '#EDF6F9' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#006D77' }}>
                  <i className="fa-solid fa-phone text-white text-sm" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#006D77]">Phone</div>
                  <div className="text-sm font-bold text-[#003844]">051-4442289</div>
                </div>
              </a>
              <a
                href="https://wa.me/923335520190"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 hover:shadow-sm"
                style={{ backgroundColor: '#EDF6F9' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#25D366' }}>
                  <i className="fa-brands fa-whatsapp text-white text-sm" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#006D77]">WhatsApp</div>
                  <div className="text-sm font-bold text-[#003844]">0333-5520190</div>
                </div>
              </a>
              <a
                href="https://www.facebook.com/shahzamanmanpower/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 hover:shadow-sm"
                style={{ backgroundColor: '#EDF6F9' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1877F2' }}>
                  <i className="fa-brands fa-facebook-f text-white text-sm" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#006D77]">Facebook</div>
                  <div className="text-sm font-bold text-[#003844]">/shahzamanmanpower</div>
                </div>
              </a>
              <div className="flex items-start gap-3 p-3.5 rounded-xl" style={{ backgroundColor: '#EDF6F9' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#E29578' }}>
                  <i className="fa-solid fa-location-dot text-white text-sm" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#006D77]">Address</div>
                  <div className="text-sm font-medium leading-relaxed text-[#003844]">
                    Flat No. 14, Rehmat Plaza, I-10 Markaz, Islamabad, ICT
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Google Maps */}
          <div className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-2`}>
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]">
              <iframe
                title="Shah Zaman Manpower Location"
                src="https://www.google.com/maps?q=33.646740448615795,73.03695689999999&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}