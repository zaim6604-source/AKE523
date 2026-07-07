import { useState, useRef } from "react";

const faqs = [
  {
    q: "Is Afnan Recruiting Agency government licensed?",
    a: "Yes, we are fully licensed by the Government of Pakistan under License No. 2202/MLK.",
  },
  {
    q: "Which countries do you recruit for?",
    a: "We recruit for Qatar, UAE, Saudi Arabia, Oman, Germany, Poland, Italy, Greece, and Hungary across various industries.",
  },
  {
    q: "Where is your office located?",
    a: "Office No. 80, 2nd Floor, Mobi Plaza, Haider Road, Opp. Ciro's Cinema, Saddar, Rawalpindi, Punjab.",
  },
  {
    q: "What documents do I need to apply?",
    a: "You'll need your CNIC, passport (valid for at least 2 years), educational certificates, and experience letters. We'll guide you through the full list.",
  },
  {
    q: "How long does the processing take?",
    a: "Processing times vary by country and role, typically ranging from 2 to 8 weeks from documentation to departure.",
  },
  {
    q: "What are your service fees?",
    a: "Our fees are transparent and competitive. Contact us for a detailed breakdown based on your desired country and role.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  return (
    <section id="faqs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            FAQS
          </span>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-sm sm:text-base text-ink pr-4">{faq.q}</span>
                  <i
                    className={`fas fa-chevron-down text-primary transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                <div
                  ref={(el) => (contentRefs.current[i] = el)}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? contentRefs.current[i]?.scrollHeight + "px" : "0",
                  }}
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