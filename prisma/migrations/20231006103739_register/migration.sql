/*
  Warnings:

  - You are about to drop the `Authorization` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `accessToken` to the `AuthSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refreshToken` to the `AuthSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionHash` to the `AuthSession` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Authorization" DROP CONSTRAINT "Authorization_userId_fkey";

-- AlterTable
ALTER TABLE "AuthSession" ADD COLUMN     "accessToken" TEXT NOT NULL,
ADD COLUMN     "refreshToken" TEXT NOT NULL,
ADD COLUMN     "sessionHash" TEXT NOT NULL;

-- DropTable
DROP TABLE "Authorization";

-- CreateTable
CREATE TABLE "AuthorizationInfo" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "registerLocation" TEXT NOT NULL,
    "registerIp" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AuthorizationInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreationUserRequest" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreationUserRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthorizationInfo_userId_key" ON "AuthorizationInfo"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CreationUserRequest_username_key" ON "CreationUserRequest"("username");

-- CreateIndex
CREATE UNIQUE INDEX "CreationUserRequest_email_key" ON "CreationUserRequest"("email");

-- AddForeignKey
ALTER TABLE "AuthorizationInfo" ADD CONSTRAINT "AuthorizationInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
