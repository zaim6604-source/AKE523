import { useParams, Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { jobs } from '../data/jobs';

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="pt-24 max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006D7710' }}>
          <i className="fa-solid fa-circle-exclamation text-2xl" style={{ color: '#006D77' }} />
        </div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#003844' }}>Job Not Found</h1>
        <p className="mb-8" style={{ color: '#006D77' }}>The opening you are looking for does not exist or has been filled.</p>
        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all text-white"
          style={{ backgroundColor: '#E29578' }}
        >
          <i className="fa-solid fa-arrow-left" />
          Back to Jobs
        </Link>
      </div>
    );
  }

  const whatsappText = encodeURIComponent(
    `Hello Fowzan Traders! I am interested in the "${job.role}" position in ${job.country}. Please provide more details.`
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pb-20 overflow-hidden" style={{ backgroundColor: '#006D77' }}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link to="/jobs" className="inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors" style={{ color: '#FFDD00' }}>
              <i className="fa-solid fa-arrow-left" />
              Back to Jobs
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-3xl">{job.flag}</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFDD00' }}>{job.country}</span>
              <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFDD00' }}>{job.trade}</span>
              <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFDD00' }}>{job.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>{job.role}</h1>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {job.country} &bull; {job.salary} &bull; {job.contract} &bull; {job.openings} openings
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <FadeIn>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={job.image} alt={job.country} className="w-full h-64 md:h-80 object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
            </FadeIn>

            <FadeIn delay={1}>
              <div>
                <h2 className="text-xl font-bold mb-3" style={{ color: '#003844' }}>About This Opportunity</h2>
                <p className="leading-relaxed" style={{ color: '#006D77' }}>{job.description}</p>
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <div>
                <h2 className="text-xl font-bold mb-3" style={{ color: '#003844' }}>Requirements</h2>
                <ul className="space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <i className="fa-solid fa-check-circle mt-1" style={{ color: '#83C5BE' }} />
                      <span className="text-sm" style={{ color: '#006D77' }}>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={3}>
              <div>
                <h2 className="text-xl font-bold mb-3" style={{ color: '#003844' }}>Required Documents</h2>
                <ul className="space-y-2">
                  {job.documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <i className="fa-solid fa-file-lines mt-1" style={{ color: '#E29578' }} />
                      <span className="text-sm" style={{ color: '#006D77' }}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <FadeIn delay={1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: '#83C5BE' }}>
                <h3 className="font-bold text-base mb-4" style={{ color: '#003844' }}>Quick Apply</h3>
                <a
                  href={`https://wa.me/923006162506?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-3 text-white"
                  style={{ backgroundColor: '#E29578' }}
                >
                  <i className="fab fa-whatsapp" />
                  Apply via WhatsApp
                </a>
                <p className="text-xs text-center" style={{ color: '#006D77' }}>
                  Tap to send a pre-filled message on WhatsApp
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: '#83C5BE' }}>
                <h3 className="font-bold text-base mb-4" style={{ color: '#003844' }}>Job Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: '#006D77' }}>Country</span>
                    <span className="font-semibold" style={{ color: '#003844' }}>{job.country}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#006D77' }}>Category</span>
                    <span className="font-semibold" style={{ color: '#003844' }}>{job.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#006D77' }}>Trade</span>
                    <span className="font-semibold" style={{ color: '#003844' }}>{job.trade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#006D77' }}>Salary</span>
                    <span className="font-semibold" style={{ color: '#003844' }}>{job.salary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#006D77' }}>Contract</span>
                    <span className="font-semibold" style={{ color: '#003844' }}>{job.contract}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#006D77' }}>Openings</span>
                    <span className="font-semibold" style={{ color: '#003844' }}>{job.openings}</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={3}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: '#83C5BE' }}>
                <h3 className="font-bold text-base mb-3" style={{ color: '#003844' }}>Need Help?</h3>
                <p className="text-xs mb-4" style={{ color: '#006D77' }}>
                  Call us or send a message for any questions about this position.
                </p>
                <a href="tel:0526615953" className="flex items-center gap-3 text-sm font-semibold mb-2" style={{ color: '#006D77' }}>
                  <i className="fa-solid fa-phone" /> 052-6615953
                </a>
                <a href="https://wa.me/923006162506" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-semibold" style={{ color: '#25D366' }}>
                  <i className="fab fa-whatsapp" /> 0300-6162506
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#003844' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Ready to Apply for This Position?
            </h2>
            <p className="text-sm mb-6" style={{ color: '#83C5BE' }}>
              Send us a message on WhatsApp and we'll guide you through the process.
            </p>
            <a
              href={`https://wa.me/923006162506?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#E29578', color: 'white' }}
            >
              <i className="fab fa-whatsapp" />
              Apply Now
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}