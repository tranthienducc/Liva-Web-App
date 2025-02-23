"use server";

import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";

export const getWorkSpaces = async () => {
  try {
    const users = await getCurrentUser();
    if (!users) return { status: 404 };

    const workspaces = await client.user.findUnique({
      where: {
        id: users.user?.id,
      },
      select: {
        subscription: {
          select: {
            plan: true,
          },
        },
        workspace: {
          select: {
            id: true,
            name: true,
            type: true,
          },
        },
        members: {
          select: {
            WorkSpace: {
              select: {
                id: true,
                name: true,
                type: true,
              },
            },
          },
        },
      },
    });

    if (workspaces) {
      return {
        status: 200,
        data: {
          ...workspaces,
          subscription: workspaces.subscription || { plan: "FREE" },
        },
      };
    }
  } catch {
    return { status: 400 };
  }
};
