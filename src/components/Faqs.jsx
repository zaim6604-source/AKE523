import { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    q: 'What areas of law does your practice cover?',
    a: 'Our practice encompasses Constitutional & Public Interest Litigation, Civil Litigation, Corporate & Commercial Law, Banking & Finance, Regulatory & Administrative Matters, Media & Telecom Law, Property & Land Disputes, and Appellate practice before the High Courts and Supreme Court of Pakistan.',
  },
  {
    q: 'Which courts do you appear before?',
    a: 'We appear before all High Courts of Pakistan and the Supreme Court of Pakistan, as well as various tribunals, regulatory authorities, and quasi-judicial forums.',
  },
  {
    q: 'How can I book a consultation?',
    a: 'You can book a consultation by clicking the "Book Consultation" button or "Chat on WhatsApp" button anywhere on this site. You may also reach us directly on WhatsApp at 0333-5107178.',
  },
  {
    q: 'Where are your chambers located?',
    a: 'Our chambers are located at Chamber No. 7, Ashraf Gujjar Law Associates, Muslim Block, Johar Rd, near Bar Room / Tehsildar Office, F-8 Markaz, Islamabad.',
  },
  {
    q: 'What is the consultation process?',
    a: 'The process includes: 1) Initial contact and brief, 2) Case review and assessment, 3) Formulation of legal strategy, 4) Representation and filing, and 5) Resolution and follow-up. Each matter receives personal attention from Mr. Gujjar.',
  },
  {
    q: 'Is my information kept confidential?',
    a: 'Absolutely. All client communications, case details, and personal information are treated with the strictest confidentiality. Our ethical obligations as advocates require the highest standards of client privacy.',
  },
];

export default function Faqs() {
  const ref = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faqs" className="py-24 relative overflow-hidden bg-white" ref={ref}>
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <span className="section-pill">FAQS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#0B2545]">
            Frequently Asked Questions
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="reveal flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}
                className="rounded-xl overflow-hidden bg-white transition-all"
                style={{ border: `1px solid ${isOpen ? 'rgba(201,162,39,.3)' : 'rgba(11,37,69,.08)'}` }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold transition-all"
                  style={{ color: isOpen ? '#0B2545' : '#1B2A3E' }}>
                  <span className="pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs transition-all duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    style={{ color: 'var(--color-accent)' }} />
                </button>
                <div className={`px-6 transition-all duration-300 overflow-hidden ${isOpen ? 'pb-5 max-h-96' : 'max-h-0 pb-0'}`}>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}