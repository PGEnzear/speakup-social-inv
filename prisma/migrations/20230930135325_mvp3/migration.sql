/*
  Warnings:

  - Added the required column `deletedInfo` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deletedReason` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DeleteReason" AS ENUM ('selfDelete', 'blocked');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "deletedInfo" TEXT NOT NULL,
ADD COLUMN     "deletedReason" "DeleteReason" NOT NULL,
ADD COLUMN     "isDead" BOOLEAN NOT NULL DEFAULT false;
