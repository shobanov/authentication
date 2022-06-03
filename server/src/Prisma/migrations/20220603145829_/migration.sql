/*
  Warnings:

  - The primary key for the `Token` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userId]` on the table `Token` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Token_refreshToken_key";

-- AlterTable
ALTER TABLE "Token" DROP CONSTRAINT "Token_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "Token_userId_key" ON "Token"("userId");
