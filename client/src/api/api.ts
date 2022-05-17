import axios from 'axios';

import {
	LoginDataType,
	RegisterDataType,
	ResponseCreateUserDataType,
} from '../interfaces/types';

const instance = axios.create({
	baseURL: 'https://localhost:5000/',
});

export const authApi = {
	async login(dto: LoginDataType) {
		const { data } = await instance.post('login', dto);
		return data;
	},
};

export const registerApi = {
	async register(dto: RegisterDataType): Promise<ResponseCreateUserDataType> {
		const { data } = await instance.post<
			RegisterDataType,
			{ data: ResponseCreateUserDataType }
		>('register', dto);
		return data;
	},
};

export const passwordRecoveryApi = {};
