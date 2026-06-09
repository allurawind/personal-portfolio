import LightboxImage from '@/components/LightboxImage';
import ProjectNumber from '@/components/ProjectNumber';
import PanelColumn from '@/components/PanelColumn';
import ProjectMetaBar from '@/components/ProjectMetaBar';
import RightPanelCategoryHeader from '@/components/RightPanelCategoryHeader';
import RightPanelFooter from '@/components/RightPanelFooter';
import RightPanelScroll from '@/components/RightPanelScroll';

export default function StratumPage() {
  return (
    <>
      <PanelColumn variant="center" showBottomCap={false} className="min-h-0 flex-1" contentClassName="px-4 pt-4 pb-0 flex flex-col min-h-0">
        <ProjectNumber
          number="02"
          className="font-mono font-bold text-white text-heading-project leading-none mb-2"
        />
        <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden">
          <LightboxImage
            src="/assets/stratum-logo.png"
            alt="Stratum logo"
            className="max-w-[80%] h-auto w-auto object-contain"
          />        </div>

        <ProjectMetaBar left="B2B // SaaS Branding Project" right="Sep, 2025" />
      </PanelColumn>

      <PanelColumn variant="right" contentClassName="flex flex-col">
        <RightPanelScroll>
          <RightPanelCategoryHeader title="BRANDING / LOGO DESIGN" />

          <div className="space-y-3 px-2 flex-1 text-[11px] font-mono-regular text-white leading-[1.6]">
            <p>
              A personal branding project I undertook for my Branding class. I decided to work on
              a real-world problem my uncle was facing of trying to find the best ERP software. I
              ended up recommending Odoo but it didn&apos;t stop there.
            </p>
            <p>
              I was just learning about how Agentic AI was &ldquo;the next big thing&rdquo; and
              wanted to try a conceptual project based on it—and that&apos;s how &ldquo;Stratum&rdquo;
              was born.
            </p>
            <p>
              It would be an Agent-first interface with chat function that connects to their ERP
              (Odoo) to help them find problems faster and create robust solutions.
            </p>
            <p>
              Lesson learned: Fast forward to 2026, if you want to succeed as a start-up and
              &ldquo;out-compete&rdquo; the giants, speed and distribution is your biggest advantage.
            </p>
          </div>

          <RightPanelFooter
            href="https://www.figma.com/deck/i3AJm7z5rPdLCrT5VnhSdK/Stratum--Branding-Project-?node-id=1-42&t=izUWOdQW0w3ULdwT-1"
            label="Figma Slide link"
          />
        </RightPanelScroll>
      </PanelColumn>
    </>
  );
}
