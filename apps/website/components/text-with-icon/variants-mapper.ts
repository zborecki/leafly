import { ITextWithIconProps, TextWithIconMapper } from '@/components/text-with-icon/types';

export const textWithIconMapper = (props: Pick<ITextWithIconProps, 'size'>): TextWithIconMapper => {
  switch (props.size) {
    case 'sm':
      return ({
        icon: {
          size: 16
        },
        text: {
          size: 'bodyTiny'
        }
      });
    default:
      return ({
        icon: {
          size: 16
        },
        text: {
          size: 'bodyTiny'
        }
      });
  }
};
