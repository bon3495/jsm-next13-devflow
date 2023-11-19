import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

import { LoginLink, MobileNavbarContent } from '@/components/shared/navbar';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ROUTES_NAME } from '@/constants/routes';

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="hidden justify-center max-sm:flex" variant="ghost" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader>
          <SheetTitle>
            <LoginLink isMobile href={ROUTES_NAME.HOME} />
          </SheetTitle>
        </SheetHeader>
        <MobileNavbarContent />
        <SheetFooter className="mb-5 mt-auto flex flex-col gap-y-4">
          <SheetClose asChild>
            <Link href={ROUTES_NAME.SIGN_IN}>
              <Button className="w-full">Sign In</Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={ROUTES_NAME.SIGN_UP}>
              <Button className="w-full" variant="secondary">
                Sign Up
              </Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
