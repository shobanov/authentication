import express = require('express');

const Errors = require('./errors');
const services = require('./services');

exports.login = async (req: express.Request, res: express.Response) => {
	const { email, password } = req.body;

	try {
		const data = await services.login(email, password);

		if (Errors.list.has(data)) {
			const error = Errors.list.get(data);

			return res.status(error!.code).json(error);
		}

		return res
			.status(200)
			.json({ message: 'Authorization was successful', data });
	} catch (e) {
		return res.status(400).json({ message: 'Login error' });
	}
};
