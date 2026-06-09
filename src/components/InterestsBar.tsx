const INTERESTS = 'Design | Fashion | Technology | Music | Cosplay | Finance';

export default function InterestsBar() {
  return (
    <div className="interests-bar shrink-0 w-full border-t border-t-[var(--color-frame-line)]">
      <p className="interests-bar-text text-center py-2 text-[12px] leading-[16px] font-mono font-bold text-white border-b border-b-[var(--color-frame-line)] border-x-0">
        {INTERESTS}
      </p>
    </div>
  );
}

export { INTERESTS };
