import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FaChevronDown } from 'react-icons/fa';

const FAQS = [
  { q: 'Which trades do you offer training and testing for?', a: 'We cover 12+ trades including Welder (3G/6G), Electrician, Plumber, Mason, Steel Fixer, Shuttering Carpenter, AC/HVAC Technician, Heavy & Light Driver, Auto Mechanic, Pipe Fitter, Painter, and Duct Man.' },
  { q: 'What is the difference between training and trade testing?', a: 'Training is hands-on skill development where you learn from instructors. Trade testing is a practical assessment of your existing skills to certify your competency level.' },
  { q: 'How long does a typical training course or test take?', a: 'Training courses vary from 2 weeks to 3 months depending on the trade. Trade tests are typically completed in 1-2 days for a single skill assessment.' },
  { q: 'Is your certificate recognised by employers?', a: 'Yes, our trade test certificates are trusted by local employers and overseas recruitment agencies. Many workers use our certificates to support their job applications abroad.' },
  { q: 'Where is New Trademan located?', a: 'We are located at Faram Stop, Baghdada–Par Hoti Rd, Sikandari Hoti, Mardan, 23200, KPK. You can find us on Google Maps for directions.' },
  { q: 'What documents do I need to bring for a trade test?', a: 'You should bring your CNIC or any valid ID. For training, we provide all necessary equipment and safety gear. Previous trade experience certificates are helpful but not required.' },
  { q: 'How much do training and trade testing cost?', a: 'Fees vary by trade and the type of service (training vs. testing only). Contact us via WhatsApp or phone for accurate pricing and any ongoing offers.' },
];

export default function FAQ() {
  useReveal('.faq-reveal');
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faqs" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#fff' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 faq-reveal reveal">
          <span className="pill-badge">FAQS</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#1A1423' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#4B4453' }}>
            Everything you need to know about our training and trade testing services.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="faq-reveal reveal rounded-xl overflow-hidden transition-all duration-300"
              style={{ background: '#FFF8E0', border: '1px solid rgba(255,32,110,0.08)' }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left border-none cursor-pointer bg-transparent"
              >
                <span className="font-display font-bold text-sm md:text-base pr-4" style={{ color: '#1A1423' }}>{faq.q}</span>
                <FaChevronDown
                  size={14}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{ color: '#FF206E', transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0)' }}
                />
              </button>
              {openIdx === i && (
                <div className="px-4 md:px-5 pb-4 md:pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#4B4453' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
