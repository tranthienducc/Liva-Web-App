import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import toast from "react-hot-toast";

type CopyLinkProps = {
  videoId: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null;
};
const CopyLink = (props: CopyLinkProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_HOST_URL}/preview/${props.videoId}`
    );

    return toast.success("Copied link successfully");
  };

  return (
    <Button
      variant={props.variant}
      onClick={copyToClipboard}
      className={props.className}
    >
      <Link size={20} className="text-[#a4a4a4]" />
    </Button>
  );
};

export default CopyLink;
