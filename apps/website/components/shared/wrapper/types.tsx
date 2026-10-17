import { WrapperVariantsProps } from '@/components/shared/wrapper/variants';
import { IBaseProps, ChildrenProps } from '@/types/props/common';

type WrapperComponentType = 'div' | 'main' | 'section';

export interface IWrapperProps
  extends IBaseProps, ChildrenProps, WrapperVariantsProps {
  as?: WrapperComponentType
}
