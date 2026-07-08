import { useState, useEffect } from 'react';

export default function QuickApply() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after a short delay to avoid flash on page load
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[999] transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <a
        href="https://wa.me/923005947249"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-cta text-white font-extrabold px-5 py-3.5 rounded-full text-sm shadow-xl hover:brightness-110 hover:scale-105 transition-all duration-200 animate-pulse"
        style={{ boxShadow: '0 8px 32px rgba(2, 195, 154, 0.45)' }}
      >
        <i className="fab fa-whatsapp text-lg" />
        Quick Apply
      </a>
    </div>
  );
}