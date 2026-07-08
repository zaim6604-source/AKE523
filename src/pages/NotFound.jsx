import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto text-center py-16">
      <div className="text-6xl font-extrabold text-primary/20 mb-4">404</div>
      <i className="fas fa-compass text-4xl text-ink/30 mb-4" />
      <h2 className="text-xl font-bold text-primary mb-2">Page Not Found</h2>
      <p className="text-ink/60 text-sm mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-all shadow-md">
        <i className="fas fa-arrow-left" /> Back to Home
      </Link>
    </div>
  )
}