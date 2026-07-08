import { useState } from 'react';
import { heroImage, aboutImage, galleryImage, serviceImage } from '../assets/placeholders';

const FALLBACKS = {
  hero: heroImage(),
  about: aboutImage(),
  gallery: (type) => galleryImage(type || 'Office'),
  service: (idx) => serviceImage(idx || 0),
};

function getFallback(fallbackType, fallbackSeed, icon) {
  if (fallbackType === 'hero') return FALLBACKS.hero;
  if (fallbackType === 'about') return FALLBACKS.about;
  if (fallbackType === 'gallery') return FALLBACKS.gallery(fallbackSeed || 'Office');
  if (fallbackType === 'service') return FALLBACKS.service(fallbackSeed || 0);
  if (icon === 'about') return FALLBACKS.about;
  if (icon === 'gallery') return FALLBACKS.gallery(fallbackSeed || 'Office');
  if (icon === 'service') return FALLBACKS.service(fallbackSeed || 0);
  if (icon === 'hero') return FALLBACKS.hero;
  return FALLBACKS.about;
}

export default function SafeImage({ src, alt, className, icon, fallbackType, fallbackSeed, ...props }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <img
        src={getFallback(fallbackType, fallbackSeed, icon)}
        alt={alt || ''}
        className={className}
        loading="lazy"
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || ''}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
      {...props}
    />
  );
}