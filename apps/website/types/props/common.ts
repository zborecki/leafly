import { Children } from '@/types/common';

export interface IBaseProps {
  className?: string;
}

export interface IChildrenProps<T extends 'optional' | 'required' = 'required'> {
  children: T extends 'required' ? Children : Children | undefined;
}
