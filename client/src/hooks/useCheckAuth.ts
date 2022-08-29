import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context';

export const useCheckAuth = () => {
	const navigate = useNavigate();
	const { isAuth } = useContext(AuthContext);

	React.useEffect(() => {
		if (!isAuth) {
			navigate('/login');
		}
	}, [isAuth, navigate]);
};
