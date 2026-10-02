import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, type Locale } from "@/i18n/config";

/** Arabic if it is the browser's first preference between the two, otherwise English. */
function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const language = part.split(";")[0].trim().slice(0, 2).toLowerCase();
    if (hasLocale(language)) return language;
  }
  return defaultLocale;
}

// Sends paths without a locale prefix (including "/") to the visitor's language.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (hasLocale(first)) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and anything that looks like a file (sitemap.xml, icons, images).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
