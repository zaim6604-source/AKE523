import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { faqs } from '../data/jobs';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(i === openIndex ? null : i);

  return (
    <SectionWrapper id="faqs" badge="FAQS" badgeColor="highlight">
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-2 font-display">
        Got Questions?
      </h2>
      <p className="text-ink/60 mb-10 max-w-2xl">
        Everything you need to know about working with Zanib Recruiting Agency.
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`rounded-2xl overflow-hidden border-l-4 transition-all ${
              openIndex === i ? 'border-primary shadow-lg' : 'border-ink/10 shadow-md'
            } bg-white`}
          >
            <button
              className="w-full flex items-center justify-between p-5 text-left"
              onClick={() => toggle(i)}
            >
              <span className="font-bold text-ink pr-4">{faq.q}</span>
              <span className={`text-primary transition-transform flex-shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>
                <i className="fas fa-plus" />
              </span>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 text-ink/70 leading-relaxed text-sm border-t border-ink/5 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
