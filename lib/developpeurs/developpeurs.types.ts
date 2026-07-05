/* Données nécessaires pour créer ou modifier un développeur. */
export type DonneesDeveloppeur = {
  nom: string;
  specialite: string;
  image: string | null;
  lienPortfolio: string | null;
  outils: string[];
};
