import { ReactNode } from 'react';

import { GlobalStyles, StyledRoot } from './globalStyles';

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <>
      <GlobalStyles />
      <StyledRoot>{children}</StyledRoot>
    </>
  );
}
