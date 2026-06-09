export const PAGE_BACKGROUNDS: Record<string, string> = {
  '/': 'rgb(12, 8, 1)',
  '/skills': 'rgb(12, 8, 1)',
  '/contact': 'rgb(12, 8, 1)',
  '/projects/ni-ne-ar': '#050505',
  '/projects/stratum': '#0D0813',
  '/projects/memoryscape': '#060810',
  '/projects/some': '#0A0806',
};

export function getPageBackground(pathname: string): string {
  return PAGE_BACKGROUNDS[pathname] ?? '#1A1A14';
}

export function getPageBackgroundWithAlpha(pathname: string, alpha: number): string {
  const color = getPageBackground(pathname);

  if (color.startsWith('#')) {
    const hex = color.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const rgbMatch = color.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
  if (rgbMatch) {
    return `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${alpha})`;
  }

  return color;
}
