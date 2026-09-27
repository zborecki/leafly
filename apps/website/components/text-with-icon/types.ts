import { ReactNode } from 'react';

import { TextProps } from '@/components/shared/text/types';
import { TextWithIconVariantsProps } from '@/components/text-with-icon/variants';
import { ClassNames } from '@/types/common';
import { IBaseProps } from '@/types/props/common';

export interface ITextWithIconProps
  extends IBaseProps,
  TextWithIconVariantsProps,
  Pick<TextProps, 'label'> {
  classNames?: ClassNames<'icon'>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export type TextWithIconMapper = {
  icon: {
    size: number;
  }
  text: Pick<TextProps, 'size'>
}
