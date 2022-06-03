const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const { ErrorTypes } = require('./errors');
const tokenService = require('../token-service/tokenService');

const prisma = new PrismaClient();

exports.login = async (email: string, password: string) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (!user) return ErrorTypes.NotFound;

		const validPassword = await bcrypt.compare(password, user?.password);

		if (!validPassword) return ErrorTypes.WrongPassword;

		const token = tokenService.generateAccessToken(user?.id);

		return token;
	} catch (e) {
		throw Error('LOGIN_SERVICE_PROBLEM');
	}
};
