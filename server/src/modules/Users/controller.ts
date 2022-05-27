const { Request, Response } = require('express');
const validationResult = require('express-validator');

const Errors = require('./errors');
const service = require('./service');

export async function registration(req: typeof Request, res: typeof Response) {
	const { firstName, lastName, email, password } = req.body;
	try {
		const validationErrors = validationResult(req);

		if (!validationErrors.isEmpty()) {
			return res
				.status(409)
				.json({ message: 'Invalid validation', validationErrors });
		}

		const data = await service.registration(
			firstName,
			lastName,
			email,
			password
		);

		if (Errors.has(data)) {
			const error = Errors.get(data);

			return res.status(error!.code).json({ message: error?.message });
		}
		return res.status(201).json({ message: 'User successfully registered' });
	} catch (e) {
		console.log(e);
		return res.status(400).json({ message: 'Registration error' });
	}
}

export async function login(req: typeof Request, res: typeof Response) {
	const { email, password } = req.body;

	try {
		const data = await service.login(email, password);

		if (Errors.has(data)) {
			const error = Errors.get(data);

			return res.status(error!.code).json(error);
		}

		return res
			.status(200)
			.json({ message: 'Authorization was successful', data });
	} catch (e) {
		return res.status(400).json({ message: 'Login error' });
	}
}
