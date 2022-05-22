import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

const UserService = require('./user.service');

export async function userRegister(req: Request, res: Response) {
	const { firstName, lastName, email, password } = req.body;
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ message: 'Registration error', errors });
		}
		const condidate = await UserService.userRegister(
			firstName,
			lastName,
			email,
			password
		);
		if (condidate) {
			return res.status(200).json({ message: 'User already exists!' });
		}
		return res.json({ message: 'User successfully registered' });
	} catch ({ message }) {
		return res.status(400).json({ message: 'Registration error' });
	}
}

export async function userLogin(req: Request, res: Response) {
	const {} = req.body;
	console.log('login');
	try {
		const user = await UserService.userLogin();

		return res.status(200).json({
			user,
		});
	} catch ({ message }) {
		return res.status(400).json({
			message,
		});
	}
}

export async function getUsers(req: Request, res: Response) {
	try {
		console.log('');
	} catch ({ message }) {
		return res.status(400).json({
			message,
		});
	}
}
