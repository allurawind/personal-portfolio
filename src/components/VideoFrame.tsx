'use client';

import { useRef } from 'react';

interface VideoFrameProps {
  src: string;
  href?: string;
  ariaLabel: string;
}

export default function VideoFrame({ src, href, ariaLabel }: VideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const video = (
    <video
      ref={videoRef}
      src={src}
      className="block w-[clamp(438px,46.875vw,675px)] aspect-[432/307] object-contain"
      autoPlay
      loop
      muted
      playsInline
      aria-label={ariaLabel}
    />
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        {video}
      </a>
    );
  }

  return video;
}
