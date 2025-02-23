"use server";

import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";

export const getPreviewVideo = async (videoId: string) => {
  try {
    const users = await getCurrentUser();
    if (!users) return { status: 404 };

    const video = await client.video.findUnique({
      where: {
        id: videoId,
      },
      select: {
        title: true,
        createdAt: true,
        source: true,
        description: true,
        processing: true,
        views: true,
        summery: true,
        User: {
          select: {
            username: true,
            profileImage: true,
            id: true,
            trial: true,
            subscription: {
              select: {
                plan: true,
              },
            },
          },
        },
      },
    });

    if (video) {
      return {
        status: 200,
        data: video,
        author: users.user?.id === video.User?.id ? true : false,
      };
    }
    return { status: 404 };
  } catch {
    return { status: 400 };
  }
};
