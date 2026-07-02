/*
  Warnings:

  - You are about to drop the column `email` on the `Developpeur` table. All the data in the column will be lost.
  - You are about to drop the column `prenom` on the `Developpeur` table. All the data in the column will be lost.
  - You are about to drop the column `titre` on the `Developpeur` table. All the data in the column will be lost.
  - You are about to drop the `Competence` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `specialite` to the `Developpeur` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Competence" DROP CONSTRAINT "Competence_developpeurId_fkey";

-- DropIndex
DROP INDEX "Developpeur_email_key";

-- AlterTable
ALTER TABLE "Developpeur" DROP COLUMN "email",
DROP COLUMN "prenom",
DROP COLUMN "titre",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "lienPortfolio" TEXT,
ADD COLUMN     "specialite" TEXT NOT NULL;

-- DropTable
DROP TABLE "Competence";

-- CreateTable
CREATE TABLE "Outil" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "developpeurId" TEXT NOT NULL,

    CONSTRAINT "Outil_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Outil" ADD CONSTRAINT "Outil_developpeurId_fkey" FOREIGN KEY ("developpeurId") REFERENCES "Developpeur"("id") ON DELETE CASCADE ON UPDATE CASCADE;
