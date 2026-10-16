import { cn } from '@heroui/styles';
import { LinkProps } from 'next/link';

import Plant from '@/components/icons/plant';
import { ILogoProps } from '@/components/shared/logo/types';
import { logoVariants } from '@/components/shared/logo/variants';
import Text from '@/components/shared/text';
import { COMPANY_NAME } from '@/consts/brand';
import { ROUTE } from '@/consts/routing';
import { Link } from '@/i18n/navigation';

const Logo = ({
  as, classNames, enableHref, href = ROUTE.INDEX, ...props
}: ILogoProps) => {
  const Component = enableHref ? Link : 'div';

  const classes = logoVariants(props);

  return (
    <Component
      className={cn(classes.base())}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(enableHref ? { href } as LinkProps as any : {})}
    >
      <Plant className={cn(classes.logomark(), classNames?.logomark)} size={32} />
      <Text
        as={as}
        className={cn(classes.logotype(), classNames?.logotype)}
        color='inherit'
        label={COMPANY_NAME}
        size='logo'
        weight='medium'
      />
    </Component>
  );
};

export default Logo;
