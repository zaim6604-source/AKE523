import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';

const trustChips = [
  { icon: 'fa-certificate', label: 'Govt. Licensed OEP 2266/LHR', color: 'bg-primary' },
  { icon: 'fa-building', label: 'Based in Lahore, Punjab', color: 'bg-secondary' },
  { icon: 'fa-globe', label: '10+ Countries Served', color: 'bg-accent' },
  { icon: 'fa-users', label: '3000+ Workers Placed', color: 'bg-cta' },
  { icon: 'fa-handshake', label: 'Verified Employers', color: 'bg-highlight' },
  { icon: 'fa-star', label: 'Trusted Since 2008', color: 'bg-primary' },
];

const stats = [
  { icon: 'fa-calendar', value: '15+', label: 'Years Experience' },
  { icon: 'fa-globe', value: '10+', label: 'Countries' },
  { icon: 'fa-user-check', value: '3000+', label: 'Placements' },
  { icon: 'fa-building', value: '1', label: 'Office (Lahore)' },
];

export default function AboutPage() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-highlight to-primary py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-accent text-white mb-4">
            ABOUT ROLLA CORPORATION
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading mb-4">
            Our <span className="text-accent">Story</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Davis Road, Lahore — connecting Pakistan's workforce to the world since 2008.
          </p>
        </div>
      </div>

      {/* Main About Content */}
      <SectionWrapper badge="WHO WE ARE" badgeColor="primary">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left image */}
          <div className="relative w-full max-w-md lg:max-w-lg flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={imgError ? '/images/hero-team.jpg' : '/images/lahore-office.jpg'}
                alt="Rolla Corporation - Lahore Office"
                className="w-full h-72 md:h-96 object-cover"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-cta text-white px-5 py-3 rounded-xl shadow-lg">
              <p className="text-2xl font-extrabold">2266</p>
              <p className="text-xs font-medium opacity-80">/LHR</p>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading mb-4">
              Lahore's Trusted OEP Since 2008
            </h2>
            <p className="text-ink/70 mb-4 leading-relaxed">
              <strong className="text-primary">Rolla Corporation</strong>, based at Davis Road, Lahore,
              is a government-licensed Overseas Employment Promoter (<strong>OEP License No. 2266/LHR</strong>)
              dedicated to connecting Pakistan's talented workforce with premier international employers.
              Located in the heart of Lahore's commercial district, we serve candidates from across Punjab
              and beyond.
            </p>
            <p className="text-ink/70 mb-6 leading-relaxed">
              We believe every worker deserves a pathway to a brighter future. Whether you're a skilled
              professional, a tradesperson, or a first-time jobseeker, we provide end-to-end recruitment
              support — from document preparation and visa processing to medical coordination and departure
              logistics. With over <strong className="text-accent">3,000 successful placements</strong>
              across more than <strong className="text-cta">10 countries</strong>, we are your trusted
              partner in overseas employment.
            </p>
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 bg-cta text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg"
            >
              <i className="fas fa-briefcase" /> View Open Positions
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Stats Band */}
      <div className="bg-primary py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center animate-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
              <i className={`fas ${s.icon} text-3xl md:text-4xl text-cta mb-3`} />
              <div className="text-3xl md:text-4xl font-extrabold text-white">{s.value}</div>
              <div className="text-sm md:text-base text-white/80 font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <SectionWrapper badge="WHY CHOOSE US" badgeColor="secondary">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading mb-2">
          Licensed, Verified, Trusted
        </h2>
        <p className="text-ink/60 mb-10 max-w-2xl">
          We are registered with the Bureau of Emigration & Overseas Employment, Government of Pakistan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustChips.map((chip) => (
            <div
              key={chip.label}
              className={`${chip.color} text-white rounded-xl p-5 flex items-center gap-4 shadow-lg hover:brightness-110 transition-all`}
            >
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-xl flex-shrink-0">
                <i className={`fas ${chip.icon}`} />
              </div>
              <span className="font-bold text-sm">{chip.label}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Location */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-primary text-white mb-4">
                VISIT US
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading mb-4">
                Our Office on Davis Road
              </h2>
              <p className="text-ink/70 mb-4 leading-relaxed">
                Located in the bustling Davis Heights building on Davis Road, our office is easily accessible
                from all parts of Lahore. We welcome walk-in inquiries from Monday to Saturday.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  <div>
                    <p className="font-bold text-ink">Address</p>
                    <p className="text-ink/60 text-sm">Office No. 5, 1st Floor, Davis Heights, 38-Davis Road, Lahore, Punjab</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <i className="fas fa-phone" />
                  </span>
                  <div>
                    <p className="font-bold text-ink">Phone</p>
                    <p className="text-ink/60 text-sm">042-36300308-9</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <i className="fab fa-whatsapp" />
                  </span>
                  <div>
                    <p className="font-bold text-ink">WhatsApp</p>
                    <a href="https://wa.me/923008477507" target="_blank" rel="noopener noreferrer" className="text-ink/60 text-sm hover:text-accent transition-colors">
                      0300-8477507
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
              <iframe
                title="Rolla Corporation location"
                src="https://www.google.com/maps?q=Davis+Heights+38+Davis+Road+Lahore&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}