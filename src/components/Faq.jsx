import { useState } from 'react';
import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';

const FAQS = [
  {
    q: 'Is Arabian Gulf International government licensed?',
    a: 'Yes, absolutely. Arabian Gulf International is a fully government-licensed Overseas Employment Promoter (OEP) bearing License No. 2175/RWP, issued by the Ministry of Overseas Pakistanis and Human Resource Development. We operate in full compliance with all applicable regulations.',
  },
  {
    q: 'Which Gulf countries do you recruit for?',
    a: 'We recruit for all six Gulf Cooperation Council (GCC) countries: the United Arab Emirates, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain. Our extensive employer network spans construction, hospitality, healthcare, logistics, retail, and oil & gas sectors across the region.',
  },
  {
    q: 'Where is your office located?',
    a: 'Our office is located at Office No. 51, 2nd Floor, Rehmat Centre, I-8 Markaz, Islamabad, Islamabad Capital Territory. We are conveniently situated in the heart of Islamabad and welcome walk-in inquiries during business hours.',
  },
  {
    q: 'What documents are required to apply?',
    a: 'Typically, you will need a valid passport (minimum 6 months validity), passport-sized photographs, educational certificates and degrees, professional experience letters, and a valid CNIC. Our team will guide you through the complete document checklist once you register.',
  },
  {
    q: 'How long does visa processing take?',
    a: 'Visa processing times vary by country and job category. On average, it takes 2 to 6 weeks from the time all documents are submitted. We keep candidates informed at every stage and work to expedite the process wherever possible.',
  },
  {
    q: 'Are there any registration fees?',
    a: 'We maintain transparent and ethical practices. While there may be nominal processing fees for document attestation and medical tests (as required by Gulf country regulations), we do not charge any hidden fees. All charges are clearly communicated upfront with proper receipts.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <SectionBadge text="FAQS" color="bg-[#FF5C8A]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D0A1E]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5C1A32]/70 mt-3">
            Everything you need to know before starting your Gulf employment journey.
          </p>
        </FadeUp>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FadeUp key={i} delay={(i % 6) + 1}>
              <div
                className={`border-l-4 rounded-xl overflow-hidden transition-all ${
                  openIndex === i
                    ? 'border-[#E0115F] bg-[#FFF0F4]/50 shadow-md'
                    : 'border-[#E0115F]/20 bg-white shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                >
                  <span className="font-semibold text-[#3D0A1E] text-sm md:text-base pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm transition-all ${
                      openIndex === i ? 'bg-[#E0115F] rotate-180' : 'bg-[#7B2D8E]'
                    }`}
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
                <div className={`accordion-content ${openIndex === i ? 'active' : ''}`}>
                  <p className="px-4 md:px-5 pb-4 md:pb-5 text-[#5C1A32]/80 text-sm md:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}