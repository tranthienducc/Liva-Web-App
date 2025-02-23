import FolderInfo from "@/components/global/folders/FolderInfo";
import Videos from "@/components/global/videos";
import { getFolderInfo } from "@/lib/actions/folders/get-folder-info";
import { getAllUserVideos } from "@/lib/actions/videos/get-all-user-videos";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type Props = {
  params: {
    folderId: string;
    workspaceId: string;
  };
};

const page = async ({ params: { folderId, workspaceId } }: Props) => {
  const query = new QueryClient();
  await query.prefetchQuery({
    queryKey: ["folder-videos"],
    queryFn: () => getAllUserVideos(folderId),
  });
  await query.prefetchQuery({
    queryKey: ["folder-info"],
    queryFn: () => getFolderInfo(folderId),
  });
  return (
    <HydrationBoundary state={dehydrate(query)}>
      <FolderInfo folderId={folderId} />
      <Videos
        workspaceId={workspaceId}
        folderId={folderId}
        videosKey="folder-videos"
      />
    </HydrationBoundary>
  );
};

export default page;
