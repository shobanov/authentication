import { check } from 'express-validator';

export const validation = [
	check(
		['firstName', 'lastName', 'email'],
		'this field cannot be empty'
	).notEmpty(),
	check('password', 'password must be at least 7 characters').isLength({
		min: 7,
	}),
];
