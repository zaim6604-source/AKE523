export default function CTABand() {
  return (
    <div
      className="py-[clamp(50px,8vw,80px)] px-5 text-center"
      style={{
        background: 'linear-gradient(135deg, #FF206E 0%, #41EAD4 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.08)',
          pointerEvents: 'none',
        }}
      />
      <div className="max-w-3xl mx-auto relative z-10">
        <h2
          className="font-display font-extrabold mb-4"
          style={{ fontSize: 'clamp(24px,4vw,38px)', color: '#fff' }}
        >
          Ready to Build a Skilled Future?<br />
          Enroll or Book Your Trade Test Today.
        </h2>
        <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Take the next step toward certification and better job opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/923194139360"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ background: '#1A1423', boxShadow: '0 4px 20px rgba(26,20,35,0.3)' }}
          >
            Enroll / Book Test
          </a>
          <a
            href="https://wa.me/923194139360"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}