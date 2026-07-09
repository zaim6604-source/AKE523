import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const tabs = [
  { id: 'story', label: 'Our Story' },
  { id: 'mission', label: 'Mission & Vision' },
  { id: 'values', label: 'Our Values' },
];

const tabContent = {
  story: (
    <div>
      <p className="text-ink/70 mb-4 leading-relaxed">
        <strong className="text-primary">Zanib Recruiting Agency</strong>, based at 6th Road, Rawalpindi,
        is a government-licensed Overseas Employment Promoter (<strong>License No. 2315/RWP</strong>)
        dedicated to connecting Pakistan's talented workforce with premier international employers.
      </p>
      <p className="text-ink/70 leading-relaxed">
        From our office at Al-Mustafa Plaza, we serve candidates across Rawalpindi, Islamabad, and
        beyond. With over <strong className="text-primary">5,000 successful placements</strong>
        across more than <strong className="text-accent">9 countries</strong>, we are your trusted
        partner in overseas employment.
      </p>
    </div>
  ),
  mission: (
    <div>
      <p className="text-ink/70 mb-4 leading-relaxed">
        Our mission is to provide <strong className="text-primary">ethical, transparent, and complete</strong> recruitment
        services that open doors to life-changing career opportunities for Pakistani workers.
      </p>
      <p className="text-ink/70 leading-relaxed">
        We envision a future where every Pakistani worker can access dignified, well-paying
        employment abroad — with full legal protection, fair contracts, and comprehensive support
        from registration to departure and beyond.
      </p>
    </div>
  ),
  values: (
    <div>
      <ul className="space-y-3 text-ink/70">
        {[
          { icon: 'fa-shield-alt', label: 'Integrity', desc: 'Honest, transparent dealings with no hidden fees' },
          { icon: 'fa-handshake', label: 'Trust', desc: 'Building long-term relationships with candidates and employers' },
          { icon: 'fa-star', label: 'Excellence', desc: 'End-to-end service with the highest professional standards' },
          { icon: 'fa-heart', label: 'Care', desc: 'Genuine concern for every candidate\'s wellbeing and success' },
        ].map((v) => (
          <li key={v.label} className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm flex-shrink-0 mt-0.5">
              <i className={`fas ${v.icon}`} />
            </span>
            <div>
              <span className="font-bold text-ink">{v.label}</span>
              <p className="text-sm">{v.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ),
};

export default function About() {
  const [activeTab, setActiveTab] = useState('story');
  const [imgError, setImgError] = useState(false);

  return (
    <SectionWrapper id="about" badge="ABOUT US" badgeColor="primary">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        <div className="relative w-full max-w-md mx-auto lg:mx-0 flex-shrink-0">
          <div className="relative rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl group">
            <img
              src={imgError ? 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=500&h=600&fit=crop' : 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=600&fit=crop'}
              alt="Zanib Recruiting Agency team"
              className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImgError(true)}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Govt. Licensed 2315/RWP
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 font-display">
            Who We Are
          </h2>

          <div className="flex gap-1 mb-6 bg-ink/5 rounded-xl p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-ink/60 hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="min-h-[180px]">
            {tabContent[activeTab]}
          </div>

          <a
            href="https://wa.me/923335020040"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all"
          >
            <i className="fab fa-whatsapp" /> Chat with Us
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
