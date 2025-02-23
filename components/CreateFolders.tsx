"use client";
import { Button } from "@/components/ui/button";
import { useCreateFolders } from "@/hooks/useCreateFolders";
import { Folder } from "lucide-react";

const CreateFolders = ({ workspaceId }: { workspaceId: string }) => {
  const { onCreateNewFolder } = useCreateFolders(workspaceId);
  // WIP: add create folders
  return (
    <Button
      className="bg-[#1d1d1d] text-[#707070] flex items-center gap-2 py-6 px-4 rounded-2xl"
      onClick={onCreateNewFolder}
    >
      <Folder size={20} color="#707070" fill="#707070" />
      Create a folder
    </Button>
  );
};

export default CreateFolders;
