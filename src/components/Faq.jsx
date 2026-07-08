import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'What documents do I need for a Gulf visa?',
    a: 'You typically need your CNIC, passport-sized photographs, a valid passport with at least 6 months validity, and any relevant educational or professional certificates. Our team will guide you through the complete list based on your destination country.',
  },
  {
    q: 'How long does Gulf visa processing take?',
    a: 'Processing times vary by country, but Gulf visas typically take 3 to 10 working days. We keep you updated at every stage and work to expedite your application.',
  },
  {
    q: 'Do you offer confirmed airline tickets?',
    a: 'Yes! We provide confirmed airline tickets at competitive rates for all Gulf and international destinations. Our ticketing team ensures you get the best routes and prices.',
  },
  {
    q: 'Which countries do you process visas for?',
    a: 'We specialize in visas for Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain. We also handle travel arrangements for Germany, Malaysia, Turkey, and other destinations.',
  },
  {
    q: 'Are there any hidden charges?',
    a: 'Absolutely not. We believe in complete transparency. All fees are communicated upfront with a detailed breakdown before any payment. No hidden charges, ever.',
  },
  {
    q: 'Where are your offices located?',
    a: 'We have two offices: our Head Office at Office No. 30, Navy Heights, near Kala Pul, Karachi East, Sindh (Phone: 021-35520401), and our Branch at Office 1, 3rd Floor, Al-Mustafa Plaza, 6th Road, Rawalpindi (WhatsApp: 0300-2141262).',
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null);
  const revealRef = useScrollReveal();

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0496FF]/10 text-[#0496FF] rounded-full text-xs font-semibold mb-4">
            <i className="fas fa-question-circle" />
            FAQs
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062A45] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#062A45]/60 max-w-xl mx-auto">
            Everything you need to know about our visa and travel services.
          </p>
        </div>

        <div ref={revealRef} className="reveal space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-blue-100 bg-white overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left no-underline text-[#062A45] hover:bg-blue-50/50 transition-colors"
              >
                <span className="text-sm sm:text-base font-semibold pr-4">{faq.q}</span>
                <i
                  className={`fas fa-chevron-down text-sm text-[#0496FF] transition-transform duration-300 flex-shrink-0 ${
                    openIdx === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div className={`faq-answer ${openIdx === i ? 'open' : ''}`}>
                <div>
                  <div className="px-5 sm:px-6 pb-4 text-sm text-[#062A45]/60 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
