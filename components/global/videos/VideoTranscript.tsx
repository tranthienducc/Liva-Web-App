import { TabsContent } from "@/components/ui/tabs";

const VideoTranscript = ({ transcript }: { transcript: string }) => {
  return (
    <TabsContent
      value="Transcript"
      className="p-5 bg-[#1d1d1d] rounded-xl flex flex-col gap-y-6"
    >
      <p className="text-[#a7a7a7]">{transcript}</p>
    </TabsContent>
  );
};

export default VideoTranscript;
