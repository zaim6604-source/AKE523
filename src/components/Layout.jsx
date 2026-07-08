import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import QuickApply from './QuickApply';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="page-transition" style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      <Footer />
      <QuickApply />
    </>
  );
}