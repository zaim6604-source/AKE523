import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center dashboard-card max-w-md">
        <div className="text-7xl font-extrabold text-primary/20">404</div>
        <h1 className="text-2xl font-extrabold text-ink mt-4">Page Not Found</h1>
        <p className="text-ink/60 mt-2 text-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 bg-primary text-white font-bold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all"
        >
          <i className="fas fa-arrow-left" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}