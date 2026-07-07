import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import useInView from "../hooks/useInView";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [ref, inView] = useInView();

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Etcom Manpower!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0A%0A${form.message}`
    );
    window.open(`https://wa.me/923219115599?text=${text}`, "_blank");
  };

  const handleFallback = () => {
    window.location.href = "mailto:info@etcommanpower.pk";
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-bold rounded-full tracking-widest uppercase border" style={{ color: "#006D77", backgroundColor: "rgba(0, 109, 119, 0.08)", borderColor: "rgba(0, 109, 119, 0.2)" }}>
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>Contact Us</h2>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10">
          {/* Left: Info + Map */}
          <div className={`flex flex-col gap-6 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            {/* Info rows */}
            <a href="https://wa.me/923219115599" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-2xl" style={{ backgroundColor: "#EDF6F9", border: "1px solid rgba(0, 109, 119, 0.1)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(0, 109, 119, 0.1)", color: "#006D77" }}>
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#6B7280" }}>WhatsApp</p>
                <p className="text-sm font-bold" style={{ color: "#003844" }}>0321-9115599</p>
              </div>
            </a>

            <a href="mailto:info@etcommanpower.pk" className="flex items-start gap-4 p-4 rounded-2xl" style={{ backgroundColor: "#EDF6F9", border: "1px solid rgba(0, 109, 119, 0.1)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(0, 109, 119, 0.1)", color: "#006D77" }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#6B7280" }}>Email</p>
                <p className="text-sm font-bold" style={{ color: "#003844" }}>info@etcommanpower.pk</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 rounded-2xl" style={{ backgroundColor: "#EDF6F9", border: "1px solid rgba(0, 109, 119, 0.1)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(0, 109, 119, 0.1)", color: "#006D77" }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#6B7280" }}>Address</p>
                <p className="text-sm leading-relaxed" style={{ color: "#003844" }}>Office #1, 2nd Floor, Sajid Shabbir, Sharif Road, G-11 Markaz, Islamabad</p>
              </div>
            </div>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/etcommp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-full w-fit transition-all" style={{ backgroundColor: "rgba(0, 109, 119, 0.1)", color: "#006D77" }}>
              <FontAwesomeIcon icon={faLinkedin} /> Follow on LinkedIn
            </a>

            {/* Free OpenStreetMap embed */}
            <div className="rounded-2xl overflow-hidden h-56" style={{ border: "1px solid rgba(0, 109, 119, 0.12)" }}>
              <iframe
                title="Etcom Manpower Location"
                width="100%" height="100%" frameBorder="0" style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.9929%2C33.6626%2C73.0029%2C33.6726&amp;layer=mapnik&amp;marker=33.6676%2C72.9979"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className={`rounded-3xl p-8 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`} style={{ backgroundColor: "#EDF6F9", border: "1px solid rgba(0, 109, 119, 0.1)" }}>
            <h3 className="font-extrabold text-lg mb-1" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>Send us a Message</h3>
            <p className="text-xs mb-6" style={{ color: "#6B7280" }}>We'll respond on WhatsApp within minutes</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: "#003844" }}>Full Name <span style={{ color: "#E29578" }}>*</span></label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm transition"
                    style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0, 109, 119, 0.15)", color: "#003844", outline: "none" }}
                    onFocus={(e) => e.target.style.borderColor = "#006D77"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(0, 109, 119, 0.15)"} />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: "#003844" }}>Phone <span style={{ color: "#E29578" }}>*</span></label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="0321-9115599"
                    className="w-full px-4 py-3 rounded-xl text-sm transition"
                    style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0, 109, 119, 0.15)", color: "#003844", outline: "none" }}
                    onFocus={(e) => e.target.style.borderColor = "#006D77"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(0, 109, 119, 0.15)"} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: "#003844" }}>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm transition"
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0, 109, 119, 0.15)", color: "#003844", outline: "none" }}
                  onFocus={(e) => e.target.style.borderColor = "#006D77"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(0, 109, 119, 0.15)"} />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: "#003844" }}>Service Needed</label>
                <select name="service" value={form.service} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm transition"
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0, 109, 119, 0.15)", color: "#003844", outline: "none" }}
                  onFocus={(e) => e.target.style.borderColor = "#006D77"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(0, 109, 119, 0.15)"}>
                  <option value="">Select a service...</option>
                  <option>Manpower</option>
                  <option>Visa</option>
                  <option>Immigration</option>
                  <option>HR</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: "#003844" }}>Message <span style={{ color: "#E29578" }}>*</span></label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Tell us about your requirement..."
                  className="w-full px-4 py-3 rounded-xl text-sm transition resize-none"
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0, 109, 119, 0.15)", color: "#003844", outline: "none" }}
                  onFocus={(e) => e.target.style.borderColor = "#006D77"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(0, 109, 119, 0.15)"} />
              </div>

              <button type="submit" className="flex items-center justify-center gap-2 w-full py-3.5 text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "#E29578" }}>
                <FontAwesomeIcon icon={faWhatsapp} /> Send via WhatsApp
              </button>

              <p className="text-xs text-center mt-1" style={{ color: "#6B7280" }}>
                WhatsApp not working?{" "}
                <button type="button" onClick={handleFallback} className="underline font-medium" style={{ color: "#006D77" }}>Email us instead</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
