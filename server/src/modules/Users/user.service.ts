import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser() {
	try {
		const users = await prisma.users.findMany();

		return users;
	} catch (e) {
		throw Error('');
	}
}

export async function checkUser() {
	try {
		const isUserExist = await prisma.users.findMany();

		return isUserExist;
	} catch (e) {
		throw Error('');
	}
}
