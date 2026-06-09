import PanelColumn from '@/components/PanelColumn';
import RightPanelScroll from '@/components/RightPanelScroll';
import TP7Player from '@/components/TP7Player';

interface StatusRowProps {
  label: string;
  value: string;
}

function StatusRow({ label, value }: StatusRowProps) {
  return (
    <div className="flex justify-between items-baseline gap-2 py-[6px] px-1">
      <span className="text-[12px] leading-[16px] font-mono font-bold text-white uppercase tracking-wide shrink-0">
        {label}
      </span>
      <span className="text-[12px] leading-[16px] font-mono-regular text-white text-right">
        {value}
      </span>
    </div>
  );
}

function SectionHeader({ title, isFirst = false }: { title: string; isFirst?: boolean }) {
  return (
    <div className={isFirst ? 'pb-2' : 'py-2'}>
      <p className="py-1 px-1 text-[16px] leading-[21px] font-mono font-bold text-primary uppercase">
        {title}
      </p>
      {isFirst && <div className="frame-line-h" />}
    </div>
  );
}

interface StatusPanelProps {
  showObsession?: boolean;
}

export default function StatusPanel({ showObsession = true }: StatusPanelProps) {
  return (
    <PanelColumn variant="right" contentClassName="flex flex-col">
      <RightPanelScroll>
        <SectionHeader title="STATUS" isFirst />
        <StatusRow label="MODEL DESIGNATION" value="Allura" />
        <StatusRow label="LEVEL" value="21" />
        <StatusRow label="MBTI" value="INFJ-T" />
        <StatusRow label="CLASS" value="Generalist" />

        <SectionHeader title="EQUIPPED" />
        <StatusRow label="PRIMARY" value="Figma" />
        <StatusRow label="SECONDARY" value="Cursor" />
        <StatusRow label="RUNTIME" value="Next.js / Tailwind" />

        <SectionHeader title="WEAKNESS" />
        <div className="flex justify-end py-[6px] px-1">
          <span className="text-[12px] leading-[16px] font-mono-regular text-white">
            Perfectionism
          </span>
        </div>

        <SectionHeader title="CURRENT OBSESSION" />
        {showObsession && <TP7Player />}
      </RightPanelScroll>
    </PanelColumn>
  );
}
