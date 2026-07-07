import { useState } from 'react';
import useInView from '../hooks/useInView';

const faqs = [
  { q: 'What HR services does ZB HR Services offer?', a: 'We offer recruitment & talent acquisition, executive search, temporary staffing, payroll management, HR consulting, training & development, onboarding & compliance, and outsourced HR services.' },
  { q: 'Which industries do you serve?', a: 'We serve IT & Software, Banking & Finance, Healthcare, Manufacturing, Retail & E-commerce, Hospitality, Construction, Education, Telecom, Logistics, and more.' },
  { q: 'How does the hiring process work?', a: 'It starts with a free consultation to understand your needs, followed by sourcing, screening, interviews, shortlisting, offer management, and onboarding support.' },
  { q: 'What is the typical turnaround time for hiring?', a: 'Turnaround varies by role complexity. For most positions, we deliver shortlisted candidates within 1-2 weeks. Executive searches may take 3-4 weeks.' },
  { q: 'Can job seekers register with ZB HR Services?', a: 'Absolutely! We maintain a talent pool of professionals across industries. Reach out to us on WhatsApp and we\'ll help match you with the right opportunities.' },
  { q: 'Is the initial consultation free?', a: 'Yes, your first consultation is completely free with no obligation. We believe in building relationships based on trust and value.' },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className={`border rounded-2xl mb-3 overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary/30 bg-primary/[0.02]' : 'border-gray-200 hover:border-primary/20 bg-white'}`}>
      <button onClick={onClick} className="w-full flex justify-between items-center px-6 py-5 text-base font-semibold text-left cursor-pointer transition-colors hover:text-primary" aria-expanded={isOpen}>
        <span className="pr-4">{faq.q}</span>
        <i className={`fas fa-chevron-down text-sm text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
      </button>
      <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: isOpen ? '300px' : '0', padding: isOpen ? '0 24px 20px' : '0 24px' }}>
        <p className="text-ink/60 text-sm leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView();

  return (
    <section id="faqs" className="section-pad bg-background overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-question-circle text-primary/70 text-xs" /> FAQS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading">Frequently Asked Questions</h2>
          <p className="text-ink/60 text-lg mt-3 max-w-2xl mx-auto">Everything you need to know about working with us.</p>
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
