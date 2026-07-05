import { redirect } from "next/navigation";
import { obtenirUtilisateurConnecte } from "@/lib/supabase/auth";
import AdminHeader from "../_components/AdminHeader";

// Les pages admin dépendent de la session utilisateur et des données les
// plus récentes : elles ne doivent jamais être mises en cache statiquement.
export const dynamic = "force-dynamic";

/**
 * Garde d'authentification « autoritaire » : contrairement au proxy (qui ne
 * fait qu'un contrôle rapide de présence de cookie), ce layout valide la
 * session auprès de Supabase avant d'autoriser l'accès aux pages admin.
 */
export default async function LayoutAdminProtege({
  children,
}: {
  children: React.ReactNode;
}) {
  const utilisateur = await obtenirUtilisateurConnecte();

  if (!utilisateur) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-bg-filtre">
      <AdminHeader emailUtilisateur={utilisateur.email ?? ""} />
      <main className="max-w-6xl mx-auto px-8 py-8">{children}</main>
    </div>
  );
}
