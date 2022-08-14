const expressValidatior = require('express-validator');

exports.registration = [
	expressValidatior
		.check('firstName', 'firstName field cannot be empty')
		.notEmpty(),
	expressValidatior
		.check('lastName', 'lastName field cannot be empty')
		.notEmpty(),
	expressValidatior.check('email', 'email field cannot be empty').notEmpty(),
	expressValidatior
		.check('password', 'password validation error')
		.isLength({
			min: 6,
			max: 32,
		})
		.notEmpty('password must not be empty'),
];
