import { COMPANY } from '../data/siteData'

export default function QuickApplyFAB() {
  return (
    <a
      href={COMPANY.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-cta text-white flex items-center justify-center text-2xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-glow"
      aria-label="Quick Apply via WhatsApp"
    >
      <i className="fab fa-whatsapp" />
    </a>
  )
}