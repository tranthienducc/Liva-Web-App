"use server";

import { client } from "@/lib/prisma";

export const moveVideoLocation = async (
  videoId: string,
  workspaceId: string,
  folderId: string
) => {
  try {
    const location = await client.video.update({
      where: {
        id: videoId,
      },
      data: {
        folderId: folderId || null,
        workSpaceId: workspaceId,
      },
    });
    if (location) return { status: 200, data: location };
    return { status: 404, data: "workspace/folder not found" };
  } catch {
    return { status: 500, data: "Opps something wrent wrong" };
  }
};
