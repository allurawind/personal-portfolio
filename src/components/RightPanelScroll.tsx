'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';

interface RightPanelScrollProps {
  children: ReactNode;
  className?: string;
}

export default function RightPanelScroll({ children, className = '' }: RightPanelScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const canScroll = scrollHeight > clientHeight + 2;
    const isAtTop = scrollTop <= 4;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 4;

    setShowTopArrow(canScroll && !isAtTop);
    setShowBottomArrow(canScroll && !isAtBottom);

    if (isAtBottom) {
      el.dataset.mask = isAtTop ? 'none' : 'top-only';
    } else if (isAtTop) {
      el.dataset.mask = 'bottom-only';
    } else {
      el.dataset.mask = 'both';
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState]);

  return (
    <div className="relative flex flex-col min-h-0 flex-1">
      <div
        ref={scrollRef}
        className={`right-panel-scroll flex flex-col min-h-0 flex-1 ${className}`}
        data-mask="bottom-only"
      >
        <div className="flex flex-col flex-1 min-h-full">{children}</div>
      </div>
      {showTopArrow && (
        <div
          className="absolute top-3 inset-x-0 flex justify-center pointer-events-none z-10"
          aria-hidden
        >
          <img
            src="/assets/down-arrow.svg"
            alt=""
            className="w-[24px] h-[16px] animate-scroll-hint"
          />
        </div>
      )}
      {showBottomArrow && (
        <div
          className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none z-10"
          aria-hidden
        >
          <img
            src="/assets/down-arrow.svg"
            alt=""
            className="w-[24px] h-[16px] animate-scroll-hint-down"
          />
        </div>
      )}
    </div>
  );
}
