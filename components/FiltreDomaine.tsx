"use client";

import { useRouter, useSearchParams } from "next/navigation";

const specialites = ["Tous", "Full Stack", "Frontend", "Backend"];

export default function FiltreDomaine({ actif }: { actif: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function gererClic(specialite: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (specialite === "Tous") {
      params.delete("specialite");
    } else {
      params.set("specialite", specialite);
    }
    const requete = params.toString();
    router.push(requete ? `/developpeurs?${requete}` : "/developpeurs");
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {specialites.map((specialite) => (
        <button
          key={specialite}
          onClick={() => gererClic(specialite)}
          className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-colors cursor-pointer
            ${
              actif === specialite
                ? "border-gras bg-bg-btn text-btn"
                : "border-border text-btn hover:border-gras"
            }`}
        >
          {specialite}
        </button>
      ))}
    </div>
  );
}
