-- AlterTable
ALTER TABLE "User" ADD COLUMN     "passwordUpdateLink" UUID DEFAULT gen_random_uuid();
