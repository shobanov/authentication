const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

import { UserDto } from '../dtos/user-dto';
import { ApiError } from '../exceptions/api-error';
const tokenService = require('../token-service/tokenService');

const prisma = new PrismaClient();

exports.login = async (email: string, password: string) => {
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (!user) {
		throw ApiError.BadRequest(`User with email address ${email} unregistered!`);
	}

	const isPassEquals = await bcrypt.compare(password, user?.password);

	if (!isPassEquals) {
		throw ApiError.BadRequest('Password is wrong!');
	}

	const userDto = new UserDto(user);
	const tokens = await tokenService.generateTokens({ userDto });
	await tokenService.saveToken(userDto.id, tokens.refreshToken);

	return { ...tokens, user: userDto };
};

exports.logout = async (refreshToken: string) => {
	const token = await tokenService.removeToken(refreshToken);
	return token;
};
