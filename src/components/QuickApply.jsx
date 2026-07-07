import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const WA = '923194139360';

const trades = [
  'Welder (3G/6G)', 'Electrician', 'Plumber', 'Mason', 'Steel Fixer',
  'Shuttering Carpenter', 'AC / HVAC Technician', 'Heavy & Light Driver',
  'Auto Mechanic', 'Pipe Fitter', 'Painter', 'Duct Man', 'Other',
];

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', trade: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Trademan Enquiry*\nName: ${form.name}\nPhone: ${form.phone}\nTrade: ${form.trade}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank');
    setOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40">
        {open && (
          <div className="mb-3 rounded-2xl p-5 shadow-2xl w-72" style={{ background: '#fff', border: '1px solid rgba(255,32,110,0.1)' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="font-display font-bold text-sm" style={{ color: '#1A1423' }}>Enroll / Book Test</span>
              <button onClick={() => setOpen(false)} className="bg-none border-none cursor-pointer" style={{ color: '#4B4453' }}><FaTimes size={14} /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none bg-transparent"
                style={{ borderColor: 'rgba(255,32,110,0.15)', color: '#1A1423' }} />
              <input placeholder="Phone Number" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none bg-transparent"
                style={{ borderColor: 'rgba(255,32,110,0.15)', color: '#1A1423' }} />
              <select value={form.trade} onChange={(e) => setForm({ ...form, trade: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none bg-transparent"
                style={{ borderColor: 'rgba(255,32,110,0.15)', color: '#4B4453' }}>
                <option value="">Select Trade</option>
                {trades.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <button type="submit" className="w-full py-2.5 rounded-xl text-sm font-bold border-none cursor-pointer flex items-center justify-center gap-2"
                style={{ background: '#41EAD4', color: '#1A1423' }}>
                <svg width="16" height="16" fill="#1A1423" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Send
              </button>
            </form>
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full shadow-xl border-none cursor-pointer flex items-center justify-center transition-transform hover:scale-105"
          style={{ background: '#41EAD4', color: '#1A1423' }}
        >
          <svg width="26" height="26" fill="#1A1423" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
        </button>
      </div>
    </>
  );
}
