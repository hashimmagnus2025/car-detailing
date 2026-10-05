import './globals.css';
import { Bodoni_Moda, DM_Mono, Outfit } from 'next/font/google';
import StudioShell from '../components/StudioShell';

// Self-hosted via next/font: no external request and no mid-animation font swap like the old Google Fonts @import caused.
const bodoniModa = Bodoni_Moda({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-bodoni', display: 'swap' });
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dm-mono', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-outfit', display: 'swap' });

export const metadata = {
  title: 'APEX AUTO STUDIO — Precision Care. Unmistakable Finish.',
  description: 'Thoughtful detailing, paint refinement and protection for the cars you care about.',
  openGraph: { title: 'APEX AUTO STUDIO', description: 'Precision Care. Unmistakable Finish.', type: 'website' },
};

export default function RootLayout({ children }) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${bodoniModa.variable} ${dmMono.variable} ${outfit.variable}`}><body><StudioShell>{children}</StudioShell></body></html>;
}
