-- AlterTable
ALTER TABLE "User" ALTER COLUMN "passwordUpdateLink" DROP DEFAULT,
ALTER COLUMN "passwordUpdateLink" SET DATA TYPE TEXT;
