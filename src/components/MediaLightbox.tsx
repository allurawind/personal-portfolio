'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import { getPageBackgroundWithAlpha } from '@/lib/pageBackgrounds';

interface MediaLightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 3;

export default function MediaLightbox({ src, alt, isOpen, onClose }: MediaLightboxProps) {
  const pathname = usePathname();
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const [mounted, setMounted] = useState(false);

  const overlayBg = getPageBackgroundWithAlpha(pathname, 0.82);

  const resetView = useCallback(() => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const handleClose = useCallback(() => {
    resetView();
    onClose();
  }, [onClose, resetView]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, handleClose]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setScale((prev) => {
      const next = Math.max(MIN_SCALE, Math.min(MAX_SCALE, prev + delta));
      if (next <= MIN_SCALE) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      panX: pan.x,
      panY: pan.y,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setPan({
      x: dragStart.current.panX + dx,
      y: dragStart.current.panY + dy,
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md"
      style={{ backgroundColor: overlayBg }}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        onClick={handleClose}
        className="absolute top-4 right-4 font-mono text-[12px] text-primary uppercase tracking-wide hover:text-white transition-colors z-10"
      >
        CLOSE_
      </button>

      <div
        className={`relative max-w-[80vw] max-h-[80vh] ${scale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : ''}`}
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <img
          src={src}
          alt={alt}
          className="block max-w-[80vw] max-h-[80vh] object-contain select-none"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
            transformOrigin: 'center center',
          }}
          draggable={false}
        />
      </div>
    </div>,
    document.body,
  );
}
