import { COMPANY } from '../data/siteData'

const ITEMS = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Kuwait', 'Germany', 'Poland', 'Romania', 'Malaysia',
  `License ${COMPANY.license}`,
  'Khwaza Khela, Swat (Head Office)',
  'Rawalpindi (Branch Office)',
  'Serving KPK & Punjab',
  'Manpower Recruitment',
  'Gulf & Europe Placement',
]

export default function MarqueeBand() {
  return (
    <div className="bg-primary py-3 text-white font-semibold text-sm overflow-hidden">
      <div className="marquee-container">
        <div className="animate-marquee inline-flex items-center gap-8">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <i className="fas fa-circle-check text-cta text-xs" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}