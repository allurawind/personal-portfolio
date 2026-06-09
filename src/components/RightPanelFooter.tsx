interface RightPanelFooterProps {
  note?: string;
  href: string;
  label: string;
}

export default function RightPanelFooter({ note, href, label }: RightPanelFooterProps) {
  return (
    <div className="right-panel-footer shrink-0 mt-auto px-2 pt-3 pb-3">
      {note ? (
        <p className="text-[11px] font-mono text-accent leading-[1.6] mb-5">{note}</p>
      ) : null}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-mono text-link transition-colors"
      >
        {label}
      </a>
    </div>
  );
}
