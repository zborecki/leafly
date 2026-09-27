import {
  cloneElement,
  isValidElement,
  type ReactNode
} from 'react';

export const cloneReactNode = <T extends object>(
  element: ReactNode,
  props?: Partial<T>
) => {
  if (!isValidElement<T>(element)) return element;

  return cloneElement(element, props);
};
