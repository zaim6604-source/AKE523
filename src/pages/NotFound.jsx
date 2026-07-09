import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-black text-[#E10600]/20 mb-4 font-poppins">404</div>
        <h1 className="text-2xl font-bold text-[#141414] mb-2 font-poppins">Page Not Found</h1>
        <p className="text-[#444]/70 mb-8 font-inter">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#E10600] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1C1C1C] transition-all shadow-md text-sm font-poppins"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i>Back to Home
        </Link>
      </div>
    </div>
  );
}