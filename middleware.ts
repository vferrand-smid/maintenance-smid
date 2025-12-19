import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const supportedLocales = [
  "fr-fr",
  "en-gb",
  "en-us",
  "en-ca",
  "en-au",
  "de-de",
  "es-es",
  "pt-br",
  "it-it",
  "ru-ru",
  "zh-cn",
  "ar-ae",
] as const;

const baseDefaults: Record<string, (typeof supportedLocales)[number]> = {
  fr: "fr-fr",
  en: "en-us",
  de: "de-de",
  es: "es-es",
  pt: "pt-br",
  it: "it-it",
  ru: "ru-ru",
  zh: "zh-cn",
  ar: "ar-ae",
};

const intlMiddleware = createMiddleware({
  locales: supportedLocales as unknown as string[],
  defaultLocale: "fr-fr",
  localePrefix: "as-needed",
  localeDetection: false,
});

function detectSupportedLocale(acceptLanguageHeader: string): string {
  const supported = new Set<string>(supportedLocales as unknown as string[]);
  const preferences = acceptLanguageHeader
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((token) => {
      const [tag, qPart] = token.split(";");
      const qMatch = qPart?.match(/q=([0-9.]+)/i);
      const q = qMatch ? parseFloat(qMatch[1]) : 1;
      const lcTag = (tag || "").toLowerCase();
      return { tag: lcTag, q: isNaN(q) ? 1 : q };
    })
    .sort((a, b) => b.q - a.q);

  for (const pref of preferences) {
    if (supported.has(pref.tag)) return pref.tag;
    const base = pref.tag.split("-")[0];
    const mapped = baseDefaults[base];
    if (mapped) return mapped;
  }
  return "fr-fr";
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1) Si une locale est présente dans l'URL, on ne normalise pas les locales régionales
  const match = pathname.match(/^\/([a-z]{2}(?:-[a-z]{2}))(?=\/|$)/i);
  if (!match) {
    // 2) Pas de locale dans l'URL: détecter via Accept-Language
    const header = request.headers.get("accept-language") || "";
    const detected = detectSupportedLocale(header);
    // Garder l'URL sans préfixe uniquement pour la locale par défaut (fr-fr)
    if (detected !== "fr-fr") {
      const url = new URL(`/${detected}${pathname}`, request.url);
      return NextResponse.redirect(url);
    }
  } else {
    // 3) Si la locale fournie n'est pas supportée, rediriger vers la région par défaut de la langue
    const seg = match[1].toLowerCase();
    const supported = new Set<string>(supportedLocales as unknown as string[]);
    if (!supported.has(seg)) {
      const base = seg.split("-")[0];
      const fallback = baseDefaults[base];
      if (fallback) {
        const rest = pathname.slice(1 + seg.length);
        const url = new URL(`/${fallback}${rest}`, request.url);
        return NextResponse.redirect(url);
      }
    }
  }

  // 4) Délégation à next-intl
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Exclut toutes les ressources statiques (tout chemin contenant un point),
    // et les répertoires spéciaux Next.
    "/((?!api|_next/static|_next/image|_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
