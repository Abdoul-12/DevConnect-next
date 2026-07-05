"use client";

import { useActionState } from "react";
import { connexionAction, type EtatConnexion } from "../actions";

const etatInitial: EtatConnexion = null;

export default function PageConnexionAdmin() {
  const [etat, actionEnCours, enCours] = useActionState(
    connexionAction,
    etatInitial,
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary px-4">
      <form
        action={actionEnCours}
        className="w-full max-w-sm bg-bg rounded-2xl p-8 shadow-box space-y-5"
      >
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2 font-bold text-lg">
            <span className="text-gras">●</span>
            <span>DevConnect</span>
          </div>
          <p className="text-sm text-btn/70">Espace administrateur</p>
        </div>

        {etat?.erreur && (
          <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
            {etat.erreur}
          </p>
        )}

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-btn">
            Adresse e-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-gras"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="motDePasse" className="text-sm font-medium text-btn">
            Mot de passe
          </label>
          <input
            id="motDePasse"
            name="motDePasse"
            type="password"
            autoComplete="current-password"
            required
            className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-gras"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              id="resterConnecte"
              name="resterConnecte"
              type="checkbox"
              defaultChecked
              className="h-4 w-4 rounded border-border accent-gras"
            />
            <label htmlFor="resterConnecte" className="text-sm text-btn/80">
              Rester connecté
            </label>
          </div>

          <button
            type="submit"
            disabled={enCours}
            className="w-full bg-bg-logo hover:bg-bg-logo-hover text-white rounded-lg py-2.5 text-sm font-medium transition-colors disabled:opacity-60"
          >
            {enCours ? "Connexion..." : "Se connecter"}
          </button>
        </div>
      </form>
    </div>
  );
}
