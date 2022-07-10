import { AxiosResponse } from 'axios';
import { instance } from '../api';
import { AuthResponseType, RegisterDtoType } from '../types';

export const login = async (
	email: string,
	password: string
): Promise<AxiosResponse<AuthResponseType>> => {
	return instance.post<AuthResponseType>('login', { email, password });
};

export const registration = async (
	dto: RegisterDtoType
): Promise<AxiosResponse<AuthResponseType>> => {
	return instance.post<AuthResponseType>('registration', dto);
};

export const logout = async (): Promise<void> => {
	return instance.post('logout');
};
