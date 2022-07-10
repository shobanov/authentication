export interface IUser {
	id: number;
	email: string;
	isActivated: boolean;
}

export type AuthResponseType = {
	accessToken: string;
	refreshToken: string;
	user: IUser;
};

export type RegisterDtoType = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};
