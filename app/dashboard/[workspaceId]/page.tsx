import CreateFolders from "@/components/CreateFolders";
import CreateWorkspace from "@/components/CreateWorkspace";
import Folders from "@/components/global/folders";
// import Videos from "@/components/global/videos";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

type Props = {
  params: { workspaceId: string };
};

const Page = async (props: Props) => {
  const { workspaceId } = props.params;

  return (
    <div>
      <Tabs defaultValue="videos" className="mt-6">
        <div className="flex w-full justify-between items-center">
          <TabsList className="bg-transparent gap-2 pl-0">
            <TabsTrigger
              className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
              value="videos"
            >
              Videos
            </TabsTrigger>
            <TabsTrigger
              value="archive"
              className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
            >
              Archive
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-x-3">
            <CreateWorkspace />
            <CreateFolders workspaceId={workspaceId} />
          </div>
        </div>
        <section className="py-9">
          <TabsContent value="videos">
            <Folders workspaceId={workspaceId} />
            {/* <Videos workspaceId={workspaceId} /> */}
          </TabsContent>
        </section>
      </Tabs>
    </div>
  );
};

export default Page;
