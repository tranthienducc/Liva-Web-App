import Heading from "@/components/Heading";
import { enterprises } from "@/constants";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
  <div className="contents">
    <div className="flex-grow flex-shrink-0 basis-0 relative h-auto rounded-2xl border dark:border-white/20 border-black/20">
      <div className="items-center cursor-default flex flex-row flex-nowrap gap-0 h-[210px] justify-center overflow-hidden p-[1px] relative w-[384px]">
        <div className="items-center flex flex-grow flex-shrink-0 basis-0 flex-col flex-nowrap gap-8 h-full justify-center overflow-hidden p-6 relative">
          <div className="items-start flex flex-shrink-0 flex-grow basis-0 flex-col flex-nowrap h-[1px] justify-between overflow-visible p-0 relative w-full">
            <div className="flex-none size-12 relative border dark:border-white/15 border-black/15 flex items-center justify-center rounded-md">
              {icon}
            </div>
            <div className="w-full relative">
              <div className="flex items-start flex-col flex-nowrap gap-[6px] h-min justify-start overflow-visible p-0 relative w-[334px]">
                <p className="text-[15px] font-medium leading-6">{title}</p>
                <p className="text-sm text-[#dfdfdf] opacity-[.7] font-normal">
                  {desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Enterprise = () => {
  return (
    <section className="pb-[224px] relative w-full">
      <Heading
        tag="Enterprise"
        heading="Scalable solutions that grow with your business needs"
        desc="Explore tailored solutions that meet the unique needs of your business, driving efficiency and productivity in every aspect."
      />

      <div className="w-[1080px] relative px-[125px] items-start flex flex-none flex-col flex-nowrap gap-6 h-min justify-start overflow-visible">
        <div className="items-center flex flex-none flex-row flex-nowrap gap-6 h-min justify-start overflow-visible p-0 relative w-full">
          {enterprises.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="items-center flex flex-none flex-row flex-nowrap gap-6 h-min justify-start overflow-visible p-0 relative w-full">
          {enterprises.slice(3, 6).map((feature, index) => (
            <FeatureCard key={index + 3} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
