import React from 'react';
import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import { ROUTES_NAME } from '@/constants/routes';
import { cn } from '@/lib/utils';

interface LoginLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  isMobile?: boolean;
}

const LoginLink = ({ href = ROUTES_NAME.HOME, className, isMobile, ...props }: LoginLinkProps) => {
  return (
    <Link href={href} className={cn('flex origin-left items-center gap-2', className)} {...props}>
      <Logo className="text-primary" />
      <p
        className={cn('flex items-center gap-1 font-spaceGrotesk text-2xl font-bold tracking-tighter', {
          'max-sm:hidden': !isMobile,
        })}
      >
        <span className="text-accent-foreground">Dev</span>
        <span className="text-primary">Overflow</span>
      </p>
    </Link>
  );
};

export default LoginLink;
