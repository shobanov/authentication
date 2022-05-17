import axios from 'axios';

import {
	LoginDataType,
	RegisterDataType,
	ResponseUserDataType,
} from '../interfaces/types';

const instance = axios.create({
	baseURL: 'https://localhost:5000/',
});

export const loginApi = {
	async login(dto: LoginDataType) {
		const { data } = await instance.post<
			LoginDataType,
			{ data: ResponseUserDataType }
		>('login', dto);
		return data;
	},
};

export const registerApi = {
	async register(dto: RegisterDataType) {
		const { data } = await instance.post<
			RegisterDataType,
			{ data: ResponseUserDataType }
		>('register', dto);
		return data;
	},
};

export const passwordRecoveryApi = {};
