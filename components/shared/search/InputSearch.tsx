'use client';

import { LucideIcon } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface InputSearchProps {
  Icon: LucideIcon;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  containerClassName?: string;
}

const InputSearch = ({
  Icon,
  containerClassName,
  iconPosition = 'left',
  className,
  ...props
}: InputSearchProps & typeof Input.defaultProps) => {
  const isIconLeft = iconPosition === 'left';
  const isIconRight = iconPosition === 'right';

  return (
    <div
      className={cn(
        'relative flex min-h-[48px] grow items-center gap-4 rounded bg-background-dark dark:bg-background-light',
        containerClassName,
      )}
    >
      <Icon
        className={cn('absolute', {
          'left-4': isIconLeft,
          'right-4': isIconRight,
        })}
      />

      <Input
        {...props}
        className={cn(
          'h-12 border-none bg-background-dark shadow-none outline-none transition-all focus:bg-background-lighter focus:shadow-search-global focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-background-light',
          className,
          {
            'pl-14': isIconLeft,
            'pr-14': isIconRight,
          },
        )}
      />
    </div>
  );
};

export default InputSearch;
