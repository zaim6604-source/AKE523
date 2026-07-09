import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary text-5xl mb-6">
        <i className="fas fa-map-pin" />
      </div>
      <h1 className="text-6xl font-extrabold text-primary mb-2">404</h1>
      <h2 className="text-2xl font-bold text-ink mb-2">Page Not Found</h2>
      <p className="text-ink/50 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-cta text-white px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all shadow-lg"
      >
        <i className="fas fa-home" /> Back to Home
      </Link>
    </div>
  );
}