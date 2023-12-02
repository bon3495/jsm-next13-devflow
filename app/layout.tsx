import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { RootLayoutProps } from '@/types/global';

import '@/styles/global.css';

import { fontInter, fontSpaceGrotesk } from '@/lib/fonts';

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
          'min-h-screen bg-background font-inter text-foreground antialiased',
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
            {children}
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
