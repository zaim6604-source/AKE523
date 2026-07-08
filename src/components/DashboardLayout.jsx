import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopStrip from './TopStrip'
import QuickApply from './QuickApply'

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex">
      {/* Overlay for mobile */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Top strip */}
      <TopStrip onMenuClick={() => setSidebarOpen(true)} />

      {/* Main content */}
      <main className="main-content">
        <div className="page-enter-active">
          <Outlet />
        </div>
      </main>

      {/* Quick Apply floating button */}
      <QuickApply />
    </div>
  )
}