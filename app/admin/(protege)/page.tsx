import Link from "next/link";
import { listerDeveloppeurs } from "@/lib/developpeurs/developpeurs.service";
import BoutonSuppression from "../_components/BoutonSuppression";

export default async function TableauDeBordAdmin() {
  const developpeurs = await listerDeveloppeurs();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">
          Développeurs ({developpeurs.length})
        </h1>
        <Link
          href="/admin/nouveau"
          className="bg-bg-logo hover:bg-bg-logo-hover text-white text-sm font-medium rounded-lg px-4 py-2 transition-colors"
        >
          Ajouter un développeur
        </Link>
      </div>

      <div className="bg-bg rounded-2xl border border-border-card overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-bg-filtre text-btn/70">
            <tr>
              <th className="px-4 py-3 font-medium">Nom</th>
              <th className="px-4 py-3 font-medium">Spécialité</th>
              <th className="px-4 py-3 font-medium">Outils</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {developpeurs.map((developpeur) => (
              <tr key={developpeur.id} className="border-t border-border-card">
                <td className="px-4 py-3 font-medium">{developpeur.nom}</td>
                <td className="px-4 py-3 text-btn/70">
                  {developpeur.specialite}
                </td>
                <td className="px-4 py-3 text-btn/70">
                  {developpeur.outils.length}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-4">
                    <Link
                      href={`/admin/${developpeur.id}`}
                      className="text-gras text-sm font-medium hover:underline"
                    >
                      Modifier
                    </Link>
                    <BoutonSuppression id={developpeur.id} nom={developpeur.nom} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {developpeurs.length === 0 && (
          <p className="text-btn/60 text-sm px-4 py-6 text-center">
            Aucun développeur enregistré pour le moment.
          </p>
        )}
      </div>
    </div>
  );
}
