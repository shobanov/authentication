import { Route, Routes } from 'react-router-dom';

import { Registration, Login, PasswordRecovery, Greeting } from './pages';
import { Root } from './Root';

export const App = () => {
	return (
		<Root>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/forgot_password' element={<PasswordRecovery />} />
				<Route path='/greeting' element={<Greeting />} />
			</Routes>
		</Root>
	);
};
