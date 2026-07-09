import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FFD6F0]">
      <div className="text-center px-4">
        <div className="text-8xl sm:text-9xl font-extrabold font-[Plus Jakarta Sans] text-[#FF3CAC]/20 mb-4">
          404
        </div>
        <i className="fas fa-feather-alt text-5xl text-[#FF3CAC] mb-4" />
        <h1 className="text-2xl sm:text-3xl font-bold font-[Plus Jakarta Sans] text-[#1A0A1E] mb-3">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-[#1A0A1E]/60 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find your way.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#2B86C5] rounded-full hover:bg-[#2470a5] hover:shadow-lg transition-all no-underline"
          >
            <i className="fas fa-home" />
            Go Home
          </Link>
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#784BA0] rounded-full hover:bg-[#663d8a] transition-all no-underline"
          >
            <i className="fas fa-globe" />
            Explore Destinations
          </Link>
          <a
            href="https://wa.me/923339319471"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#FF3CAC] border-2 border-[#FF3CAC] rounded-full hover:bg-[#FF3CAC] hover:text-white transition-all no-underline"
          >
            <i className="fab fa-whatsapp" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}