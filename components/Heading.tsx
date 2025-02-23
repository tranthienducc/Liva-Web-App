import { cn } from "@/lib/utils";

interface HeadingProps {
  className?: string;
  tag: string;
  heading: string;
  desc: string;
}

const Heading = ({ className, tag, heading, desc }: HeadingProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 text-center justify-center mb-[60px] max-w-[829.98px] w-full mx-auto",
        className
      )}
    >
      <p className="border dark:border-white/10 border-black/10 rounded-full px-[25px] py-2">
        <span className="text-[15px] font-medium">{tag}</span>
      </p>
      <h3 className="text-[56px] font-medium leading-[64px] hero-gradient">
        {heading}
      </h3>
      <p className="text-lg font-normal text-[#dfdfdf] opacity-[.7] max-w-[650px] w-full">
        {desc}
      </p>
    </div>
  );
};

export default Heading;
