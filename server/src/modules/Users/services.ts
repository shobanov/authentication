import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

exports.fetchUsers = async () => {
	const users = await prisma.user.findMany(); // [{user},{user}]

	return users;
};
