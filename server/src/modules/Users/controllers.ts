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

exports.PasswordRecovery = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	const { email } = req.body;
	try {
		await services.PasswordRecovery(email);

		return res.status(200).json({
			message: `An email has been sent to ${email} to change your password`,
		});
	} catch (e) {
		next(e);
	}
};

exports.PasswordUpdate = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	console.log('!!!!!!!!!!!!!!');
	const { password } = req.body;
	const passwordUpdateLink = req.params.link;

	try {
		const { email } = await services.PasswordUpdate(
			password,
			passwordUpdateLink
		);

		return res.status(200).json({
			message: `Password for ${email} was successfully updated`,
		});
	} catch (e) {
		next(e);
	}
};
