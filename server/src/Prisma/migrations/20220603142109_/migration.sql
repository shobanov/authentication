-- DropIndex
DROP INDEX "Token_userId_key";

-- AlterTable
ALTER TABLE "Token" ADD CONSTRAINT "Token_pkey" PRIMARY KEY ("userId");
