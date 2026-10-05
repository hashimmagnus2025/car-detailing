import './globals.css';
import StudioShell from '../components/StudioShell';

export const metadata = {
  title: 'APEX AUTO STUDIO — Precision Care. Unmistakable Finish.',
  description: 'Thoughtful detailing, paint refinement and protection for the cars you care about.',
  openGraph: { title: 'APEX AUTO STUDIO', description: 'Precision Care. Unmistakable Finish.', type: 'website' },
};

export default function RootLayout({ children }) {
  return <html lang="en" data-scroll-behavior="smooth"><body><StudioShell>{children}</StudioShell></body></html>;
}
