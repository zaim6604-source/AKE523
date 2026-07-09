import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-primary text-white shadow-xl hover:brightness-110 transition-all flex items-center justify-center text-xl ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } transition-all duration-300`}
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}
