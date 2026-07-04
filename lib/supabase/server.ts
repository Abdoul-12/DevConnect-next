import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/* Client Supabase pour les Server Components, Server Actions et Route Handlers. */
export async function creerClientServeur() {
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
            cookiesAEnregistrer.forEach(({ name, value, options }) =>
              magasinCookies.set(name, value, options)
            );
          } catch {
          }
        },
      },
    }
  );
}
