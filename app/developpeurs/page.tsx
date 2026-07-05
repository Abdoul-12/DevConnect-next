import Link from "next/link";
import DevCard from "@/components/DevCard";
import FiltreDomaine from "@/components/FiltreDomaine";
import { listerDeveloppeurs } from "@/lib/developpeurs/developpeurs.service";
import { correspondALaSpecialite } from "@/lib/utils/specialite";

// Dépend des paramètres de recherche et des données les plus récentes de la base.
export const dynamic = "force-dynamic";

export default async function PageDeveloppeurs({
  searchParams,
}: {
  searchParams: Promise<{ specialite?: string }>;
}) {
  const { specialite } = await searchParams;
  const specialiteActive = specialite ?? "Tous";

  const tousLesDeveloppeurs = await listerDeveloppeurs();
  const developpeursAffiches = tousLesDeveloppeurs.filter((developpeur) =>
    correspondALaSpecialite(developpeur.specialite, specialiteActive)
  );

  return (
    <div className="min-h-screen">
      {/* == HEADER == */}
      <header className="sticky top-0 z-10 border-b border-border-bottom px-8 py-4 bg-bg">
        <nav className="relative flex items-center justify-center ml-8 mr-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-btn absolute left-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#555"
              className="bi bi-house-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
            </svg>
          </Link>
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="text-gras">●</span>
            <span>DevConnect</span>
          </div>
        </nav>
      </header>

      {/* == BARRE DE FILTRES == */}
      <div className="sticky top-15.25 z-10 flex gap-3 px-8 py-4 border-b border-border-bottom bg-bg-filtre">
        <FiltreDomaine actif={specialiteActive} />
      </div>

      <main className="px-8 py-8 flex flex-col gap-6">
        <h2 className="text-xl font-bold mb-6">Liste des développeurs</h2>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr gap-6">
          {developpeursAffiches.map((developpeur) => (
            <DevCard key={developpeur.id} dev={developpeur} />
          ))}
        </section>

        {developpeursAffiches.length === 0 && (
          <p className="text-btn/60 text-sm">
            Aucun développeur ne correspond à ce filtre.
          </p>
        )}
      </main>
    </div>
  );
}
