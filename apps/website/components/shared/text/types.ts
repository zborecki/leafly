import { TextVariantsProps } from '@/components/shared/text/variants';
import { BaseLinkAPI } from '@/types/api/common';
import { Message } from '@/types/common';
import { IBaseProps } from '@/types/props/common';

export type TextComponentType = 'a' | 'b' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'strong' | 'p';

export interface IBaseTextProps extends IBaseProps, TextVariantsProps {
  label: Message;
}

interface ITextLinkProps extends IBaseTextProps, BaseLinkAPI {
  as: 'a';
}

interface ITextElementProps extends IBaseTextProps {
  as?: Exclude<TextComponentType, 'a'>;
  href?: never;
  isExternal?: never;
}

export type TextProps = ITextLinkProps | ITextElementProps;
