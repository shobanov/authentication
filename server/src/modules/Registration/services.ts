import { PrismaClient } from '@prisma/client';
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const mailService = require('../Mail/yandexService');
const tokenService = require('../Tokens/tokenService');
import { UserDto } from '../dtos/user-dto';
import { ApiError } from '../exceptions/api-error';

const prisma = new PrismaClient();

exports.registration = async (
	firstName: string,
	lastName: string,
	email: string,
	password: string
) => {
	const condidate = await prisma.user.findFirst({
		where: {
			email: {
				contains: email,
			},
		},
	});

	if (condidate) {
		throw ApiError.BadRequest(
			`user with email address ${email} already exists`
		);
	}

	const hashPassword = bcrypt.hashSync(password, 4);
	const activationLink = uuid.v4();
	const user = await prisma.user.create({
		data: {
			firstName,
			lastName,
			email,
			password: hashPassword,
			activationLink,
		},
	});
	await mailService.sandActivationMail(
		email,
		`${process.env.API_URL}/activate/${activationLink}`
	);
	const userDto = new UserDto(user);
	const tokens = await tokenService.generateTokens({ ...userDto });
	await tokenService.saveToken(userDto.id, tokens.refreshToken);

	return { ...tokens, user: userDto };
};

exports.activate = async (activationLink: string) => {
	const user = await prisma.user.findFirst({
		where: {
			activationLink,
		},
	});

	if (!user) {
		throw ApiError.BadRequest('Invalid activation link');
	}

	await prisma.user.updateMany({
		where: {
			activationLink,
		},
		data: {
			isActivated: true,
		},
	});
};
