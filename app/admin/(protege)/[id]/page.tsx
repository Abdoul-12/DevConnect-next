import { notFound } from "next/navigation";
import DeveloppeurForm from "../../_components/DeveloppeurForm";
import { modifierDeveloppeurAction } from "../../actions";
import { trouverDeveloppeurParId } from "@/lib/developpeurs/developpeurs.service";

export default async function PageModifierDeveloppeur({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const developpeur = await trouverDeveloppeurParId(id);

  if (!developpeur) {
    notFound();
  }

  const actionAvecId = modifierDeveloppeurAction.bind(null, id);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Modifier {developpeur.nom}</h1>
      <DeveloppeurForm
        action={actionAvecId}
        libelleBouton="Enregistrer les modifications"
        valeursInitiales={{
          nom: developpeur.nom,
          specialite: developpeur.specialite,
          image: developpeur.image ?? "",
          lienPortfolio: developpeur.lienPortfolio ?? "",
          outils: developpeur.outils.map((outil) => outil.nom).join(", "),
        }}
      />
    </div>
  );
}
