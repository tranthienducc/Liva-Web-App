import VideoPreview from "@/components/global/videos/VideoPreview";
import { getVideoComment } from "@/lib/actions/comment/get-video-comment";
import { getUserProfile } from "@/lib/actions/user/get-user-profile";
import { getPreviewVideo } from "@/lib/actions/videos/get-preview-video";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type VideoPreviewPageProps = {
  params: {
    videoId: string;
  };
};

const VideoPage = async ({ params: { videoId } }: VideoPreviewPageProps) => {
  const query = new QueryClient();

  await query.prefetchQuery({
    queryKey: ["preview-video"],
    queryFn: () => getPreviewVideo(videoId),
  });
  await query.prefetchQuery({
    queryKey: ["user-profiles"],
    queryFn: getUserProfile,
  });
  await query.prefetchQuery({
    queryKey: ["video-comments"],
    queryFn: () => getVideoComment(videoId),
  });

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <VideoPreview videoId={videoId} />
    </HydrationBoundary>
  );
};

export default VideoPage;
