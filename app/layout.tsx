import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GDG at Rungta University',
  description: 'Events, workshops and things worth building. Find GDG at Rungta University everywhere.',
  openGraph: { title: 'GDG at Rungta University', description: 'Events, workshops and things worth building.', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'GDG at Rungta University', description: 'Events, workshops and things worth building.' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
