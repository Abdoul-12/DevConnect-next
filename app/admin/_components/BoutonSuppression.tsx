"use client";

import { useTransition } from "react";
import { supprimerDeveloppeurAction } from "../actions";

export default function BoutonSuppression({
  id,
  nom,
}: {
  id: string;
  nom: string;
}) {
  const [enCours, demarrerTransition] = useTransition();

  function gererSuppression() {
    const confirme = window.confirm(
      `Supprimer ${nom} ? Cette action est irréversible.`
    );
    if (!confirme) return;

    demarrerTransition(() => {
      supprimerDeveloppeurAction(id);
    });
  }

  return (
    <button
      type="button"
      onClick={gererSuppression}
      disabled={enCours}
      className="text-red-600 text-sm font-medium hover:underline disabled:opacity-50 cursor-pointer"
    >
      {enCours ? "Suppression..." : "Supprimer"}
    </button>
  );
}
