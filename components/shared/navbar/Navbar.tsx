import { SignedIn, UserButton } from '@clerk/nextjs';

import { ModeToggle } from '@/components/shared/navbar';
import LoginLink from '@/components/shared/navbar/LoginLink';
import MobileNavbar from '@/components/shared/navbar/MobileNavbar';
import { ROUTES_NAME } from '@/constants/routes';

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between gap-5 bg-background-light/80 px-6 py-4 shadow-navbar backdrop-blur-xl sm:px-12">
      <LoginLink href={ROUTES_NAME.HOME} />

      <div>GlobalSearch</div>

      <div className="flex items-center justify-between gap-4">
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
