"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { client } from "@/lib/prisma";

export async function verifyAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;

  if (!token) {
    return null;
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET!) as {
      sub: string;
      email: string;
    };

    const user = await client.user.findUnique({
      where: { id: verified.sub },
      select: {
        id: true,
        email: true,
        name: true,
        username: true,
        profileImage: true,
        subscription: true,
      },
    });

    return user;
  } catch {
    cookieStore.delete("auth-token");
    return null;
  }
}
