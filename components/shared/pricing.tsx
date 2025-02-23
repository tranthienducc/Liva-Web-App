import Heading from "@/components/Heading";
import IconsCheck from "@/components/icons/IconsCheck";
import { pricingData } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Pricing = () => {
  return (
    <section className="w-full relative pb-[224px] mx-auto">
      <Heading
        tag="Pricing"
        heading="Choose the plan that fits your business needs. Get your free trial."
        desc="Explore tailored solutions that meet the unique needs of your business, driving efficiency and productivity in every aspect."
      />
      <div className="flex lg:flex-row  flex-col gap-4 justify-center items-center">
        {pricingData.map((data, index) => (
          <div
            className={cn(
              "lg:max-w-[412px] max-w-[370px] w-full max-h-[780px] lg:min-h-[760px] h-full rounded-3xl bg-[#0C0C0F] border border-[#1D2021] flex flex-custom flex-col lg:flex-wrap gap-8 p-10",

              index === 1 ? "border-white/30" : "border-[#1D2021]"
            )}
            key={index}
          >
            <div className="flex-col flex flex-nowrap gap-4">
              <div className="flex flex-row justify-between items-start">
                {data.icon}
                <p className="text-sm font-normal text-white">{data.kind}</p>
              </div>
              <h3 className="text-2xl font-medium text-white">{data.title}</h3>
            </div>
            <div className="flex flex-col flex-wrap gap-2">
              <span className="text-xs font-normal text-gray9">
                {data.desc1}
              </span>
              <p className="text-[40px] font-semibold text-white">
                {data.price}
              </p>
              <span className="text-xs font-normal text-gray9">
                {data.desc2}
              </span>
            </div>
            <Link
              href="/pricing"
              className="bg-[#1D2021] rounded-[40px] flex flex-nowrap items-center justify-center py-[14px] px-5 text-base font-normal text-white"
            >
              Get started
            </Link>
            <div className="bg-[#1D2021] h-[1px]"></div>
            <div className="flex flex-col gap-y-4">
              {data.interest.map((item, index) => (
                <div className="flex flex-row gap-x-8" key={index}>
                  <Checkbox>{item}</Checkbox>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

function Checkbox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row gap-x-2 items-center">
      <IconsCheck />
      <h4 className="text-sm lg:text-base font-normal text-white whitespace-nowrap">
        {children}
      </h4>
    </div>
  );
}
