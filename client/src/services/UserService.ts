import { AxiosResponse } from 'axios';
import { instance } from '../api';
import { IUser } from '../types';

export const fetchUsers = async (): Promise<AxiosResponse<IUser[]>> => {
	return instance.get<IUser[]>('users');
};
