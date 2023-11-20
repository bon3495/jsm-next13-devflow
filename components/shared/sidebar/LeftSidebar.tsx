import Link from 'next/link';
import { SignedOut } from '@clerk/nextjs';
import { LogIn, UserCircle2 } from 'lucide-react';

import { SidebarContent, SidebarWrapper, TooltipButton } from '@/components/shared/sidebar';
import { Button } from '@/components/ui/button';
import { ROUTES_NAME } from '@/constants/routes';

const LeftSidebar = () => {
  return (
    <SidebarWrapper className="left-0 justify-between border-r dark:border-background-lighter max-sm:hidden">
      <SidebarContent isAllowExpanded />

      <SignedOut>
        <section className="flex flex-col gap-y-4">
          <TooltipButton content="Sign In">
            <Link href={ROUTES_NAME.SIGN_IN}>
              <Button className="w-full p-4" size="lg" variant="secondary">
                <UserCircle2 className="lg:hidden" />
                <span className="sm:hidden lg:inline-block">Sign In</span>
              </Button>
            </Link>
          </TooltipButton>
          <TooltipButton content="Sign Up">
            <Link href={ROUTES_NAME.SIGN_UP}>
              <Button className="h-12 w-full bg-background-lighter p-4" variant="outline" size="lg">
                <LogIn className="lg:hidden" />
                <span className="sm:hidden lg:inline-block">Sign Up</span>
              </Button>
            </Link>
          </TooltipButton>
        </section>
      </SignedOut>
    </SidebarWrapper>
  );
};

export default LeftSidebar;
