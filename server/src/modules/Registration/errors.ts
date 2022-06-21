export enum ErrorTypes {
	UserExist = 'UserExist',
	InvalidActivationLink = 'InvalidActivationLink',
}

export const errorlist = new Map([
	[
		ErrorTypes.UserExist,
		{
			message: 'User already exist',
			code: 409,
		},
	],
	[
		ErrorTypes.InvalidActivationLink,
		{
			message: 'Invalid activation link',
			code: 400,
		},
	],
]);

module.exports = {
	errorlist,
	ErrorTypes,
};
