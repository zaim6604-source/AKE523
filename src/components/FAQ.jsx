import { useState } from 'react';
import useInView from '../hooks/useInView';

const faqs = [
  {
    q: 'What HR services does M & L Consultants offer?',
    a: 'We offer a comprehensive range of HR services including strategic HR consulting, recruitment & staffing, payroll & benefits management, HR policy & compliance, training & development, performance management, organization development, and outsourced HR (HR-as-a-Service).',
  },
  {
    q: 'How does an HR engagement typically work?',
    a: 'We start with a free consultation to understand your needs, followed by an HR audit and planning phase. We then design tailored solutions, implement them alongside your team, and provide ongoing support and periodic reviews to ensure lasting results.',
  },
  {
    q: 'Which industries do you serve?',
    a: 'We serve a wide range of industries including technology, healthcare, logistics, manufacturing, construction, services, and non-profits. Our solutions are tailored to the specific needs of each sector.',
  },
  {
    q: 'What is the typical timeline for an HR project?',
    a: 'Timelines vary based on the scope and complexity of the engagement. A focused policy development project may take 2-4 weeks, while a full HR transformation could span 3-6 months. We provide clear timelines during our initial consultation.',
  },
  {
    q: 'Do you work with job seekers or only businesses?',
    a: 'We primarily partner with organizations to build stronger HR practices. However, professionals seeking career guidance, skills development, or job placement support can also reach out to us for consultation.',
  },
  {
    q: 'Is there a fee for the initial consultation?',
    a: 'No, the initial consultation is completely free. We discuss your needs, explain our approach, and provide a clear proposal with transparent pricing before any work begins.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, visible] = useInView(0.1);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const borderColors = ['#FF6B35', '#5FA8D3', '#1B4965', '#FF6B35', '#5FA8D3', '#0B3954'];

  return (
    <section id="faqs" className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,60 720,40 C960,20 1200,60 1440,40 L1440,60 L0,60 Z" fill="#C9CCD5" />
        </svg>
      </div>

      <div style={{ backgroundColor: '#C9CCD5' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Pill Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider"
              style={{ backgroundColor: '#1B4965', color: 'white' }}>
              FAQS
            </span>
          </div>

          <p className="text-center text-base sm:text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#4A5C6B' }}>
            Quick answers to common questions about our HR consulting services.
          </p>

          <div ref={ref} className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-${(i % 3) + 1} rounded-xl overflow-hidden shadow-sm transition-all duration-300`}
                style={{
                  backgroundColor: 'white',
                  borderLeft: `4px solid ${borderColors[i]}`,
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer"
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                >
                  <span className="text-sm sm:text-base font-semibold pr-4" style={{ color: '#0B2436' }}>
                    {faq.q}
                  </span>
                  <i
                    className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}
                    style={{ color: '#FF6B35' }}
                  />
                </button>
                <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                  <div>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                      <p className="text-sm sm:text-base leading-relaxed m-0" style={{ color: '#4A5C6B' }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}