import { Route, Routes } from 'react-router-dom';

import {
	Registration,
	Login,
	PasswordRecovery,
	PasswordUpdate,
	Greeting,
} from './pages';
import { Root } from './Root';

export const App = () => {
	return (
		<Root>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/greeting' element={<Greeting />} />
				<Route path='/password_recovery' element={<PasswordRecovery />} />
				<Route path='/password_update/:link' element={<PasswordUpdate />} />
			</Routes>
		</Root>
	);
};
