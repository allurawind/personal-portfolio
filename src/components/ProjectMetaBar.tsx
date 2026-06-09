interface ProjectMetaBarProps {
  left: string;
  right: string;
}

export default function ProjectMetaBar({ left, right }: ProjectMetaBarProps) {
  return (
    <div className="project-meta-bar shrink-0 mt-auto w-full border-t border-t-[var(--color-frame-line)] divider-full-bleed">
      <div className="flex justify-between items-center py-2 text-[12px] leading-[16px] font-mono font-bold text-white border-b border-b-[var(--color-frame-line)]">
        <span>{left}</span>
        <span>{right}</span>
      </div>
    </div>
  );
}
