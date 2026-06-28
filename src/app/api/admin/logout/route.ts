import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const response = NextResponse.json({ success: true }, { status: 200 });
  
  // Clear the cookie
  response.cookies.delete("t2l_admin_session");
  
  return response;
}
export async function GET(req: NextRequest) {
  const response = NextResponse.redirect(new URL("/admin/login", req.url));
  response.cookies.delete("t2l_admin_session");
  return response;
}
