import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import QuickApply from './QuickApply';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16 lg:pt-20 min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <QuickApply />
    </>
  );
}