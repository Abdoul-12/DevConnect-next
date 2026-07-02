import Link from "next/link";

export default function developpeurs() {
  return (
    <div className="min-h-screen">
      {/* == HEADER == */}
      <header className="sticky border-b border-border-bottom px-8 py-4 ">
        <nav className="relative z-2 flex items-center justify-center ml-8 mr-8">
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
          <div className="flex self-center items-center gap-2 font-bold text-lg">
            <span className="text-gras">●</span>
            <span>DevConnect</span>
          </div>
        </nav>
      </header>

      {/* == BARRE DE FILTRES == */}
      <div className="flex gap-3 px-8 py-4 border-b border-border-bottom bg-bg-filtre">
        <button className=" px-4 py-1.5 rounded-full border border-gras bg-bg-btn text-btn text-sm font-medium cursor-pointer">
          Tous
        </button>
        <button className="px-4 py-1.5 rounded-full border border-border text-sm font-medium text-btn cursor-pointer">
          Full Stack
        </button>
        <button className="px-4 py-1.5 rounded-full border border-border text-sm font-medium text-btn cursor-pointer">
          Frontend
        </button>
        <button className="px-4 py-1.5 rounded-full border border-border text-sm font-medium text-btn cursor-pointer">
          Backend
        </button>
      </div>
      <main className="px-8 py-8">
        {/* == TITRE DE LA SECTION == */}
        <h2 className="text-xl font-bold mb-6">Tous les développeurs</h2>

        {/* == GRILLE DE CARDS == */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Une seule card en exemple, comme ça Dorcas et Nancy pourront ajouter les autres en suivant le modèle */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold mb-4 bg-bg-btn text-gras">
              BK
            </div>{}</div>
        </section>
      </main>
    </div>
  );
}
