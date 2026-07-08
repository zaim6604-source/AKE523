import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 animate-fade-up pt-6 lg:pt-10">
      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
        <i className="fas fa-map-pin text-3xl text-primary" />
      </div>
      <h1 className="text-5xl font-extrabold text-ink mb-2">404</h1>
      <p className="text-lg text-ink/50 mb-2">Page not found</p>
      <p className="text-sm text-ink/40 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
      >
        <i className="fas fa-arrow-left" />
        Back to Home
      </Link>
    </div>
  )
}