import { type ReactNode } from 'react';

type PanelVariant = 'sidebar' | 'center' | 'right';

interface PanelColumnProps {
  variant: PanelVariant;
  className?: string;
  contentClassName?: string;
  showTopCap?: boolean;
  showBottomCap?: boolean;
  children: ReactNode;
}

function PanelCapLine({ variant }: { variant: PanelVariant }) {
  if (variant === 'sidebar') {
    return (
      <div className="flex justify-center w-full shrink-0">
        <div
          className="frame-line-h"
          style={{ width: 'var(--sidebar-cap-w)' }}
        />
      </div>
    );
  }

  if (variant === 'center') {
    return <div className="shrink-0 frame-line-h w-full self-stretch" />;
  }

  return <div className="shrink-0 w-full frame-line-h" />;
}

export default function PanelColumn({
  variant,
  className = '',
  contentClassName = '',
  showTopCap = true,
  showBottomCap = true,
  children,
}: PanelColumnProps) {
  const layoutClass =
    variant === 'sidebar'
      ? 'layout-sidebar'
      : variant === 'right'
        ? 'layout-right'
        : 'layout-center';

  return (
    <div
      className={`flex flex-col min-h-0 ${layoutClass} ${variant === 'center' ? 'self-stretch' : ''} ${className}`}
    >
      {showTopCap && <PanelCapLine variant={variant} />}
      <div className={`flex-1 min-h-0 overflow-hidden flex flex-col w-full ${contentClassName}`}>
        {children}
      </div>
      {showBottomCap && <PanelCapLine variant={variant} />}
    </div>
  );
}

export function PanelFrameLine({ className = '' }: { className?: string }) {
  return (
    <div className={`shrink-0 w-full frame-line-h divider-full-bleed ${className}`} />
  );
}
