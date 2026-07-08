import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center animate-page-enter">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-extrabold text-primary/20 mb-4">404</div>
        <i className="fas fa-map-signs text-5xl text-primary/40 mb-4" />
        <h1 className="text-3xl font-extrabold text-ink mb-2">Page Not Found</h1>
        <p className="text-ink/60 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg">
          <i className="fas fa-arrow-left" /> Back to Home
        </Link>
      </div>
    </div>
  )
}
