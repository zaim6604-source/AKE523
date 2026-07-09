import { useState } from 'react';
import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';
import SafeImage from './SafeImage';

const TABS = ['Overview', 'Mission', 'Values'];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      text: 'Barkha International (Pvt) Ltd. stands as a premier government-licensed overseas employment promoter (OEP License 2312/RWP) operating from the heart of Islamabad\'s prestigious Blue Area. We specialize in connecting skilled and semi-skilled Pakistani professionals with rewarding career opportunities across the Gulf, Europe, and Asia.',
      facts: [
        { icon: 'fa-calendar', label: 'Founded', value: '2012' },
        { icon: 'fa-id-card', label: 'License No.', value: '2312 / RWP' },
        { icon: 'fa-location-dot', label: 'Head Office', value: 'Blue Area, Islamabad' },
        { icon: 'fa-globe', label: 'Global Reach', value: '9 Countries' },
        { icon: 'fa-briefcase', label: 'Placements', value: '5000+' },
        { icon: 'fa-shield', label: 'Certification', value: 'Govt. Licensed' },
      ],
    },
    {
      text: 'Our mission is to provide a transparent, ethical, and high-performance pathway for Pakistani workers to access vetted international employment opportunities. We believe in precision matching — aligning the right talent with the right employer for sustainable, mutually beneficial outcomes.',
      facts: [
        { icon: 'fa-bullseye', label: 'Focus', value: 'Ethical Recruitment' },
        { icon: 'fa-handshake', label: 'Approach', value: 'Transparent Process' },
        { icon: 'fa-chart-line', label: 'Goal', value: 'Sustainable Careers' },
        { icon: 'fa-scale-balanced', label: 'Standard', value: 'Fair Treatment' },
      ],
    },
    {
      text: 'Integrity, precision, and respect form the foundation of everything we do at Barkha International. We are committed to maintaining the highest standards of professional conduct, ensuring every candidate is treated with dignity, and every employer partnership is built on trust and verified credibility.',
      facts: [
        { icon: 'fa-gem', label: 'Integrity', value: 'Uncompromising' },
        { icon: 'fa-microscope', label: 'Precision', value: 'Vetted Placements' },
        { icon: 'fa-hand-holding-heart', label: 'Respect', value: 'Candidate First' },
        { icon: 'fa-link', label: 'Partnership', value: 'Trusted Network' },
      ],
    },
  ];

  const current = tabContent[activeTab];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <SectionBadge text="ABOUT US" color="bg-[#E10600]" />
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
            Precision Recruitment Since 2012
          </h2>
          <p className="text-[#1C1C1C]/60 mt-3 max-w-2xl mx-auto">
            Blue Area's trusted partner for international employment.
          </p>
        </FadeUp>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left - Photo */}
          <FadeUp className="w-full lg:w-1/2 lg:sticky lg:top-28">
            <div className="relative img-zoom rounded-2xl overflow-hidden">
              <SafeImage
                src="/images/office.jpg"
                alt="Barkha International office"
                className="w-full h-[350px] sm:h-[420px] object-cover rounded-2xl"
                type="office"
              />
              <div className="absolute -bottom-3 -right-3 bg-[#E10600] text-white font-extrabold text-sm px-5 py-2.5 rounded-full shadow-lg">
                License 2312/RWP
              </div>
            </div>
          </FadeUp>

          {/* Right - Content */}
          <FadeUp delay={2} className="w-full lg:w-1/2">
            {/* Tabs */}
            <div className="flex gap-1 mb-6 bg-[#1C1C1C]/5 rounded-xl p-1">
              {TABS.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 text-sm font-semibold py-2.5 px-4 rounded-lg transition-all ${
                    activeTab === i
                      ? 'bg-[#E10600] text-white shadow-md'
                      : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <p className="text-[#1C1C1C]/70 leading-relaxed mb-6">
              <strong className="text-[#1C1C1C]">Barkha International (Pvt) Ltd.</strong> is a
              premier government-licensed overseas employment promoter (OEP) operating from
              <strong className="text-[#1C1C1C]"> Office #102, 1st Floor, Royal Centre, Fazal-e-Haq Road, Blue Area, Islamabad</strong>.
              {activeTab === 0 ? (
                <> We specialize in connecting skilled and semi-skilled Pakistani professionals with
                rewarding career opportunities across the Gulf, Europe, and Asia.</>
              ) : activeTab === 1 ? (
                <> Our mission is to provide a transparent, ethical, and high-performance pathway
                for Pakistani workers to access vetted international employment opportunities.</>
              ) : (
                <> Integrity, precision, and respect form the foundation of everything we do at
                Barkha International, with every employer partnership built on trust and verified credibility.</>
              )}
            </p>

            {/* Fact sheet */}
            <div className="border-2 border-[#E10600]/15 rounded-2xl p-5 bg-white">
              <h3 className="font-bold text-[#E10600] text-sm mb-3 tracking-wider">
                <i className="fa-solid fa-receipt mr-2"></i>{activeTab === 0 ? 'QUICK FACTS' : activeTab === 1 ? 'MISSION FOCUS' : 'CORE VALUES'}
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {current.facts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <i className={`fa-solid ${fact.icon} text-[#E10600] mt-0.5`}></i>
                    <div>
                      <span className="text-[#1C1C1C]/50 text-xs">{fact.label}</span>
                      <p className="font-semibold text-[#1C1C1C] text-sm">{fact.value}</p>
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