import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import QuickApply from './QuickApply';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#F2F6F9] font-sans">
      <ScrollToTop />
      <Navbar />
      <QuickApply />
      <main className="pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}