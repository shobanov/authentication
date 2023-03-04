import express = require('express');

const services = require('./services');

exports.login = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	const { email, password } = req.body;

	try {
		const { user, accessToken, refreshToken } = await services.login(
			email,
			password
		);

		res.cookie('refreshToken', refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
		});

		return res.status(200).json({
			message: 'Authorization was successful',
			accessToken,
			user,
		});
	} catch (e) {
		next(e);
	}
};

exports.logout = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const { refreshToken } = req.cookies;
		const token = await services.logout(refreshToken);
		res.clearCookie('refreshToken');

		return res.status(200).json({ message: 'Logout successful', token });
	} catch (e) {
		next(e);
	}
};

exports.refresh = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const { refreshToken: refreshTokenFromCookies } = req.cookies;

		const { user, accessToken, refreshToken } = await services.refresh(
			refreshTokenFromCookies
		);
		res.cookie('refreshToken', refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
		});

		return res
			.status(200)
			.json({ message: 'Token refresh successful', accessToken, user });
	} catch (e) {
		next(e);
	}
};
