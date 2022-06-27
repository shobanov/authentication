import express from 'express';

const services = require('./services');

exports.fetchUsers = async (
	_req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const users = await services.fetchUsers();

		return res.json(users);
	} catch (e) {
		next(e);
	}
};
