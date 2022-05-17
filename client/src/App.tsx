import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Registration, Login, PasswordRecovery } from './pages';
import { Root } from './Root';

export const App: FC = () => {
	return (
		<Root>
			<Routes>
				<Route path='/auth' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/forgot_password' element={<PasswordRecovery />} />
			</Routes>
		</Root>
	);
};
