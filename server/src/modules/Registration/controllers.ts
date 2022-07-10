import express from 'express';
const { validationResult } = require('express-validator');

const services = require('./services');

exports.registration = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const { firstName, lastName, email, password } = req.body;
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

		res.cookie('refreshToken', data.refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
		});

		return res.status(201).json({
			message: `The user has been successfully registered, to confirm the registration, follow the link that we sent to e-mail ${email}`,
		});
	} catch (e) {
		next(e);
	}
};

exports.activate = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const activationLink = req.params.link;
		await services.activate(activationLink);

		return res.redirect(String(process.env.CLIENT_URL));
	} catch (e) {
		next(e);
	}
};
