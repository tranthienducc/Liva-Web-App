"use client";

import FolderItem from "@/components/global/folders/FolderItem";
import { useMutationDataState } from "@/hooks/useMutationDataState";
import { useQueryData } from "@/hooks/useQueryData";
import { getWorkspaceFolders } from "@/lib/actions/workspace/get-workspace-folders";
import { cn } from "@/lib/utils";
import { FOLDERS } from "@/redux/slices/folders";
import { FoldersProps } from "@/utils/types";
import { ArrowRight, Folder } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

const Folders = ({ workspaceId }: { workspaceId: string }) => {
  const dispatch = useDispatch();
  const { data, isFetched } = useQueryData(["workspace-folders"], () =>
    getWorkspaceFolders(workspaceId)
  );

  const { latestVariables } = useMutationDataState(["create-folders"]);

  const { data: folders, status } = data as FoldersProps;

  if (isFetched && folders) {
    dispatch(FOLDERS({ folders: folders }));
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Folder size={20} color="#707070" fill="#707070" />
          <h2 className="text-[#bdbdbd] text-xl">Folders</h2>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-[#bdbdbd]">See all</p>
          <ArrowRight size={20} color="#707070" />
        </div>
      </div>

      <section
        className={cn(
          status !== 200 && "justify-center",
          "flex items-center gap-4 overflow-x-auto w-full"
        )}
      >
        {status !== 200 ? (
          <p className="text-neutral-300">No folders in workspace </p>
        ) : (
          <>
            {latestVariables && latestVariables.status === "pending" && (
              <FolderItem
                name={latestVariables.variables.name}
                id={latestVariables.variables.id}
                optimistic
              />
            )}
            {folders.map((folder) => (
              <FolderItem
                key={folder.id}
                name={folder.name}
                count={folder._count.videos}
                id={folder.id}
              />
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default Folders;
