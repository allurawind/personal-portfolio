import PanelColumn from '@/components/PanelColumn';
import RightPanelScroll from '@/components/RightPanelScroll';
import InterestsBar from '@/components/InterestsBar';

interface SkillCategoryProps {
  header: string;
  skills: string[];
  align?: 'left' | 'right';
}

function SkillCategory({ header, skills, align = 'left' }: SkillCategoryProps) {
  return (
    <div className={align === 'right' ? 'text-right' : 'text-left'}>
      <p className="font-display font-bold text-primary text-[14px] mb-3">{header}</p>
      <ul className="space-y-[10px]">
        {skills.map((skill) => (
          <li key={skill} className="text-[13px] font-mono text-white">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ParametersSectionHeader({ title, isFirst = false }: { title: string; isFirst?: boolean }) {
  return (
    <div className={isFirst ? 'pb-2' : 'py-2'}>
      <p
        className={`px-1 font-mono font-bold text-primary uppercase py-1 ${
          isFirst
            ? 'text-[16px] leading-[21px]'
            : 'text-[12px] leading-[16px] tracking-wide'
        }`}
      >
        {title}
      </p>
      {isFirst && <div className="frame-line-h" />}
    </div>
  );
}

function ParametersListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-3">
      <ParametersSectionHeader title={title} />
      {items.map((item) => (
        <div
          key={item}
          className="py-[6px] px-1 text-[12px] leading-[16px] font-mono-regular text-white text-right"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default function SkillsPage() {
  return (
    <>
      <PanelColumn variant="center" showBottomCap={false} contentClassName="flex flex-col panel-scroll overflow-y-auto">
        <div className="flex-1 min-h-0 pt-3">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 w-full">
            <SkillCategory
              header="[ DESIGN ENGINEERING ]"
              align="left"
              skills={[
                'Design Token Architecture',
                'Component-Driven Development',
                'Interactive Prototyping',
                'Motion & Choreography',
              ]}
            />
            <SkillCategory
              header="[ DIGITAL PRODUCT DESIGN ]"
              align="right"
              skills={[
                'Information Architecture',
                'User Research',
                'Typographic System',
                'User Interface',
              ]}
            />
            <SkillCategory
              header="[ Brand Strategy ]"
              align="left"
              skills={[
                'Visual Identity System',
                'Narrative & Positioning',
                'Logo Design',
              ]}
            />
            <SkillCategory
              header="[ WORKING TOWARDS / LEARNING ]"
              align="right"
              skills={[
                'Agentic AI',
                'World Models (AI)',
                'Advanced Motion Design',
                'Building a Personal Brand',
              ]}
            />
          </div>
        </div>
        <InterestsBar />
      </PanelColumn>

      <PanelColumn variant="right" contentClassName="flex flex-col">
        <RightPanelScroll>
          <ParametersSectionHeader title="SYSTEM PARAMETERS" isFirst />

          <ParametersListSection
            title="DOMAINS"
            items={['Anything AI-Adjacent', 'Interactive Media']}
          />

          <ParametersListSection
            title="AESTHETIC ALIGNMENTS"
            items={[
              'Minimalism / Utilitarian',
              'Cyberpunk / Monospace',
              'FUI / HUD Design',
              'Retro-Compute / 16-bit',
            ]}
          />

          <div className="mb-3">
            <ParametersSectionHeader title="OPERATIONAL METRICS" />
            <div className="flex justify-between py-[6px] px-1">
              <span className="text-[12px] leading-[16px] font-mono-regular text-white">
                Core Input
              </span>
              <span className="text-[12px] leading-[16px] font-mono-regular text-white text-right">
                160 WPM / Alpha
              </span>
            </div>
            <div className="flex justify-between py-[6px] px-1 items-start">
              <span className="text-[12px] leading-[16px] font-mono-regular text-white leading-tight">
                Adaptive<br />Iteration Rate
              </span>
              <span className="text-[12px] leading-[16px] font-mono-regular text-white text-right">
                High / Continuous
              </span>
            </div>
          </div>

          <div className="mb-3">
            <ParametersSectionHeader title="Signal & Frequency" />
            <div className="flex justify-between py-[6px] px-1">
              <span className="text-[12px] leading-[16px] font-mono-regular text-white">
                Audio Core
              </span>
              <span className="text-[12px] leading-[16px] font-mono-regular text-white text-right">
                Constant Feed Required
              </span>
            </div>
          </div>
        </RightPanelScroll>
      </PanelColumn>
    </>
  );
}
