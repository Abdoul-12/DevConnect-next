import { deconnexionAction } from "../actions";

export default function BoutonDeconnexion() {
  return (
    <form action={deconnexionAction}>
      <button
        type="submit"
        className="text-gras text-sm font-medium hover:underline cursor-pointer"
      >
        Se déconnecter
      </button>
    </form>
  );
}
