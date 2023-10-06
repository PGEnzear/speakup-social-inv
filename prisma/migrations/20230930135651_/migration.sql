-- AlterTable
ALTER TABLE "User" ALTER COLUMN "deletedInfo" DROP NOT NULL,
ALTER COLUMN "deletedReason" DROP NOT NULL;
