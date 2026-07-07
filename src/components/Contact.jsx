import { useState } from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import useInView from '../hooks/useInView';

const contactDetails = [
  { icon: FaWhatsapp, label: 'WhatsApp', value: '0333-5553256', href: 'https://wa.me/923335553256' },
  { icon: FaMapMarkerAlt, label: 'Address', value: '2X6Q+52M, Mohalla Meetha Khel, Nowshera, 24100, KPK' },
  { icon: FaEnvelope, label: 'Email', value: 'info@innovativeworld.pk', href: 'mailto:info@innovativeworld.pk' },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Innovative World,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService Interest: ${form.service}\nMessage: ${form.message}`
    );
    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/923335553256?text=${msg}`, '_blank');
    }, 800);
  };

  const interestOptions = [
    'Recruitment & Placement',
    'Staffing Solutions',
    'Career Consultancy',
    'Document Support',
    'Corporate Services',
    'Training & Development',
    'Manpower Supply',
    'Other',
  ];

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="pill-badge bg-[#D7263D]/10 text-[#D7263D] mb-4">GET IN TOUCH</span>
          <h2 className="section-heading">Contact <span className="text-[#D7263D]">Us</span></h2>
          <p className="text-[#340710]/60 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Reach out to us — we're here to help with all your recruitment and service needs
          </p>
        </div>

        <div ref={ref} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-[#FFF0F3] rounded-3xl p-10 text-center">
                <div className="w-20 h-20 bg-[#02C39A]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <FaPaperPlane className="text-[#02C39A] text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#340710] font-heading mb-2">Thank You!</h3>
                <p className="text-[#340710]/60">Redirecting you to WhatsApp to connect with our team...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#340710] mb-1.5">Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FFF0F3]/50 text-sm outline-none focus:border-[#D7263D] focus:ring-2 focus:ring-[#D7263D]/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#340710] mb-1.5">Phone *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                      placeholder="03XX-XXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FFF0F3]/50 text-sm outline-none focus:border-[#D7263D] focus:ring-2 focus:ring-[#D7263D]/20 transition-all" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#340710] mb-1.5">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FFF0F3]/50 text-sm outline-none focus:border-[#D7263D] focus:ring-2 focus:ring-[#D7263D]/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#340710] mb-1.5">Interest / Service</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FFF0F3]/50 text-sm outline-none focus:border-[#D7263D] focus:ring-2 focus:ring-[#D7263D]/20 transition-all appearance-none">
                      <option value="">Select a service...</option>
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#340710] mb-1.5">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FFF0F3]/50 text-sm outline-none focus:border-[#D7263D] focus:ring-2 focus:ring-[#D7263D]/20 transition-all resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-[#02C39A] hover:bg-[#02b38d] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-98 text-base">
                  <FaWhatsapp /> Send via WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* Info & Map */}
          <div className="space-y-6">
            {/* Contact info cards */}
            <div className="space-y-4">
              {contactDetails.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#D7263D]/20 hover:shadow-card transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF0F3] flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#D7263D] text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#D7263D]/60 uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer"
                          className="text-[#340710] font-semibold hover:text-[#D7263D] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#340710] font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map */}
            <div className="map-container">
              <iframe
                title="Innovative World Location - Nowshera"
                src="https://www.google.com/maps?q=34.01062882981548,71.98752091349283&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
