import { useState } from "react";

const WHATSAPP_NUMBER = "923445937116";

const contactInfo = [
  {
    icon: "fa-phone",
    title: "Phone",
    lines: ["0934-431312"],
    href: "tel:+92934431312",
  },
  {
    icon: "fa-envelope",
    title: "Email",
    lines: ["info@afnanra.pk"],
    href: "mailto:info@afnanra.pk",
  },
  {
    icon: "fa-location-dot",
    title: "Address",
    lines: [
      "Office No. 80, 2nd Floor, Mobi Plaza,",
      "Haider Road, Opp. Ciro's Cinema,",
      "Saddar, Rawalpindi, Punjab",
    ],
    href: "https://www.google.com/maps?q=Mobi+Plaza+Haider+Road+Saddar+Rawalpindi&hl=en&z=16&output=embed",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Afnan Recruiting Agency,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            GET IN TOUCH
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — info + map */}
          <div className="flex flex-col gap-6">
            {contactInfo.map(({ icon, title, lines, href }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200 group bg-background border border-primary/10 hover:border-primary/30"
              >
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 bg-primary/10 border border-primary/20">
                  <i className={`fas ${icon} text-primary`}></i>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1 text-ink/50">{title}</p>
                  {lines.map((line) => (
                    <p key={line} className="text-sm font-medium leading-relaxed text-ink">{line}</p>
                  ))}
                </div>
              </a>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-64 border border-primary/10">
              <iframe
                title="Afnan Recruiting Agency Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Mobi+Plaza+Haider+Road+Saddar+Rawalpindi&hl=en&z=16&output=embed"
              />
            </div>
          </div>

          {/* Right — Inquiry Form */}
          <div className="rounded-3xl p-8 bg-background border border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-primary/10 border border-primary/20">
                <i className="fab fa-whatsapp text-primary"></i>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-ink">Send an Inquiry</h3>
                <p className="text-xs text-ink/50">Redirects to WhatsApp on submit</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-ink/70">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Muhammad Ali"
                    className="w-full px-4 py-3 rounded-xl text-sm placeholder-gray-400 transition bg-white border border-primary/15 text-ink outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-ink/70">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+92 300 0000000"
                    className="w-full px-4 py-3 rounded-xl text-sm placeholder-gray-400 transition bg-white border border-primary/15 text-ink outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-ink/70">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm placeholder-gray-400 transition bg-white border border-primary/15 text-ink outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-ink/70">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe your inquiry..."
                  className="w-full px-4 py-3 rounded-xl text-sm placeholder-gray-400 transition resize-none bg-white border border-primary/15 text-ink outline-none focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3.5 text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 bg-cta"
              >
                <i className="fas fa-paper-plane"></i>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}