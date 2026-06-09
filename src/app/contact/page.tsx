import StatusPanel from '@/components/StatusPanel';
import PanelColumn, { PanelFrameLine } from '@/components/PanelColumn';
import InterestsBar from '@/components/InterestsBar';

export default function ContactPage() {
  return (
    <>
      <PanelColumn variant="center" showBottomCap={false} contentClassName="flex flex-col overflow-hidden">
        <div className="flex-1 min-h-0 flex flex-col pt-3">
          <div className="contact-divider-zone flex flex-col justify-center shrink-0">
            <div className="space-y-5 w-full">
              <div className="flex justify-between items-baseline gap-6">
                <span className="text-[16px] leading-[21px] font-mono font-bold text-primary uppercase shrink-0">
                  OPEN TO
                </span>
                <span className="text-[16px] leading-[21px] font-mono-regular text-white text-right">
                  Internships / Contract / Full Time
                </span>
              </div>
              <div className="flex justify-between items-baseline gap-6">
                <span className="text-[16px] leading-[21px] font-mono font-bold text-primary uppercase shrink-0">
                  LOCATION
                </span>
                <span className="text-[16px] leading-[21px] font-mono-regular text-white text-right">
                  Bangalore, IN / Remote / Open to Relocation
                </span>
              </div>
            </div>
          </div>

          <PanelFrameLine className="shrink-0" />

          <div className="flex-1 flex flex-col justify-center items-center min-h-0">
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/wati-ozzy-838b73384/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] leading-[21px] font-mono font-bold text-secondary hover:text-primary transition-colors"
              >
                [ LINKEDIN ]
              </a>
              <a
                href="https://github.com/allurawind"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] leading-[21px] font-mono font-bold text-secondary hover:text-primary transition-colors"
              >
                [ GITHUB ]
              </a>
              <a
                href="mailto:ozukumwatisunep@gmail.com"
                className="text-[16px] leading-[21px] font-mono font-bold text-secondary hover:text-primary transition-colors"
              >
                [ EMAIL ]
              </a>
            </div>
          </div>
        </div>

        <p className="shrink-0 pt-3 pb-3 text-left text-[12px] leading-[16px] font-mono-light text-white">
          Last updated: June 6, 2026
        </p>

        <InterestsBar />
      </PanelColumn>

      <StatusPanel />
    </>
  );
}
