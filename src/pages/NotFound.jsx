import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#E8F5FF]">
      <div className="text-center px-4">
        <div className="text-8xl sm:text-9xl font-extrabold font-[Plus Jakarta Sans] text-[#0496FF]/20 mb-4">
          404
        </div>
        <i className="fas fa-compass text-5xl text-[#0496FF] mb-4" />
        <h1 className="text-2xl sm:text-3xl font-bold font-[Plus Jakarta Sans] text-[#062A45] mb-3">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-[#062A45]/60 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find your way.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#0496FF] rounded-full hover:bg-[#0077CC] hover:shadow-lg transition-all no-underline"
          >
            <i className="fas fa-home" />
            Go Home
          </Link>
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#062A45] bg-[#FFBE0B] rounded-full hover:bg-[#e6ab00] transition-all no-underline"
          >
            <i className="fas fa-globe" />
            Explore Destinations
          </Link>
          <a
            href="https://wa.me/923158547604"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0496FF] border-2 border-[#0496FF] rounded-full hover:bg-[#0496FF] hover:text-white transition-all no-underline"
          >
            <i className="fab fa-whatsapp" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}