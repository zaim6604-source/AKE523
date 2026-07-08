import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import QuickApply from './QuickApply'

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <QuickApply />
    </div>
  )
}