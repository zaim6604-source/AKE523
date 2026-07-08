import { useState } from 'react';
import { COMPANY } from './constants';

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello! I'm interested in overseas employment.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ACategory: ${encodeURIComponent(category)}`;
    window.open(`https://wa.me/923448999999?text=${text}`, '_blank');
    setName('');
    setPhone('');
    setCategory('');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Widget panel */}
      <div
        className={`absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-[#CE93D8]/20 overflow-hidden transition-all duration-300 ${
          open ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        }`}
        style={{ width: '300px' }}
      >
        <div className="bg-gradient-to-r from-[#9C27B0] to-[#7B1FA2] px-5 py-4">
          <h4 className="font-heading font-bold text-white text-sm">Quick Apply</h4>
          <p className="text-white/70 text-xs">Fill this form and we'll contact you on WhatsApp</p>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-[#CE93D8]/30 bg-[#F8EEFF]/50 text-sm text-[#2A1033] focus:outline-none focus:ring-2 focus:ring-[#9C27B0]/30"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-[#CE93D8]/30 bg-[#F8EEFF]/50 text-sm text-[#2A1033] focus:outline-none focus:ring-2 focus:ring-[#9C27B0]/30"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-[#CE93D8]/30 bg-[#F8EEFF]/50 text-sm text-[#2A1033] focus:outline-none focus:ring-2 focus:ring-[#9C27B0]/30"
          >
            <option value="">Job Category</option>
            <option value="Skilled Worker">Skilled Worker</option>
            <option value="Semi-Skilled Worker">Semi-Skilled Worker</option>
            <option value="Unskilled Worker">Unskilled Worker</option>
            <option value="Other">Other</option>
          </select>
          <button
            type="submit"
            className="w-full bg-[#FFD740] hover:bg-[#FFC400] text-[#2A1033] font-bold text-sm py-2.5 rounded-full transition-all"
          >
            <i className="fab fa-whatsapp mr-1.5"></i> Send
          </button>
        </form>
      </div>

      {/* FAB button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#FFD740] hover:bg-[#FFC400] text-[#2A1033] shadow-lg hover:shadow-xl hover:shadow-[#FFD740]/30 flex items-center justify-center transition-all hover:scale-110"
        aria-label="Quick Apply"
      >
        <i className={`fas ${open ? 'fa-xmark' : 'fa-bolt'} text-xl`}></i>
      </button>
    </div>
  );
}