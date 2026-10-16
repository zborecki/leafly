import { PropsWithChildren } from 'react';

import Logo from '@/components/shared/logo';
import Toolbar from '@/features/toolbar';

const DefaultLayout = ({ children }: PropsWithChildren) => (
  <>
    <Toolbar />
    <Logo />
    {children}
  </>
);

export default DefaultLayout;
