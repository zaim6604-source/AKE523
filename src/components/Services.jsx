import { useEffect } from 'react';
import { Wrench, ClipboardCheck, Award, Compass, Settings, BookOpen } from 'lucide-react';

const offerings = [
  {
    icon: Wrench,
    title: 'Technical Skill Training',
    desc: 'Hands-on practical training in welding, electrical, plumbing, masonry, and more. Our workshops are equipped with real tools and industry-standard equipment.',
    accent: '#FF206E',
  },
  {
    icon: ClipboardCheck,
    title: 'Trade Testing & Skill Assessment',
    desc: 'Professional trade testing to assess candidates against international standards. Practical exams with qualified assessors.',
    accent: '#41EAD4',
  },
  {
    icon: Award,
    title: 'Trade Test Certificate',
    desc: 'Recognised certificates issued after successful completion of trade tests. Valid documentation for local and overseas employment.',
    accent: '#FBFF12',
  },
  {
    icon: Compass,
    title: 'Pre-Departure Skill Prep',
    desc: 'Targeted skill preparation for workers planning to go abroad. Covers trade-specific techniques, safety standards, and workplace expectations.',
    accent: '#FF6B35',
  },
  {
    icon: Settings,
    title: 'Employer-Specific Test Setups',
    desc: 'Custom trade test setups designed to match specific employer requirements. We tailor assessments to client standards.',
    accent: '#7B2D8E',
  },
  {
    icon: BookOpen,
    title: 'Short Courses & Refreshers',
    desc: 'Quick upskilling courses and refresher modules for experienced workers looking to update their skills or learn new techniques.',
    accent: '#FF206E',
  },
];

export default function Services() {
  useEffect(() => {
    const els = document.querySelectorAll('.sv-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="training"
      style={{
        padding: 'clamp(80px,10vw,130px) 24px',
        background: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: -180,
          left: -180,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,32,110,0.05), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container">
        <div
          className="sv-reveal reveal"
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span className="pill-badge">TRAINING & TESTING</span>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,46px)',
              color: '#1A1423',
              marginTop: 16,
              marginBottom: 16,
              letterSpacing: '-0.8px',
            }}
          >
            What We{' '}
            <span style={{ color: '#FF206E' }}>Offer</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#4B4453',
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.7,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            From hands-on training to professional certification — we cover the full cycle of trade skill development.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 24,
          }}
        >
          {offerings.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="sv-reveal reveal"
                style={{
                  borderRadius: 20,
                  border: `1px solid ${s.accent}20`,
                  boxShadow: `0 4px 24px ${s.accent}10`,
                  background: '#fff',
                  padding: '32px 24px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  transitionDelay: `${i * 0.08}s`,
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 16px 48px ${s.accent}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 24px ${s.accent}10`;
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `${s.accent}15`,
                    border: `1px solid ${s.accent}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 18,
                  }}
                >
                  <Icon size={24} color={s.accent} />
                </div>
                <h3
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#1A1423',
                    marginBottom: 10,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: '#4B4453',
                    lineHeight: 1.7,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
