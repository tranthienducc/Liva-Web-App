import { useMutationData } from "@/hooks/useMutationData";
import { useZodForm } from "@/hooks/useZodForm";
import { moveVideoLocation } from "@/lib/actions/videos/move-video-location";
import { getWorkspaceFolders } from "@/lib/actions/workspace/get-workspace-folders";
import { RootState } from "@/redux/store";
import { moveVideoLocationSchema } from "@/services/validations/schema";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Folder = {
  _count: { videos: number };
  id: string;
  name: string;
  createdAt: Date;
  workspaceId: string | null;
};

export const useMoveVideos = (videoId: string, currentWorkspace: string) => {
  const { folders } = useSelector((state: RootState) => state.FolderReducer);
  const { workspaces } = useSelector(
    (state: RootState) => state.WorkspaceReducer
  );

  const [isFetching, setIsFetching] = useState(false);
  const [isFolders, setIsFolders] = useState<
    | ({ _count: { videos: number } } & {
        id: string;
        name: string;
        createdAt: Date;
        workspaceId: string | null;
      })[]
    | undefined
  >(undefined);

  const { mutate, isPending } = useMutationData(
    ["change-video-location"],
    (data: { folder_id: string; workspaceId: string }) =>
      moveVideoLocation(videoId, data.folder_id, data.workspaceId)
  );

  const { errors, onFormSubmit, register, watch } = useZodForm(
    moveVideoLocationSchema,
    mutate,
    { folder_id: null, workspace_id: currentWorkspace }
  );

  const fetchFolders = async (workspace: string) => {
    setIsFetching(true);
    const folders = await getWorkspaceFolders(workspace);
    setIsFetching(false);
    const formattedFolders: Folder[] = folders.data.map((folder) => ({
      ...folder,
      workspaceId: folder.workSpaceId,
    }));
    setIsFolders(formattedFolders);
  };

  useEffect(() => {
    fetchFolders(currentWorkspace);
  }, [currentWorkspace]);

  useEffect(() => {
    const workspace = watch(async (value) => {
      if (value.workspace_id) fetchFolders(value.workspace_id);
    });

    return () => workspace.unsubscribe();
  }, [watch]);

  return {
    onFormSubmit,
    errors,
    register,
    isPending,
    folders,
    workspaces,
    isFetching,
    isFolders,
  };
};
