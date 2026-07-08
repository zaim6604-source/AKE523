import { useState } from 'react'

const FAQS = [
  {
    q: 'What documents do I need for a work visa?',
    a: 'Typically you need a valid passport, passport-sized photographs, educational certificates, work experience letters, and a job offer letter from the employer. Our team will guide you through the exact requirements for your destination country.',
  },
  {
    q: 'How long does the visa processing take?',
    a: 'Processing times vary by country. For Gulf countries (Saudi Arabia, UAE, Qatar, Oman), it typically takes 2–4 weeks. For European countries, it may take 4–8 weeks. We aim for the fastest possible processing.',
  },
  {
    q: 'Is Al Rabaz International government licensed?',
    a: 'Yes, we are fully licensed by the Government of Pakistan. Our license number is 2300/LHR, issued by the Bureau of Immigration & Overseas Employment. You can verify our credentials at any time.',
  },
  {
    q: 'Which countries do you provide work visas for?',
    a: 'We cover Saudi Arabia, Qatar, Oman, UAE, Poland, Romania, Greece, South Korea, Croatia, and many more. Contact us for a specific country not listed.',
  },
  {
    q: 'Do you help with both skilled and unskilled jobs?',
    a: 'Absolutely. We place candidates for both skilled positions and unskilled/general labour roles (drivers, construction workers, factory workers, cleaners, etc.).',
  },
  {
    q: 'What are your service charges?',
    a: 'Our fees are competitive and transparent. We provide a clear breakdown of all charges before starting any process. Contact us for a free consultation and fee estimate.',
  },
]

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section pill */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
            <i className="fas fa-circle-question" />
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-4 mb-3">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-primary/10 overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-semibold text-ink text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <i
                  className={`fas fa-chevron-down text-primary text-sm transition-transform duration-300 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIdx === idx ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-4 text-ink/60 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}