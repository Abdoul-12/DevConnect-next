import { redirect } from "next/navigation";
import { creerClientServeur } from "@/lib/supabase/server";

/* Retourne l'utilisateur connecté, ou null s'il n'y a pas de session valide. */
export async function obtenirUtilisateurConnecte() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

/* Garde d'authentification. Redirige vers la page de connexion si personne n'est connecté. */
export async function exigerUtilisateurConnecte() {
  const utilisateur = await obtenirUtilisateurConnecte();

  if (!utilisateur) {
    redirect("/admin/login");
  }

  return utilisateur;
}
