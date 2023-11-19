import Link from 'next/link';

import { SidebarContent, SidebarWrapper } from '@/components/shared/sidebar';
import { Button } from '@/components/ui/button';
import { ROUTES_NAME } from '@/constants/routes';

const LeftSidebar = () => {
  return (
    <SidebarWrapper className="left-0 border-r dark:border-background-lighter">
      <SidebarContent />

      <section className="flex flex-col gap-y-4">
        <Link href={ROUTES_NAME.SIGN_IN}>
          <Button className="w-full" size="lg" variant="secondary">
            Sign In
          </Button>
        </Link>
        <Link href={ROUTES_NAME.SIGN_UP}>
          <Button className="h-12 w-full bg-background-lighter" variant="outline" size="lg">
            Sign Up
          </Button>
        </Link>
      </section>
    </SidebarWrapper>
  );
};

export default LeftSidebar;
