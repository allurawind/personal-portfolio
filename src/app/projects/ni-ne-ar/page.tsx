import SlideViewer from '@/components/SlideViewer';
import LightboxImage from '@/components/LightboxImage';
import ProjectNumber from '@/components/ProjectNumber';
import PanelColumn from '@/components/PanelColumn';
import ProjectMetaBar from '@/components/ProjectMetaBar';
import RightPanelCategoryHeader from '@/components/RightPanelCategoryHeader';
import RightPanelFooter from '@/components/RightPanelFooter';
import RightPanelScroll from '@/components/RightPanelScroll';

const slides = [
  {
    content: (
      <div className="flex items-center justify-center h-full p-4">
        <LightboxImage
          src="/assets/ni-near-poster.png"
          alt="Ni/Ne-ar Poster"
          className="max-h-full max-w-full object-contain"
        />      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full p-4 gap-3">
        <LightboxImage
          src="/assets/ni-near-analytics.png"
          alt="Pinterest analytics"
          className="max-h-[85%] max-w-full object-contain"
        />        <p className="text-[12px] font-mono text-secondary text-center">
          Some analytics from Pinterest!
        </p>
      </div>
    ),
  },
];

export default function NiNeArPage() {
  return (
    <>
      <PanelColumn variant="center" showBottomCap={false} className="min-h-0 flex-1" contentClassName="px-4 pt-4 pb-0 flex flex-col min-h-0">
        <ProjectNumber
          number="01"
          className="font-mono font-bold text-white text-heading-project leading-none mb-2"
        />
        <div className="flex-1 min-h-0 overflow-hidden">
          <SlideViewer slides={slides} />
        </div>

        <ProjectMetaBar left="Ni/Ne-ar Poster" right="Dec, 2025" />
      </PanelColumn>

      <PanelColumn variant="right" contentClassName="flex flex-col">
        <RightPanelScroll>
          <RightPanelCategoryHeader title="GRAPHIC DESIGN" />

          <div className="space-y-3 px-2 flex-1 text-[11px] font-mono-regular text-white leading-[1.6]">
            <p>
              The brief was to create a poster based on a homophone/homograph word of our choice.
              I immediately thought of Nier Automata, a game that&apos;s really dear to me. I took
              the initial &ldquo;Nier&rdquo; as my word of choice (a homophone) and related it
              with &ldquo;Near&rdquo;.
            </p>
            <p>
              Much like the game revolves around themes of humans and machines, I wanted to tie in
              the concept of humanity approaching technical &ldquo;Singularity&rdquo;.
            </p>
            <p>
              I used Figma as my software of choice to create this poster, mostly due to how
              comfortable I am on it and also for Figma&apos;s excellent layout guides.
            </p>
          </div>

          <RightPanelFooter
            note="The character was generated with the help of Gemini / Nanobanana Pro."
            href="https://pin.it/1Yum1zmAu"
            label="Pinterest Post Link"
          />
        </RightPanelScroll>
      </PanelColumn>
    </>
  );
}
