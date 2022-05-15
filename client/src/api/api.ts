import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://localhost:5000/',
});

export const authAPI = {
	login(data: LoginParamsType) {
		return instance.post<ResponseType<{ userId?: number }>>('auth/login', data);
	},
};

export const registrationAPI = {
	register(data: RegisterParamsType) {
		return instance.post<ResponseType<{ userId?: number }>>(
			'auth/register',
			data
		);
	},
};

export const passwordRecoveryAPI = {};

// types

export type ResponseType<D = {}> = {
	resultCode: number;
	messages: Array<string>;
	data: D;
};

// paramsType
export type LoginParamsType = {
	email: string;
	password: string;
	rememberMe: boolean;
	captcha?: string;
};

export type RegisterParamsType = {
	firstName: string;
	lastNamem: string;
	email: string;
	password: string;
	agreement: boolean;
	captcha?: string;
};
