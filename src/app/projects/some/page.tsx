import LightboxImage from '@/components/LightboxImage';
import ProjectNumber from '@/components/ProjectNumber';
import PanelColumn from '@/components/PanelColumn';
import ProjectMetaBar from '@/components/ProjectMetaBar';
import RightPanelCategoryHeader from '@/components/RightPanelCategoryHeader';
import RightPanelFooter from '@/components/RightPanelFooter';
import RightPanelScroll from '@/components/RightPanelScroll';

export default function SoMePage() {
  return (
    <>
      <PanelColumn variant="center" showBottomCap={false} className="min-h-0 flex-1" contentClassName="px-4 pt-4 pb-0 flex flex-col min-h-0">
        <ProjectNumber
          number="04"
          className="font-mono font-bold text-white text-heading-project leading-none mb-4"
        />
        <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden">
          <div className="flex gap-[clamp(16px,2.5vw,24px)] items-start justify-center">
            <LightboxImage
              src="/assets/some-explorepage-preview.gif"
              alt="SoMe Explore page preview"
              className="shrink-0 w-[clamp(95px,10.1vw,145px)] aspect-[184/400] object-contain block"
            />
            <LightboxImage
              src="/assets/some-fyp-preview.png"
              alt="SoMe For You page preview"
              className="shrink-0 w-[clamp(95px,10.1vw,145px)] aspect-[184/400] object-contain block"
            />          </div>
        </div>

        <ProjectMetaBar left="B2C // Fashion E-Commerce x Social Media" right="May, 2026" />
      </PanelColumn>

      <PanelColumn variant="right" contentClassName="flex flex-col">
        <RightPanelScroll>
          <RightPanelCategoryHeader title="App Design &amp; Dev." />

          <div className="space-y-3 px-2 flex-1 text-[11px] font-mono-regular text-white leading-[1.55]">
            <p>
              What began as a two-person group project for our UI/UX class turned into something
              more. My teammate and I decided to focus on a problem within the online thrifting
              space.
            </p>
            <p>
              All we had to do was conduct User Research, create UI screens on Figma, and build a
              simple Prototype—which we did.
            </p>
            <p>
              The research showed 3 problems users faced, which the app solves: Discoverability
              (TikTok-like interface), Search (better filters), and Uniqueness (personal style
              beat out saving money).
            </p>
          </div>

          <RightPanelFooter
            href="https://some-prototype.vercel.app/"
            label="Try out the interactive demo!"
          />
        </RightPanelScroll>
      </PanelColumn>
    </>
  );
}
