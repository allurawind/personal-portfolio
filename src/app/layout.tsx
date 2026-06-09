import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Geist_Mono, Nunito } from 'next/font/google';
import './globals.css';
import DynamicBackground from '@/components/DynamicBackground';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const fotRodin = localFont({
  src: '../fonts/fot-rodin-pro-ub.otf',
  variable: '--font-fot-rodin',
  weight: '700',
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['700', '800'],
});

export const metadata: Metadata = {
  title: 'Watisunep Ozukum',
  description: 'UX Designer / Design Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fotRodin.variable} ${geistMono.variable} ${nunito.variable} h-full`}
    >
      <body className="h-full flex flex-col py-[clamp(16px,2.5vw,24px)] px-[var(--page-inset)]">
        <DynamicBackground />
        <div className="relative z-10 flex flex-col flex-1 min-h-0 w-full max-w-[1440px] mx-auto">
          <Header />
          <div className="flex flex-1 min-h-0 items-stretch overflow-hidden gap-[var(--col-gap)]">
            <Sidebar />
            <div className="flex flex-1 min-h-0 overflow-hidden gap-[var(--col-gap)] min-w-0">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
