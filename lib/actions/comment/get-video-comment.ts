"use server";
import { client } from "@/lib/prisma";

export const getVideoComment = async (id: string) => {
  try {
    const comments = await client.comment.findMany({
      where: {
        OR: [{ videoId: id }, { commentId: id }],
        commentId: null,
      },
      include: {
        reply: {
          include: {
            User: true,
          },
        },
        User: true,
      },
    });

    if (comments) return { status: 200, data: comments };
    return { status: 404 };
  } catch {
    return { status: 400 };
  }
};
