import DeveloppeurForm from "../../_components/DeveloppeurForm";
import { creerDeveloppeurAction } from "../../actions";

export default function PageNouveauDeveloppeur() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Ajouter un développeur</h1>
      <DeveloppeurForm
        action={creerDeveloppeurAction}
        libelleBouton="Créer le développeur"
      />
    </div>
  );
}
