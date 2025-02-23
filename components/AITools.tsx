import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { File, Video } from "lucide-react";

type AIToolsProps = {
  plan: "FREE" | "FRO";
  trial: boolean;
  videoId: string;
};

const AITools = ({ plan, trial, videoId }: AIToolsProps) => {
  return (
    <TabsContent
      value="AI tools"
      className="p-5 bg-[#1d1d1d] rounded-xl flex flex-col gap-y-10 overflow-hidden"
    >
      <div className="p-5 bg-[#1d1d1d] rounded-xl flex flex-col gap-y-10 overflow-hidden">
        <div className="flex items-center flex-col gap-7">
          <div className="flex flex-row items-center">
            <div className="w-7/12">
              <h2 className="text-base font-bold">AI Tools</h2>
              <p className="text-[#bdbdbd] text-xs">
                Taking your video to the next <br /> step with the power of AI!
              </p>
            </div>
            <div className="flex items-center justify-between w-2/12 gap-2">
              <Button className="mt-2 text-sm">Try now</Button>
              <Button className="mt-2 text-sm" variant="secondary">
                Pay now
              </Button>
              {/* <Button className="mt-2 text-sm">Generate now</Button> */}
            </div>
          </div>
          {/* {plan === 'FREE' ? (!trial ? <Button className="mt-2 text-sm">
      Try now
      </Button> : <Button className="mt-2 text-sm">
      Pay now
      </Button>) : ""} */}
          <div className="flex justify-between">
            <div className="flex flex-col items-center text-center text-[#bdbdbd] gap-y-2 text-sm">
              <Video size={36} />
              Generate Video
            </div>
            <div className="flex flex-col items-center text-center text-[#bdbdbd] gap-y-2 text-sm">
              <File size={36} />
              Create and read video transcript
            </div>
            <div className="flex flex-col items-center text-center text-[#bdbdbd] gap-y-2 text-sm">
              <Video size={36} />
              Dowload video or file
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default AITools;
