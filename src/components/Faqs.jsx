import { useState } from 'react';
import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';

const FAQS = [
  {
    q: 'Is Ithmanzi Recruiting Agency government licensed?',
    a: 'Yes, absolutely. Ithmanzi Recruiting Agency is a fully government-licensed Overseas Employment Promoter (OEP) bearing License No. 2174/RWP, issued by the Government of Pakistan. We operate with full regulatory compliance and transparency.',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We recruit for Saudi Arabia, UAE, Qatar, Germany, Poland, Italy, Malaysia, South Korea, Oman, and other destinations. We continuously expand our network to include new countries and opportunities.',
  },
  {
    q: 'Where is your office located?',
    a: 'Our office is located at Office # 10, Al-Riaz Plaza, Attalian Shoes, Street Bank Road, Saddar, Rawalpindi, Punjab. We are easily accessible from all parts of Rawalpindi and Islamabad.',
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
  'border-[#FFD23F]',
  'border-[#00B4D8]',
  'border-[#FF4500]',
  'border-[#FF7F11]',
  'border-[#E63600]',
  'border-[#FFD23F]',
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1 });

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#FFF3E6] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="FAQS" index={2} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1200] mt-4 leading-tight">
            Got Questions?{' '}
            <span className="text-[#FF4500]">We've Got Answers</span>
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
                <span className="text-sm sm:text-base font-bold text-[#2B1200] pr-4">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full bg-[#FFF3E6] flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <i className="fas fa-chevron-down text-xs text-[#FF4500]" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-[#2B1200]/70 leading-relaxed border-t border-gray-100 pt-3">
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