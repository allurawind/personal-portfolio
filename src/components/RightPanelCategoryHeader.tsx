interface RightPanelCategoryHeaderProps {
  title: string;
}

export default function RightPanelCategoryHeader({ title }: RightPanelCategoryHeaderProps) {
  return (
    <div className="shrink-0 py-3">
      <p className="px-2 text-[16px] leading-[21px] font-mono font-bold text-primary uppercase">
        {title}
      </p>
    </div>
  );
}
