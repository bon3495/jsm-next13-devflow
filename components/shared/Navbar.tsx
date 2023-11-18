import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNavbar from '@/components/shared/MobileNavbar';
import { ModeToggle } from '@/components/shared/ToggleTheme';
import { ROUTES_NAME } from '@/constants/routes';

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between gap-5 bg-background-light/80 px-6 py-4 shadow-navbar backdrop-blur-xl sm:px-12">
      <Link href={ROUTES_NAME.HOME} className="flex items-center gap-2">
        <Image width={24} height={24} alt="Dev Flow" src="/assets/images/site-logo.svg" />
        <p className="flex items-center gap-1 font-spaceGrotesk text-2xl font-bold tracking-tighter max-sm:hidden">
          <span className="text-accent-foreground">Dev</span>
          <span className="text-primary">Overflow</span>
        </p>
      </Link>
      GlobalSearch
      <div className="flex items-center justify-between gap-5">
        <ModeToggle />
        <SignedIn>
          <UserButton
            afterSignOutUrl={ROUTES_NAME.HOME}
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10',
              },
              variables: {
                colorPrimary: 'hsl(346.8, 77.2%, 49.8%)',
              },
            }}
          />
        </SignedIn>

        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
