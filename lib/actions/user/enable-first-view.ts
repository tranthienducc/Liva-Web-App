"use server";

import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";

export const enableFirstView = async (state: boolean) => {
  try {
    const users = await getCurrentUser();
    if (!users) return { status: 404 };

    const view = await client.user.update({
      where: {
        id: users?.user?.id,
      },
      data: {
        firstView: state,
      },
    });

    if (view) {
      return { status: 200, data: view };
    }
  } catch {
    return { status: 400 };
  }
};
