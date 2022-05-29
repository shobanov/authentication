export enum ErrorTypes {
	NotFound = 'NotFound',
	WrongPassword = 'WrongPassword',
}

const list = new Map([
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
]);

module.exports = {
	list,
	ErrorTypes,
};
