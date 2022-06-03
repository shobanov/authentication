-- DropIndex
DROP INDEX "Token_userId_key";

-- AlterTable
ALTER TABLE "Token" ALTER COLUMN "refreshToken" DROP NOT NULL,
ADD CONSTRAINT "Token_pkey" PRIMARY KEY ("userId");
