import { useState } from 'react';

const FALLBACK_BG = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22800%22 height%3D%22600%22%3E%3Crect width%3D%22800%22 height%3D%22600%22 fill%3D%22%23FFF3E6%22%2F%3E%3Ccircle cx%3D%22400%22 cy%3D%22300%22 r%3D%2280%22 fill%3D%22%23FFD23F%22%2F%3E%3C%2Fsvg%3E';

export default function LazyImage({ src, alt, className = '', containerClass = '' }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClass}`}>
      {!loaded && !failed && (
        <div className="absolute inset-0 bg-[#FFD23F]/10 animate-pulse" />
      )}
      <img
        src={failed ? FALLBACK_BG : src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => { setFailed(true); setLoaded(true); }}
        loading="lazy"
      />
    </div>
  );
}