import { useState } from 'react';
import useInView from '../hooks/useInView';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What HR services does HR-Pro offer?',
    a: 'We provide a full range of HR services including staff & payroll outsourcing, recruitment & executive search, blended learning & training, HR management solutions, organization development, talent assessment, and HR advisory & compliance. Our consulting arm, Think HR, handles organization design, innovation, change leadership, leadership development, and executive coaching.',
  },
  {
    q: 'What is the difference between your outsourcing and consulting services?',
    a: 'Our outsourcing services (staffing, payroll, recruitment) handle day-to-day operational HR needs for your organization. Think HR, our consulting arm, focuses on strategic advisory — organization design, innovation, change management, leadership development, and executive coaching. Many clients engage both for comprehensive HR support.',
  },
  {
    q: 'What does the Think HR consulting practice cover?',
    a: 'Think HR is our dedicated strategic consulting practice covering organization design & restructuring, innovation management, leading change, leadership development, executive coaching, and culture & transformation. It\'s designed for organizations seeking high-impact strategic HR advisory.',
  },
  {
    q: 'What industries and sectors do you serve?',
    a: 'We serve a wide range of industries including Banking & Finance, IT & Tech, Manufacturing, FMCG & Retail, Healthcare, Telecom, Energy, and Services. Our solutions are tailored to the specific needs, regulations, and culture of each sector.',
  },
  {
    q: 'How does your engagement model work?',
    a: 'We begin with a discovery & diagnostics phase to understand your needs, followed by strategy & solution design. After you approve the plan, we implement alongside your team, provide enablement & training, and offer continuous review & support. We offer both project-based and ongoing retainer engagements.',
  },
  {
    q: 'How can I get a free consultation?',
    a: 'You can reach us via WhatsApp at 0312-1124692, email us at info@hr-pro.co, or fill out the contact form on our website. We\'ll schedule a no-obligation consultation to understand your HR needs and discuss how we can help.',
  },
];

export default function FAQ() {
  const [ref, inView] = useInView();
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <>
      <style>{`
        .faq-section { background:#E6F3FB; padding:96px 24px; }
        .faq-inner { max-width:800px; margin:0 auto; }
        .faq-item { background:#fff; border-radius:16px; border:1px solid rgba(0,107,166,.06); margin-bottom:12px; overflow:hidden; transition:box-shadow .25s; }
        .faq-item:hover { box-shadow:0 4px 20px rgba(0,107,166,.04); }
        .faq-question { width:100%; display:flex; align-items:center; justify-content:space-between; gap:16px; padding:20px 24px; background:none; border:none; cursor:pointer; text-align:left; font-family:"Plus Jakarta Sans",sans-serif; font-weight:700; font-size:15px; color:#06283D; transition:color .2s; }
        .faq-question:hover { color:#006BA6; }
        .faq-arrow { width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#E6F3FB;flex-shrink:0;transition:transform .3s,background .3s;color:#006BA6; }
        .faq-arrow.open { transform:rotate(180deg); background:#006BA6; color:#fff; }
        .faq-answer { padding:0 24px 20px; font-size:14px; line-height:1.75; color:#555; }
      `}</style>

      <section id="faqs" className="faq-section" ref={ref}>
        <div className="faq-inner">
          <div style={{ textAlign: 'center', marginBottom: 48 }} className={`reveal${inView ? ' show' : ''}`}>
            <div className="pill-badge" style={{ margin: '0 auto 18px' }}>
              <span className="pill-dot" />
              FAQS
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,42px)', color: '#06283D', marginBottom: 14 }}>
              Frequently Asked <span style={{ color: '#006BA6' }}>Questions</span>
            </h2>
            <p style={{ color: '#555', fontSize: 15, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Everything you need to know about working with HR-Pro.
            </p>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item reveal${inView ? ' show' : ''}`}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span>{faq.q}</span>
                  <span className={`faq-arrow ${openIdx === i ? 'open' : ''}`}>
                    <ChevronDown size={14} strokeWidth={3} />
                  </span>
                </button>
                <div style={{
                  maxHeight: openIdx === i ? 300 : 0,
                  overflow: 'hidden',
                  transition: 'max-height .35s ease',
                }}>
                  <div className="faq-answer">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}