import { cn } from '@heroui/styles';
import { LucideProps } from 'lucide-react';

import { textWithIconVariants } from './variants';
import { textWithIconMapper } from './variants-mapper';

import Text from '@/components/shared/text';
import { ITextWithIconProps } from '@/components/text-with-icon/types';
import { cloneReactNode } from '@/utils/cloneReactNode';

const TextWithIcon = ({
  className,
  classNames,
  leftIcon,
  rightIcon,
  label,
  ...props
}: ITextWithIconProps) => {
  const classes = textWithIconVariants(props);
  const mapper = textWithIconMapper({ size: props?.size });

  return (
    <div className={cn(classes.base(), className)}>
      {leftIcon && cloneReactNode<LucideProps>(leftIcon, {
        className: cn(classes.icon(), classNames?.icon),
        size: mapper.icon.size
      })}
      <Text
        className={classes.text()}
        color='inherit'
        label={label}
        size={mapper.text.size}
      />
      {rightIcon && cloneReactNode<LucideProps>(rightIcon, {
        className: cn(classes.icon(), classNames?.icon),
        size: mapper.icon.size
      })}
    </div>
  );
};

export default TextWithIcon;
