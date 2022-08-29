import { useState } from 'react';

import { AuthContext } from './AuthContext';

interface AuthContextProviderProps {
	children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const [userName, setUserName] = useState<string>('');
	const [isAuth, setIsAuth] = useState<boolean>(false);

	return (
		<AuthContext.Provider value={{ userName, setUserName, isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	);
};
