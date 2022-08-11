import { PrismaClient } from '@prisma/client';
const bcrypt = require('bcrypt');

const mailService = require('../Mail/yandexService');
import { ApiError } from '../exceptions/api-error';

const prisma = new PrismaClient();

exports.fetchUsers = async () => {
	const users = await prisma.user.findMany();

	return users;
};

exports.PasswordRecovery = async (email: string) => {
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (!user) {
		throw ApiError.BadRequest(
			`User with email address ${email} does not exist!`
		);
	}

	await mailService.sandUpdatePasswordMail(email);

	return user;
};

exports.PasswordUpdate = async (email: string, password: string) => {
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (!user) {
		throw ApiError.BadRequest(
			`User with email address ${email} does not exist!`
		);
	}

	const hashPassword = bcrypt.hashSync(password, 4);

	await prisma.user.update({
		where: {
			email,
		},
		data: {
			password: hashPassword,
		},
	});

	return user;
};
