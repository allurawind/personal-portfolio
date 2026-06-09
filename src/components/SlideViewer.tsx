'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Slide {
  content: React.ReactNode;
}

interface SlideViewerProps {
  slides: Slide[];
}

export default function SlideViewer({ slides }: SlideViewerProps) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="flex items-center justify-between h-full gap-2">
      <button
        onClick={prev}
        className="shrink-0 p-2 self-center transition-opacity hover:opacity-70"
        aria-label="Previous slide"
      >
        <Image
          src="/assets/left-swipe.svg"
          alt=""
          width={39}
          height={40}
          className="w-[clamp(28px,2.7vw,39px)] h-auto"
        />
      </button>

      <div className="flex-1 flex items-center justify-center h-full relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
            style={{
              opacity: index === current ? 1 : 0,
              pointerEvents: index === current ? 'auto' : 'none',
            }}
          >
            {slide.content}
          </div>
        ))}
      </div>

      <button
        onClick={next}
        className="shrink-0 p-2 self-center transition-opacity hover:opacity-70"
        aria-label="Next slide"
      >
        <Image
          src="/assets/right-swipe.svg"
          alt=""
          width={39}
          height={40}
          className="w-[clamp(28px,2.7vw,39px)] h-auto"
        />
      </button>
    </div>
  );
}
