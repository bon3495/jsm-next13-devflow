import { SignedIn, UserButton } from '@clerk/nextjs';

import { ModeToggle } from '@/components/shared/navbar';
import LoginLink from '@/components/shared/navbar/LoginLink';
import MobileNavbar from '@/components/shared/navbar/MobileNavbar';
import { GlobalSearch } from '@/components/shared/search';
import { ROUTES_NAME } from '@/constants/routes';
import { COLORS } from '@/constants/styles';
import { getColor } from '@/lib/helpers';

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between gap-5 px-6 py-4 sm:px-12">
      <LoginLink href={ROUTES_NAME.HOME} />

      <GlobalSearch />

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
                colorPrimary: getColor(COLORS.PRIMARY),
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
