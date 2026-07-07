import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactDetails = [
  {
    icon: 'fa-location-dot',
    label: 'Office Address',
    value: '11-Kashmir Centre, Kutchery Road, Sialkot, Punjab',
    color: 'bg-diver-primary',
  },
  {
    icon: 'fa-phone',
    label: 'Phone Number',
    value: '052-4290391',
    href: 'tel:0524290391',
    color: 'bg-diver-secondary',
  },
  {
    icon: 'fa-envelope',
    label: 'Email Address',
    value: 'info@sialkottraders.pk',
    href: 'mailto:info@sialkottraders.pk',
    color: 'bg-diver-cta',
  },
  {
    icon: 'fa-clock',
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 6:00 PM',
    color: 'bg-diver-highlight',
  },
];

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="contact" className="section-pad bg-white overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-diver-primary/10 text-diver-primary font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <i className="fas fa-address-card" />
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-diver-highlight font-heading">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
            Visit our office, give us a call, or send a message on WhatsApp.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Cards + Form */}
          <div className={`space-y-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl font-bold text-diver-highlight font-heading mb-6">
              The Sialkot Traders
            </h3>

            {contactDetails.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-diver-primary/20 hover:shadow-md transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`fas ${item.icon} text-white text-lg`} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-diver-highlight font-semibold hover:text-diver-primary transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-diver-highlight font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923068860125"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <i className="fab fa-whatsapp text-3xl" />
              <div>
                <p className="text-sm opacity-90">Chat on WhatsApp</p>
                <p className="text-base">+92 306-8860125</p>
              </div>
            </a>

            {/* Quick Form */}
            <div className="bg-diver-background rounded-2xl p-6 border border-diver-secondary/20">
              <h4 className="font-bold text-diver-highlight text-sm mb-4 font-heading">Quick Message</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  const name = form.name.value;
                  const phone = form.phone.value;
                  const msg = encodeURIComponent(
                    `Hello The Sialkot Traders!%0A%0AName: ${name}%0APhone: ${phone}%0AI am interested in overseas employment.`
                  );
                  window.open(`https://wa.me/923068860125?text=${msg}`, '_blank');
                }}
                className="space-y-3"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-diver-primary focus:ring-2 focus:ring-diver-primary/20"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-diver-primary focus:ring-2 focus:ring-diver-primary/20"
                />
                <button
                  type="submit"
                  className="w-full bg-diver-cta hover:bg-diver-cta/90 text-white font-semibold py-3 rounded-xl text-sm transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Right: Map */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-80 lg:h-full min-h-[400px]">
              <iframe
                title="The Sialkot Traders Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.0!2d74.542!3d32.642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDM4JzMxLjIiTiA3NMKwMzInMzEuMiJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s&q=Kashmir+Centre+Kutchery+Road+Sialkot"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-center text-sm text-gray-400 mt-3 flex items-center justify-center gap-1">
              <i className="fas fa-location-dot text-diver-cta" />
              Kashmir Centre, Kutchery Road, Sialkot
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
