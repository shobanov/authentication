/*
  Warnings:

  - The `activationLink` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "activationLink",
ADD COLUMN     "activationLink" UUID NOT NULL DEFAULT gen_random_uuid();
