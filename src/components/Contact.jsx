import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const revealRef = useScrollReveal();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Parwaz Recruiting Agency! I'm ${form.name || 'a candidate'}. ${form.message || 'I would like to know about overseas job opportunities.'}`;
    window.open(`https://wa.me/923339319471?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFD6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF3CAC]/10 text-[#FF3CAC] rounded-full text-xs font-semibold mb-4">
            <i className="fas fa-address-card" />
            Contact Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A0A1E] mb-3">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-[#1A0A1E]/60 max-w-xl mx-auto">
            Visit our office, give us a call, or send a message. We&apos;re here to help.
          </p>
        </div>

        <div ref={revealRef} className="reveal grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-pink-50">
            <h3 className="text-lg sm:text-xl font-bold font-[Plus Jakarta Sans] text-[#1A0A1E] mb-5">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1A0A1E]/70 mb-1.5">Your Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Muhammad Ali" className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#FF3CAC] focus:ring-2 focus:ring-[#FF3CAC]/20 outline-none transition-all text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A0A1E]/70 mb-1.5">Phone Number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. 03XX-XXXXXXX" className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#FF3CAC] focus:ring-2 focus:ring-[#FF3CAC]/20 outline-none transition-all text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A0A1E]/70 mb-1.5">Your Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your interest..." className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#FF3CAC] focus:ring-2 focus:ring-[#FF3CAC]/20 outline-none transition-all text-sm resize-none" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#2B86C5] rounded-full hover:bg-[#2470a5] hover:shadow-lg transition-all">
                <i className="fab fa-whatsapp" />
                Send via WhatsApp
              </button>
            </form>
            <p className="text-xs text-[#1A0A1E]/40 text-center mt-3">
              Or email us at{' '}
              <a href="mailto:parwazoep@gmail.com" className="text-[#FF3CAC] hover:underline">
                parwazoep@gmail.com
              </a>
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-pink-50">
              <h3 className="text-lg sm:text-xl font-bold font-[Plus Jakarta Sans] text-[#1A0A1E] mb-5">Visit Us</h3>
              <div className="space-y-4">
                <a href="https://www.google.com/maps/search/Baby+Shopping+Center+Arbab+Road+Peshawar+Cantt" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 no-underline group">
                  <div className="w-10 h-10 rounded-xl bg-[#FFD6F0] flex items-center justify-center text-[#FF3CAC] flex-shrink-0">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1A0A1E] group-hover:text-[#FF3CAC] transition-colors">Baby Shopping Center</div>
                    <div className="text-xs text-[#1A0A1E]/50">Room No. C-16, First Floor, Arbab Road,<br />Cantt, Peshawar, KPK</div>
                  </div>
                </a>
                <a href="tel:0915271919" className="flex items-center gap-3 no-underline group">
                  <div className="w-10 h-10 rounded-xl bg-[#FFD6F0] flex items-center justify-center text-[#FF3CAC] flex-shrink-0">
                    <i className="fas fa-phone" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1A0A1E] group-hover:text-[#FF3CAC] transition-colors">091-5271919</div>
                    <div className="text-xs text-[#1A0A1E]/50">Landline</div>
                  </div>
                </a>
                <a href="https://wa.me/923339319471" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 no-underline group">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                    <i className="fab fa-whatsapp" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1A0A1E] group-hover:text-green-600 transition-colors">0333-9319471</div>
                    <div className="text-xs text-[#1A0A1E]/50">WhatsApp</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-pink-50 h-48 sm:h-56 bg-gradient-to-br from-pink-100 to-white flex items-center justify-center">
              <a href="https://www.google.com/maps/search/Baby+Shopping+Center+Arbab+Road+Peshawar+Cantt" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 no-underline text-[#1A0A1E]/60 hover:text-[#FF3CAC] transition-colors">
                <i className="fas fa-map-marked-alt text-3xl sm:text-4xl" />
                <span className="text-sm font-medium">Open in Google Maps</span>
                <span className="text-xs">Baby Shopping Center, Peshawar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}