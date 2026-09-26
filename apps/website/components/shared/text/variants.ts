import { tv, VariantProps } from '@heroui/styles';

export const textVariants = tv({
  defaultVariants: {
    color: 'default',
    size: 'body',
    weight: 'regular'
  },
  variants: {
    color: {
      default: 'text-gray'
    },
    size: {
      body: 'typo-body-medium',
      bodyTiny: 'typo-body-tiny'
    },
    weight: {
      regular: 'font-normal'
    }
  }
});

export type TextVariantsProps = VariantProps<typeof textVariants>;
