import express from 'express';
import jwt = require('jsonwebtoken');

import { ApiError } from '../exceptions/api-error';
const tokenService = require('../Tokens/tokenService');

module.exports = async function (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) {
	try {
		const authorizationHeader = req.headers.authorization;

		if (!authorizationHeader) return next(ApiError.UnauthorizedError());

		const accessToken = authorizationHeader.split(' ')[1];

		if (!accessToken) return next(ApiError.UnauthorizedError());

		const userData = await tokenService.validateAccessToken(accessToken);

		if (!userData) return next(ApiError.UnauthorizedError());

		return res.status(200).json({ message: 'AccessToken is OK' });
	} catch (e) {
		return next(ApiError.UnauthorizedError());
	}
};
