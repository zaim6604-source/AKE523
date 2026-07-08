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

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !category) return;
    const text = `Hello Ithmanzi Recruiting Agency! I'd like to apply for a job.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AJob Category: ${encodeURIComponent(category)}%0A%0APlease guide me about the process.`;
    window.open(`https://wa.me/923465320238?text=${text}`, '_blank');
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
        <div className="bg-white rounded-2xl shadow-2xl p-5 w-[280px] sm:w-[320px] border border-[#00B4D8]/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-[#2B1200] text-sm flex items-center gap-2">
              <i className="fas fa-bolt text-[#FFD23F]" />
              Quick Apply
            </h4>
            <button onClick={() => setOpen(false)} className="text-[#2B1200]/40 hover:text-[#FF4500] text-sm">
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
              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none bg-gray-50 text-[#2B1200]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none bg-gray-50 text-[#2B1200]"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none bg-gray-50 text-[#2B1200]"
            >
              <option value="">Select Job Category</option>
              {JOB_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full bg-[#00B4D8] hover:bg-[#0098b8] text-white font-semibold py-2.5 rounded-xl text-sm transition-all shadow-md"
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
            ? 'bg-[#FF4500] rotate-45'
            : 'bg-[#00B4D8]'
        }`}
        aria-label="Quick Apply"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-bolt'} transition-transform`} />
      </button>
    </div>
  );
}