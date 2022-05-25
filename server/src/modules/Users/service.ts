import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
const bcrypt = require('bcrypt');

import { ErrorTypes } from './errors';
import { salt } from './salt';

const prisma = new PrismaClient();

const generateAccessToken = (id?: string) => {
	const payload = { id };
	return jwt.sign(payload, salt, { expiresIn: '24h' });
};

export async function registration(
	firstName: string,
	lastName: string,
	email: string,
	password: string
) {
	try {
		const condidate = await prisma.user.findFirst({
			where: {
				email: {
					contains: email,
				},
			},
		});

		if (condidate) return ErrorTypes.UserExist;

		const hashPassword = bcrypt.hashSync(password, 4);

		return await prisma.user.create({
			data: {
				firstName,
				lastName,
				email,
				password: hashPassword,
			},
		});
	} catch (e) {
		throw Error('USER_REGISTRATION_SERVICE_PROBLEM');
	}
}

export async function login(email: string, password: string) {
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
		throw Error('USER_LOGIN_SERVICE_PROBLEM');
	}
}
