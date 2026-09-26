'use client';

import { cn } from '@heroui/styles';

import { TextProps } from '@/components/shared/text/types';
import { textVariants } from '@/components/shared/text/variants';
import { useMessages } from '@/hooks/useMessage';
import { Link } from '@/i18n/navigation';

const Text = ({
  as = 'p', className, label, href, isExternal, ...props
}: TextProps) => {
  const { t } = useMessages();

  const variants = textVariants(props);
  const Component = as === 'a' ? Link : as;

  return (
    <Component
      className={cn(variants, className)}
      href={href as string}
      target={isExternal ? '_blank' : undefined}
    >
      {t(label)}
    </Component>
  );
};

export default Text;
