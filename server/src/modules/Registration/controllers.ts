import express from 'express';
const { validationResult } = require('express-validator');

const services = require('./services');
const errors = require('./errors');

exports.registration = async (req: express.Request, res: express.Response) => {
	const { firstName, lastName, email, password } = req.body;

	try {
		const validationErrors = validationResult(req);

		if (!validationErrors.isEmpty()) {
			return res
				.status(409)
				.json({ message: 'Invalid validation', validationErrors });
		}

		const data = await services.registration(
			firstName,
			lastName,
			email,
			password
		);

		if (errors.list.has(data)) {
			const error = errors.list.get(data);

			return res.status(error!.code).json({ message: error?.message });
		}

		res.cookie('refreshToken', data.refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
		});

		return res.status(201).json({ message: 'User successfully registered' });
	} catch (e) {
		console.log(e);
		return res.status(400).json({ message: 'Registration error' });
	}
};

exports.activate = async (
	req: express.Request,
	res: express.Response,
	_next: express.NextFunction
) => {
	try {
		const activationLink = req.params.link;
		await services.activate(activationLink);

		return res.redirect(String(process.env.CLIENT_URL));
	} catch (e) {
		console.log(e);
	}
};
