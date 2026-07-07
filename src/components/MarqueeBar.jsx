export default function MarqueeBar() {
  return (
    <div className="relative top-16 sm:top-18 w-full overflow-hidden py-2.5 sm:py-3" style={{ backgroundColor: '#1B4965' }}>
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 32s linear infinite' }}>
        <span className="mx-4 text-sm sm:text-base font-medium tracking-wide" style={{ color: '#5FA8D3' }}>
          <i className="fa-solid fa-gem text-[11px] mr-2" style={{ color: '#C9CCD5' }} />
          HR Consulting &bull; Islamabad
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#5FA8D3' }} />
          Recruitment &bull; Payroll &bull; Policy &amp; Compliance &bull; Training &bull; Performance
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#5FA8D3' }} />
          Islamabad
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#5FA8D3' }} />
          Free consultation
          <i className="fa-solid fa-gem text-[11px] ml-2" style={{ color: '#C9CCD5' }} />
        </span>
        <span className="mx-4 text-sm sm:text-base font-medium tracking-wide" style={{ color: '#5FA8D3' }}>
          <i className="fa-solid fa-gem text-[11px] mr-2" style={{ color: '#C9CCD5' }} />
          HR Consulting &bull; Islamabad
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#5FA8D3' }} />
          Recruitment &bull; Payroll &bull; Policy &amp; Compliance &bull; Training &bull; Performance
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#5FA8D3' }} />
          Islamabad
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#5FA8D3' }} />
          Free consultation
          <i className="fa-solid fa-gem text-[11px] ml-2" style={{ color: '#C9CCD5' }} />
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}