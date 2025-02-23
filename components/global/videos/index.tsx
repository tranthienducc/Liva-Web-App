"use client";
import VideoCard from "@/components/global/videos/VideoCard";
import { useQueryData } from "@/hooks/useQueryData";
import { getAllUserVideos } from "@/lib/actions/videos/get-all-user-videos";
import { cn } from "@/lib/utils";
import { VideosProps } from "@/utils/types";
import { Video } from "lucide-react";
import React from "react";

type VideosPageProps = {
  folderId?: string;
  videosKey?: string;
  workspaceId: string;
};
const Videos = ({ folderId, videosKey, workspaceId }: VideosPageProps) => {
  const { data: videoData } = useQueryData([videosKey], () =>
    getAllUserVideos(folderId)
  );
  const { status: videoStatus, data: videos } = videoData as VideosProps;

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Video size={20} color="#707070" fill="#707070" />
          <h2 className="text-[#bdbdbd] text-xl">Videos</h2>
        </div>
      </div>
      <section
        className={cn(
          videoStatus !== 200
            ? "p-5"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10"
        )}
      >
        {videoStatus === 200 ? (
          videos.map((video) => (
            <VideoCard workspaceId={workspaceId} {...video} key={video.id} />
          ))
        ) : (
          <p className="text-[#bdbdbd]">No video in workspace</p>
        )}
      </section>
    </div>
  );
};

export default Videos;
