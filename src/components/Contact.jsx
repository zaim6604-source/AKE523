import { useState } from 'react';
import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';

const JOB_CATEGORIES = [
  'Construction',
  'Hospitality',
  'Retail',
  'Drivers',
  'Technicians',
  'Security',
  'Healthcare',
  'Engineering',
  'Oil & Gas',
  'Logistics',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Application Enquiry - Arabian Gulf International');
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nJob Category: ${form.category}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:info@arabiangulfinternational.pk?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <SectionBadge text="GET IN TOUCH" color="bg-[#E0115F]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D0A1E]">
            Ready to Start Your Gulf Journey?
          </h2>
          <p className="text-[#5C1A32]/70 mt-3 max-w-2xl mx-auto">
            Reach out to us and our team will get back to you within 24 hours.
          </p>
        </FadeUp>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* Left - Form */}
          <FadeUp className="w-full lg:w-1/2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#3D0A1E] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange('name')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0115F]/30 focus:border-[#E0115F] text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D0A1E] mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange('phone')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0115F]/30 focus:border-[#E0115F] text-sm"
                      placeholder="03XX-XXXXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3D0A1E] mb-1">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0115F]/30 focus:border-[#E0115F] text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3D0A1E] mb-1">Job Category *</label>
                  <select
                    required
                    value={form.category}
                    onChange={handleChange('category')}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0115F]/30 focus:border-[#E0115F] text-sm"
                  >
                    <option value="">Select a category</option>
                    {JOB_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3D0A1E] mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={handleChange('message')}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0115F]/30 focus:border-[#E0115F] text-sm resize-none"
                    placeholder="Tell us about your experience and the role you're seeking..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#7B2D8E] text-white font-semibold py-3.5 rounded-lg hover:bg-[#E0115F] transition-all shadow-md text-sm"
                >
                  <i className="fa-solid fa-paper-plane mr-2"></i>Submit Application
                </button>
              </form>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-check text-3xl text-[#7B2D8E]"></i>
                </div>
                <h3 className="text-xl font-bold text-[#3D0A1E] mb-2">Application Submitted!</h3>
                <p className="text-[#5C1A32]/70 mb-6">
                  Your email client has been opened with your details. Please send the email to complete your application.
                </p>
                <a
                  href="tel:0514938271"
                  className="inline-block bg-[#E0115F] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#7B2D8E] transition-all shadow-md"
                >
                  <i className="fa-solid fa-phone mr-2"></i>Call Us Instead
                </a>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', category: '', message: '' }); }}
                  className="block mx-auto mt-4 text-sm text-gray-500 hover:text-[#7B2D8E]"
                >
                  New Application
                </button>
              </div>
            )}

            {/* Contact info */}
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-[#3D0A1E]">
                <span className="w-9 h-9 bg-[#E0115F]/10 rounded-full flex items-center justify-center text-[#E0115F]">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span className="font-medium">051-4938271</span>
              </div>
              <div className="flex items-start gap-3 text-[#3D0A1E]">
                <span className="w-9 h-9 bg-[#E0115F]/10 rounded-full flex items-center justify-center text-[#E0115F] shrink-0 mt-0.5">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="font-medium">
                  Office No. 51, 2nd Floor, Rehmat Centre, I-8 Markaz, Islamabad, Islamabad Capital Territory
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Right - Map */}
          <FadeUp delay={2} className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[550px] map-container">
              <iframe
                src="https://www.google.com/maps?q=33.66648980549018,73.07552951349284&hl=en&z=16&output=embed"
                title="Arabian Gulf International Office Location"
                loading="lazy"
              ></iframe>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}