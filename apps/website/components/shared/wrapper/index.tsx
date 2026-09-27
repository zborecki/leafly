import { cn } from '@heroui/styles';

import { IWrapperProps } from '@/components/shared/wrapper/types';
import { wrapperVariants } from '@/components/shared/wrapper/variants';

const Wrapper = ({
  as: Component = 'div',
  className,
  children,
  ...props
}: IWrapperProps) => (
  <Component className={cn(wrapperVariants(props), className)}>
    {children}
  </Component>
);

export default Wrapper;
