'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import PanelColumn from '@/components/PanelColumn';

interface NavItem {
  label: string;
  href?: string;
  type: 'link' | 'label' | 'sub-link';
  treeChar?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/', type: 'link' },
  { label: 'Skills', href: '/skills', type: 'link' },
  { label: 'Projects', type: 'label' },
  { label: 'Ni/Ne-ar', href: '/projects/ni-ne-ar', type: 'sub-link', treeChar: '├' },
  { label: 'Stratum', href: '/projects/stratum', type: 'sub-link', treeChar: '├' },
  { label: 'MemoryScape', href: '/projects/memoryscape', type: 'sub-link', treeChar: '├' },
  { label: 'SoMe', href: '/projects/some', type: 'sub-link', treeChar: '└' },
  { label: 'Contact Me', href: '/contact', type: 'link' },
];

const NAV_TEXT_OFFSET = 'pl-[49px]';
const TREE_CHAR_LEFT = 'left-[28px]';

function isActive(href: string, pathname: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href;
}

export default function Sidebar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [pointerTop, setPointerTop] = useState<number | null>(null);

  const updatePointer = useCallback(() => {
    if (!navRef.current) {
      setPointerTop(null);
      return;
    }

    const activeItem = NAV_ITEMS.find(
      (item) => item.href && isActive(item.href, pathname),
    );
    if (!activeItem?.href) {
      setPointerTop(null);
      return;
    }

    const linkEl = linkRefs.current.get(activeItem.href);
    if (!linkEl) {
      setPointerTop(null);
      return;
    }

    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();
    setPointerTop(linkRect.top - navRect.top + linkRect.height / 2 - 5.5);
  }, [pathname]);

  useEffect(() => {
    updatePointer();
    window.addEventListener('resize', updatePointer);
    return () => window.removeEventListener('resize', updatePointer);
  }, [updatePointer]);

  return (
    <PanelColumn variant="sidebar" contentClassName="relative flex flex-col justify-center items-center">
      <div className="shrink-0" style={{ width: 'var(--sidebar-cap-w)' }}>
        <nav ref={navRef} className="sidebar-nav-items relative flex flex-col">
          {pointerTop !== null && (
            <img
              src="/assets/current-page-pointer.svg"
              alt=""
              aria-hidden
              className="absolute left-[7px] z-10 w-[17px] h-[11px] pointer-events-none animate-pointer-breathe transition-[top] duration-200"
              style={{ top: pointerTop }}
            />
          )}

          {NAV_ITEMS.map((item) => {
            const active = item.href ? isActive(item.href, pathname) : false;

            if (item.type === 'label') {
              return (
                <div
                  key={item.label}
                  className={`py-[12px] ${NAV_TEXT_OFFSET} text-[16px] leading-[21px] font-mono text-primary font-bold whitespace-nowrap`}
                >
                  {item.label}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                ref={(el) => {
                  if (el && item.href) {
                    linkRefs.current.set(item.href, el);
                  } else if (item.href) {
                    linkRefs.current.delete(item.href);
                  }
                }}
                href={item.href!}
                className={`relative block py-[12px] ${NAV_TEXT_OFFSET} pr-2 text-[16px] leading-[21px] font-mono font-bold`}
              >
                {item.treeChar ? (
                  <span
                    className={`absolute ${TREE_CHAR_LEFT} text-primary font-bold leading-[21px] pointer-events-none`}
                  >
                    {item.treeChar}
                  </span>
                ) : null}
                <span
                  className={`inline-block whitespace-nowrap px-2 py-0.5 transition-colors ${
                    active
                      ? 'bg-primary text-[#1B1A17]'
                      : 'text-primary border border-transparent hover:border-primary hover:bg-transparent'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </PanelColumn>
  );
}
