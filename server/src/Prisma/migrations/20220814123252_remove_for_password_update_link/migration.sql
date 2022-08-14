/*
  Warnings:

  - Made the column `passwordUpdateLink` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "passwordUpdateLink" SET NOT NULL;
