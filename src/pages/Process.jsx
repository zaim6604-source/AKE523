import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { processSteps } from '../data/countries';

const stepIcons = [
  'fa-clipboard-list', 'fa-file-lines', 'fa-stethoscope',
  'fa-building-columns', 'fa-plane-departure',
];

export default function Process() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: '#006D77' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFDD00' }}>
              <i className="fa-solid fa-flag-checkered" />
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>How It Works</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              A straightforward five-step journey from your first enquiry to your departure abroad. We guide you at every stage.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 hidden md:block" style={{ backgroundColor: '#83C5BE' }} />

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, i) => (
              <FadeIn key={step.number} delay={Math.min(i + 1, 4)}>
                <div className="relative md:flex items-start gap-8 group">
                  <div className="hidden md:flex flex-col items-center shrink-0">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black shadow-lg transition-all duration-300 group-hover:scale-110 text-white" style={{ backgroundColor: '#006D77', fontFamily: "'Poppins', sans-serif" }}>
                      {step.number}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-0.5 h-12 mt-2" style={{ backgroundColor: '#83C5BE' }} />
                    )}
                  </div>

                  <div className="flex-1 bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border group-hover:-translate-y-1" style={{ borderColor: '#83C5BE30' }}>
                    <div className="flex items-start gap-5">
                      <div className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0 text-white" style={{ backgroundColor: '#006D77', fontFamily: "'Poppins', sans-serif" }}>
                        {step.number}
                      </div>
                      <div className="w-12 h-12 rounded-xl hidden sm:flex items-center justify-center shrink-0" style={{ backgroundColor: '#EDF6F9' }}>
                        <i className={`fas ${stepIcons[i]} text-xl`} style={{ color: '#006D77' }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: '#003844' }}>{step.title}</h3>
                        <p className="leading-relaxed" style={{ color: '#006D77' }}>{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: '#003844' }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Begin Your Journey Today
            </h2>
            <p className="text-lg mb-8 max-w-md mx-auto" style={{ color: '#83C5BE' }}>
              Take the first step. Contact Fowzan Traders and let us handle the rest.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/923006162506"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#E29578', color: 'white' }}
              >
                <i className="fab fa-whatsapp" /> Start Now
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold text-white border-2 border-white/40 transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <i className="fa-regular fa-paper-plane" /> Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
