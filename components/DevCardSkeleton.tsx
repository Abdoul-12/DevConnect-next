export default function DevCardSkeleton() {
  return (
    <div className="flex flex-col items-center pt-6 pb-3 rounded-2xl border border-border bg-bg h-full animate-pulse">
      {/* Avatar */}
      <div className="rounded-full w-20 h-20 min-h-20 min-w-20 bg-bg-filtre" />

      <div className="flex-1 w-full p-3 flex flex-col items-center">
        {/* Nom */}
        <div className="h-4 w-32 rounded bg-bg-filtre mb-2" />
        {/* Spécialité */}
        <div className="h-3 w-24 rounded bg-bg-filtre mb-4" />

        {/* Outils */}
        <div className="flex flex-wrap gap-2 mb-5 justify-center">
          <div className="h-6 w-14 rounded-md bg-bg-filtre" />
          <div className="h-6 w-16 rounded-md bg-bg-filtre" />
          <div className="h-6 w-12 rounded-md bg-bg-filtre" />
        </div>

        {/* Bouton portfolio */}
        <div className="w-full h-10 rounded-xl bg-bg-filtre mt-auto" />
      </div>
    </div>
  );
}
