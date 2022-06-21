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
		// return ErrorTypes.NotFound;
		throw ApiError.BadRequest(`User with email address ${email} unregistered!`);
	}

	const isPassEquals = await bcrypt.compare(password, user?.password);

	if (!isPassEquals) {
		throw ApiError.BadRequest('Password is wrong!');
	}

	// const token = tokenService.generateTokens(user?.id);
	// await tokenService.saveToken(userDto.id, tokens.refreshToken);

	// return token;

	const userDto = new UserDto(user);
	const tokens = await tokenService.generateTokens({ userDto });
	await tokenService.saveToken(userDto.id, tokens.refreshToken);

	return { ...tokens, user: userDto };
};
