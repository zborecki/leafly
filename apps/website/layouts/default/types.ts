import { ClassNames } from '@/types/common';
import { IBaseProps, ChildrenProps } from '@/types/props/common';

export interface IDefaultHeaderProps extends IBaseProps, ChildrenProps<'optional'> {
  classNames?: ClassNames<'wrapper'>;
}
