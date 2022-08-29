import React, { createContext } from 'react';

interface AuthContextProps {
	userName: string;
	isAuth: boolean;
	setUserName: React.Dispatch<React.SetStateAction<string>>;
	setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as AuthContextProps);
