import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const testimonials = [
  {
    quote: "Zanib Recruiting Agency made my dream of working in Saudi Arabia a reality. From documentation to departure, they handled everything professionally. I'm now earning 3x what I was making locally.",
    name: 'Ahmed Raza',
    role: 'Construction Supervisor',
    destination: 'Saudi Arabia',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
  },
  {
    quote: "I was nervous about moving abroad for work, but the team at Zanib guided me at every step. The pre-departure orientation was incredibly helpful. Highly recommended!",
    name: 'Bilal Khan',
    role: 'Factory Worker',
    destination: 'Poland',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
  },
  {
    quote: "Thanks to Zanib, I secured a great position in Dubai within weeks of registering. They are honest, transparent, and truly care about their candidates. A blessing for Rawalpindi's youth.",
    name: 'Usman Ghani',
    role: 'Logistics Coordinator',
    destination: 'UAE',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
  },
  {
    quote: "I was hesitant about overseas employment, but Zanib's team made the process so smooth. They verified my employer, handled my visa, and I was in Doha within 6 weeks!",
    name: 'Tariq Mehmood',
    role: 'HVAC Technician',
    destination: 'Qatar',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
  },
];

export default function Testimonials() {
  const [popup, setPopup] = useState(null);
  const [imgErrors, setImgErrors] = useState({});

  return (
    <SectionWrapper id="testimonials" badge="SUCCESS STORIES" badgeColor="primary">
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-2 font-display">
        Real Stories, Real Impact
      </h2>
      <p className="text-ink/60 mb-10 max-w-2xl">
        Hear from the candidates we've helped place across the globe.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t) => (
          <button
            key={t.name}
            onClick={() => setPopup(t)}
            className="relative rounded-2xl overflow-hidden shadow-xl h-[380px] group cursor-pointer text-left"
          >
            <img
              src={imgErrors[t.name] ? 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=500&fit=crop' : t.img}
              alt={t.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgErrors((p) => ({ ...p, [t.name]: true }))}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <div className="flex text-accent mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <i key={s} className="fas fa-star text-xs" />
                ))}
              </div>
              <p className="text-xs leading-relaxed mb-3 italic line-clamp-3">"{t.quote}"</p>
              <div className="font-bold text-sm">{t.name}</div>
              <div className="text-[10px] text-white/60">
                {t.role} &middot; {t.destination}
              </div>
            </div>
          </button>
        ))}
      </div>

      {popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay" onClick={() => setPopup(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in text-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20">
              <img
                src={popup.img}
                alt={popup.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=200&fit=crop'; }}
              />
            </div>
            <div className="flex justify-center text-accent mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <i key={s} className="fas fa-star" />
              ))}
            </div>
            <p className="text-ink/70 leading-relaxed mb-4 italic">"{popup.quote}"</p>
            <div className="font-bold text-ink text-lg">{popup.name}</div>
            <div className="text-sm text-ink/50">{popup.role} &middot; {popup.destination}</div>
            <button onClick={() => setPopup(null)} className="mt-5 text-ink/40 hover:text-primary text-sm font-semibold">
              Close
            </button>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
