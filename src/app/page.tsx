import StatusPanel from '@/components/StatusPanel';
import PanelColumn from '@/components/PanelColumn';
import InterestsBar from '@/components/InterestsBar';

export default function HomePage() {
  return (
    <>
      <PanelColumn variant="center" showBottomCap={false}>
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden w-full">
          <div className="flex-1 min-h-0 overflow-hidden pt-3">
            <div className="space-y-0 text-[16px] leading-[21px] font-mono font-bold text-white">
              <p>
                As a second-year Product Design (UI/UX) student in college, I&apos;ve been gradually
                upscaling myself in the age of AI. I can not only design static UI and prototype on
                Figma but utilize tools like Claude Code / Cursor to rapidly prototype and work closer
                to code. As a result, I&apos;m better able to coordinate with the dev team.
              </p>
              <p className="mt-[21px]">
                Working across brand identity, interactive web experiences, and product design
                systems, my work reflects a single core believe: that the best digital products and
                experiences come from someone who understands both the visual language and the
                technical constraints shaping them.
              </p>
              <p className="mt-[21px]">
                This portfolio contains four projects across four different design/problem domains
                (graphic design, branding, logo design, design engineering, and product design).
              </p>
            </div>
          </div>

          <p className="shrink-0 pt-3 pb-3 text-left text-[12px] leading-[16px] font-mono-light text-white">
            Last updated: June 6, 2026
          </p>

          <InterestsBar />
        </div>
      </PanelColumn>

      <StatusPanel />
    </>
  );
}
