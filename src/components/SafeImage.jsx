import { useState } from 'react';
import { heroImage, aboutImage, galleryImage, avatarImage, serviceImage } from '../assets/placeholders';

const FALLBACKS = {
  hero: heroImage(),
  about: aboutImage(),
  gallery: (type) => galleryImage(type || 'Office'),
  testimonial: (seed) => avatarImage(seed || 0),
  country: null,
  service: (idx) => serviceImage(idx || 0),
};

function getFallback(fallbackType, fallbackSeed, icon) {
  if (fallbackType === 'hero') return FALLBACKS.hero;
  if (fallbackType === 'about') return FALLBACKS.about;
  if (fallbackType === 'gallery') return FALLBACKS.gallery(fallbackSeed || 'Office');
  if (fallbackType === 'testimonial') return FALLBACKS.testimonial(fallbackSeed || 0);
  if (fallbackType === 'service') return FALLBACKS.service(fallbackSeed || 0);
  if (icon === 'about') return FALLBACKS.about;
  if (icon === 'gallery') return FALLBACKS.gallery(fallbackSeed || 'Office');
  if (icon === 'testimonial') return FALLBACKS.testimonial(fallbackSeed || 0);
  if (icon === 'service') return FALLBACKS.service(fallbackSeed || 0);
  if (icon === 'hero') return FALLBACKS.hero;
  return FALLBACKS.about;
}

export default function SafeImage({ src, alt, className, icon, fallbackType, fallbackSeed, ...props }) {
  const [failed, setFailed] = useState(false);

  // If no source or failed to load, show SVG placeholder
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

  // Try to load the real image
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