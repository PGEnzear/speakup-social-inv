/*
  Warnings:

  - Added the required column `loginIp` to the `AuthSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loginLocation` to the `AuthSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AuthSession" ADD COLUMN     "browser" TEXT,
ADD COLUMN     "loginIp" TEXT NOT NULL,
ADD COLUMN     "loginLocation" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Authorization" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "registerLocation" TEXT NOT NULL,
    "registerIp" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Authorization_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Authorization_userId_key" ON "Authorization"("userId");

-- AddForeignKey
ALTER TABLE "Authorization" ADD CONSTRAINT "Authorization_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
