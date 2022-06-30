import { PrismaClient } from '@prisma/client';
const jwt = require('jsonwebtoken');

import { UserDto } from '../dtos/user-dto';

const prisma = new PrismaClient();

exports.generateTokens = async (payload: UserDto) => {
	const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
		expiresIn: '30m',
	});
	const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
		expiresIn: '30d',
	});

	return {
		accessToken,
		refreshToken,
	};
};

exports.saveToken = async (userId: string, refreshToken: string) => {
	const tokenData = await prisma.token.findUnique({
		where: {
			userId,
		},
	});

	if (tokenData) {
		return await prisma.token.updateMany({
			where: {
				userId,
			},
			data: {
				refreshToken,
			},
		});
	}

	return await prisma.token.create({
		data: {
			userId,
			refreshToken,
		},
	});
};

exports.removeToken = async (refreshToken: string) => {
	const tokenData = await prisma.token.deleteMany({
		where: {
			refreshToken,
		},
	});

	return tokenData;
};

exports.validateAccessToken = async (token: string) => {
	try {
		const userData = jwt.verify(token, process.env.JWT_ACCESS_KEY);

		return userData;
	} catch (e) {
		return null;
	}
};

exports.validateRefreshToken = async (token: string) => {
	try {
		const userData = jwt.verify(token, process.env.JWT_REFRESH_KEY);

		return userData;
	} catch (e) {
		return null;
	}
};

exports.findToken = async (refreshToken: string) => {
	const tokenData = await prisma.token.findUnique({
		where: {
			refreshToken,
		},
	});

	return tokenData;
};
