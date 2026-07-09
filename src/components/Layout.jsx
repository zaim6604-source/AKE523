import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import MarqueeBar from './MarqueeBar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <MarqueeBar />
      <main className="min-h-screen pt-16 sm:pt-20">
        <Outlet />
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}