import express = require('express');

// const Errors = require('./errors');
const services = require('./services');

exports.login = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	const { email, password } = req.body;

	try {
		const data = await services.login(email, password);

		// if (Errors.list.has(data)) {
		// 	const error = Errors.list.get(data);

		// 	return res.status(error!.code).json(error);
		// }
		res.cookie('refreshToken', data.refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
		});

		return res
			.status(200)
			.json({ message: 'Authorization was successful', data });
	} catch (e) {
		next(e);
		// return res.status(400).json({ message: 'Login error' });
	}
};
