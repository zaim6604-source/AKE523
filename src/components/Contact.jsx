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
    const subject = `Job Inquiry from ${form.name}`;
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AJob Category: ${form.category}%0AMessage: ${form.message}`;
    window.location.href = `mailto:info@niazrecruiting.pk?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,20 C240,60 480,0 720,20 C960,40 1200,0 1440,20 L1440,0 L0,0 Z" fill="#FFEFF6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Pill Badge */}
        <div className="flex justify-center mb-4">
          <span className="pill-4 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
            GET IN TOUCH
          </span>
        </div>

        <p className="text-center text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto" style={{ color: '#5A1E3A' }}>
          Ready to start your journey? Reach out to us today.
        </p>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left — Form */}
          <div className={`fade-up ${visible ? 'visible' : ''}`}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#3D0A22' }}>
                      Full Name <span className="text-[#E0218A]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: '#FFB6C1', backgroundColor: 'white', color: '#3D0A22' }}
                      onFocus={(e) => e.target.style.borderColor = '#E0218A'}
                      onBlur={(e) => e.target.style.borderColor = '#FFB6C1'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#3D0A22' }}>
                      Phone Number <span className="text-[#E0218A]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="03XX-XXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: '#FFB6C1', backgroundColor: 'white', color: '#3D0A22' }}
                      onFocus={(e) => e.target.style.borderColor = '#E0218A'}
                      onBlur={(e) => e.target.style.borderColor = '#FFB6C1'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#3D0A22' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                    style={{ borderColor: '#FFB6C1', backgroundColor: 'white', color: '#3D0A22' }}
                    onFocus={(e) => e.target.style.borderColor = '#E0218A'}
                    onBlur={(e) => e.target.style.borderColor = '#FFB6C1'}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#3D0A22' }}>
                    Job Category <span className="text-[#E0218A]">*</span>
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                    style={{ borderColor: '#FFB6C1', backgroundColor: 'white', color: '#3D0A22' }}
                    onFocus={(e) => e.target.style.borderColor = '#E0218A'}
                    onBlur={(e) => e.target.style.borderColor = '#FFB6C1'}
                  >
                    <option value="">Select a category</option>
                    {jobCategories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#3D0A22' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your experience and the role you're looking for..."
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200 resize-none"
                    style={{ borderColor: '#FFB6C1', backgroundColor: 'white', color: '#3D0A22' }}
                    onFocus={(e) => e.target.style.borderColor = '#E0218A'}
                    onBlur={(e) => e.target.style.borderColor = '#FFB6C1'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: '#00BFA6', border: 'none' }}
                >
                  <i className="fa-regular fa-paper-plane" />
                  Send Inquiry
                </button>
              </form>
            ) : (
              <div className="text-center py-10 sm:py-14 space-y-5 rounded-2xl" style={{ backgroundColor: '#E6FCF5' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-md" style={{ backgroundColor: '#00BFA6' }}>
                  <i className="fa-solid fa-check text-white text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold m-0" style={{ color: '#3D0A22' }}>
                  Inquiry Sent!
                </h3>
                <p className="text-sm sm:text-base max-w-md mx-auto" style={{ color: '#5A1E3A' }}>
                  Your email client has been opened with your details. Send the email and we'll get back to you promptly.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a href="tel:0514419415"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#00BFA6', color: 'white' }}>
                    <i className="fa-solid fa-phone" />
                    Call Us Instead
                  </a>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', category: '', message: '' }); }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{ borderColor: '#E0218A', color: '#E0218A', backgroundColor: 'white' }}
                  >
                    <i className="fa-solid fa-rotate-left" />
                    Submit Again
                  </button>
                </div>
              </div>
            )}

            {/* Contact Info Rows */}
            <div className="mt-6 space-y-3">
              <a href="tel:0514419415"
                className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 hover:shadow-sm"
                style={{ backgroundColor: '#FFEFF6' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#00BFA6' }}>
                  <i className="fa-solid fa-phone text-white text-sm" />
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: '#5A1E3A' }}>Phone</div>
                  <div className="text-sm font-bold" style={{ color: '#3D0A22' }}>051-4419415</div>
                </div>
              </a>
              <div className="flex items-start gap-3 p-3.5 rounded-xl" style={{ backgroundColor: '#FFEFF6' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#E0218A' }}>
                  <i className="fa-solid fa-location-dot text-white text-sm" />
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: '#5A1E3A' }}>Address</div>
                  <div className="text-sm font-medium leading-relaxed" style={{ color: '#3D0A22' }}>
                    Flat No. 07, 2nd Floor, Nazar Plaza, Near Quba Masjid, Commercial Market, Rawalpindi, Punjab
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Google Maps */}
          <div className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-2`}>
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]">
              <iframe
                title="Niaz Recruiting Agency Location"
                src="https://www.google.com/maps?q=33.58425651350275,73.1009670153429&hl=en&z=16&output=embed"
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