import { AxiosResponse } from 'axios';
import { instance } from '../api';
import { AuthResponse, LoginDto, RegisterDto } from '../types';

export const login = async (
	dto: LoginDto
): Promise<AxiosResponse<AuthResponse>> => {
	return instance.post<AuthResponse>('login', dto);
};

export const registration = async (
	dto: RegisterDto
): Promise<AxiosResponse<AuthResponse>> => {
	return instance.post<AuthResponse>('registration', dto);
};

export const logout = async (): Promise<void> => {
	return instance.post('logout');
};
