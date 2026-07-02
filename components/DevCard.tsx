import Image from "next/image"

type Dev = {
  id:            string
  nom:           string
  specialite:    string
  outils:        string[] | { id: string; nom: string }[]
  image:         string | null
  lienPortfolio: string | null
}

function getNomOutil(outil: string | { id: string; nom: string }): string {
  return typeof outil === "string" ? outil : outil.nom
}

export default function DevCard({ dev }: { dev: Dev }) {
  return (
    <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden
                        hover:border-accent-light/50 transition-all duration-300 group">

      {/* Photo ou initiale */}
      <div className="relative h-52 overflow-hidden bg-accent-light/20">
        {dev.image ? (
          <Image
            src={`/img/${dev.image}`}
            alt={dev.nom}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl font-bold text-white/20">
              {dev.nom.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Infos */}
      <div className="p-5">
        <h2 className="text-hero-text font-bold text-lg leading-tight mb-1">
          {dev.nom}
        </h2>
        <p className="text-hero-text/60 text-sm mb-4">
          {dev.specialite}
        </p>

        {/* Outils */}
        {dev.outils.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {dev.outils.map((outil, i) => (
              <span
                key={i}
                className="bg-white/10 text-hero-text/80 text-xs px-2.5 py-1 rounded-md"
              >
                {getNomOutil(outil)}
              </span>
            ))}
          </div>
        )}

        {/* Lien portfolio */}
        {dev.lienPortfolio && (
          
            href={dev.lienPortfolio.trim()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full
                       border border-white/20 hover:border-accent-light
                       text-hero-text/70 hover:text-hero-text text-sm
                       rounded-xl py-2.5 transition-all duration-200"
          >
            Voir le portfolio
          </a>
        )}
      </div>

    </article>
  )
}