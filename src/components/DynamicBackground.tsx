'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getPageBackground } from '@/lib/pageBackgrounds';

export default function DynamicBackground() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.backgroundColor = getPageBackground(pathname);
  }, [pathname]);

  return null;
}
