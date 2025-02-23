"use server";

import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";

export const acceptInvite = async (inviteId: string) => {
  try {
    const users = await getCurrentUser();
    if (!users) return { status: 404 };

    const invitation = await client.invite.findUnique({
      where: {
        id: inviteId,
      },
      select: {
        workSpaceId: true,
        reciever: {
          select: {
            id: true,
          },
        },
      },
    });

    if (users.user?.id !== invitation?.reciever?.id) return { status: 401 };

    const acceptInvite = client.invite.update({
      where: {
        id: inviteId,
      },
      data: {
        accepted: true,
      },
    });

    const updateMember = client.user.update({
      where: {
        id: users?.user?.id,
      },
      data: {
        members: {
          create: {
            workSpaceId: invitation?.workSpaceId,
          },
        },
      },
    });

    const memberTransaction = await client.$transaction([
      acceptInvite,
      updateMember,
    ]);

    if (memberTransaction) {
      return { status: 200 };
    }
    return { status: 400 };
  } catch {
    return { status: 400 };
  }
};
