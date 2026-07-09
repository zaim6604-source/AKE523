import { useState } from 'react';
import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';

const FAQS = [
  {
    q: 'Is Barkha International government licensed?',
    a: 'Yes, absolutely. Barkha International (Pvt) Ltd. is a fully government-licensed Overseas Employment Promoter (OEP) bearing License No. 2312/RWP, issued by the Ministry of Overseas Pakistanis and Human Resource Development. We operate in full compliance with all applicable regulations.',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We recruit for Saudi Arabia, UAE, Qatar, Kuwait, Oman, Germany, Poland, South Korea, and Turkey. Our extensive employer network spans construction, hospitality, healthcare, logistics, manufacturing, and oil & gas sectors across these destination countries.',
  },
  {
    q: 'Where is your office located?',
    a: 'Our office is located at Office #102, 1st Floor, Royal Centre, Fazal-e-Haq Road, Blue Area, Islamabad, ICT. We are conveniently situated in the heart of Islamabad\'s business district and welcome walk-in inquiries during business hours.',
  },
  {
    q: 'What documents are required to apply?',
    a: 'Typically, you will need a valid passport (minimum 6 months validity), passport-sized photographs, educational certificates and degrees, professional experience letters, and a valid CNIC. Our team will guide you through the complete document checklist once you register.',
  },
  {
    q: 'How long does visa processing take?',
    a: 'Visa processing times vary by country and job category. On average, it takes 2 to 6 weeks for Gulf countries, and 8 to 16 weeks for European destinations. We keep candidates informed at every stage and work to expedite the process wherever possible.',
  },
  {
    q: 'Are there any registration fees?',
    a: 'We maintain transparent and ethical practices. While there may be nominal processing fees for document attestation and medical tests (as required by destination country regulations), we do not charge any hidden fees. All charges are clearly communicated upfront with proper receipts.',
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
          <SectionBadge text="FAQS" color="bg-[#E10600]" />
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#1C1C1C]/60 mt-3">
            Everything you need to know before starting your international employment journey.
          </p>
        </FadeUp>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FadeUp key={i} delay={(i % 6) + 1}>
              <div
                className={`border-l-4 rounded-xl overflow-hidden transition-all ${
                  openIndex === i
                    ? 'border-[#E10600] bg-[#E10600]/5 shadow-md'
                    : 'border-[#E10600]/20 bg-white shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                >
                  <span className="font-semibold text-[#1C1C1C] text-sm md:text-base pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm transition-all ${
                      openIndex === i ? 'bg-[#E10600] rotate-180' : 'bg-[#1C1C1C]'
                    }`}
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
                <div className={`accordion-content ${openIndex === i ? 'active' : ''}`}>
                  <p className="px-4 md:px-5 pb-4 md:pb-5 text-[#1C1C1C]/70 text-sm md:text-base leading-relaxed">
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