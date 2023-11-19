'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { TooltipButton } from '@/components/shared/sidebar';
import { buttonVariants } from '@/components/ui/button';
import { SIDEBAR_LINKS } from '@/constants/global';
import { cn } from '@/lib/utils';

interface SidebarContentProps extends React.HTMLAttributes<HTMLUListElement> {
  isAllowExpanded?: boolean;
}

const SidebarContent = ({ className, isAllowExpanded, ...props }: SidebarContentProps) => {
  const pathname = usePathname();

  return (
    <ul className={cn('flex flex-col items-start gap-y-4', className)} {...props}>
      {SIDEBAR_LINKS.map((item) => {
        const isActive = (pathname.includes(item.route) && item.route.length > 1) || item.route === pathname;
        return (
          <li key={item.route} className="w-full">
            <TooltipButton content={item.label}>
              <Link
                href={item.route}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className:
                      'h-auto w-full justify-start gap-x-2 px-4 py-3 text-lg font-semibold hover:bg-background-darker dark:hover:bg-background-light',
                  }),
                  {
                    'bg-primary-gradient text-white hover:text-white': isActive,
                  },
                )}
              >
                <item.Icon />
                <p
                  className={cn({
                    'sm:hidden lg:inline-block': isAllowExpanded,
                  })}
                >
                  {item.label}
                </p>
              </Link>
            </TooltipButton>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarContent;