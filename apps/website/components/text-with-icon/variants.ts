import { tv, VariantProps } from '@heroui/styles';

export const textWithIconVariants = tv({
  base: 'flex flex-row items-center gap-2',
  defaultVariants: {
    color: 'default',
    size: 'sm'
  },
  slots: {
    icon: null,
    text: null
  },
  variants: {
    color: {
      default: {
        icon: 'text-gray-600',
        text: 'text-gray-600'
      }
    },
    size: {
      sm: null
    }
  }
});

export type TextWithIconVariantsProps = VariantProps<typeof textWithIconVariants>;
