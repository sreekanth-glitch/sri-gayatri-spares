import { NextResponse } from "next/server";
import { createSessionToken } from "@/lib/auth";

export async function POST(req) {
  const { password } = await req.json();
  if (!process.env.ADMIN_PASSWORD || !process.env.SESSION_SECRET) {
    return NextResponse.json({ error: "Set ADMIN_PASSWORD and SESSION_SECRET in .env.local first." }, { status: 500 });
  }
  if (password !== process.env.ADMIN_PASSWORD) return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  const response = NextResponse.json({ success: true });
  response.cookies.set("sg_admin", createSessionToken(), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 60 * 60 * 8 });
  return response;
}
