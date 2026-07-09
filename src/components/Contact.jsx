import { useState } from 'react';
import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';

const JOB_CATEGORIES = [
  'Construction', 'Hospitality', 'Retail', 'Drivers', 'Technicians',
  'Security', 'Healthcare', 'Engineering', 'Oil & Gas', 'Logistics', 'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nJob Category: ${form.category}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/923009050416?text=${body}`, '_blank');
    setSubmitted(true);
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <SectionBadge text="GET IN TOUCH" color="bg-[#E10600]" />
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[#1C1C1C]/60 mt-3 max-w-2xl mx-auto">
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
                    <label className="block text-sm font-medium text-[#1C1C1C] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange('name')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1C1C1C] mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange('phone')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm"
                      placeholder="03XX-XXXXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1C1C] mb-1">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1C1C] mb-1">Job Category *</label>
                  <select
                    required
                    value={form.category}
                    onChange={handleChange('category')}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm"
                  >
                    <option value="">Select a category</option>
                    {JOB_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1C1C] mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={handleChange('message')}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm resize-none"
                    placeholder="Tell us about your experience and the role you're seeking..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FFD500] text-[#141414] font-bold py-3.5 rounded-lg hover:bg-[#E10600] hover:text-white transition-all shadow-md text-sm"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>Submit via WhatsApp
                </button>
              </form>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-[#FFD500]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-check text-3xl text-[#E10600]"></i>
                </div>
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">Application Submitted!</h3>
                <p className="text-[#1C1C1C]/60 mb-6">
                  Your WhatsApp has been opened with your details. Please send the message to complete your application.
                </p>
                <a
                  href="tel:0512806263"
                  className="inline-block bg-[#E10600] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#A30000] transition-all shadow-md"
                >
                  <i className="fa-solid fa-phone mr-2"></i>Call Us Instead
                </a>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', category: '', message: '' }); }}
                  className="block mx-auto mt-4 text-sm text-gray-500 hover:text-[#E10600]"
                >
                  New Application
                </button>
              </div>
            )}

            {/* Contact info */}
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-[#1C1C1C]">
                <span className="w-9 h-9 bg-[#E10600]/10 rounded-full flex items-center justify-center text-[#E10600]">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <div className="font-medium">
                  <a href="tel:0512806263" className="hover:text-[#E10600]">051-2806263</a>,{' '}
                  <a href="tel:0512806264" className="hover:text-[#E10600]">051-2806264</a>,{' '}
                  <a href="tel:03005132100" className="hover:text-[#E10600]">0300-5132100</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#1C1C1C]">
                <span className="w-9 h-9 bg-[#E10600]/10 rounded-full flex items-center justify-center text-[#E10600]">
                  <i className="fa-brands fa-whatsapp"></i>
                </span>
                <a href="https://wa.me/923009050416" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[#E10600]">
                  0300-9050416
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#1C1C1C]">
                <span className="w-9 h-9 bg-[#E10600]/10 rounded-full flex items-center justify-center text-[#E10600]">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <a href="mailto:info@barkha.com.pk" className="font-medium hover:text-[#E10600]">info@barkha.com.pk</a>
              </div>
              <div className="flex items-center gap-3 text-[#1C1C1C]">
                <span className="w-9 h-9 bg-[#E10600]/10 rounded-full flex items-center justify-center text-[#E10600]">
                  <i className="fa-brands fa-facebook-f"></i>
                </span>
                <a href="https://facebook.com/barkha.international2312" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[#E10600]">
                  /barkha.international2312
                </a>
              </div>
              <div className="flex items-start gap-3 text-[#1C1C1C]">
                <span className="w-9 h-9 bg-[#E10600]/10 rounded-full flex items-center justify-center text-[#E10600] shrink-0 mt-0.5">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="font-medium">
                  Office #102, 1st Floor, Royal Centre, Fazal-e-Haq Road, Blue Area, Islamabad
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Right - Map */}
          <FadeUp delay={2} className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[550px] map-container">
              <iframe
                src="https://www.google.com/maps?q=33.70999481008073,73.05791974232856&hl=en&z=16&output=embed"
                title="Barkha International Office Location"
                loading="lazy"
              ></iframe>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 toast-notification">
          <div className="bg-[#1C1C1C] text-white px-6 py-3 rounded-full shadow-xl text-sm font-medium">
            <i className="fa-solid fa-check-circle text-green-400 mr-2"></i>
            WhatsApp opened! Please send your message.
          </div>
        </div>
      )}
    </section>
  );
}