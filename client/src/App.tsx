import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Registration } from './pages/registration';
import { Auth } from './pages/auth';
import { Root } from './Root';

export const App: FC = () => {
  return (
    <Root>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Root>
  );
};