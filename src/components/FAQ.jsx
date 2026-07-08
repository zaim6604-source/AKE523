import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const FAQS = [
  {
    q: 'What documents do I need to apply for overseas work?',
    a: 'You typically need a valid passport, CNIC, recent photographs, educational certificates, and any relevant professional certifications. Our team will guide you through the complete documentation checklist.',
  },
  {
    q: 'How long does the recruitment process take?',
    a: 'The timeline varies by destination and position, but typically ranges from 2 to 8 weeks. This includes document verification, employer matching, visa processing, and pre-departure preparations.',
  },
  {
    q: 'Is Hammad Recruiting Agency government licensed?',
    a: 'Yes, we are fully licensed by the Government of Pakistan under license number 2167/MLK. We operate transparently and follow all regulatory requirements.',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman, Kuwait, Germany, Poland, Croatia (Tourism), and Malaysia (Electronics). We are expanding to more destinations.',
  },
  {
    q: 'What are the fees for your services?',
    a: 'Our fees are transparent and competitive. We provide a clear breakdown during your initial consultation at our Tahir Plaza office. There are no hidden charges.',
  },
  {
    q: 'Do you provide training before departure?',
    a: 'Yes, we offer pre-departure orientation covering language basics, cultural awareness, workplace expectations, and travel guidelines to help you settle smoothly.',
  },
  {
    q: 'How can I contact your office?',
    a: 'Visit Office No. 308, Second Floor, Tahir Plaza, Batkhela. Call us at 0932-413201 or message us on WhatsApp at 0345-9691639.',
  },
  {
    q: 'Can I apply if I live outside Malakand?',
    a: 'Absolutely! We serve candidates from Swat, Dir, and across KPK. You can apply via WhatsApp or visit our Batkhela office for a consultation.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
              <i className="fas fa-question-circle" />
              FAQs
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-ink/60 max-w-2xl mx-auto">
              Everything you need to know about working with Hammad Recruiting Agency.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className={`rounded-xl border ${openIndex === i ? 'border-primary/30 bg-primary/[0.02]' : 'border-primary/10 bg-background'} transition-all`}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-sm sm:text-base text-ink pr-4">{faq.q}</span>
                  <i
                    className={`fas fa-chevron-down text-primary shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-4 pb-4 text-sm text-ink/60 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}