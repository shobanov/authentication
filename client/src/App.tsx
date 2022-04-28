import { FC } from 'react';

import { Authentication } from './authentication';
import { Authorization } from './authorization';
import { Root } from './Root';

export const App: FC = () => {
  return (
    <Root>
      {/* <Authentication /> */}
      <Authorization />
    </Root>
  );
};