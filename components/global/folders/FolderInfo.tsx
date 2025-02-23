"use client";

import { useQueryData } from "@/hooks/useQueryData";
import { getFolderInfo } from "@/lib/actions/folders/get-folder-info";
import { FolderProps } from "@/utils/types";

const FolderInfo = ({ folderId }: { folderId: string }) => {
  const { data } = useQueryData(["folder-info"], () => getFolderInfo(folderId));

  const { data: folder } = data as FolderProps;
  return (
    <div className="flex items-center">
      <h2 className="text-[#bdbdbd] text-2xl">{folder.name}</h2>
    </div>
  );
};

export default FolderInfo;
