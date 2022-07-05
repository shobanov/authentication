export type LoginDataType = {
	email: string;
	password: string;
	rememberMe: boolean;
};

export type RegisterDataType = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	agreement: boolean;
};

export type ResponseUserDataType = {
	createdAd: string;
	firstName: string;
	lastName: string;
	email: string;
	id: number;
	token: string;
	updatedAt: string;
};

export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
}
