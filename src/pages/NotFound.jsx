import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 bg-background">
      <div className="text-center px-4">
        <div className="text-8xl sm:text-9xl font-extrabold text-primary/20 mb-4">404</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mb-3">
          Page Not Found
        </h1>
        <p className="text-ink/60 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-highlight transition-colors shadow-lg shadow-primary/30"
          >
            <i className="fas fa-home" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-primary/30 text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors"
          >
            <i className="fas fa-envelope" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}