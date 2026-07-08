import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-transition" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="text-center px-4">
        <div className="text-8xl sm:text-9xl font-black mb-4" style={{ color: 'var(--color-primary)', fontFamily: "'Poppins', sans-serif" }}>
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: 'var(--color-accent)' }}>
          Page Not Found
        </h1>
        <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'var(--color-ink-light)' }}>
          The page you are looking for doesn&rsquo;t exist or has been moved. Let us help you find your way back.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: 'var(--color-cta)', color: 'var(--color-accent)' }}
        >
          <i className="fas fa-arrow-left" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}