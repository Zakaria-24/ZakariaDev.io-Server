/*
  Warnings:

  - You are about to drop the column `iconName` on the `skills` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `skills` table. All the data in the column will be lost.
  - Added the required column `icon` to the `skills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "skills" DROP COLUMN "iconName",
DROP COLUMN "name",
ADD COLUMN     "icon" TEXT NOT NULL;
