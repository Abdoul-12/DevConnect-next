import { NextResponse } from "next/server";
import { obtenirUtilisateurConnecte } from "@/lib/supabase/auth";
import {
  listerDeveloppeurs,
  creerDeveloppeur,
} from "@/lib/developpeurs/developpeurs.service";

export async function GET() {
  const developpeurs = await listerDeveloppeurs();
  return NextResponse.json(developpeurs);
}

export async function POST(request: Request) {
  const utilisateur = await obtenirUtilisateurConnecte();
  if (!utilisateur) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const body = await request.json();
  const developpeur = await creerDeveloppeur({
    nom: body.nom,
    specialite: body.specialite,
    image: body.image ?? null,
    lienPortfolio: body.lienPortfolio ?? null,
    outils: body.outils ?? [],
  });

  return NextResponse.json(developpeur, { status: 201 });
}
