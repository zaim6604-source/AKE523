import { useState, useRef } from 'react';

const JOB_CATEGORIES = [
  'Construction Worker',
  'Driver',
  'Electrician',
  'Factory Worker',
  'Healthcare Worker',
  'Hospitality Staff',
  'IT Professional',
  'Plumber',
  'Security Guard',
  'Technician',
  'Other',
];

const WHATSAPP_NUMBER = '923341999588';

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !category) return;
    const text = `Hello Gulalai Overseas Employment! I'd like to apply for a job.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AJob Category: ${encodeURIComponent(category)}%0A%0APlease guide me about the process.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setName('');
    setPhone('');
    setCategory('');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Form Card */}
      <div
        className={`overflow-hidden quick-apply-expand ${
          open ? 'max-h-[400px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
        }`}
        style={{ transformOrigin: 'bottom right' }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-5 w-[280px] sm:w-[320px] border border-[#FF6B35]/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-[#0B2436] text-sm flex items-center gap-2">
              <i className="fas fa-bolt text-[#FF6B35]" />
              Quick Apply
            </h4>
            <button onClick={() => setOpen(false)} className="text-[#0B2436]/40 hover:text-[#FF6B35] text-sm">
              <i className="fas fa-times" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3" ref={formRef}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none bg-gray-50 text-[#0B2436]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none bg-gray-50 text-[#0B2436]"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none bg-gray-50 text-[#0B2436]"
            >
              <option value="">Select Job Category</option>
              {JOB_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-semibold py-2.5 rounded-xl text-sm transition-all shadow-md"
            >
              <i className="fab fa-whatsapp mr-2" />
              Apply via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-xl flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-105 ${
          open
            ? 'bg-[#0B3954] rotate-45'
            : 'bg-[#FF6B35]'
        }`}
        aria-label="Quick Apply"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-bolt'} transition-transform`} />
      </button>
    </div>
  );
}