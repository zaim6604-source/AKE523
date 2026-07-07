import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useInView from "../hooks/useInView";

const faqs = [
  { q: "What services does Etcom Manpower offer?", a: "We provide overseas manpower promotion, visa processing, immigration services, HR support, document attestation, medical coordination, and travel assistance." },
  { q: "What types of visas do you handle?", a: "We process work visas, visit and tourist visas, family/dependent visas, and study visas for multiple countries across the Middle East, Europe, and Asia." },
  { q: "Which countries do you recruit for?", a: "We recruit for Saudi Arabia, UAE, Qatar, Oman, Germany, Poland, Italy, Greece, Malaysia, Singapore, South Korea, and many more." },
  { q: "What documents do I need to apply?", a: "Typically: valid passport, educational certificates, experience letters, CNIC, passport-size photos, and any relevant professional licenses. Our team guides you on exact requirements." },
  { q: "How long does the visa process take?", a: "Timelines vary by country and visa type. Work visas typically take 2–8 weeks. Our team keeps you updated at every stage." },
  { q: "Do you charge a consultation fee?", a: "No, initial consultations are completely free. We believe in transparency — all fees are disclosed upfront with no hidden charges." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView();

  return (
    <section id="faqs" className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-bold rounded-full tracking-widest uppercase border" style={{ color: "#006D77", backgroundColor: "rgba(0, 109, 119, 0.08)", borderColor: "rgba(0, 109, 119, 0.2)" }}>
            FAQS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>Frequently Asked Questions</h2>
        </div>

        <div ref={ref} className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden transition-all duration-500`}
              style={{
                backgroundColor: "#EDF6F9",
                border: "1px solid rgba(0, 109, 119, 0.08)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
                transitionDelay: `${i * 0.06}s`,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full p-5 text-left transition-colors"
              >
                <span className="text-sm font-bold pr-4" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>{faq.q}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="sm"
                  className="transition-transform duration-300 flex-shrink-0"
                  style={{ color: "#006D77", transform: openIndex === i ? "rotate(180deg)" : "rotate(0)" }}
                />
              </button>
              <div
                className="transition-all duration-300 overflow-hidden"
                style={{ maxHeight: openIndex === i ? "200px" : "0", opacity: openIndex === i ? 1 : 0 }}
              >
                <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#4a5568" }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
