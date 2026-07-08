import { COMPANY, ABOUT_CHIPS } from './constants';
import useInView from './useInView';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div
        ref={ref}
        className={`container-main transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-4">
          <span className="pill-badge">
            <i className="fas fa-info-circle text-[10px] mr-1.5"></i>
            WHO WE ARE
          </span>
        </div>

        {/* Intro section */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16">
          {/* Image */}
          <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-xl shadow-[#9C27B0]/10 relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#CE93D8] to-[#9C27B0]">
              <img
                src="/images/about.jpg"
                alt="H.A. International Office"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#CE93D8] to-[#9C27B0] flex items-center justify-center -z-10">
                <div className="text-center text-white/80">
                  <i className="fas fa-people-group text-5xl mb-3"></i>
                  <p className="font-heading font-semibold text-lg">Our Team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2A1033] leading-tight">
              Ministry-Approved OEP with Offices in{' '}
              <span className="text-[#9C27B0]">Mingora & Rawalpindi</span>
            </h2>
            <p className="text-[#2A1033]/70 leading-relaxed">
              H.A. International is a Government of Pakistan Ministry of Labour–approved Overseas Employment
              Promoter (OEP) holding license No. <strong>2305/MLK</strong>. With three strategically located
              offices — two in Mingora, Swat and one in Rawalpindi — we keep a licensed team close to our
              candidates from first application to departure.
            </p>
            <p className="text-[#2A1033]/70 leading-relaxed">
              We specialize in supplying unskilled, semi-skilled, and highly skilled manpower from Pakistan
              to meet the specific requirements of employers worldwide. Our deep understanding of international
              labor markets and commitment to ethical recruitment make us a trusted partner for overseas employment.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {ABOUT_CHIPS.map((chip, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-[#F8EEFF] text-[#9C27B0] font-semibold text-xs md:text-sm px-4 py-2 rounded-full"
                >
                  <i className={`fas ${chip.icon}`}></i>
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Three Office Cards */}
        <h3 className="text-xl md:text-2xl font-bold text-center text-[#2A1033] mb-8">
          Our <span className="text-[#9C27B0]">Three Offices</span>
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY.offices.map((office, i) => (
            <div
              key={i}
              className={`bg-[#F8EEFF] rounded-2xl p-6 border border-[#CE93D8]/20 transition-all duration-700 hover-lift ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-[#9C27B0] flex items-center justify-center text-white mb-4">
                <i className="fas fa-location-dot"></i>
              </div>
              <h4 className="font-heading font-bold text-base text-[#2A1033] mb-2">{office.name}</h4>
              <p className="text-sm text-[#2A1033]/70 leading-relaxed mb-3">{office.address}</p>
              {office.phone && (
                <p className="text-sm text-[#9C27B0] font-semibold">
                  <i className="fas fa-phone mr-1.5"></i>{office.phone}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}