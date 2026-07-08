import { useState } from 'react';
import FadeUp from '../components/FadeUp';
import SectionBadge from '../components/SectionBadge';
import MarqueeBar from '../components/MarqueeBar';
import FAQ from '../components/FAQ';

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
  'Manufacturing',
  'IT',
  'Textile',
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
    const text = encodeURIComponent(
      `*New Application - Gul Shahzad Corporation*\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nJob Category: ${form.category}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/92311509987?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <>
      <MarqueeBar />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <SectionBadge text="GET IN TOUCH" color="bg-[#E10600]" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141414] font-poppins">
              Ready to Start Your Journey?
            </h1>
            <p className="text-[#444]/70 mt-3 max-w-2xl mx-auto font-inter">
              Reach out to us and our team will get back to you within 24 hours.
            </p>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Left - Form */}
            <FadeUp className="w-full lg:w-1/2">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-[#E10600] racing-dot"></div>
                    <span className="text-sm font-semibold text-[#141414] font-poppins">Submit Your Application</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#141414] mb-1 font-inter">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange('name')}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm font-inter"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#141414] mb-1 font-inter">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange('phone')}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm font-inter"
                        placeholder="03XX-XXXXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#141414] mb-1 font-inter">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm font-inter"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#141414] mb-1 font-inter">Job Category *</label>
                    <select
                      required
                      value={form.category}
                      onChange={handleChange('category')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm font-inter"
                    >
                      <option value="">Select a category</option>
                      {JOB_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#141414] mb-1 font-inter">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={handleChange('message')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] text-sm font-inter resize-none"
                      placeholder="Tell us about your experience and the role you're seeking..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FFD500] text-[#141414] font-bold py-3.5 rounded-full hover:bg-[#E10600] hover:text-white transition-all shadow-md text-sm font-poppins"
                  >
                    <i className="fa-brands fa-whatsapp mr-2"></i>Submit via WhatsApp
                  </button>
                  <p className="text-xs text-[#444]/50 text-center font-inter">
                    Your details will be sent to us via WhatsApp. We'll respond within 24 hours.
                  </p>
                </form>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
                  <div className="w-16 h-16 bg-[#FFD500]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-brands fa-whatsapp text-3xl text-[#FFD500]"></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#141414] mb-2 font-poppins">Application Sent!</h3>
                  <p className="text-[#444]/70 mb-6 font-inter">
                    WhatsApp has been opened with your application details. Please send the message to complete your submission.
                  </p>
                  <a
                    href="tel:0514933684"
                    className="inline-block bg-[#E10600] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1C1C1C] transition-all shadow-md text-sm font-poppins"
                  >
                    <i className="fa-solid fa-phone mr-2"></i>Call Us Instead
                  </a>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', category: '', message: '' }); }}
                    className="block mx-auto mt-4 text-sm text-[#444]/60 hover:text-[#E10600] font-inter"
                  >
                    New Application
                  </button>
                </div>
              )}

              {/* Contact info */}
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-[#141414]">
                  <span className="w-9 h-9 bg-[#E10600]/10 rounded-full flex items-center justify-center text-[#E10600]">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <span className="font-medium font-inter">
                    <a href="tel:0514933684" className="hover:text-[#E10600]">051-4933684</a>
                    {' · '}
                    <a href="https://wa.me/92311509987" target="_blank" rel="noopener noreferrer" className="hover:text-[#E10600]">
                      <i className="fa-brands fa-whatsapp mr-1"></i>0311-509987
                    </a>
                  </span>
                </div>
                <div className="flex items-start gap-3 text-[#141414]">
                  <span className="w-9 h-9 bg-[#E10600]/10 rounded-full flex items-center justify-center text-[#E10600] shrink-0 mt-0.5">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <span className="font-medium font-inter">
                    Office No. 2, B-214, Basement, Al Fateh Plaza, Chandni Chowk, Satellite Town, Rawalpindi, Punjab
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[#141414]">
                  <span className="w-9 h-9 bg-[#E10600]/10 rounded-full flex items-center justify-center text-[#E10600]">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <span className="font-medium font-inter">
                    <a href="mailto:info@gulshahzad.pk" className="hover:text-[#E10600]">info@gulshahzad.pk</a>
                  </span>
                </div>
              </div>
            </FadeUp>

            {/* Right - Map */}
            <FadeUp delay={2} className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[550px] map-container border border-gray-100">
                <iframe
                  src="https://www.google.com/maps?q=33.64248820352955,73.07743507116426&hl=en&z=16&output=embed"
                  title="Gul Shahzad Corporation Office Location"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm font-semibold text-[#141414] font-poppins">
                  <i className="fa-solid fa-location-dot text-[#E10600] mr-2"></i>
                  Office No. 2, B-214, Basement, Al Fateh Plaza
                </p>
                <p className="text-xs text-[#444]/60 mt-1 font-inter">
                  Chandni Chowk, Satellite Town, Rawalpindi, Punjab
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}