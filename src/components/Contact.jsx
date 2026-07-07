import { useState } from 'react';
import useInView from '../hooks/useInView';

export default function Contact() {
  const [ref, visible] = useInView(0.1);
  const [formType, setFormType] = useState('business');
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      formType === 'business' ? `Company: ${form.company}` : `Interest: ${form.interest}`,
      `Message: ${form.message}`,
    ].join('%0A');
    const whatsappUrl = `https://wa.me/923353465095?text=${encodeURIComponent(fields.replace(/%0A/g, '\n'))}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ name: '', phone: '', email: '', company: '', interest: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,20 C240,60 480,0 720,20 C960,40 1200,0 1440,20 L1440,0 L0,0 Z" fill="#F2F6F9" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Pill Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider"
            style={{ backgroundColor: '#1B4965', color: 'white' }}>
            GET IN TOUCH
          </span>
        </div>

        <p className="text-center text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ color: '#4A5C6B' }}>
          Ready to transform your HR? Reach out to us today.
        </p>

        {/* Form Type Toggle */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex rounded-full p-1 shadow-sm" style={{ backgroundColor: '#E8F0F6' }}>
            <button
              onClick={() => setFormType('business')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                formType === 'business' ? 'text-white shadow-md' : 'text-[#4A5C6B] hover:text-[#1B4965]'
              }`}
              style={{ backgroundColor: formType === 'business' ? '#1B4965' : 'transparent', border: 'none' }}
            >
              <i className="fa-solid fa-building mr-2" />
              For Businesses
            </button>
            <button
              onClick={() => setFormType('professional')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                formType === 'professional' ? 'text-white shadow-md' : 'text-[#4A5C6B] hover:text-[#1B4965]'
              }`}
              style={{ backgroundColor: formType === 'professional' ? '#1B4965' : 'transparent', border: 'none' }}
            >
              <i className="fa-solid fa-user-tie mr-2" />
              For Professionals
            </button>
          </div>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left — Form */}
          <div className={`fade-up ${visible ? 'visible' : ''}`}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#0B2436' }}>
                      Full Name <span className="text-[#FF6B35]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: '#C9CCD5', backgroundColor: 'white', color: '#0B2436' }}
                      onFocus={(e) => e.target.style.borderColor = '#1B4965'}
                      onBlur={(e) => e.target.style.borderColor = '#C9CCD5'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#0B2436' }}>
                      Phone Number <span className="text-[#FF6B35]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="03XX-XXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: '#C9CCD5', backgroundColor: 'white', color: '#0B2436' }}
                      onFocus={(e) => e.target.style.borderColor = '#1B4965'}
                      onBlur={(e) => e.target.style.borderColor = '#C9CCD5'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#0B2436' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                    style={{ borderColor: '#C9CCD5', backgroundColor: 'white', color: '#0B2436' }}
                    onFocus={(e) => e.target.style.borderColor = '#1B4965'}
                    onBlur={(e) => e.target.style.borderColor = '#C9CCD5'}
                  />
                </div>

                {formType === 'business' ? (
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#0B2436' }}>
                      Company / Organization <span className="text-[#FF6B35]">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: '#C9CCD5', backgroundColor: 'white', color: '#0B2436' }}
                      onFocus={(e) => e.target.style.borderColor = '#1B4965'}
                      onBlur={(e) => e.target.style.borderColor = '#C9CCD5'}
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#0B2436' }}>
                      Area of Interest <span className="text-[#FF6B35]">*</span>
                    </label>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: '#C9CCD5', backgroundColor: 'white', color: '#0B2436' }}
                      onFocus={(e) => e.target.style.borderColor = '#1B4965'}
                      onBlur={(e) => e.target.style.borderColor = '#C9CCD5'}
                    >
                      <option value="">Select an area</option>
                      <option value="Career Consultation">Career Consultation</option>
                      <option value="Job Search Support">Job Search Support</option>
                      <option value="Resume & Interview">Resume & Interview Prep</option>
                      <option value="Skills Development">Skills Development</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#0B2436' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your HR needs or questions..."
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200 resize-none"
                    style={{ borderColor: '#C9CCD5', backgroundColor: 'white', color: '#0B2436' }}
                    onFocus={(e) => e.target.style.borderColor = '#1B4965'}
                    onBlur={(e) => e.target.style.borderColor = '#C9CCD5'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: '#FF6B35', border: 'none' }}
                >
                  <i className="fa-brands fa-whatsapp" />
                  Send via WhatsApp
                </button>
              </form>
            ) : (
              <div className="text-center py-10 sm:py-14 space-y-5 rounded-2xl" style={{ backgroundColor: '#E8F0F6' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-md" style={{ backgroundColor: '#FF6B35' }}>
                  <i className="fa-brands fa-whatsapp text-white text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold m-0" style={{ color: '#0B2436' }}>
                  Message Ready!
                </h3>
                <p className="text-sm sm:text-base max-w-md mx-auto" style={{ color: '#4A5C6B' }}>
                  WhatsApp has been opened with your details. Send the message and we&apos;ll get back to you promptly.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a href="mailto:info@mlconsultants.pk"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#1B4965', color: 'white' }}>
                    <i className="fa-regular fa-envelope" />
                    Email Us Instead
                  </a>
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{ borderColor: '#1B4965', color: '#1B4965', backgroundColor: 'white' }}
                  >
                    <i className="fa-solid fa-rotate-left" />
                    Send Again
                  </button>
                </div>
              </div>
            )}

            {/* Contact Info Rows */}
            <div className="mt-6 space-y-3">
              <a href="https://wa.me/923353465095" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 hover:shadow-sm"
                style={{ backgroundColor: '#F2F6F9' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FF6B35' }}>
                  <i className="fa-brands fa-whatsapp text-white text-sm" />
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: '#4A5C6B' }}>WhatsApp</div>
                  <div className="text-sm font-bold" style={{ color: '#0B2436' }}>0335-3465095</div>
                </div>
              </a>
              <div className="flex items-start gap-3 p-3.5 rounded-xl" style={{ backgroundColor: '#F2F6F9' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#1B4965' }}>
                  <i className="fa-solid fa-location-dot text-white text-sm" />
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: '#4A5C6B' }}>Address</div>
                  <div className="text-sm font-medium leading-relaxed" style={{ color: '#0B2436' }}>
                    16/2, Islamabad, ICT
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Google Maps */}
          <div className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-2`}>
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]">
              <iframe
                title="M & L Consultants Location"
                src="https://www.google.com/maps?q=33.652498066308766,72.8835319&hl=en&z=16&output=embed"
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