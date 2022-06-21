const expressValidatior = require('express-validator');

exports.registration = [
	expressValidatior
		.check(['firstName', 'lastName', 'email'], 'this field cannot be empty')
		.notEmpty(),
	expressValidatior
		.check('password', 'password must be at least 7 characters')
		.isLength({
			min: 7,
			max: 32,
		}),
];
