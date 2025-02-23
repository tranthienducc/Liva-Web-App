"use server";

import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";

export const getPaymentInfo = async () => {
  try {
    const users = await getCurrentUser();

    if (!users) return { status: 404 };

    const payment = await client.user.findUnique({
      where: {
        id: users.user?.id,
      },
      select: {
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });

    if (payment) {
      return { status: 200, data: payment };
    }
  } catch {
    return { status: 400 };
  }
};
