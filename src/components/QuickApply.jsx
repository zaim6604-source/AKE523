import { useState } from 'react';

const jobCategories = [
  'Construction & Labor', 'Hospitality & Catering', 'Healthcare & Caregiving',
  'Manufacturing & Factory', 'Logistics & Transport', 'IT & Engineering',
  'Agriculture & Farming', 'Security & Facilities', 'Other',
];

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Quick Apply - Zanib Recruiting Agency%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AJob Category: ${encodeURIComponent(category)}`;
    window.open(`https://wa.me/923335020040?text=${text}`, '_blank');
    setOpen(false);
    setName('');
    setPhone('');
    setCategory('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl p-5 w-72 border border-primary/20">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-primary text-sm">Quick Apply</h4>
            <button onClick={() => setOpen(false)} className="text-ink/40 hover:text-primary text-sm">
              <i className="fas fa-times" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" placeholder="Your Name" required value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
            <input type="tel" placeholder="Phone Number" required value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
            <select required value={category} onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-white">
              <option value="">Job Category</option>
              {jobCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button type="submit"
              className="w-full bg-cta text-ink py-2.5 rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg">
              <i className="fab fa-whatsapp mr-1.5" />Apply Now
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-cta text-ink shadow-xl hover:brightness-110 transition-all flex items-center justify-center text-2xl animate-pulse-glow"
        aria-label="Quick Apply"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-bolt'}`} />
      </button>
    </div>
  );
}
