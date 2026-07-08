import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-fade min-h-[80vh] flex items-center justify-center bg-[#FFF3E0]">
      <div className="text-center px-4">
        <div className="text-8xl sm:text-9xl font-extrabold font-[Plus+Jakarta+Sans] text-[#FF1654]/20 mb-4">
          404
        </div>
        <i className="fas fa-compass text-5xl text-[#FF1654] mb-4" />
        <h1 className="text-2xl sm:text-3xl font-bold font-[Plus+Jakarta+Sans] text-[#152935] mb-3">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-[#152935]/60 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find your way.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#FF1654] rounded-full hover:bg-[#D60046] hover:shadow-lg transition-all no-underline"
          >
            <i className="fas fa-home" />
            Go Home
          </Link>
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#152935] bg-[#FFD400] rounded-full hover:bg-[#e6bf00] transition-all no-underline"
          >
            <i className="fas fa-globe" />
            Explore Destinations
          </Link>
          <a
            href="https://wa.me/923005668365"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#247BA0] border-2 border-[#247BA0] rounded-full hover:bg-[#247BA0] hover:text-white transition-all no-underline"
          >
            <i className="fab fa-whatsapp" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
