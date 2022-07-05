import axios from 'axios';
import { IUser } from '../../types/types';
import { AppDispatch } from '../store';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
	try {
		const response = await axios.get<IUser[]>('https://localhost:5000/');
	} catch (error) {}
};
