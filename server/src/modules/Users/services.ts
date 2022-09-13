import { PrismaClient } from '@prisma/client';
const bcrypt = require('bcrypt');
const uuid = require('uuid');

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

	const passwordUpdateLink = uuid.v4();

	await prisma.user.update({
		where: {
			email,
		},
		data: {
			passwordUpdateLink,
		},
	});

	await mailService.sandUpdatePasswordMail(
		email,
		`${process.env.REDIRECT_URL_PASSWORD_UPDATE}/${passwordUpdateLink}`
	);

	return user;
};

exports.PasswordUpdate = async (password: string, link: string) => {
	const user = await prisma.user.findFirst({
		where: {
			passwordUpdateLink: link,
		},
	});
	if (!user) {
		throw ApiError.BadRequest('link is not correct');
	}

	const isPassEquals = await bcrypt.compare(password, user?.password);

	if (isPassEquals) {
		throw ApiError.BadRequest('The new password must not match the old one!');
	}

	const hashPassword = bcrypt.hashSync(password, 4);

	await prisma.user.update({
		where: {
			email: user?.email,
		},
		data: {
			password: hashPassword,
		},
	});

	await prisma.user.update({
		where: {
			email: user.email,
		},
		data: {
			passwordUpdateLink: null,
		},
	});

	return user;
};
