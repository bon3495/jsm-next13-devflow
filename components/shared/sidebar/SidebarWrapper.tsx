import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface SidebarWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarWrapper = ({ children, className, ...props }: SidebarWrapperProps) => {
  return (
    <aside
      {...props}
      className={cn(
        'sm: sticky top-[80px] flex h-[calc(100vh-80px)] flex-col overflow-y-auto p-6 pt-12 dark:shadow-none lg:w-[240px]',
        className,
      )}
    >
      <ScrollArea>{children}</ScrollArea>
    </aside>
  );
};

export default SidebarWrapper;
