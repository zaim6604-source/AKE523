import FadeUp from '../components/FadeUp';
import SectionBadge from '../components/SectionBadge';
import MarqueeBar from '../components/MarqueeBar';
import CTABand from '../components/CTABand';

const STEPS = [
  {
    icon: 'fa-handshake',
    label: 'Register & Consult',
    desc: 'Visit our office or register online. Our consultants discuss your skills, experience, and career goals to match you with the right international opportunity.',
    color: 'bg-[#E10600]',
    time: 'Day 1',
  },
  {
    icon: 'fa-file-contract',
    label: 'Documentation & Visa',
    desc: 'Submit your documents for attestation and visa processing. Our team handles all paperwork, embassy submissions, and follows up until approval.',
    color: 'bg-[#FF4D4D]',
    time: 'Week 1–2',
  },
  {
    icon: 'fa-stethoscope',
    label: 'Medical & Trade Test',
    desc: 'Complete mandatory medical examinations and trade tests at approved centers. We coordinate all appointments and ensure your results are processed promptly.',
    color: 'bg-[#1C1C1C]',
    time: 'Week 2–3',
  },
  {
    icon: 'fa-check-circle',
    label: 'Employer Confirmation',
    desc: 'Receive your official job offer and employment contract. We review all terms with you to ensure fair compensation and working conditions before you sign.',
    color: 'bg-[#FFD500]',
    textColor: 'text-[#141414]',
    time: 'Week 3–4',
  },
  {
    icon: 'fa-plane-departure',
    label: 'Ticketing & Departure',
    desc: 'We book your flight, arrange airport transfer, and provide pre-departure orientation. You depart with complete confidence, knowing everything is taken care of.',
    color: 'bg-[#A30000]',
    time: 'Week 4–6',
  },
];

export default function Process() {
  return (
    <>
      <MarqueeBar />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <SectionBadge text="HOW IT WORKS" color="bg-[#E10600]" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141414] font-poppins">
              Your 5-Step Recruitment Lap
            </h1>
            <p className="text-[#444]/70 mt-3 max-w-2xl mx-auto font-inter">
              A streamlined process designed to get you from application to departure — fast.
            </p>
          </FadeUp>

          {/* Racing track */}
          <div className="relative">
            {/* Track line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-[#1C1C1C]/10">
              <div className="h-full checkered-bg" style={{ width: '100%', opacity: 0.3 }}></div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-center lg:gap-6 gap-8 relative">
              {STEPS.map((step, i) => (
                <FadeUp
                  key={i}
                  delay={(i % 5) + 1}
                  className="flex flex-col items-center lg:w-1/5 relative"
                >
                  {/* Step number ring */}
                  <div className="relative flex flex-col items-center">
                    <div className={`w-20 h-20 rounded-full ${step.color} shadow-xl flex items-center justify-center relative z-10 border-4 border-white`}>
                      <div className="text-white text-center">
                        <span className="text-xs font-bold block leading-none font-poppins">{i + 1}</span>
                        <i className={`fa-solid ${step.icon} text-lg`}></i>
                      </div>
                    </div>
                    {/* Timing badge */}
                    <span className="mt-2 bg-[#1C1C1C] text-white text-[10px] font-bold px-2.5 py-1 rounded-full font-inter">
                      {step.time}
                    </span>
                    {/* Connector line */}
                    {i < STEPS.length - 1 && (
                      <div className="hidden lg:block absolute top-[40px] left-[60%] w-[90%] h-0.5 border-t-2 border-dashed border-[#E10600]/30"></div>
                    )}
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-[#141414] text-sm font-bold font-poppins">{step.label}</p>
                    <p className="text-[#444]/60 text-xs mt-2 leading-relaxed font-inter max-w-[200px]">
                      {step.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}