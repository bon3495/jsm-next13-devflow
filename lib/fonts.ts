import { Inter, Space_Grotesk as SpaceGrotesk } from 'next/font/google';

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const fontSpaceGrotesk = SpaceGrotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk',
});
