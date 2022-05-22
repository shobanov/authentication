import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

export async function userRegister(
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

		if (condidate) return condidate;

		const hashPassword = bcrypt.hashSync(password, 4);
		await prisma.user.create({
			data: {
				firstName,
				lastName,
				email,
				password: hashPassword,
			},
		});
	} catch (e) {
		throw Error('db connection problem');
	}
}

export async function userLogin() {
	try {
		const isUserExist = await prisma.user.findMany();

		return isUserExist;
	} catch (e) {
		throw Error('');
	}
}
