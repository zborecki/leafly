import { tv, VariantProps } from '@heroui/styles';

export const logoVariants = tv({
  base: 'flex max-w-fit gap-2 items-center',
  defaultVariants: {
    variant: 'dark'
  },
  slots: {
    logomark: '',
    logotype: ''
  },
  variants: {
    variant: {
      dark: {
        logomark: 'fill-primary-500',
        logotype: 'text-primary-900'
      }
    }
  }
});

export type LogoVariantsProps = VariantProps<typeof logoVariants>;
