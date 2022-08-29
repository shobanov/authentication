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

export type RegistrationDto = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export interface LoginDto {
	email: string;
	password: string;
}

export type ErrorResponse = {
	status: number;
	message: string;
};

export type PasswordUpdateDto = {
	password: string;
	link: string | undefined;
};

export type PasswordRecoveryDto = Omit<LoginDto, 'password'>;

export interface IPasswordUpdate extends PasswordUpdateDto {
	passwordConfirm: string;
}

export interface IRegistration extends RegistrationDto {
	passwordConfirm: string;
}
