-- CreateTable
CREATE TABLE "Developpeur" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Developpeur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Competence" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "developpeurId" TEXT NOT NULL,

    CONSTRAINT "Competence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Developpeur_email_key" ON "Developpeur"("email");

-- AddForeignKey
ALTER TABLE "Competence" ADD CONSTRAINT "Competence_developpeurId_fkey" FOREIGN KEY ("developpeurId") REFERENCES "Developpeur"("id") ON DELETE CASCADE ON UPDATE CASCADE;
