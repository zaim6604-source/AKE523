import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Destinations from './pages/Destinations'
import DestinationDetail from './pages/DestinationDetail'
import Journey from './pages/Journey'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:slug" element={<DestinationDetail />} />
          <Route path="journey" element={<Journey />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)