import axios, { AxiosRequestConfig } from 'axios';

export const instance = axios.create({
	baseURL: 'http://localhost:5000/',
	withCredentials: true,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
	config.headers!.Authotization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});
