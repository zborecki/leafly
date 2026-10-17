import { PropsWithChildren } from 'react';

import Toolbar from '@/features/toolbar';
import DefaultHeader from '@/layouts/default/header';

const DefaultLayout = ({ children }: PropsWithChildren) => (
  <>
    <Toolbar />
    <DefaultHeader />
    {children}
  </>
);

export default DefaultLayout;
