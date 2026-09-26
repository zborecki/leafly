import { cn } from '@heroui/styles';

import { IPaperProps } from '@/components/shared/paper/types';
import { paperVariants } from '@/components/shared/paper/variants';

const Paper = ({
  as: Component = 'div',
  border,
  className,
  children,
  variant,
  ...props
}: IPaperProps) => (
  <Component
    className={cn(paperVariants({
      border: variant === 'outlined' && !border ? 'all' : border,
      variant,
      ...props
    }), className)}
  >
    {children}
  </Component>
);

export default Paper;
