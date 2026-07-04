import { NextResponse } from "next/server";
import { obtenirUtilisateurConnecte } from "@/lib/supabase/auth";
import {
  trouverDeveloppeurParId,
  modifierDeveloppeur,
  supprimerDeveloppeur,
} from "@/lib/developpeurs/developpeurs.service";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const developpeur = await trouverDeveloppeurParId(id);

  if (!developpeur) {
    return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  }
  return NextResponse.json(developpeur);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const utilisateur = await obtenirUtilisateurConnecte();
  if (!utilisateur) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const developpeur = await modifierDeveloppeur(id, {
    nom: body.nom,
    specialite: body.specialite,
    image: body.image ?? null,
    lienPortfolio: body.lienPortfolio ?? null,
    outils: body.outils ?? [],
  });

  return NextResponse.json(developpeur);
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const utilisateur = await obtenirUtilisateurConnecte();
  if (!utilisateur) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { id } = await params;
  await supprimerDeveloppeur(id);
  return NextResponse.json({ message: "Supprimé" });
}
