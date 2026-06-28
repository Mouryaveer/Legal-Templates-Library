import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json().catch(() => ({}));

    const expectedPassword = process.env.ADMIN_PASSWORD || "turn2law-admin-2024";

    if (password === expectedPassword) {
      const response = NextResponse.json({ success: true }, { status: 200 });

      // Set cookie - HttpOnly, Secure, SameSite=Strict
      response.cookies.set("t2l_admin_session", "authenticated_session_token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { error: "Incorrect admin password." },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
