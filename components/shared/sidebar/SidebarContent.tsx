'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '@/components/ui/button';
import { SIDEBAR_LINKS } from '@/constants/global';
import { cn } from '@/lib/utils';

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarContent = ({ className }: SidebarContentProps) => {
  const pathname = usePathname();

  return (
    <ul className={cn('flex flex-col items-start gap-y-4', className)}>
      {SIDEBAR_LINKS.map((item) => {
        const isActive = (pathname.includes(item.route) && item.route.length > 1) || item.route === pathname;
        return (
          <li key={item.route} className="w-full">
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
              <p>{item.label}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarContent;
