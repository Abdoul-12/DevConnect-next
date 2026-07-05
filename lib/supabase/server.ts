import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/* Client Supabase pour les Server Components, Server Actions et Route Handlers.
 
  `sessionPersistante` contrôle l'option « Rester connecté » :
  - true (par défaut) : cookie persistant, la session survit à la fermeture du navigateur.
  - false : cookie de session, supprimé automatiquement à la fermeture du navigateur.
 
  La propriété `cookieOptions.maxAge` de `createServerClient` est ignorée par @supabase/ssr (bug connu de la librairie), on force donc nous-mêmes la durée de vie du cookie directement dans `setAll`. */
export async function creerClientServeur(sessionPersistante: boolean = true) {
  const magasinCookies = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return magasinCookies.getAll();
        },
        setAll(cookiesAEnregistrer) {
          try {
            cookiesAEnregistrer.forEach(({ name, value, options }) => {
              const optionsFinales = sessionPersistante
                ? options
                : { ...options, maxAge: undefined, expires: undefined };
              magasinCookies.set(name, value, optionsFinales);
            });
          } catch {
          }
        },
      },
    }
  );
}
