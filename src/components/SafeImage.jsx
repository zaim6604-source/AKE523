import { useState, useEffect } from 'react';

/* SVG data URIs — guaranteed to render (no external request needed) */
function svgURI(w, h, color, text) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="${color}"/>
    <text x="${w / 2}" y="${h / 2}" font-family="Inter,sans-serif" font-size="${Math.min(w, h) / 8}" font-weight="600" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const FALLBACKS = {
  default:  svgURI(600, 400, '#1B4965', 'HI'),
  avatar:   svgURI(150, 150, '#5FA8D3', 'HI'),
  hero:     svgURI(400, 400, '#1B4965', 'HI'),
  office:   svgURI(600, 500, '#5FA8D3', 'HI'),
  landmark: svgURI(600, 400, '#1B4965', 'HI'),
};

export default function SafeImage({ src, alt, className, type = 'default' }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setErrored(false);
  }, [src]);

  const handleError = () => {
    if (!errored) {
      setErrored(true);
      setImgSrc(FALLBACKS[type] || FALLBACKS.default);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
      onError={handleError}
    />
  );
}
