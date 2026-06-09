import VideoFrame from '@/components/VideoFrame';
import ProjectNumber from '@/components/ProjectNumber';
import PanelColumn from '@/components/PanelColumn';
import ProjectMetaBar from '@/components/ProjectMetaBar';
import RightPanelCategoryHeader from '@/components/RightPanelCategoryHeader';
import RightPanelFooter from '@/components/RightPanelFooter';
import RightPanelScroll from '@/components/RightPanelScroll';

export default function MemoryScapePage() {
  return (
    <>
      <PanelColumn variant="center" showBottomCap={false} className="min-h-0 flex-1" contentClassName="px-4 pt-4 pb-0 flex flex-col min-h-0">
        <ProjectNumber
          number="03"
          className="font-mono font-bold text-white text-heading-project leading-none mb-4"
        />
        <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden">
          <VideoFrame
            src="/assets/memoryscape-preview-cropped.mp4"
            href="https://memoryscape-omega.vercel.app"
            ariaLabel="MemoryScape preview"
          />
        </div>

        <ProjectMetaBar left="MemoryScape" right="April, 2026" />
      </PanelColumn>

      <PanelColumn variant="right" contentClassName="flex flex-col">
        <RightPanelScroll>
          <RightPanelCategoryHeader title="Website Design & Dev." />

          <div className="space-y-3 px-2 flex-1 text-[11px] font-mono-regular text-white leading-[1.55]">
            <p>
              This was my first time actually deploying a fully functional live website and, as a
              result, the one that taught me the most.
            </p>
            <p>
              I was originally planning on sticking with Figma for the project but for the features
              I actually wanted to implement, I figured just prototyping on Figma won&apos;t cut it.
            </p>
            <p>
              This led to me trying out Cursor (AI-powered IDE for coding) and my workflow looked
              something like this: Figma (static screen, pop-up UI elements) &gt; Cursor (animation,
              turning design into code) &gt; Vercel (deployment).
            </p>
            <p>
              Since time was a constraint, I learned to be agile and working backwards: Finish
              first, document later. I stopped trying to let Perfect be the enemy of Done.
            </p>
          </div>

          <RightPanelFooter
            href="https://github.com/allurawind/memoryscape"
            label="On GitHub"
          />
        </RightPanelScroll>
      </PanelColumn>
    </>
  );
}
