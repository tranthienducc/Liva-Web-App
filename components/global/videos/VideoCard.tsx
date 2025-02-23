import CardMenu from "@/components/global/videos/CardMenu";
import CopyLink from "@/components/global/videos/CopyLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { VideoCardProps } from "@/utils/types";
import { Dot, Share2, User } from "lucide-react";
import Link from "next/link";

const VideoCard = (props: VideoCardProps) => {
  const daysAgo = Math.floor(
    (new Date().getTime() - props.createdAt.getTime()) / (24 * 60 * 60 * 1000)
  );
  return (
    <div className="group overflow-hidden cursor-pointer bg-[#171717] relative border border-white/10 flex flex-col rounded-xl">
      <div className="absolute top-3 right-3 z-50 group-hover:flex gap-x-3 hidden">
        <CardMenu
          currentFolder={props.Folder?.id}
          currentWorkspace={props.workspaceId}
          videoId={props.id}
          currentFolderName={props.Folder?.name}
        />
        <CopyLink
          variant={"ghost"}
          className="p-0 h-5 bg-hover:bg-transparent bg-[#252525]"
          videoId={props.id}
        />
      </div>
      <Link
        href={`/dashboard/${props.workspaceId}/preview/${props.id}`}
        className="bg-[#252525] transition duration-150 flex flex-col justify-between h-full"
      >
        <video
          controls={false}
          preload="metadata"
          className="w-full aspect-video opacity-50 z-20"
        >
          <source
            src={`${process.env.NEXT_PUBLIC_CLOUD_FRONT_STREAM_URL}/${props.source}#t=1`}
          />
        </video>
        <div className="px-5 py-3 flex flex-col gap-y-2 z-20">
          <h2 className="text-sm font-semibold text-[#bdbdbd]">
            {props.title}
          </h2>
          <div className="flex gap-x-2 items-center mt-4">
            <Avatar className="size-8">
              <AvatarImage
                src={
                  (props.User?.profileImage as string) ||
                  "/assets/images/client-1.png"
                }
              />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="capitalize text-sm text-[#bdbdbd]">
                {props.User?.username}
              </p>
              <p className="text-[#6b6b6b] text-xs flex items-center">
                <Dot />
                {daysAgo === 0 ? "Today" : `${daysAgo}d ago`}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <span className="flex gap-x-1 items-center">
              <Share2 fill="#9d9d9d" className="text-[#9d9d9d]" size={12} />
              <p className="text-xs text-[#9d9d9d] capitalize">
                {props.User?.username}&apos;s Workspace
              </p>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
