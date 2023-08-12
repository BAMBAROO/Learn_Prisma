-- CreateTable
-- "npx prisma migrate (dev | deploy | save) --name migration-name"
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);