import express from 'express';

import { ApiError } from '../exceptions/api-error';
const tokenService = require('../Tokens/tokenService');

module.exports = function (
	req: express.Request,
	_res: express.Response,
	next: express.NextFunction
) {
	try {
		const authorizationHeader = req.headers.authorization;

		if (!authorizationHeader) throw ApiError.UnauthorizedError();

		const accessToken = authorizationHeader.split(' ')[1];

		if (!accessToken) throw ApiError.UnauthorizedError();

		const userData = tokenService.validateAccessToken(accessToken);

		if (!userData) throw ApiError.UnauthorizedError();

		// req.user = userData;
		next();
	} catch (e) {
		return next(ApiError.UnauthorizedError());
	}
};
