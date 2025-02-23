"use server";

import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";

export const getFirstView = async () => {
  try {
    const users = await getCurrentUser();
    if (!users) return { status: 404 };

    const userData = await client.user.findUnique({
      where: {
        id: users?.user?.id,
      },
      select: {
        firstView: true,
      },
    });

    if (userData) {
      return { status: 200, data: userData.firstView };
    }
    return { status: 400, data: false };
  } catch {
    return { status: 500, data: false };
  }
};
