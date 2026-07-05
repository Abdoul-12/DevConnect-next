import Image from "next/image";

type Dev = {
  id: string;
  nom: string;
  specialite: string;
  outils: string[] | { id: string; nom: string }[];
  image: string | null;
  lienPortfolio: string | null;
};

function getNomOutil(outil: string | { id: string; nom: string }): string {
  return typeof outil === "string" ? outil : outil.nom;
}

{/*Nombre d'outils affichés avant de regrouper le reste sous un badge "+n". pour éviter qu'un développeur avec beaucoup d'outils fasse gonfler la hauteur de sa carte (et donc de toute sa rangée dans la grille) par rapport aux autres. */}
const NB_OUTILS_VISIBLES = 6;

export default function DevCard({ dev }: { dev: Dev }) {
  const outilsVisibles = dev.outils.slice(0, NB_OUTILS_VISIBLES);
  const nbOutilsRestants = dev.outils.length - outilsVisibles.length;
  return (
    <article className="flex flex-col items-center text-center pt-6 pb-3 pr-3 pl-3 gap-3 rounded-2xl border border-border bg-bg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      {/* Photo ou initiale */}
      <div className="relative rounded-full w-20 h-20 min-h-20 min-w-20 overflow-hidden bg-bg-logo/20 items-center justify-center content-center">
        {dev.image ? (
          <Image
            src={`/${dev.image}`}
            alt={dev.nom}
            fill
            className="object-cover object-center"
          />
        ) : (
          <div className="w-20 h-20 min-h-20 min-w-20 rounded-full flex items-center justify-center text-sm font-bold mb-4 bg-bg-btn) text-gras">
            <span className="text-5xl font-bold text-btn/20">
              {dev.nom.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Infos */}
      {/* <div className="h-min p-3 flex flex-col gap-3 items-center justify-center"> */}
      <h2 className="text-btn-hover font-bold text-lg leading-tight mb-1">
        {dev.nom}
      </h2>
      <p className="text-btn-hover/70 text-sm mb-4">{dev.specialite}</p>

      {/* Outils (limités, avec badge pour le surplus) */}
        {outilsVisibles.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5 justify-center">
            {outilsVisibles.map((outil, i) => (
              <span
                key={i}
                className="bg-bg-filtre text-btn text-xs px-2.5 py-1 rounded-md border border-border-li"
              >
                {getNomOutil(outil)}
              </span>
            ))}
            {nbOutilsRestants > 0 && (
              <span className="bg-bg-filtre text-btn/60 text-xs px-2.5 py-1 rounded-md border border-border-li">
                +{nbOutilsRestants}
              </span>
            )}
          </div>
        )}

      {/* Lien portfolio */}
      {dev.lienPortfolio && (
        <a
          href={dev.lienPortfolio.trim()}
          target="_blank"
          rel="noopener noreferrer"
          className="items-center justify-center w-full bg-bg-logo hover:bg-bg-voir-btn-hover text-white text-sm rounded-xl py-2.5 transition-all duration-200 mt-auto"
        >
          Voir le portfolio
        </a>
      )}
      {/* </div> */}
    </article>
  );
}
