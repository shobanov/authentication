export enum ErrorTypes {
	UserExist = 'UserExist',
}

const list = new Map([
	[
		ErrorTypes.UserExist,
		{
			message: 'User already exist',
			code: 409,
		},
	],
]);

module.exports = {
	list,
	ErrorTypes,
};
