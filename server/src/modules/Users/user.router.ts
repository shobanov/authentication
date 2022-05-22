import express from 'express';
import { check } from 'express-validator';

const userController = require('./user.controller');
const router = express.Router();

router.post(
	'/register',
	[
		check(
			['firstName', 'lastName', 'email'],
			'this field cannot be empty'
		).notEmpty(),
		check('password', 'password must be at least 7 characters').isLength({
			min: 7,
		}),
	],
	userController.userRegister
);
router.post('/login', userController.userLogin);

module.exports = router;
