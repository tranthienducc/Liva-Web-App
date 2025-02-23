"use server";

import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";

export const getUserProfile = async () => {
  try {
    const users = await getCurrentUser();
    if (!users) return { status: 404 };

    const profileAndImage = await client.user.findUnique({
      where: {
        id: users.user?.id,
      },
      select: {
        profileImage: true,
        id: true,
      },
    });

    if (profileAndImage) return { status: 200, data: profileAndImage };
  } catch {
    return { status: 400 };
  }
};
