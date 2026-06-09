'use client';

import { useState } from 'react';
import MediaLightbox from '@/components/MediaLightbox';

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LightboxImage({ src, alt, className = '' }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer ${className}`}
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
      />
      <MediaLightbox
        src={src}
        alt={alt}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
