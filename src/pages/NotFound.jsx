import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-black text-[#E10600] font-[Poppins]">404</div>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FFD500] to-[#E10600] mx-auto my-6 rounded-full"></div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#141414] mb-4 font-[Poppins]">Page Not Found</h1>
        <p className="text-[#141414]/60 mb-8 max-w-md mx-auto">
          Looks like you've taken a wrong turn. This page doesn't exist or has been moved.
        </p>
        <Link to="/"
          className="bg-[#E10600] text-white font-bold px-8 py-4 rounded-full hover:bg-[#1C1C1C] transition-all shadow-lg inline-block">
          <i className="fa-solid fa-house mr-2"></i>Back to Home
        </Link>
      </div>
    </div>
  );
}