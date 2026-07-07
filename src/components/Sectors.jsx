import useReveal from '../hooks/useReveal';
import {
  FaWrench, FaBolt, FaTint, FaHardHat, FaCogs, FaHammer,
  FaSnowflake, FaTruck, FaCar, FaPaintRoller, FaIndustry
} from 'react-icons/fa';

const TRADES = [
  { icon: FaWrench, label: 'Welder (3G/6G)' },
  { icon: FaBolt, label: 'Electrician' },
  { icon: FaTint, label: 'Plumber' },
  { icon: FaHardHat, label: 'Mason' },
  { icon: FaCogs, label: 'Steel Fixer' },
  { icon: FaHammer, label: 'Shuttering Carpenter' },
  { icon: FaSnowflake, label: 'AC / HVAC Technician' },
  { icon: FaTruck, label: 'Heavy & Light Driver' },
  { icon: FaCar, label: 'Auto Mechanic' },
  { icon: FaPaintRoller, label: 'Painter' },
  { icon: FaIndustry, label: 'Duct Man' },
];

const COLORS = [
  '#FF206E', '#D4005A', '#41EAD4', '#FBFF12', '#FF6B35', '#7B2D8E',
  '#FF206E', '#D4005A', '#41EAD4', '#FBFF12', '#FF6B35', '#7B2D8E',
];

export default function Sectors() {
  useReveal('.sec-reveal');

  return (
    <section id="trades" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#FFF8E0' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sec-reveal reveal">
          <span className="pill-badge">OUR TRADES</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#1A1423' }}>
            Trades We Cover
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#4B4453' }}>
            Comprehensive trade testing and training across 12+ in-demand skilled trades.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {TRADES.map((s, i) => {
            const Icon = s.icon;
            const bg = COLORS[i];
            const isLight = bg === '#FBFF12' || bg === '#41EAD4';
            return (
              <div
                key={i}
                className="sec-reveal reveal inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{ background: bg, color: isLight ? '#1A1423' : '#fff' }}
              >
                <Icon size={14} />
                {s.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
