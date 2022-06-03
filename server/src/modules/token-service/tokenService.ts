import { PrismaClient } from '@prisma/client';
const jwt = require('jsonwebtoken');

import { DtoType } from '../Registration/types';

const prisma = new PrismaClient();

exports.generateTokens = async (payload: DtoType) => {
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
	const tokenData = await prisma.token.findFirst({
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
