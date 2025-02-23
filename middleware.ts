import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

const protectedRoutes = ["/dashboard", "/profile", "/settings"];

// Helper function to verify JWT
async function verifyJWT(token: string, secret: Uint8Array) {
  try {
    await jose.jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith("/auth")) {
    return NextResponse.next();
  }

  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route)
  );

  if (isProtectedRoute) {
    const token = request.cookies.get("auth-token")?.value;
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

    if (!token) {
      return NextResponse.redirect(new URL("/api/auth/refresh", request.url));
    }

    const isValid = await verifyJWT(token, secret);

    if (!isValid) {
      // Redirect to API route that handles token refresh
      return NextResponse.redirect(new URL("/api/auth/refresh", request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
