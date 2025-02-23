"use client";

import { Input } from "@/components/ui/input";
import { useMutationData } from "@/hooks/useMutationData";
import { useMutationDataState } from "@/hooks/useMutationDataState";
import { renameFolders } from "@/lib/actions/folders/rename-folders";
import { cn } from "@/lib/utils";
import { Folder } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

type FolderItemProps = {
  name: string;
  id: string;
  optimistic?: boolean;
  count?: number;
};

const FolderItem = ({ id, name, count, optimistic }: FolderItemProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const folderCardRef = useRef<HTMLDivElement | null>(null);
  const pathName = usePathname();
  const router = useRouter();
  const [onRename, setOnRename] = useState(false);

  const Rename = () => setOnRename(true);
  const Renamed = () => setOnRename(false);

  const { mutate } = useMutationData(
    ["rename-folders"],
    (data: { id: string; name: string }) => renameFolders(data.id, data.name),
    "workspace-folders",
    Renamed
  );

  const { latestVariables } = useMutationDataState(["rename-folders"]);

  const handleFolderClick = () => {
    if (onRename) return;
    router.push(`${pathName}/folder/${id}`);
  };

  const handleDoubleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    Rename();
  };

  const updatedFolderName = (e: React.FocusEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      if (!inputRef.current.contains(e.target as Node | null)) {
        if (inputRef.current.value) {
          mutate({ name: inputRef.current.value, id });
        } else Renamed();
      }
    }
  };

  return (
    <div
      ref={folderCardRef}
      onClick={handleFolderClick}
      className={cn(
        optimistic && "opacity-60",
        "flex items-center hover:bg-neutral-800 cursor-pointer transition duration-150 gap-2 justify-between min-w-[250px] max-h-[94.6px] py-6 px-4 rounded-lg border border-white/10"
      )}
    >
      <div className="flex flex-col gap-[1px]">
        {onRename ? (
          <Input
            placeholder={name}
            autoFocus
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              updatedFolderName(e);
            }}
            className="border-none text-base w-full outline-none text-neutral-300 bg-transparent p-0"
            ref={inputRef}
          />
        ) : (
          <p
            onClick={(e) => e.stopPropagation()}
            className="text-neutral-300"
            onDoubleClick={handleDoubleClick}
          >
            {latestVariables &&
            latestVariables.status === "pending" &&
            latestVariables.variables.id === id
              ? latestVariables.variables.name
              : name}
          </p>
        )}

        <span className="text-sm text-neutral-500">{count || 0} videos</span>
      </div>
      <Folder size={20} color="#707070" fill="#707070" />
    </div>
  );
};

export default FolderItem;
