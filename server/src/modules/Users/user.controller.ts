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
	} catch (e) {
		console.log(e);
		return res.status(400).json({ message: 'Registration error' });
	}
}

export async function userLogin(req: Request, res: Response) {
	const { email, password } = req.body;
	try {
		const user = await UserService.userLogin(email);
		const validPassword = await UserService.userLogin(password);
		const token = await UserService.userLogin();
		if (!user) {
			return res
				.status(400)
				.json({ message: `user with email: ${email} not found` });
		}
		if (!validPassword) {
			return res.status(400).json({ message: 'wrong password entered' });
		}
		return res
			.status(200)
			.json({ token, message: 'Authorization was successful' });
	} catch (e) {
		console.log(e);
		return res.status(400).json({ message: 'Login error' });
	}
}

export async function getUsers(_req: Request, res: Response) {
	try {
	} catch (e) {
		console.log(e);
		return res.status(400).json({ message: 'getUsers error' });
	}
}
