import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-enter min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-7xl sm:text-8xl font-extrabold text-[#1B4965] mb-4">404</div>
        <div className="w-20 h-20 rounded-full bg-[#C9CCD5]/30 flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-map-signs text-3xl text-[#1B4965]" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2436] mb-2">Page Not Found</h2>
        <p className="text-[#0B2436]/60 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let us help you find the right path.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#1B4965] hover:bg-[#0B3954] text-white font-bold px-6 py-3 rounded-full text-sm transition-all shadow-md"
          >
            <i className="fas fa-home" />
            Home
          </Link>
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-bold px-6 py-3 rounded-full text-sm transition-all shadow-md"
          >
            <i className="fas fa-search" />
            Browse Jobs
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-[#C9CCD5] hover:border-[#1B4965] text-[#0B2436] font-semibold px-6 py-3 rounded-full text-sm transition-all"
          >
            <i className="fas fa-paper-plane" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}