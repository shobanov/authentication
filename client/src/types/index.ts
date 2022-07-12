export interface IUser {
	id: number;
	email: string;
	isActivated: boolean;
}

export type AuthResponse = {
	accessToken: string;
	refreshToken: string;
	user: IUser;
};

export type RegisterDto = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export interface LoginDto {
	email: string;
	password: string;
}
