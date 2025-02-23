"use server";

import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";

export const createWorkspaceActions = async (name: string) => {
  try {
    const users = await getCurrentUser();
    if (!users) return { status: 404 };
    const authorized = await client.user.findUnique({
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

    if (authorized?.subscription?.plan === "PRO") {
      const workspace = await client.user.update({
        where: {
          id: users.user?.id,
        },
        data: {
          workspace: {
            create: {
              name,
              type: "PUBLIC",
            },
          },
        },
      });
      if (workspace) {
        return { status: 201, data: "Workspace Created" };
      }
    }
    return {
      status: 401,
      data: "You are not authenrized to create a workspace.",
    };
  } catch {
    return { status: 400 };
  }
};
