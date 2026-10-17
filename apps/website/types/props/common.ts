import { Children } from '@/types/common';

export interface IBaseProps {
  className?: string;
}

export type ChildrenProps<T extends 'optional' | 'required' = 'required'> = T extends 'required'
  ? { children: Children }
  : { children?: Children };
