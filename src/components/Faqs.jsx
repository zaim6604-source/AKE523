import { useState, useRef } from "react";

const faqs = [
  {
    q: "Which trades can I get tested for?",
    a: "We offer testing across 20+ trades including Welder (3G/6G), Electrician, Plumber, Mason, Steel Fixer, Shuttering Carpenter, HVAC/AC Technician, Heavy & Light Driver, Auto Mechanic, Pipe Fitter, Painter, and Duct Man.",
  },
  {
    q: "How do I book a trade test?",
    a: "Contact us via WhatsApp at 0300-5719948. Tell us your trade and preferred date, and we'll schedule your test at our Mardan center.",
  },
  {
    q: "How long does the test take?",
    a: "Most practical tests take 30–60 minutes depending on the trade. Results and certificates are typically issued the same day.",
  },
  {
    q: "Is the certificate internationally recognised?",
    a: "Our trade test certificates are recognised by overseas employers and recruitment agencies. We also provide video and photo records of your test.",
  },
  {
    q: "Where is the testing center located?",
    a: "Our facility is at 5XQ2+94P, Mardan, 23200, KPK. You can find us on Google Maps using the Plus Code.",
  },
  {
    q: "What documents should I bring?",
    a: "Bring your CNIC, passport-sized photos, and any relevant tools of your trade. If you have previous certificates, bring those as well.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  return (
    <section id="faqs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            FAQS
          </span>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-sm sm:text-base text-ink pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-down text-primary transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}></i>
                </button>
                <div
                  ref={(el) => (contentRefs.current[i] = el)}
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? contentRefs.current[i]?.scrollHeight + "px" : "0" }}
                >
                  <p className="px-5 pb-5 text-sm text-ink/70 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}