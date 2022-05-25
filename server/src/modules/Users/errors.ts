export enum ErrorTypes {
	NotFound = 'NotFound',
	WrongPassword = 'WrongPassword',
	UserExist = 'UserExist',
}

export const Errors = new Map([
	[
		ErrorTypes.NotFound,
		{
			message: 'User not found',
			code: 404,
		},
	],
	[
		ErrorTypes.WrongPassword,
		{
			message: 'Password incorrect',
			code: 401,
		},
	],
	[
		ErrorTypes.UserExist,
		{
			message: 'User already exist',
			code: 409,
		},
	],
]);
