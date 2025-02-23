import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const refreshToken = request.cookies.get("refresh-token")?.value;

  if (!refreshToken) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET!) as {
      sub: string;
    };

    const user = await prisma.user.findUnique({
      where: { id: decoded.sub },
    });

    if (!user || user.refreshToken !== refreshToken) {
      const response = NextResponse.redirect(
        new URL("/auth/sign-in", request.url)
      );
      response.cookies.delete("auth-token");
      response.cookies.delete("refresh-token");
      return response;
    }

    const newAccessToken = jwt.sign({ sub: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    const response = NextResponse.redirect(
      new URL(request.headers.get("referer") || "/", request.url)
    );

    response.cookies.set("auth-token", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60,
    });

    return response;
  } catch {
    const response = NextResponse.redirect(
      new URL("/auth/sign-in", request.url)
    );
    response.cookies.delete("auth-token");
    response.cookies.delete("refresh-token");
    return response;
  }
}
