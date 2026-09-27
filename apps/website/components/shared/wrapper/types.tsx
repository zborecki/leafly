import { WrapperVariantsProps } from '@/components/shared/wrapper/variants';
import { IBaseProps, IChildrenProps } from '@/types/props/common';

type WrapperComponentType = 'div' | 'main' | 'section';

export interface IWrapperProps
  extends IBaseProps, IChildrenProps, WrapperVariantsProps {
  as?: WrapperComponentType
}
