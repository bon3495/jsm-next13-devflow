import type { Metadata } from 'next';
import { Inter, Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { ThemeProvider } from '@/components/theme-provider';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { RootLayoutProps } from '@/types/global';

import '@/styles/global.css';

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const fontSpaceGrotesk = SpaceGrotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk',
});

export const metadata: Metadata = {
  title: 'Dev Overflow',
  description:
    'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate withe developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-inter antialiased',
          fontInter.variable,
          fontSpaceGrotesk.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClerkProvider
            appearance={{
              elements: {
                formButtonPrimary: 'bg-primary',
                footerActionLink: 'primary-text-gradient hover:text-primary',
              },
            }}
          >
            <ScrollArea className="h-screen">
              {children}
              <ScrollBar className="relative z-[100]" />
            </ScrollArea>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
