import { useState } from 'react';
import FadeIn from '../components/FadeIn';

const whyUs = [
  { icon: 'fa-shield-halved', title: 'Licensed & Registered', desc: 'Fully authorized overseas employment promoter with verified credentials. License 2309/SKT.' },
  { icon: 'fa-handshake', title: 'Global Specialists', desc: 'Expertise across Gulf, European, and Asian markets — we know the process inside out.' },
  { icon: 'fa-globe', title: 'Established Network', desc: 'Trusted partnerships with verified employers across Saudi Arabia, UAE, Europe, and Malaysia.' },
  { icon: 'fa-clock', title: 'Timely Processing', desc: 'Efficient visa, documentation, and travel coordination to get you deployed faster.' },
  { icon: 'fa-star', title: 'Proven Track Record', desc: 'Thousands of successful placements with satisfied workers and employers since 2010.' },
  { icon: 'fa-user-shield', title: 'Worker Welfare First', desc: 'Commitment to fair contracts, safe working conditions, and complete transparency.' },
];

const trustChips = [
  'Government Licensed 2309/SKT',
  '100% Transparent',
  'No Hidden Fees',
  'Verified Global Employers',
  'Safe & Legal Process',
  'Community Trusted',
  'Daska Based',
  '15+ Years Experience',
];

const tabs = [
  { id: 'mission', label: 'Our Mission', icon: 'fa-bullseye', text: 'To connect the skilled workforce of Pakistan with legitimate overseas employment opportunities across the globe, ensuring dignity, fairness, and success for every worker we place.' },
  { id: 'vision', label: 'Our Vision', icon: 'fa-eye', text: 'To be the most trusted overseas employment bridge between Pakistan and the world, transforming lives through legitimate international careers.' },
  { id: 'values', label: 'Our Values', icon: 'fa-heart', text: 'Integrity, transparency, community commitment, and a relentless focus on worker welfare and successful outcomes.' },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: '#006D77' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFDD00' }}>
              <i className="fa-solid fa-info-circle" />
              About Fowzan Traders
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>About Us</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Your trusted partner in global employment from Daska, Sialkot. Licensed, transparent, and driven by results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#003844', fontFamily: "'Poppins', sans-serif" }}>Our Story</h2>
              <div className="w-16 h-1 mt-4 mb-6" style={{ backgroundColor: '#E29578' }} />
              <p className="leading-relaxed mb-4" style={{ color: '#006D77' }}>
                Fowzan Traders — Fowzan Global Employment Services is a government-licensed overseas employment promoter that has been providing skilled and semi-skilled manpower to countries across the Gulf, Europe, and Asia since 2010.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#006D77' }}>
                Based at Circular Road, Daska, Sialkot, Punjab, we have built a reputation for reliability, transparency, and successful placements across Saudi Arabia, UAE, Qatar, Oman, Germany, Poland, Romania, Greece, and Malaysia.
              </p>
              <p className="leading-relaxed" style={{ color: '#006D77' }}>
                Our team brings decades of combined experience in international recruitment, visa processing, and manpower placement. We are fully licensed under the Government of Pakistan (License No. 2309/SKT) and operate in full compliance with overseas employment regulations.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={1}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&q=80"
                alt="Fowzan Traders office"
                className="w-full h-80 object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Band */}
      <section style={{ backgroundColor: '#006D77' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5000+', label: 'Workers Placed' },
              { value: '9', label: 'Global Countries' },
              { value: '15+', label: 'Years Experience' },
              { value: '2309/SKT', label: 'License' },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 1}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {s.value}
                  </div>
                  <div className="text-sm sm:text-base font-medium" style={{ color: '#FFDD00' }}>
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#EDF6F9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id ? 'text-white shadow-md' : 'text-[#006D77] bg-white hover:bg-[#83C5BE]/20'
                }`}
                style={{ backgroundColor: activeTab === tab.id ? '#006D77' : undefined }}
              >
                <i className={`fas ${tab.icon} mr-2`} />
                {tab.label}
              </button>
            ))}
          </div>

          <FadeIn key={activeTab}>
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border text-center max-w-2xl mx-auto" style={{ borderColor: '#83C5BE30' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: '#006D7710' }}>
                <i className={`fas ${tabs.find(t => t.id === activeTab).icon} text-2xl`} style={{ color: '#006D77' }} />
              </div>
              <h3 className="font-bold text-xl mb-4" style={{ color: '#003844' }}>{tabs.find(t => t.id === activeTab).label}</h3>
              <p className="leading-relaxed" style={{ color: '#006D77' }}>{tabs.find(t => t.id === activeTab).text}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: '#003844', fontFamily: "'Poppins', sans-serif" }}>
            Why Choose Fowzan Traders?
          </h2>
          <p className="mt-3 text-center max-w-xl mx-auto" style={{ color: '#006D77' }}>
            What sets us apart in the overseas employment industry.
          </p>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, i) => (
            <FadeIn key={item.title} delay={Math.min(i + 1, 6)}>
              <div className="flex gap-4 p-5 rounded-xl bg-white border shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: '#83C5BE30' }}>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#006D7710' }}>
                  <i className={`fas ${item.icon}`} style={{ color: '#006D77' }} />
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: '#003844' }}>{item.title}</h3>
                  <p className="text-sm mt-1" style={{ color: '#006D77' }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Trust Chips */}
      <section className="py-12" style={{ backgroundColor: '#003844' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h3 className="text-xl font-bold text-center mb-6 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Trust & Credentials</h3>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {trustChips.map((chip, i) => (
              <FadeIn key={chip} delay={Math.min(i + 1, 4)}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white' }}>
                  <i className="fas fa-check-circle" style={{ color: '#FFDD00' }} />
                  {chip}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
