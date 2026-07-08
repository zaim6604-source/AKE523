import FadeUp from '../components/FadeUp';
import SectionBadge from '../components/SectionBadge';
import SafeImage from '../components/SafeImage';
import MarqueeBar from '../components/MarqueeBar';

export default function About() {
  return (
    <>
      <MarqueeBar />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <SectionBadge text="ABOUT US" color="bg-[#E10600]" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141414] font-poppins">
              Your Trusted Manpower Consultancy
            </h1>
            <p className="text-[#444]/70 mt-3 max-w-2xl mx-auto font-inter">
              Licensed by the Government of Pakistan — License No. 2263/RWP
            </p>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <FadeUp className="w-full lg:w-1/2">
              <div className="relative img-zoom rounded-2xl overflow-hidden shadow-xl">
                <SafeImage
                  src="/images/office.jpg"
                  alt="Gul Shahzad Corporation office"
                  className="w-full h-[350px] sm:h-[420px] object-cover rounded-2xl"
                  type="office"
                />
                <div className="absolute -bottom-3 -right-3 bg-[#E10600] text-white font-extrabold text-sm px-5 py-2.5 rounded-full shadow-lg">
                  License 2263/RWP
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={2} className="w-full lg:w-1/2">
              <p className="text-[#444]/80 leading-relaxed mb-4 font-inter">
                <strong className="text-[#141414] font-poppins">Gul Shahzad Corporation & Manpower Consultants</strong> is a
                premier government-licensed overseas employment promoter (OEP) operating from
                <strong className="text-[#141414] font-poppins"> Office No. 2, B-214, Basement, Al Fateh Plaza, Chandni Chowk, Satellite Town, Rawalpindi, Punjab</strong>.
                We specialize in connecting skilled and semi-skilled professionals with rewarding career opportunities worldwide.
              </p>
              <p className="text-[#444]/80 leading-relaxed mb-4 font-inter">
                With our deep understanding of global labor markets and strong employer networks across
                the Middle East, Europe, and Asia, we ensure a seamless and transparent recruitment
                process — from registration to departure. Our commitment to ethical practices and
                candidate welfare has made us a trusted name in the Rawalpindi/Islamabad region.
              </p>
              <p className="text-[#444]/80 leading-relaxed mb-8 font-inter">
                Led by industry veterans with decades of combined experience in manpower export,
                we bring consulting-grade rigor to every placement. Our approach is built on speed,
                transparency, and results — delivering the right talent to the right opportunity,
                every time.
              </p>

              <div className="border-2 border-[#E10600]/20 rounded-2xl p-5 bg-white/80">
                <h3 className="font-bold text-[#E10600] text-sm mb-3 tracking-wider font-poppins">
                  <i className="fa-solid fa-receipt mr-2"></i>QUICK FACTS
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { icon: 'fa-calendar', label: 'Founded', value: '2005' },
                    { icon: 'fa-id-card', label: 'License No.', value: '2263 / RWP' },
                    { icon: 'fa-location-dot', label: 'Head Office', value: 'Satellite Town, Rawalpindi' },
                    { icon: 'fa-globe', label: 'Global Reach', value: '9+ Countries' },
                    { icon: 'fa-briefcase', label: 'Placements', value: '5000+' },
                    { icon: 'fa-shield', label: 'Certification', value: 'Govt. Licensed' },
                  ].map((fact, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <i className={`fa-solid ${fact.icon} text-[#E10600] mt-0.5`}></i>
                      <div>
                        <span className="text-[#444]/60 text-xs font-inter">{fact.label}</span>
                        <p className="font-semibold text-[#141414] text-sm font-poppins">{fact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}