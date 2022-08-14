-- AlterTable
ALTER TABLE "User" ALTER COLUMN "activationLink" DROP NOT NULL,
ALTER COLUMN "activationLink" DROP DEFAULT,
ALTER COLUMN "activationLink" SET DATA TYPE TEXT;
