import { Request, Response } from 'express';

const UserService = require('./user.service');

export async function userRegister(req: Request, res: Response) {
	const { firstName, lastName, email, password } = req.body;
	try {
		const condidate = await UserService.userRegister(
			firstName,
			lastName,
			email,
			password
		);
		if (condidate) {
			return res.status(200).json({
				message: 'User already exists!',
			});
		}
	} catch ({ message }) {
		return res.status(400).json({
			message,
		});
	}
}

export async function userLogin(req: Request, res: Response) {
	const {} = req.body;
	console.log('login');
	try {
		const user = await UserService.checkUser();

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
