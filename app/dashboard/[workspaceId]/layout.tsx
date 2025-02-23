import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import GlobalHeader from "@/components/global/global-header";
import Sidebar from "@/components/global/sidebar";
import { getNotifications } from "@/lib/actions/notifications/get-notifications";
import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { getAllUserVideos } from "@/lib/actions/videos/get-all-user-videos";
import { getWorkSpaces } from "@/lib/actions/workspace/get-work-space";
import { getWorkspaceFolders } from "@/lib/actions/workspace/get-workspace-folders";
import { verifyAccessToWorkspace } from "@/lib/actions/workspace/verify-access-workspace";
import { redirect } from "next/navigation";

type Props = {
  params: { workspaceId: string };
  children: React.ReactNode;
};

export default async function DashWorkSpaceLayout(props: Props) {
  const { workspaceId } = props.params; // Đợi params trong thân component
  const { children } = props; // Lấy children từ props
  const auth = await getCurrentUser();
  if (!auth.user?.workspace) redirect("/auth/sign-in");
  if (!auth.user?.workspace.length) redirect("/auth/sign-in");
  const hasAccess = await verifyAccessToWorkspace(workspaceId);

  if (hasAccess.status !== 200) {
    redirect(`/dashboard/${auth.user?.workspace[0].id}`);
  }

  if (!hasAccess.data?.workspace) return null;

  const query = new QueryClient();
  await query.prefetchQuery({
    queryKey: ["workspace-folders"],
    queryFn: () => getWorkspaceFolders(workspaceId),
  });
  await query.prefetchQuery({
    queryKey: ["user-videos"],
    queryFn: () => getAllUserVideos(workspaceId),
  });
  await query.prefetchQuery({
    queryKey: ["user-workspaces"],
    queryFn: () => getWorkSpaces(),
  });
  await query.prefetchQuery({
    queryKey: ["user-notifications"],
    queryFn: () => getNotifications(),
  });
  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex h-screen w-full">
        <Sidebar activeWorkspaceId={workspaceId} />
        <div className="w-full pt-28 p-6 overflow-y-scroll overflow-x-hidden bg-[#161617]">
          <GlobalHeader workspace={hasAccess.data.workspace} />
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </HydrationBoundary>
  );
}
