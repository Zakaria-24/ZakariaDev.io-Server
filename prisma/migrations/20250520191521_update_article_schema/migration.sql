/*
  Warnings:

  - You are about to drop the column `likes` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `articles` table. All the data in the column will be lost.
  - Added the required column `description` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "articles" DROP COLUMN "likes",
DROP COLUMN "link",
DROP COLUMN "views",
ADD COLUMN     "description" TEXT NOT NULL;
