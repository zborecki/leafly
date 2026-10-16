import { LogoVariantsProps } from '@/components/shared/logo/variants';
import { TextComponentType } from '@/components/shared/text/types';
import { LinkAPI } from '@/types/api/common';
import { ClassNames } from '@/types/common';

export interface ILogoProps extends LogoVariantsProps, Partial<Pick<LinkAPI, 'href'>> {
  as?: Exclude<TextComponentType, 'a'>
  classNames?: ClassNames<'logomark' | 'logotype'>;
  enableHref?: boolean;
}
