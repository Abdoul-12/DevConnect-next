/**
 * Affiché automatiquement par Next.js pendant que `listerDeveloppeurs()`
 * répond, le temps de charger le tableau de bord admin.
 */
export default function ChargementTableauDeBord() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="h-6 w-40 rounded bg-bg-filtre animate-pulse" />
        <div className="h-9 w-44 rounded-lg bg-bg-filtre animate-pulse" />
      </div>

      <div className="bg-bg rounded-2xl border border-border-card overflow-hidden">
        <div className="bg-bg-filtre h-10" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-4 py-3 border-t border-border-card animate-pulse"
          >
            <div className="h-4 w-32 rounded bg-bg-filtre" />
            <div className="h-4 w-40 rounded bg-bg-filtre" />
            <div className="h-4 w-8 rounded bg-bg-filtre" />
            <div className="h-4 w-16 rounded bg-bg-filtre ml-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
