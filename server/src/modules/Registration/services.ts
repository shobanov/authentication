import { PrismaClient } from '@prisma/client';
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const ErrorTypes = require('./errors');

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

		return await prisma.user.create({
			data: {
				firstName,
				lastName,
				email,
				password: hashPassword,
				activationLink,
			},
		});
	} catch (e) {
		throw Error('USER_REGISTRATION_SERVICE_PROBLEM');
	}
};
