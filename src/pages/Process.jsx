import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';

const STEPS = [
  { number: 1, icon: 'fa-handshake', title: 'Registration & Counseling', desc: 'Reach out to us via WhatsApp or visit our office at Alamgir Chowk, Batagram. We\'ll discuss your goals, experience, and the best opportunities for you.', color: '#E10600' },
  { number: 2, icon: 'fa-file-contract', title: 'Document Submission', desc: 'Our team helps you prepare and submit all required documents — from passport copies to educational certificates and experience letters.', color: '#FF4D4D' },
  { number: 3, icon: 'fa-stethoscope', title: 'Medical & Visa Processing', desc: 'We coordinate your medical examinations and handle the complete visa application process to meet destination country requirements.', color: '#1C1C1C' },
  { number: 4, icon: 'fa-check-circle', title: 'Final Confirmation', desc: 'Once an employer confirms your role, we finalize the contract, review terms with you, and prepare your employment agreement.', color: '#A30000' },
  { number: 5, icon: 'fa-plane-departure', title: 'Departure', desc: 'We handle flight bookings, travel coordination, and pre-departure orientation so you arrive ready to succeed in your new role.', color: '#FFD500' },
];

export default function Process() {
  return (
    <>
      <section className="relative py-20 lg:py-28 bg-[#1C1C1C] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="inline-block bg-[#FFD500]/20 text-[#FFD500] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
              <i className="fa-solid fa-certificate mr-1.5"></i>OUR PROCESS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[Poppins] mb-4">
              Your Journey, Step by Step
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              From registration to departure — follow our streamlined 5-step process to your career abroad.
            </p>
          </FadeUp>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD500] via-[#E10600] to-transparent"></div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {STEPS.map((step, i) => (
              <FadeUp key={i} delay={(i % 5) + 1}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-start gap-6 group">
                  {/* Number + Icon */}
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white transition-all duration-300 group-hover:scale-110 shadow-lg"
                      style={{ backgroundColor: step.color }}>
                      <i className={`fa-solid ${step.icon}`}></i>
                    </div>
                    <span className="text-3xl font-black text-[#E10600] mt-2 font-[Poppins]" style={{ color: step.color === '#FFD500' ? '#1C1C1C' : '#E10600' }}>
                      {String(step.number).padStart(2, '0')}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#141414] mb-2 font-[Poppins]">{step.title}</h3>
                    <p className="text-[#141414]/60 leading-relaxed">{step.desc}</p>
                  </div>
                  {/* Arrow */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block self-center text-2xl text-[#E10600]/30">
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>

          {/* CTA */}
          <FadeUp className="text-center mt-12">
            <div className="bg-[#1C1C1C] rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[Poppins]">
                Start Your Journey Today
              </h3>
              <p className="text-white/60 mb-6 max-w-xl mx-auto">
                One call to Pak. Arsalan Corporation is all it takes. Let's get you on the road to a successful career abroad.
              </p>
              <a href="https://wa.me/923005096511" target="_blank" rel="noopener noreferrer"
                className="bg-[#FFD500] text-[#141414] font-bold px-8 py-4 rounded-full hover:bg-white transition-all shadow-lg inline-block">
                <i className="fa-brands fa-whatsapp mr-2"></i>Apply via WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}