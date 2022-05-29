require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { ErrorTypes } = require('./errors');

const SALT = process.env.PASSWORD_SALT;
const prisma = new PrismaClient();

const generateAccessToken = (id?: string) => {
	const payload = { id };
	return jwt.sign(payload, SALT, { expiresIn: '24h' });
};

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

		const token = generateAccessToken(user?.id);

		return token;
	} catch (e) {
		throw Error('LOGIN_SERVICE_PROBLEM');
	}
};
