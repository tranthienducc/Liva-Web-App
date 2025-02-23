"use client";
import Activities from "@/components/Activities";
import AITools from "@/components/AITools";
import TabMenu from "@/components/global/tabs";
import CopyLink from "@/components/global/videos/CopyLink";
import RichLink from "@/components/global/videos/RichLink";
import VideoTranscript from "@/components/global/videos/VideoTranscript";
// import { TabsContent } from "@/components/ui/tabs";
import { truncateString } from "@/helpers";
import { useQueryData } from "@/hooks/useQueryData";
import { sendEmailForFirstView } from "@/lib/actions/user/send-mail-first-view";
import { getPreviewVideo } from "@/lib/actions/videos/get-preview-video";
import { VideoProps } from "@/utils/types";
import { Download } from "lucide-react";
import { useEffect } from "react";
// import { useRouter } from "next/navigation";

const VideoPreview = ({ videoId }: { videoId: string }) => {
  // const router = useRouter();
  const { data } = useQueryData(["preview-video"], () =>
    getPreviewVideo(videoId)
  );

  const notifyFirstView = async () => await sendEmailForFirstView(videoId);

  const { data: video, status, author } = data as VideoProps;

  // if (status !== 200) router.push("/");

  const daysAgo = Math.floor(
    (new Date().getTime() - video?.createdAt.getTime()) / (24 * 60 * 60 * 1000)
  );

  useEffect(() => {
    if (video.views === 0) {
      notifyFirstView();
    }

    return () => {
      notifyFirstView();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 lg:px-0 p-10 lg:py-10 overflow-y-auto gap-5 bg-[#161617] h-screen">
      <div className="flex flex-col lg:col-span-2 gap-y-10">
        <div>
          <div className="flex gap-x-5 items-start justify-between">
            <h2 className="text-white text-4xl font-bold">
              {video?.title || "This is a title "}
            </h2>
            {/* {author ? (
              <EditVideo
                videoId={videoId}
                title={video?.title as string}
                description={video?.description as string}
              />
            ) : (
              <></>
            )} */}
          </div>
          <span className="flex gap-x-3 mt-4">
            <p className="text-[#9d9d9d] capitalize">
              {video?.User?.username || "John doe"}
            </p>
            <p className="text-[#707070]">
              {daysAgo === 0 ? "Today" : `${daysAgo}d ago`}
            </p>
          </span>
        </div>
        <video
          preload="metadata"
          className="w-full aspect-video opacity-50 rounded-xl"
          controls
        >
          <source
            src={`${process.env.NEXT_PUBLIC_CLOUD_FRONT_STREAM_URL}/${video?.source}#1`}
          />
        </video>
        <div className="flex flex-col text-2xl gap-y-4">
          <div className="flex gap-x-5 items-center justify-between">
            <p className="text-[#bdbdbd] font-semibold">Description</p>
            {/* {author ? (
              <EditVideo
                videoId={videoId}
                title={video.title as string}
                description={video.description as string}
              />
            ) : (
              <></>
            )} */}
          </div>
          <p className="text-[#9d9d9d] text-lg font-medium">
            {video?.description || "This is description"}
          </p>
        </div>
      </div>
      <div className="lg:col-span-1 flex flex-col gap-y-16">
        <div className="flex justify-end gap-x-3 items-center">
          <CopyLink
            variant="outline"
            className="rounded-xl bg-transparent px-10"
            videoId={videoId}
          />
          <RichLink
            description={truncateString(video?.description as string, 150)}
            id={videoId}
            source={video?.source}
            title={video?.title as string}
          />
          <Download className="text-[#4c4c4c]" />
        </div>
        <div>
          <TabMenu
            defaultValue="AI tools"
            triggers={["AI tools", "Transcript", "Activity"]}
          >
            <AITools
              plan={video?.User?.subscription?.plan || "FREE"}
              trial={video?.User?.trial || false}
              videoId={videoId}
            />
            <VideoTranscript transcript={video?.description || ""} />
            <Activities
              author={video?.User?.username as string}
              videoId={videoId}
            />
          </TabMenu>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
