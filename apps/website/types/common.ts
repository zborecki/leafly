import { MessageKeys, Messages, NestedKeyOf } from 'next-intl';
import { ReactNode } from 'react';

export type Children = ReactNode | Array<ReactNode>;

export type ClassNames<K extends string> = {
  [P in K]?: string;
};

export type Message = MessageKeys<Messages, NestedKeyOf<Messages>> | (string & {});

export type Nullable<T> = T | null;
