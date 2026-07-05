import { prisma } from "@/lib/prisma";
import type { DonneesDeveloppeur } from "./developpeurs.types";

/* Tous les développeurs avec leurs outils, du plus récent au plus ancien. */
export async function listerDeveloppeurs() {
  return prisma.developpeur.findMany({
    include: { outils: true },
    orderBy: { createdAt: "desc" },
  });
}

/* Un développeur précis avec ses outils, ou null s'il n'existe pas. */
export async function trouverDeveloppeurParId(id: string) {
  return prisma.developpeur.findUnique({
    where: { id },
    include: { outils: true },
  });
}

/* Crée un nouveau développeur ainsi que ses outils associés. */
export async function creerDeveloppeur(donnees: DonneesDeveloppeur) {
  return prisma.developpeur.create({
    data: {
      nom: donnees.nom,
      specialite: donnees.specialite,
      image: donnees.image,
      lienPortfolio: donnees.lienPortfolio,
      outils: {
        create: donnees.outils.map((nom) => ({ nom })),
      },
    },
    include: { outils: true },
  });
}

/* Met à jour un développeur existant. Les outils sont entièrement remplacés par la nouvelle liste fournie, pour rester simple et prévisible. */
export async function modifierDeveloppeur(
  id: string,
  donnees: DonneesDeveloppeur
) {
  return prisma.developpeur.update({
    where: { id },
    data: {
      nom: donnees.nom,
      specialite: donnees.specialite,
      image: donnees.image,
      lienPortfolio: donnees.lienPortfolio,
      outils: {
        deleteMany: {},
        create: donnees.outils.map((nom) => ({ nom })),
      },
    },
    include: { outils: true },
  });
}

/* Supprime un développeur et ses outils. */
export async function supprimerDeveloppeur(id: string) {
  return prisma.developpeur.delete({ where: { id } });
}
