"use server";

import { client } from "@/lib/prisma";

export const createCommentAndReply = async (
  userId: string | undefined,
  comment: string,
  videoId: string,
  commentId?: string | undefined
) => {
  try {
    if (commentId) {
      const reply = await client.comment.update({
        where: {
          id: commentId,
        },
        data: {
          reply: {
            create: {
              comment,
              userId,
              videoId,
            },
          },
        },
      });

      if (reply) {
        return { status: 200, data: reply };
      }
    }

    const newComment = await client.video.update({
      where: {
        id: videoId,
      },
      data: {
        Comment: {
          create: {
            comment,
            userId,
          },
        },
      },
    });

    if (newComment) return { status: 200, data: newComment };
    return { status: 400 };
  } catch {
    return { status: 500 };
  }
};
