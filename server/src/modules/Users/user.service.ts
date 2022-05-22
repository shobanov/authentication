import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret } = require('./userKey');

const generateAccessToken = (id?: string) => {
	const payload = { id };
	return jwt.sign(payload, secret, { expiresIn: '24h' });
};

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
		throw Error('userRegister service problem');
	}
}

export async function userLogin(email: string, password: string) {
	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});
		console.log('user: ', user);
		const token = generateAccessToken(user?.id);
		console.log('token: ', token);
		debugger;
		const validPassword = bcrypt
			.compare(password, user?.password)
			.then(function (err: any, result: boolean) {
				console.log('validResult: ', result, 'error: ', user!.password);
			});
		return { user, validPassword, token };
	} catch (e) {
		throw Error('userLogin service problem');
	}
}
