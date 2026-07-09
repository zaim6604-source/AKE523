import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const faqs = [
  { q: 'What documents do I need to apply?', a: 'You typically need your CNIC, passport-sized photographs, educational certificates, and a valid passport. Our team will guide you through the complete list based on your destination country and job type.' },
  { q: 'How long does the process take?', a: 'Processing times vary by country and job type, but typically range from 2 to 8 weeks. We keep you updated at every stage and work to expedite your application.' },
  { q: 'Are there any hidden fees?', a: 'No. We believe in complete transparency. All fees are communicated upfront, and you will receive a detailed breakdown before any payment. No hidden charges, ever.' },
  { q: 'Which countries do you recruit for?', a: 'We currently recruit for Saudi Arabia, UAE, Qatar, Oman, Germany, Poland, Greece, Romania, and Malaysia, covering industries like construction, healthcare, hospitality, logistics, and manufacturing.' },
  { q: 'How do I know the job is genuine?', a: 'We personally verify every employer and job offer. We are a government-licensed agency (License #2325/PWR) and maintain direct relationships with reputable overseas employers.' },
  { q: 'Can I visit your office?', a: 'Absolutely! Visit us at Room No. C-16, First Floor, Baby Shopping Center, Arbab Road, Cantt, Peshawar, KPK. Our team is available Sunday to Thursday, 9 AM to 5 PM.' },
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF3CAC]/10 text-[#FF3CAC] rounded-full text-xs font-semibold mb-4">
            <i className="fas fa-question-circle" />
            FAQs
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A0A1E] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#1A0A1E]/60 max-w-xl mx-auto">
            Everything you need to know before applying.
          </p>
        </div>

        <div ref={revealRef} className="reveal space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-pink-100 bg-white overflow-hidden hover:shadow-md transition-shadow">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left no-underline text-[#1A0A1E] hover:bg-pink-50/50 transition-colors"
              >
                <span className="text-sm sm:text-base font-semibold pr-4">{faq.q}</span>
                <i className={`fas fa-chevron-down text-sm text-[#FF3CAC] transition-transform duration-300 flex-shrink-0 ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`faq-answer ${openIdx === i ? 'open' : ''}`}>
                <div>
                  <div className="px-5 sm:px-6 pb-4 text-sm text-[#1A0A1E]/60 leading-relaxed">{faq.a}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}