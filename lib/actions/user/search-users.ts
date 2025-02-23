"use server";
import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";

export const searchUsers = async (query: string) => {
  try {
    const users = await getCurrentUser();
    if (!users) return { status: 404 };

    const usered = await client.user.findMany({
      where: {
        OR: [{ username: { contains: query } }, { email: { contains: query } }],
        NOT: [{ id: users.user?.id }],
      },
      select: {
        id: true,
        subscription: {
          select: {
            plan: true,
          },
        },
        username: true,
        profileImage: true,
        email: true,
      },
    });

    if (usered && usered.length > 0) {
      return { status: 200, data: usered };
    }

    return { status: 404, data: null };
  } catch {
    return { status: 500, data: null };
  }
};
