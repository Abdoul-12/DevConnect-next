/* Normalise une chaîne de spécialité pour permettre une comparaison fiable, peu importe la casse ou la présence d'espaces/tirets (ex: "Front-end" vs "Frontend"). */
export function normaliserSpecialite(valeur: string): string {
  return valeur.toLowerCase().replace(/[\s-]/g, "");
}

/* Vérifie si la spécialité d'un développeur correspond au filtre choisi. Un filtre vide ou égal à "Tous" correspond à tous les développeurs. */
export function correspondALaSpecialite(
  specialiteDeveloppeur: string,
  filtre: string
): boolean {
  if (!filtre || filtre === "Tous") return true;
  return normaliserSpecialite(specialiteDeveloppeur).includes(
    normaliserSpecialite(filtre)
  );
}
