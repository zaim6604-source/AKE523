import { useState } from 'react';
import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';

const FAQS = [
  {
    q: 'Is M. G. Traders government licensed?',
    a: 'Yes, absolutely. M. G. Traders is a fully government-licensed Overseas Employment Promoter (OEP) bearing License No. 2264/RWP, issued by the Government of Pakistan. We operate with full regulatory compliance and transparency.',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman, Germany, Poland, Greece, Malaysia, and other destinations. We continuously expand our network to include new countries and opportunities.',
  },
  {
    q: 'Where is your office located?',
    a: 'Our office is located at Office No. 16, 2nd Floor, Rose Arcade, Rehmanabad Chowk, Murree Road, Rawalpindi, Punjab. We are easily accessible from all parts of Rawalpindi and Islamabad.',
  },
  {
    q: 'What documents are required to register?',
    a: 'You typically need your CNIC (original & copy), passport (valid for at least 2 years), passport-sized photographs, educational certificates, and any relevant experience letters. Our team will guide you through the complete checklist.',
  },
  {
    q: 'How long does visa processing take?',
    a: 'Processing times vary by country and visa type. Typically, Gulf country visas take 2–6 weeks, while European visas may take 2–4 months. We keep you updated at every stage of the process.',
  },
  {
    q: 'Are there any registration fees?',
    a: 'We offer an initial free consultation to discuss your options. Service fees are fully transparent and communicated upfront — no hidden charges. We believe in honest, upfront dealings with every candidate.',
  },
];

const ACCENT_COLORS = [
  'border-[#1B4965]',
  'border-[#5FA8D3]',
  'border-[#FF6B35]',
  'border-[#0B3954]',
  'border-[#C9CCD5]',
  'border-[#1B4965]',
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1 });

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#F2F6F9] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="FAQS" index={2} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2436] mt-4 leading-tight">
            Got Questions?{' '}
            <span className="text-[#1B4965]">We've Got Answers</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${ACCENT_COLORS[i % ACCENT_COLORS.length]} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
              >
                <span className="text-sm sm:text-base font-bold text-[#0B2436] pr-4">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full bg-[#F2F6F9] flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <i className="fas fa-chevron-down text-xs text-[#FF6B35]" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-[#0B2436]/70 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
