import { tv, VariantProps } from '@heroui/styles';

export const paperVariants = tv({
  defaultVariants: {
    color: 'white',
    variant: 'outlined'
  },
  compoundVariants: [
    {
      class: 'bg-white border-gray-100',
      color: 'white',
      variant: 'outlined'
    }
  ],
  variants: {
    border: {
      all: 'border',
      bottom: 'border-b'
    },
    color: {
      white: null
    },
    variant: {
      outlined: ''
    }
  }
});

export type PaperVariantsProps = VariantProps<typeof paperVariants>;
