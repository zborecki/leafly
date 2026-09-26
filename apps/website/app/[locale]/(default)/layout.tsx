import { PropsWithChildren } from 'react';

import Toolbar from '@/features/toolbar';

const DefaultLayout = ({ children }: PropsWithChildren) => (
  <>
    <Toolbar />
    {children}
  </>
);

export default DefaultLayout;
