import { PaperVariantsProps } from '@/components/shared/paper/variants';
import { IBaseProps, ChildrenProps } from '@/types/props/common';

type PaperComponentType = 'div' | 'main' | 'section' | 'header';

export interface IPaperProps
  extends IBaseProps, ChildrenProps, PaperVariantsProps {
  as?: PaperComponentType
}
