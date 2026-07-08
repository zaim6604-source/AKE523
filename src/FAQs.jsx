import { useState } from 'react';
import { FAQS } from './constants';
import useInView from './useInView';

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <div className="border border-[#CE93D8]/20 rounded-xl overflow-hidden bg-white transition-all hover:shadow-md">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-all"
      >
        <span className="font-heading font-semibold text-sm md:text-base text-[#2A1033] pr-4">
          {faq.q}
        </span>
        <span className={`text-[#9C27B0] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
          <i className="fas fa-plus"></i>
        </span>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-5 pb-4 text-sm text-[#2A1033]/70 leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="faqs" className="py-16 md:py-24 bg-white">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-4">
          <span className="pill-badge">
            <i className="fas fa-circle-question text-[10px] mr-1.5"></i>
            FAQS
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#2A1033] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-[#2A1033]/60 max-w-2xl mx-auto mb-10">
          Everything you need to know about working with H.A. International.
        </p>

        <div
          className={`max-w-3xl mx-auto space-y-3 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}