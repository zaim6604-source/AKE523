import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'What is Awaz e Insan?', a: 'Awaz e Insan ("Voice of Humanity") is a social welfare community organization founded by Malik Yousaf Khan, based in Larama, Peshawar. We serve communities through welfare, relief, education, health, and advocacy programs.' },
  { q: 'How can I donate?', a: 'You can donate by contacting us via WhatsApp at 0315-9942780. We accept financial donations, food supplies, clothing, and other essentials. Every contribution, big or small, makes a difference.' },
  { q: 'How can I volunteer?', a: 'We welcome volunteers! Reach out to us on WhatsApp at 0315-9942780 or visit our community office in Larama, Peshawar. Tell us your skills and availability, and we\'ll find the right opportunity for you.' },
  { q: 'How can I request help?', a: 'If you or someone you know needs support, contact us on WhatsApp at 0315-9942780 or visit our office. We assist with food, medical care, education support, and emergency relief based on need and available resources.' },
  { q: 'Where do you work?', a: 'We are based in Larama, Peshawar, KPK, Pakistan. Our programs serve the local community including Hazrat Jan Colony, Charsadda Road, and surrounding areas of Peshawar.' },
  { q: 'How are donations used?', a: 'Donations are used directly for our programs: food distribution, health camps, education support, emergency relief, and community awareness. We are committed to transparency and ensuring every rupee reaches those in need.' },
];

export default function FAQ() {
  const ref = useRef(null);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faqs" className="bg-background py-20 px-6" ref={ref}>
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10 reveal">
          <div className="pill-badge mx-auto mb-[18px]">
            <span className="pill-dot" />
            FAQS
          </div>
          <h2 className="font-heading font-black text-[clamp(24px,3vw,36px)] text-ink mb-2">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-q ${open === i ? 'open' : ''} reveal`} style={{ transitionDelay: `${i * 0.06}s` }}>
              <button className="flex items-center justify-between w-full bg-transparent border-none cursor-pointer font-semibold text-[15px] text-ink text-left font-body transition-colors duration-200 hover:text-primary p-0"
                onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
                <ChevronDown size={18} className={`shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-primary' : 'text-secondary'}`} />
              </button>
              <div className="overflow-hidden transition-all duration-350"
                style={{
                  maxHeight: open === i ? 300 : 0,
                  padding: open === i ? '0 0 18px 0' : '0',
                }}>
                <p className="text-sm text-[#555] leading-relaxed m-0">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}