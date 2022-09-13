import express from 'express';
import { validationResult, ValidationError } from 'express-validator';

const services = require('./services');

exports.registration = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	const { firstName, lastName, email, password } = req.body;
	try {
		const { user, accessToken, refreshToken } = await services.registration(
			firstName,
			lastName,
			email,
			password
		);

		res.cookie('refreshToken', refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
		});

		return res.status(201).json({
			message: `The user has been successfully registered, to confirm the registration, follow the link that we sent to e-mail ${email}`,
			accessToken,
			user,
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
	const activationLink = req.params.link;
	try {
		await services.activate(activationLink);

		return res.redirect(String(process.env.REDIRECT_URL_LOGIN));
	} catch (e) {
		next(e);
	}
};
