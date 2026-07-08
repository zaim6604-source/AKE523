import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-extrabold text-[var(--color-primary)]/20">404</div>
        <h1 className="text-3xl font-bold text-[var(--color-ink)] mt-4">Page Not Found</h1>
        <p className="text-[var(--color-ink)]/70 mt-2 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all"
        >
          <i className="fas fa-arrow-left" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}