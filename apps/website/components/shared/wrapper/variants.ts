import { tv, VariantProps } from '@heroui/styles';

export const wrapperVariants = tv({
  defaultVariants: {
    centered: true,
    maxWidth: 'default',
    padding: 'default'
  },
  variants: {
    centered: {
      true: 'mx-auto',
      false: null
    },
    maxWidth: {
      default: 'max-w-8xl'
    },
    padding: {
      false: null,
      default: 'px-4'
    }
  }
});

export type WrapperVariantsProps = VariantProps<typeof wrapperVariants>;
