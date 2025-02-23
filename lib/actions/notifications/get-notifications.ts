"use server";

import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";

export const getNotifications = async () => {
  try {
    const users = await getCurrentUser();

    if (!users) return { status: 404 };
    const notifications = await client.user.findUnique({
      where: {
        id: users.user?.id,
      },
      select: {
        notification: true,
        _count: {
          select: {
            notification: true,
          },
        },
      },
    });

    if (notifications && notifications.notification.length > 0) {
      return { status: 200, data: notifications };
    }
    return { status: 404, data: [] };
  } catch {
    return { status: 400, data: [] };
  }
};
