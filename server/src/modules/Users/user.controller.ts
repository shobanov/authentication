import { Request, Response } from 'express';

const UserService = require('./user.service');

export async function createUser(req: Request, res: Response) {
	const {} = req.body;
	try {
		const user = await UserService.userRegister();

		return res.status(200).json({
			user,
		});
	} catch ({ message }) {
		return res.status(400).json({
			message,
		});
	}
}

export async function login(req: Request, res: Response) {
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
