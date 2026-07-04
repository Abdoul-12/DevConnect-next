import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CHEMIN_PAGE_CONNEXION = "/admin/login";

/**
 * Vérifie seulement la présence d'un cookie de session Supabase.
 * Le contrôle « autoritaire » (validation du token auprès de Supabase)
 * est fait plus loin dans app/admin/(protege)/layout.tsx : le proxy doit
 * rester léger et ne pas interroger de service externe ou la base de données.
 */
function possedeCookieDeSessionSupabase(request: NextRequest): boolean {
  return request.cookies
    .getAll()
    .some((cookie) => cookie.name.startsWith("sb-") && cookie.name.includes("auth-token"));
}

export function proxy(request: NextRequest) {
  const cheminDemande = request.nextUrl.pathname;

  if (cheminDemande === CHEMIN_PAGE_CONNEXION) {
    return NextResponse.next();
  }

  if (!possedeCookieDeSessionSupabase(request)) {
    return NextResponse.redirect(new URL(CHEMIN_PAGE_CONNEXION, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
