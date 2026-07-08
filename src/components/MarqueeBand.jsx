import { COMPANY, COUNTRIES } from '../data/siteData'

const ITEMS = [
  ...COUNTRIES.map((c) => c.name),
  `License ${COMPANY.license}`,
  COMPANY.address,
  'Serving KPK, Pakistan',
  'Manpower Recruitment',
  'Gulf, Europe & Asia Placement',
  'New Horizons Begin Here',
]

export default function MarqueeBand() {
  return (
    <div className="bg-primary py-3 text-white font-semibold text-sm overflow-hidden">
      <div className="marquee-container">
        <div className="animate-marquee inline-flex items-center gap-8">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <i className="fas fa-circle-check text-accent text-xs" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}