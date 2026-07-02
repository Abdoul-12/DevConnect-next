"use client";

import { useRouter, useSearchParams } from "next/navigation";

const specialites = ["Tous", "Front-end", "Fullstack", "Back-end"];

export default function FiltreDomaine({ actif }: { actif: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleClick(specialite: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (specialite === "Tous") {
      params.delete("specialite");
    } else {
      params.set("specialite", specialite);
    }
    router.push(`/developpeurs?${params.toString()}`);
  }

  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {specialites.map((s) => (
        <button
          key={s}
          onClick={() => handleClick(s)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${
              actif === s
                ? "bg-accent-light text-hero-text"
                : "bg-white/10 text-hero-text/70 hover:bg-white/20"
            }`}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
