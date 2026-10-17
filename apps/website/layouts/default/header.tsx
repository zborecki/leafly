import { cn } from '@heroui/styles';

import Logo from '@/components/shared/logo';
import Paper from '@/components/shared/paper';
import Wrapper from '@/components/shared/wrapper';
import { IDefaultHeaderProps } from '@/layouts/default/types';

const DefaultHeader = ({
  children, className, classNames
}: IDefaultHeaderProps) => {
  const x = 0;

  return (
    <Paper
      as='header'
      border='bottom'
      className={cn('sticky left-0 top-0 z-50 py-6', className)}
      variant='outlined'
    >
      <Wrapper className={classNames?.wrapper}>
        <Logo as='h1' enableHref />
      </Wrapper>
    </Paper>
  );
};

export default DefaultHeader;
