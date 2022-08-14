import express from 'express';

import { ApiError } from '../exceptions/api-error';

module.exports = function (
	err: Error,
	_req: express.Request,
	res: express.Response,
	_next: express.NextFunction
) {
	console.log(err);

	if (err instanceof ApiError) {
		return res.status(err.status).json({ message: err.message });
	}

	return res.status(500).json({ message: err.message });
};
