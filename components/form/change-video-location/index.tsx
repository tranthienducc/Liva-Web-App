"use client";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useMoveVideos } from "@/hooks/useFolders";

type ChangeVideoLocationProps = {
  videoId: string;
  currentFolder?: string;
  currentWorkspace?: string;
  currentFolderName?: string;
};

const ChangeVideoLocation = ({
  videoId,
  currentFolder,
  currentFolderName,
  currentWorkspace,
}: ChangeVideoLocationProps) => {
  const {
    register,
    isFetching,
    isPending,
    onFormSubmit,
    folders,
    workspaces,
    isFolders,
  } = useMoveVideos(videoId, currentWorkspace!);

  const folder = folders.find((f) => f.id === currentFolder);
  const workspace = workspaces.find((w) => w.id === currentWorkspace);

  return (
    <form className="flex flex-col gap-y-5" onSubmit={onFormSubmit}>
      <div className="border border-white/10 rounded-xl p-5">
        <h2 className="text-sm mb-5 text-[#a4a4a4]">Current workspace</h2>
        {workspace && <p>{workspace.name}</p>}
        <h2 className="text-sm mb-5 text-[#a4a4a4] mt-4">Current folder</h2>
        {folder ? <p>{folder.name}</p> : "This video has no folder"}
      </div>
      <Separator orientation="horizontal" />
      <div className="flex flex-col gap-y-5 p-5 border border-white/10 rounded-full">
        <h2 className="text-xs text-[#a4a4a4]">To</h2>
        <Label className="flex flex-col gap-y-2">
          <p className="text-xs">Workspace</p>
          <select
            className="rounded-xl text-base bg-transparent"
            {...register("workspace_id")}
          >
            {workspaces.map((workspace) => (
              <option
                key={workspace.id}
                className="text-[#a4a4a4]"
                value={workspace.id}
              >
                {workspace.name}
              </option>
            ))}
          </select>
        </Label>
        {isFetching ? (
          <Skeleton className="w-full h-[40px] rounded-xl" />
        ) : (
          <Label className="flex flex-col gap-y-2">
            <p className="text-xs">Folders in workspace</p>
            {isFolders && isFolders.length > 0 ? (
              <select
                {...register("folder_id")}
                className="rounded-xl bg-transparent text-base"
              >
                {isFolders.map((folder, i) =>
                  i === 0 ? (
                    <option
                      key={folder.id}
                      className="text-[#a4a4a4]"
                      value={folder.id}
                    >
                      {folder.name}
                    </option>
                  ) : (
                    <option
                      key={folder.id}
                      className="text-[#a4a4a4]"
                      value={folder.id}
                    >
                      {folder.name}
                    </option>
                  )
                )}
              </select>
            ) : (
              <p className="text-[#a4a4a4] text-sm">
                This workspace has no folders
              </p>
            )}
          </Label>
        )}
      </div>
      <Button type="submit">{isPending ? <Spinner /> : "Transfer"}</Button>
    </form>
  );
};

export default ChangeVideoLocation;
