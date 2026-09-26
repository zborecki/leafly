import { PaperVariantsProps } from '@/components/shared/paper/variants';
import { IBaseProps, IChildrenProps } from '@/types/props/common';

type PaperComponentType = 'div' | 'main' | 'section';

export interface IPaperProps
  extends IBaseProps, IChildrenProps, PaperVariantsProps {
  as?: PaperComponentType
}
