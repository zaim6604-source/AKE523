import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import useInView from '../hooks/useInView';

const faqs = [
  { q: 'What services does Innovative World offer?', a: 'We offer recruitment & placement, staffing solutions, career consultancy, document & application support, corporate services, training & development, client advisory, and manpower supply.' },
  { q: 'How does the recruitment process work?', a: 'It starts with a free consultation. We understand your needs, source the right candidates or opportunities, handle documentation and setup, and provide ongoing support.' },
  { q: 'Where is Innovative World located?', a: 'We are based in Nowshera, KPK, Pakistan. Our address is 2X6Q+52M, Mohalla Meetha Khel, Nowshera, 24100.' },
  { q: 'How can I get started?', a: 'Simply contact us via WhatsApp at 0333-5553256 or fill out the contact form on our website. We\'ll get back to you promptly.' },
  { q: 'What are the typical timelines?', a: 'Timelines vary based on the service. Recruitment and placement typically take 2-4 weeks, while other services may vary. We provide clear timelines during consultation.' },
  { q: 'Is there a consultation fee?', a: 'Your initial consultation is completely free. We believe in transparent communication and will provide a clear breakdown of any applicable fees before proceeding.' },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className={`border rounded-2xl mb-3 overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#D7263D]/30 bg-[#FFF0F3]' : 'border-gray-200 hover:border-[#D7263D]/20 bg-white'}`}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-6 py-5 text-base font-semibold text-left cursor-pointer transition-colors hover:text-[#D7263D]"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-sm md:text-base">{faq.q}</span>
        <FaChevronDown className={`text-xs text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#D7263D]' : ''}`} />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '300px' : '0', padding: isOpen ? '0 24px 20px' : '0 24px' }}
      >
        <p className="text-[#340710]/60 text-sm leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView();

  return (
    <section id="faqs" className="section-pad bg-[#FFF0F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="pill-badge bg-[#7768AE]/10 text-[#7768AE] mb-4">
            <FaQuestionCircle className="text-xs" /> FAQS
          </span>
          <h2 className="section-heading">
            Frequently Asked{' '}
            <span className="text-[#D7263D]">Questions</span>
          </h2>
          <p className="text-[#340710]/60 text-lg mt-3 max-w-2xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </div>
        <div ref={ref} className={`max-w-2xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
