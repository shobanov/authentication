import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { AuthResponse, IUser, LoginDto, RegisterDto } from '../types';

export const instance = axios.create({
	baseURL: 'http://localhost:5000/',
	withCredentials: true,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
	config.headers!.Authotization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});

export const AuthApi = {
	async login(dto: LoginDto): Promise<AxiosResponse<AuthResponse>> {
		return instance.post<AuthResponse>('login', dto);
	},
	async registration(dto: RegisterDto): Promise<AxiosResponse<AuthResponse>> {
		return instance.post<AuthResponse>('registration', dto);
	},
	async logout(): Promise<void> {
		return instance.post('logout');
	},
	async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
		return instance.get<IUser[]>('users');
	},
};
