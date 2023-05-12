import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("token");
  let url = req.url;

  if (!verify && url.includes("/profile")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}
