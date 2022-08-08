export interface IUser {
	id: number;
	email: string;
	firstName: string;
	isActivated: boolean;
}

export type AuthResponse = {
	data: {
		accessToken: string;
		refreshToken: string;
		user: IUser;
	};
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
