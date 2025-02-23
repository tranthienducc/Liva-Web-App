import { useMutationData } from "@/hooks/useMutationData";
import { createFolder } from "@/lib/actions/folders/create-folder";

export const useCreateFolders = (workspaceId: string) => {
  const { mutate } = useMutationData(
    ["create-folders"],
    () => createFolder(workspaceId),
    "workspace-folders"
  );

  const onCreateNewFolder = () =>
    mutate({ name: "Untitled", id: "optimictis--id" });

  return { onCreateNewFolder };
};
