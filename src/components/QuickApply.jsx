import { useState } from 'react';

const WHATSAPP_NUMBER = '923006158784';

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Quick Apply — Al Khaliq Enterprises%0A%0AName: ${name}%0APhone: ${phone}%0AJob Category: ${category}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setOpen(false);
    setName('');
    setPhone('');
    setCategory('');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-transform hover:scale-110"
        style={{ backgroundColor: '#7B2D8E' }}
        aria-label="Quick Apply"
        title="Quick Apply"
      >
        <i className="fab fa-whatsapp text-2xl" />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
              aria-label="Close"
            >
              <i className="fas fa-times" />
            </button>
            <h3 className="text-xl font-bold mb-1" style={{ color: '#7B2D8E' }}>Quick Apply</h3>
            <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
              Fill in your details and we'll connect on WhatsApp.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: '#D1D5DB', '--tw-ring-color': '#7B2D8E' }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: '#D1D5DB', '--tw-ring-color': '#7B2D8E' }}
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: '#D1D5DB', '--tw-ring-color': '#7B2D8E' }}
              >
                <option value="">Select Job Category</option>
                <option value="Construction">Construction</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Hospitality">Hospitality</option>
                <option value="IT & Engineering">IT & Engineering</option>
                <option value="Logistics & Transport">Logistics & Transport</option>
                <option value="Domestic Work">Domestic Work</option>
                <option value="Other">Other</option>
              </select>
              <button
                type="submit"
                className="w-full text-white font-semibold py-2.5 rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#7B2D8E' }}
              >
                <i className="fab fa-whatsapp mr-2" />
                Apply via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}