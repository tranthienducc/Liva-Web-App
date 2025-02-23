"use server";

import { client } from "@/lib/prisma";

export const createFolder = async (workspaceId: string) => {
  try {
    const isNewFolders = await client.workspace.update({
      where: {
        id: workspaceId,
      },
      data: {
        folders: {
          create: {
            name: "Untitled",
          },
        },
      },
    });

    if (isNewFolders) {
      return { status: 200, message: "New folder created" };
    }
    return { status: 400, data: "Failed to create folder" };
  } catch {
    return { status: 500, message: "Oppse some thing wrong" };
  }
};
