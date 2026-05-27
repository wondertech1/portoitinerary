import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  if (host.startsWith("www.")) {
    const bare = host.replace(/^www\./, "");
    const target = `https://${bare}${request.nextUrl.pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(target, 301);
  }
  return NextResponse.next();
}
