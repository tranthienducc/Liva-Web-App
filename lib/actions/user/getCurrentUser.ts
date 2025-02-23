"use server";

import { cookies } from "next/headers";
import { client } from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;

  if (!token) {
    return { success: false, status: 401, error: "Not authenticated" };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      sub: string;
      email: string;
    };

    const currentUser = await client.user.findUnique({
      where: { id: decoded.sub },
      select: {
        id: true,
        email: true,
        name: true,
        username: true,
        createdAt: true,
        updatedAt: true,
        workspace: {
          select: {
            id: true,
            name: true,
            type: true,
          },
        },
      },
    });

    if (!currentUser) {
      cookieStore.delete("auth-token");
      return { success: false, status: 404, error: "User not found" };
    }

    return { success: true, status: 200, user: currentUser };
  } catch (error) {
    cookieStore.delete("auth-token");

    if (error instanceof jwt.JsonWebTokenError) {
      return { success: false, status: 403, error: "Invalid token" };
    }

    return { success: false, status: 500, error: "Internal server error" };
  }
}
