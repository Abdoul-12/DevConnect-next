"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { creerClientServeur } from "@/lib/supabase/server";
import { exigerUtilisateurConnecte } from "@/lib/supabase/auth";
import {
  creerDeveloppeur,
  modifierDeveloppeur,
  supprimerDeveloppeur,
} from "@/lib/developpeurs/developpeurs.service";
import type { DonneesDeveloppeur } from "@/lib/developpeurs/developpeurs.types";

export type EtatConnexion = { erreur: string } | null;

/* Authentifie l'administrateur par e-mail et mot de passe via Supabase Auth. */
export async function connexionAction(
  _etatPrecedent: EtatConnexion,
  formData: FormData
): Promise<EtatConnexion> {
  const email = String(formData.get("email") ?? "");
  const motDePasse = String(formData.get("motDePasse") ?? "");

  const supabase = await creerClientServeur();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password: motDePasse,
  });

  if (error) {
    return { erreur: "Adresse e-mail ou mot de passe incorrect." };
  }

  redirect("/admin");
}

/* Déconnecte l'administrateur et le renvoie vers la page de connexion. */
export async function deconnexionAction() {
  const supabase = await creerClientServeur();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

/*  Transforme les champs bruts d'un formulaire en données prêtes pour la couche service. */
function extraireDonneesFormulaire(formData: FormData): DonneesDeveloppeur {
  const outilsBruts = String(formData.get("outils") ?? "");

  return {
    nom: String(formData.get("nom") ?? "").trim(),
    specialite: String(formData.get("specialite") ?? "").trim(),
    image: String(formData.get("image") ?? "").trim() || null,
    lienPortfolio: String(formData.get("lienPortfolio") ?? "").trim() || null,
    outils: outilsBruts
      .split(",")
      .map((outil) => outil.trim())
      .filter((outil) => outil.length > 0),
  };
}

export async function creerDeveloppeurAction(formData: FormData) {
  await exigerUtilisateurConnecte();

  const donnees = extraireDonneesFormulaire(formData);
  await creerDeveloppeur(donnees);

  revalidatePath("/admin");
  revalidatePath("/developpeurs");
  redirect("/admin");
}

export async function modifierDeveloppeurAction(id: string, formData: FormData) {
  await exigerUtilisateurConnecte();

  const donnees = extraireDonneesFormulaire(formData);
  await modifierDeveloppeur(id, donnees);

  revalidatePath("/admin");
  revalidatePath("/developpeurs");
  redirect("/admin");
}

export async function supprimerDeveloppeurAction(id: string) {
  await exigerUtilisateurConnecte();

  await supprimerDeveloppeur(id);

  revalidatePath("/admin");
  revalidatePath("/developpeurs");
}
