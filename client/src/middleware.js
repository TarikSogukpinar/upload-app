import { NextResponse } from "next/server";

export default async function middleware(req) {
  const verify = req.cookies.get("token");

  if (!verify && req.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }
  if (verify && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.rewrite(new URL("/", req.url));
  }
  if (verify && req.nextUrl.pathname.startsWith("/register")) {
    return NextResponse.rewrite(new URL("/", req.url));
  }
  if (!verify && req.nextUrl.pathname.startsWith("/home")) {
    return NextResponse.rewrite(new URL("/", req.url));
  }
}
