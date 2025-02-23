"use server";

import { client } from "@/lib/prisma";

export const renameFolders = async (folderId: string, name: string) => {
  console.log(`Attempting to rename folder [${folderId}] to "${name}"`);

  try {
    const folder = await client.folder.update({
      where: {
        id: folderId,
      },
      data: {
        name,
      },
    });

    console.log(`Successfully updated folder:`, folder);

    if (!folder) {
      console.error(`Folder not found with ID: ${folderId}`);
      return { status: 404, data: "Folder not found" };
    }

    return { status: 200, data: folder };
  } catch {
    // Kiểm tra lỗi Prisma cụ thể

    return { status: 500, data: `Database error:'Something went wrong'}` };
  }
};
