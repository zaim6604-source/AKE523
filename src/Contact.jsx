import { COMPANY } from './constants';
import useInView from './useInView';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = encodeURIComponent(form.name.value);
    const phone = encodeURIComponent(form.phone.value);
    const email = encodeURIComponent(form.email.value);
    const category = encodeURIComponent(form.category.value);
    const message = encodeURIComponent(form.message.value);
    const text = `Hello H.A. International!%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ACategory: ${category}%0AMessage: ${message}`;
    window.open(`https://wa.me/923448999999?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F8EEFF]">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-4">
          <span className="pill-badge">
            <i className="fas fa-envelope text-[10px] mr-1.5"></i>
            GET IN TOUCH
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#2A1033] mb-4">
          Contact Us
        </h2>
        <p className="text-center text-[#2A1033]/60 max-w-2xl mx-auto mb-10 md:mb-14">
          Visit any of our three offices or reach out via the form below. We're here to help.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          {/* Form */}
          <div
            className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#CE93D8]/20 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="font-heading font-bold text-xl text-[#2A1033] mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2A1033]/60 uppercase tracking-wider mb-1.5">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#CE93D8]/30 bg-[#F8EEFF]/50 focus:outline-none focus:ring-2 focus:ring-[#9C27B0]/30 focus:border-[#9C27B0] text-sm text-[#2A1033] transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2A1033]/60 uppercase tracking-wider mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#CE93D8]/30 bg-[#F8EEFF]/50 focus:outline-none focus:ring-2 focus:ring-[#9C27B0]/30 focus:border-[#9C27B0] text-sm text-[#2A1033] transition-all"
                    placeholder="+92-XXX-XXXXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2A1033]/60 uppercase tracking-wider mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-[#CE93D8]/30 bg-[#F8EEFF]/50 focus:outline-none focus:ring-2 focus:ring-[#9C27B0]/30 focus:border-[#9C27B0] text-sm text-[#2A1033] transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2A1033]/60 uppercase tracking-wider mb-1.5">Job Category</label>
                <select
                  name="category"
                  className="w-full px-4 py-3 rounded-xl border border-[#CE93D8]/30 bg-[#F8EEFF]/50 focus:outline-none focus:ring-2 focus:ring-[#9C27B0]/30 focus:border-[#9C27B0] text-sm text-[#2A1033] transition-all"
                >
                  <option value="">Select a category</option>
                  <option value="Skilled Worker">Skilled Worker</option>
                  <option value="Semi-Skilled Worker">Semi-Skilled Worker</option>
                  <option value="Unskilled Worker">Unskilled Worker</option>
                  <option value="Employer">Employer / Company</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2A1033]/60 uppercase tracking-wider mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-[#CE93D8]/30 bg-[#F8EEFF]/50 focus:outline-none focus:ring-2 focus:ring-[#9C27B0]/30 focus:border-[#9C27B0] text-sm text-[#2A1033] transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FFD740] hover:bg-[#FFC400] text-[#2A1033] font-bold text-sm py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-[#FFD740]/30"
              >
                <i className="fab fa-whatsapp mr-2"></i> Send via WhatsApp
              </button>
              <p className="text-xs text-[#2A1033]/40 text-center">
                By submitting, you agree to be contacted via WhatsApp. Alternatively, email us at{' '}
                <a href={`mailto:${COMPANY.email}`} className="text-[#9C27B0] underline">{COMPANY.email}</a>
              </p>
            </form>
          </div>

          {/* Office Info & Maps */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Shared WhatsApp */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#CE93D8]/20">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0">
                  <i className="fab fa-whatsapp text-xl"></i>
                </div>
                <div>
                  <p className="font-heading font-bold text-base text-[#2A1033]">WhatsApp</p>
                  <a href={COMPANY.waLink} target="_blank" rel="noopener noreferrer" className="text-sm text-[#9C27B0] font-semibold hover:underline">
                    {COMPANY.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            {/* Three Office Blocks */}
            {COMPANY.offices.map((office, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#CE93D8]/20">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#F8EEFF] flex items-center justify-center text-[#9C27B0] flex-shrink-0 mt-0.5">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#2A1033]">{office.name}</p>
                    <p className="text-sm text-[#2A1033]/70 mt-1">{office.address}</p>
                    {office.phone && (
                      <p className="text-sm text-[#9C27B0] font-medium mt-1">
                        <i className="fas fa-phone mr-1.5"></i>{office.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm border border-[#CE93D8]/20 h-[180px]">
                  <iframe
                    src={office.mapQuery}
                    title={`${office.name} Location`}
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}