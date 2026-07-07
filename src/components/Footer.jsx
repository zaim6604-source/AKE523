const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const quickLinks = [
  { l: 'Home', id: 'home' },
  { l: 'About', id: 'about' },
  { l: 'Our Work', id: 'work' },
  { l: 'Get Involved', id: 'involve' },
  { l: 'FAQs', id: 'faqs' },
  { l: 'Contact', id: 'contact' },
];

const workLinks = [
  'Food & Ration Distribution',
  'Relief & Emergency Aid',
  'Health & Medical Camps',
  'Education Support',
  'Community Awareness',
];

export default function Footer() {
  return (
    <footer className="bg-highlight">
      {/* CTA */}
      <div className="bg-gradient-to-br from-primary to-cta py-12 px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <div className="font-heading font-black text-[clamp(20px,2.5vw,28px)] text-white mb-2">Be a Voice for Someone in Need</div>
          <div className="text-sm text-white/85 mb-6">Support Awaz e Insan — your contribution brings hope and help to those who need it most.</div>
          <button className="btn-cta" onClick={() => go('contact')} style={{ fontSize: 15, padding: '14px 28px' }}>
            Donate / Help Now
          </button>
        </div>
      </div>

      {/* Main body */}
      <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-heading font-black text-lg text-white mb-1">Awaz e Insan</div>
          <div className="text-xs font-semibold text-secondary tracking-wide">Voice of Humanity</div>
          <p className="text-sm text-white/60 leading-relaxed mb-5 mt-4">
            A community welfare organization serving Peshawar — giving voice and support to those in need.
          </p>
          <div className="text-[13px] text-white/50 mb-5">Founder: Malik Yousaf Khan</div>
          <div className="flex gap-2.5">
            <a href="https://www.facebook.com/awaze.insan/" target="_blank" rel="noopener noreferrer" className="w-[38px] h-[38px] rounded-xl border border-white/15 flex items-center justify-center text-secondary transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5" aria-label="Facebook">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://wa.me/923159942780" target="_blank" rel="noopener noreferrer" className="w-[38px] h-[38px] rounded-xl border border-white/15 flex items-center justify-center text-secondary transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5" aria-label="WhatsApp">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <div className="text-[11px] font-bold tracking-widest uppercase text-secondary mb-5">Quick Links</div>
          {quickLinks.map(({ l, id }) => (
            <button key={id} className="block text-sm text-white/65 mb-2.5 cursor-pointer bg-transparent border-none text-left p-0 transition-colors duration-200 hover:text-accent" onClick={() => go(id)}>{l}</button>
          ))}
        </div>

        <div>
          <div className="text-[11px] font-bold tracking-widest uppercase text-secondary mb-5">Our Work</div>
          {workLinks.map(s => (
            <button key={s} className="block text-sm text-white/65 mb-2.5 cursor-pointer bg-transparent border-none text-left p-0 transition-colors duration-200 hover:text-accent" onClick={() => go('work')}>{s}</button>
          ))}
        </div>

        <div>
          <div className="text-[11px] font-bold tracking-widest uppercase text-secondary mb-5">Contact</div>
          <p className="text-[13px] text-white/65 leading-relaxed mb-[18px]">
            Larama Rd, Larama Hazrat Jan Colony<br />
            Peshawar, KPK, Pakistan
          </p>
          <div className="mb-2.5">
            <a href="https://wa.me/923159942780" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-white/65 no-underline transition-colors duration-200 hover:text-accent">
              <svg width="13" height="13" fill="#83C5BE" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp: 0315-9942780
            </a>
          </div>
          <div className="text-[13px] text-white/65 leading-relaxed">
            Email: info@awazeinsan.pk
          </div>
          <div className="mt-3.5">
            <a href="https://www.facebook.com/awaze.insan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-white/65 no-underline transition-colors duration-200 hover:text-accent">
              <svg width="13" height="13" fill="#83C5BE" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              /awaze.insan
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 px-6 py-5">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-2.5">
          <span className="text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} Awaz e Insan. All rights reserved.
          </span>
          <span className="text-[13px] text-white/40">Voice of Humanity — Peshawar, KPK, Pakistan</span>
        </div>
      </div>
    </footer>
  );
}