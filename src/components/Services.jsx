import {
  FaUserTie, FaUsers, FaBriefcase, FaFileAlt,
  FaBuilding, FaGraduationCap, FaChartLine, FaTruck
} from 'react-icons/fa';
import useInView from '../hooks/useInView';

const services = [
  { icon: FaUserTie, title: 'Recruitment & Placement', desc: 'End-to-end recruitment services connecting talent with the right opportunities.', color: 'bg-[#D7263D]' },
  { icon: FaUsers, title: 'Staffing Solutions', desc: 'Flexible staffing solutions for businesses of all sizes, temporary or permanent.', color: 'bg-[#F46197]' },
  { icon: FaBriefcase, title: 'Career Consultancy', desc: 'Professional career guidance and counseling to help you achieve your goals.', color: 'bg-[#7768AE]' },
  { icon: FaFileAlt, title: 'Document & Application Support', desc: 'Assistance with applications, documentation, and administrative processes.', color: 'bg-[#02C39A]' },
  { icon: FaBuilding, title: 'Corporate Services', desc: 'Comprehensive corporate support services for businesses and organizations.', color: 'bg-[#B3001B]' },
  { icon: FaGraduationCap, title: 'Training & Development', desc: 'Skill development programs and training to enhance professional capabilities.', color: 'bg-[#D7263D]' },
  { icon: FaChartLine, title: 'Client Advisory', desc: 'Strategic advisory services to help businesses make informed decisions.', color: 'bg-[#7768AE]' },
  { icon: FaTruck, title: 'Manpower Supply', desc: 'Reliable manpower supply solutions for projects and ongoing operations.', color: 'bg-[#F46197]' },
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="section-pad bg-[#FFF0F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="pill-badge bg-[#D7263D]/10 text-[#D7263D] mb-4">OUR SERVICES</span>
          <h2 className="section-heading">What We <span className="text-[#D7263D]">Offer</span></h2>
          <p className="text-[#340710]/60 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Comprehensive services designed to meet your recruitment and professional needs
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isTall = i === 0 || i === 5;
            return (
              <div
                key={i}
                className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isTall ? 'sm:row-span-2 sm:flex sm:flex-col' : ''} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms`, transitionProperty: 'opacity, transform', transitionDuration: '0.6s' }}
              >
                <div className={`${service.color} p-6 md:p-8 h-full flex flex-col`}>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed flex-1">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
