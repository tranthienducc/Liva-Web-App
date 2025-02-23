import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

type RichLinkProps = {
  description: string;
  title: string;
  id: string;
  source: string;
};

const RichLink = ({ description, id, source, title }: RichLinkProps) => {
  const copyRichText = () => {
    const orignalTitle = title;
    const thumbnail = `<a href=${process.env.NEXT_PUBLIC_HOST_URL}/preview/${id} style="display: flex; flex-direction: column; gap: 10px">
    <h3 style="text-decoration: none; color: black; margin: 0;">${orignalTitle}</h3>
    <p style="text-decoration: none; color: black; margin: 0;">${description}</p>
    <video width="320" style="display: block">
    <source type="video/webm" src="${process.env.NEXT_PUBLIC_CLOUD_FRONT_STREAM_URL}/${source}"/> 
    </video>
    </a>`;

    const thumbnailBlob = new Blob([thumbnail], { type: "text/html" });
    const blobTitle = new Blob([orignalTitle], { type: "text/plain" });

    const data = [
      new ClipboardItem({
        ["text/plain"]: blobTitle,
        ["text/html"]: thumbnailBlob,
      }),
    ];
    navigator.clipboard.write(data).then(() => {
      return toast.success("Successfully copied embeded link");
    });
  };

  return (
    <Button onClick={copyRichText} className="rounded-full">
      Get embeded code
    </Button>
  );
};

export default RichLink;
