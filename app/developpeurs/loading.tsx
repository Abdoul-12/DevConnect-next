import DevCardSkeleton from "@/components/DevCardSkeleton";

export default function ChargementDeveloppeurs() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-border-bottom px-8 py-4 bg-bg">
        <div className="h-6" />
      </header>

      <div className="sticky top-15.25 z-10 flex gap-3 px-8 py-4 border-b border-border-bottom bg-bg-filtre">
        <div className="h-8 w-56 rounded-full bg-border animate-pulse" />
      </div>

      <main className="px-8 py-8">
        <div className="h-6 w-48 rounded bg-bg-filtre animate-pulse mb-6" />

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <DevCardSkeleton key={i} />
          ))}
        </section>
      </main>
    </div>
  );
}
