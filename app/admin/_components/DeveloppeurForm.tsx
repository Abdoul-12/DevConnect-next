type ValeursFormulaireDeveloppeur = {
  nom: string;
  specialite: string;
  image: string;
  lienPortfolio: string;
  outils: string;
};

export default function DeveloppeurForm({
  action,
  valeursInitiales,
  libelleBouton,
}: {
  action: (formData: FormData) => void;
  valeursInitiales?: Partial<ValeursFormulaireDeveloppeur>;
  libelleBouton: string;
}) {
  return (
    <form
      action={action}
      className="bg-bg rounded-2xl border border-border-card p-6 space-y-5 max-w-2xl flex flex-col gap-1"
    >
      <div className="space-y-1">
        <label htmlFor="nom" className="text-sm font-medium text-btn">
          Nom complet
        </label>
        <input
          id="nom"
          name="nom"
          defaultValue={valeursInitiales?.nom}
          required
          className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-gras"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="specialite" className="text-sm font-medium text-btn">
          Spécialité
        </label>
        <input
          id="specialite"
          name="specialite"
          defaultValue={valeursInitiales?.specialite}
          placeholder="Developpeur Fullstack"
          required
          className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-gras"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="image" className="text-sm font-medium text-btn">
          Nom du fichier image (déposé dans /public)
        </label>
        <input
          id="image"
          name="image"
          defaultValue={valeursInitiales?.image}
          placeholder="dodge.png"
          className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-gras"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="lienPortfolio" className="text-sm font-medium text-btn">
          Lien du portfolio
        </label>
        <input
          id="lienPortfolio"
          name="lienPortfolio"
          type="url"
          defaultValue={valeursInitiales?.lienPortfolio}
          placeholder="https://..."
          className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-gras"
        />
      </div>

      <div className="space-y-1 mb-2.5">
        <label htmlFor="outils" className="text-sm font-medium text-btn">
          Outils, séparés par des virgules
        </label>
        <input
          id="outils"
          name="outils"
          defaultValue={valeursInitiales?.outils}
          placeholder="HTML, CSS, TypeScript, React"
          className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-gras"
        />
      </div>

      <button
        type="submit"
        className="bg-bg-logo hover:bg-bg-logo-hover text-white text-sm font-medium rounded-lg px-5 py-2.5 mt-2.5 transition-colors cursor-pointer w-max space-y-1"
      >
        {libelleBouton}
      </button>
    </form>
  );
}
