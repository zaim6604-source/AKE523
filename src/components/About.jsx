import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';
import SafeImage from './SafeImage';

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <SectionBadge text="ABOUT US" color="bg-[#7B2D8E]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D0A1E]">
            Trusted Gulf Recruitment Since Day One
          </h2>
          <p className="text-[#5C1A32]/70 mt-3 max-w-2xl mx-auto">
            Learn more about who we are and what drives us.
          </p>
        </FadeUp>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left - Photo */}
          <FadeUp className="w-full lg:w-1/2">
            <div className="relative img-zoom rounded-2xl overflow-hidden">
              <SafeImage
                src="/images/office.jpg"
                alt="Arabian Gulf International team office"
                className="w-full h-[350px] sm:h-[420px] object-cover rounded-2xl"
                type="office"
              />
              <div className="absolute -bottom-3 -right-3 bg-[#7B2D8E] text-white font-extrabold text-sm px-5 py-2.5 rounded-full shadow-lg">
                License 2175/RWP
              </div>
            </div>
          </FadeUp>

          {/* Right - Content */}
          <FadeUp delay={2} className="w-full lg:w-1/2">
            <p className="text-[#5C1A32]/80 leading-relaxed mb-4">
              <strong className="text-[#3D0A1E]">Arabian Gulf International</strong> is a
              premier government-licensed overseas employment promoter (OEP) operating from
              <strong className="text-[#3D0A1E]"> Office No. 51, 2nd Floor, Rehmat Centre, I-8 Markaz, Islamabad</strong>.
              We specialize in connecting skilled and semi-skilled Pakistani professionals with
              rewarding career opportunities across the Arabian Gulf region.
            </p>
            <p className="text-[#5C1A32]/80 leading-relaxed mb-8">
              With our deep understanding of Gulf labor markets and strong employer networks in
              UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain, we ensure a seamless and
              transparent recruitment process — from registration to departure. Our commitment
              to ethical practices and candidate welfare has made us a trusted name in the
              Islamabad capital region and beyond.
            </p>

            {/* Fact sheet */}
            <div className="border-2 border-[#E0115F]/20 rounded-2xl p-5 bg-[#FFF0F4]/50">
              <h3 className="font-bold text-[#E0115F] text-sm mb-3 tracking-wider">
                <i className="fa-solid fa-receipt mr-2"></i>QUICK FACTS
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  { icon: 'fa-calendar', label: 'Founded', value: '2018' },
                  { icon: 'fa-id-card', label: 'License No.', value: '2175 / RWP' },
                  { icon: 'fa-location-dot', label: 'Head Office', value: 'I-8 Markaz, Islamabad' },
                  { icon: 'fa-globe', label: 'Gulf Reach', value: '6 Countries' },
                  { icon: 'fa-briefcase', label: 'Placements', value: '4000+' },
                  { icon: 'fa-shield', label: 'Certification', value: 'Govt. Licensed' },
                ].map((fact, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <i className={`fa-solid ${fact.icon} text-[#E0115F] mt-0.5`}></i>
                    <div>
                      <span className="text-[#5C1A32]/60 text-xs">{fact.label}</span>
                      <p className="font-semibold text-[#3D0A1E] text-sm">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}