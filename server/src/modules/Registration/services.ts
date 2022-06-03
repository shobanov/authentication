import { PrismaClient } from '@prisma/client';
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const ErrorTypes = require('./errors');
const mailService = require('../mail-service/mailService');
const tokenService = require('../token-service/tokenService');

const prisma = new PrismaClient();

exports.registration = async (
	firstName: string,
	lastName: string,
	email: string,
	password: string
) => {
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
		await mailService.sandActivationMail(email, activationLink);
		const userDto = {
			id: user.id,
			email: user.email,
			isActivated: user.isActivated,
		};
		const tokens = tokenService.generateTokens({ ...userDto });
		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return { ...tokens, user: userDto };
	} catch (e) {
		throw Error('USER_REGISTRATION_SERVICE_PROBLEM');
	}
};
