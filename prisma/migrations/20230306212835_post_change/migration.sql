/*
  Warnings:

  - Added the required column `content` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` MODIFY `content` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `post` ADD COLUMN `content` TEXT NOT NULL;
