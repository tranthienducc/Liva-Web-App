"use server";

import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";

export const verifyAccessToWorkspace = async (workspaceId: string) => {
  try {
    const users = await getCurrentUser();
    if (!users) return { status: 403 };

    const isUserInWorkspace = await client.workspace.findUnique({
      where: {
        id: workspaceId,
        OR: [
          {
            User: {
              id: users.user?.id,
            },
          },
          {
            members: {
              every: {
                User: {
                  id: users.user?.id,
                },
              },
            },
          },
        ],
      },
    });
    return {
      status: 200,
      data: {
        workspace: isUserInWorkspace,
      },
    };
  } catch {
    return {
      status: 403,
      data: { workspace: null },
    };
  }
};
