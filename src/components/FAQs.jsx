import { useState } from 'react';
import FadeUp from './FadeUp';

const faqs = [
  {
    q: 'What documents do I need to apply?',
    a: 'You\'ll need a valid passport, CNIC, educational certificates, and experience letters. We\'ll guide you through the rest during your visit.',
  },
  {
    q: 'How long does the visa process take?',
    a: 'Processing times vary by country, typically 2–8 weeks. We keep you updated at every stage.',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We currently serve Saudi Arabia, Qatar, Oman, UAE, Poland, Romania, Greece, South Korea, and Croatia.',
  },
  {
    q: 'Are there any upfront fees?',
    a: 'We maintain transparent pricing. Contact us for a detailed breakdown — no hidden charges.',
  },
  {
    q: 'Do you provide pre-departure training?',
    a: 'Yes, we offer orientation sessions covering language basics, cultural tips, and travel coordination.',
  },
  {
    q: 'How can I contact your office?',
    a: 'Visit Block No. 25, Pathar Bazar, D.G. Khan, or call 064-2462267. You can also WhatsApp 0303-6784034.',
  },
];

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-question-circle" />
            FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
            Frequently Asked Questions
          </h2>
        </FadeUp>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={i * 60}>
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-background/50 transition-colors"
                >
                  <span className="text-sm font-bold text-ink pr-4">{faq.q}</span>
                  <i
                    className={`fas fa-chevron-down text-primary text-xs transition-transform duration-300 ${
                      openIdx === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`accordion-content ${openIdx === i ? 'open' : ''}`}>
                  <div>
                    <div className="px-5 pb-4 text-sm text-ink/70 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}