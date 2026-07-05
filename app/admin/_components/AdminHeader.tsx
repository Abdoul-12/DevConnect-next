import Link from "next/link";
import BoutonDeconnexion from "./BoutonDeconnexion";

export default function AdminHeader({
  emailUtilisateur,
}: {
  emailUtilisateur: string;
}) {
  return (
    <header className="sticky top-0 z-10 bg-bg border-b border-border-bottom px-8 py-4">
      <div className="flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-2 font-bold">
          <span className="text-gras">●</span>
          <span>DevConnect · Administration</span>
        </Link>

        <div className="flex items-center gap-4 text-sm text-btn/70">
          <span>{emailUtilisateur}</span>
          <BoutonDeconnexion />
        </div>
      </div>
    </header>
  );
}
