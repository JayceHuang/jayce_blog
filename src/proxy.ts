import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GEO_HOSTS = new Set(["geo.imhxm.com"]);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  const { pathname } = request.nextUrl;

  if (!host || !GEO_HOSTS.has(host)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/geo-assets") || pathname === "/favicon.ico") {
    return NextResponse.next();
  }

  if (pathname === "/" || pathname === "" || pathname === "/index.html") {
    const url = request.nextUrl.clone();
    url.pathname = "/geo/index.html";
    return NextResponse.rewrite(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = "/geo/index.html";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
