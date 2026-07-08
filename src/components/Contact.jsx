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
    const text = `Hello Shafay International! I'm ${form.name || 'a client'}. ${form.message || 'I would like to know about visa and travel services.'}`;
    window.open(`https://wa.me/923002141262?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#E8F5FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0496FF]/10 text-[#0496FF] rounded-full text-xs font-semibold mb-4">
            <i className="fas fa-address-card" />
            Contact Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062A45] mb-3">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-[#062A45]/60 max-w-xl mx-auto">
            Visit either of our offices, give us a call, or send a message.
          </p>
        </div>

        <div ref={revealRef} className="reveal grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-blue-50">
            <h3 className="text-lg sm:text-xl font-bold font-[Plus_Jakarta_Sans] text-[#062A45] mb-5">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#062A45]/70 mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Ahmed Raza"
                  className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-[#0496FF] focus:ring-2 focus:ring-[#0496FF]/20 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#062A45]/70 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. 03XX-XXXXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-[#0496FF] focus:ring-2 focus:ring-[#0496FF]/20 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#062A45]/70 mb-1.5">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your visa or travel needs..."
                  className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-[#0496FF] focus:ring-2 focus:ring-[#0496FF]/20 outline-none transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#FB5607] rounded-full hover:bg-[#e04e06] hover:shadow-lg transition-all"
              >
                <i className="fab fa-whatsapp" />
                Send via WhatsApp
              </button>
            </form>
            <p className="text-xs text-[#062A45]/40 text-center mt-3">
              Or email us at{' '}
              <a href="mailto:shafay_int@yahoo.com" className="text-[#0496FF] hover:underline">
                shafay_int@yahoo.com
              </a>
            </p>
          </div>

          {/* Contact Info with Dual Office + Dual Maps */}
          <div className="space-y-5">
            {/* Karachi Office Info */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-blue-50">
              <h3 className="text-lg sm:text-xl font-bold font-[Plus_Jakarta_Sans] text-[#0496FF] mb-4 flex items-center gap-2">
                <i className="fas fa-building" /> Karachi — Head Office
              </h3>
              <div className="space-y-3">
                <a
                  href="https://www.google.com/maps/search/Navy+Heights+Kala+Pul+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 no-underline group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5FF] flex items-center justify-center text-[#0496FF] flex-shrink-0">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#062A45] group-hover:text-[#0496FF] transition-colors">
                      Office No. 30, Navy Heights
                    </div>
                    <div className="text-xs text-[#062A45]/50">
                      near Kala Pul, Karachi East, Sindh
                    </div>
                  </div>
                </a>
                <a href="tel:02135520401" className="flex items-center gap-3 no-underline group">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5FF] flex items-center justify-center text-[#0496FF] flex-shrink-0">
                    <i className="fas fa-phone" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#062A45] group-hover:text-[#0496FF] transition-colors">
                      021-35520401
                    </div>
                    <div className="text-xs text-[#062A45]/50">Landline</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Rawalpindi Office Info */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-blue-50">
              <h3 className="text-lg sm:text-xl font-bold font-[Plus_Jakarta_Sans] text-[#0496FF] mb-4 flex items-center gap-2">
                <i className="fas fa-building" /> Rawalpindi — Branch
              </h3>
              <div className="space-y-3">
                <a
                  href="https://www.google.com/maps/search/33.64195674495073,73.07578874232854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 no-underline group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5FF] flex items-center justify-center text-[#0496FF] flex-shrink-0">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#062A45] group-hover:text-[#0496FF] transition-colors">
                      Office 1, 3rd Floor, Al-Mustafa Plaza
                    </div>
                    <div className="text-xs text-[#062A45]/50">
                      6th Road, Rawalpindi
                    </div>
                  </div>
                </a>
                <a
                  href="https://wa.me/923002141262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 no-underline group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                    <i className="fab fa-whatsapp" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#062A45] group-hover:text-green-600 transition-colors">
                      0300-2141262
                    </div>
                    <div className="text-xs text-[#062A45]/50">WhatsApp</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Two Maps */}
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="https://www.google.com/maps/search/Navy+Heights+Kala+Pul+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl overflow-hidden shadow-md border border-blue-50 h-36 bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center no-underline text-[#062A45]/60 hover:text-[#0496FF] transition-colors"
              >
                <i className="fas fa-map-marked-alt text-2xl" />
                <span className="text-xs font-medium mt-1">Karachi Office</span>
                <span className="text-[10px]">Open Map</span>
              </a>
              <a
                href="https://www.google.com/maps/search/33.64195674495073,73.07578874232854"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl overflow-hidden shadow-md border border-blue-50 h-36 bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center no-underline text-[#062A45]/60 hover:text-[#0496FF] transition-colors"
              >
                <i className="fas fa-map-marked-alt text-2xl" />
                <span className="text-xs font-medium mt-1">Rawalpindi Office</span>
                <span className="text-[10px]">Open Map</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
