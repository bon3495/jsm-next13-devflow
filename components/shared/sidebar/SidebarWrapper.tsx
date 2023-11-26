import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface SidebarWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SidebarWrapper = ({ children, className }: SidebarWrapperProps) => {
  return (
    <aside
      className={cn(
        'sticky top-[80px] flex h-[calc(100vh-80px)] w-[105px] flex-col overflow-y-auto transition-all duration-200 dark:shadow-none lg:w-[260px]',
        className,
      )}
    >
      <ScrollArea className="flex-1 p-6 pt-12">{children}</ScrollArea>
    </aside>
  );
};

export default SidebarWrapper;
