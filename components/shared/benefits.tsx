import IconsHeadphone from "@/components/icons/IconsHeadphone";
import IconsLight from "@/components/icons/IconsLight";
import IconsLightning from "@/components/icons/IconsLightning";

const tags = [
  {
    label: "Robust Security",
  },
  {
    label: "Customizable",
  },
  {
    label: "Accessibility",
  },
  {
    label: "Automated Efficiency",
  },
  {
    label: "Centralized Data",
  },
];

const Benefits = () => {
  return (
    <section className="pb-[242px] relative w-full px-[66px] h-screen">
      <div className="flex flex-row gap-[10rem] mb-[9rem]">
        <div className="flex flex-col items-start gap-6 sticky top-0">
          <p className="border dark:border-white/10 border-black/10 rounded-full px-[25px] py-2">
            <span className="text-[15px] font-medium">How it works?</span>
          </p>
          <h2 className="max-w-[600px] w-full text-[52px] font-semibold leading-[62.4px] text-left">
            Unlock a New Era of Operational Excellence and Innovation
          </h2>
          <p className="text-lg font-normal text-[#dfdfdf] opacity-[.7] max-w-[514px] w-full text-left">
            Unlock operational excellence and innovation with our advanced tools
            and streamlined processes.
          </p>
          <div className="flex items-start justify-start flex-wrap gap-[10px] max-w-[530px] w-full">
            {tags.map((tag) => (
              <ul
                className="list-none py-3 px-5 rounded-full h-[49.5px] border dark:border-white/10 border-black/10"
                key={tag.label}
              >
                <li className="text-[17px] whitespace-nowrap font-medium text-white">
                  {tag.label}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="items-start flex flex-grow flex-shrink-0 basis-0 flex-col flex-nowrap gap-10  h-full justify-start overflow-visible relative w-[1px]">
          <div className="items-start flex flex-grow flex-shrink-0 basis-0 flex-row flex-nowrap gap-12 h-max justify-center p-0 relative z-[1]">
            <div className="items-center flex flex-none flex-col flex-nowrap gap-4 h-full justify-center relative">
              <div className="contents">
                <div className="flex-none size-14 relative">
                  <div className="border dark:border-white/10 border-black/10 w-full h-full rounded-2xl flex items-center justify-center">
                    <IconsLightning />
                  </div>
                </div>
              </div>
              <div className="items-center bg-[#fff3] rounded-[100px] flex flex-grow flex-shrink-0 basis-0 flex-col flex-nowrap gap-0 h-[1px] justify-center overflow-hidden p-0 relative w-[3px] z-0">
                <div className="flex-none h-[60vh] overflow-hidden relative w-full bg-gradient-to-b from-transparent via-[#f4b674] to-white"></div>
              </div>
            </div>
            <div className="items-start flex flex-grow flex-shrink-0 basis-0 flex-col flex-nowrap gap-6 h-full justify-start overflow-hidden p-0 relative">
              <div className="contents">
                <div className="items-start flex flex-col flex-nowrap gap-[6px] h-min justify-start overflow-visible p-0 relative w-[334px]">
                  <p className="text-lg font-medium">
                    Simple setup in just a few steps to get started
                  </p>
                  <p className="text-[15px] leading-[24px] text-[#dfdfdf] opacity-[.7] text-left">
                    Get started quickly with our user-friendly onboarding
                    process that ensures you’re up and running in no time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="items-start flex flex-grow flex-shrink-0 basis-0 flex-row flex-nowrap gap-12 h-max justify-center p-0 relative z-[1]">
            <div className="items-center flex flex-none flex-col flex-nowrap gap-4 h-full justify-center relative">
              <div className="contents">
                <div className="flex-none size-14 relative">
                  <div className="border dark:border-white/10 border-black/10 w-full h-full rounded-2xl flex items-center justify-center">
                    <IconsLight />
                  </div>
                </div>
              </div>
              <div className="items-center bg-[#fff3] rounded-[100px] flex flex-grow flex-shrink-0 basis-0 flex-col flex-nowrap gap-0 h-[1px] justify-center overflow-hidden p-0 relative w-[3px] z-0">
                <div className="flex-none h-[60vh] overflow-hidden relative w-full bg-gradient-to-b from-transparent via-[#f4b674] to-white"></div>
              </div>
            </div>
            <div className="items-start flex flex-grow flex-shrink-0 basis-0 flex-col flex-nowrap gap-6 h-full justify-start overflow-hidden p-0 relative">
              <div className="contents">
                <div className="items-start flex flex-col flex-nowrap gap-[6px] h-min justify-start overflow-visible p-0 relative w-[334px]">
                  <p className="text-lg font-medium">
                    Simple setup in just a few steps to get started
                  </p>
                  <p className="text-[15px] leading-[24px] text-[#dfdfdf] opacity-[.7] text-left">
                    Get started quickly with our user-friendly onboarding
                    process that ensures you’re up and running in no time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="items-start flex flex-grow flex-shrink-0 basis-0 flex-row flex-nowrap gap-12 h-max justify-center p-0 relative z-[1]">
            <div className="items-center flex flex-none flex-col flex-nowrap gap-4 h-full justify-center relative">
              <div className="contents">
                <div className="flex-none size-14 relative">
                  <div className="border dark:border-white/10 border-black/10 w-full h-full rounded-2xl flex items-center justify-center">
                    <IconsHeadphone />
                  </div>
                </div>
              </div>
              <div className="items-center bg-[#fff3] rounded-[100px] flex flex-grow flex-shrink-0 basis-0 flex-col flex-nowrap gap-0 h-[1px] justify-center overflow-hidden p-0 relative w-[3px] z-0">
                <div className="flex-none h-[60vh] overflow-hidden relative w-full bg-gradient-to-b from-transparent via-[#f4b674] to-white"></div>
              </div>
            </div>
            <div className="items-start flex flex-grow flex-shrink-0 basis-0 flex-col flex-nowrap gap-6 h-full justify-start overflow-hidden p-0 relative">
              <div className="contents">
                <div className="items-start flex flex-col flex-nowrap gap-[6px] h-min justify-start overflow-visible p-0 relative w-[334px]">
                  <p className="text-lg font-medium">
                    Simple setup in just a few steps to get started
                  </p>
                  <p className="text-[15px] leading-[24px] text-[#dfdfdf] opacity-[.7] text-left">
                    Get started quickly with our user-friendly onboarding
                    process that ensures you’re up and running in no time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center flex flex-none flex-row flex-nowrap gap-8 h-min justify-center overflow-visible py-0 px-4 relative w-full">
        <div className="contents">
          <div className="flex-shrink-0 flex-grow basis-0">
            <div className="flex items-center flex-row flex-nowrap gap-4 h-min w-[306px] relative p-0 overflow-visible justify-start">
              <p className="text-[32px] font-semibold leading-[40px]">73%</p>
              <p className="text-sm font-normal text-[#dfdfdf] opacity-[.7]">
                Our users rave about the efficiency our tools brings to their
                workflow.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#343232] via-[#adadad] via-[68%] to-white rounded-[100px] flex-none h-6 opacity-[.5] overflow-hidden relative w-[1px] z-[2]" />
        <div className="contents">
          <div className="flex-shrink-0 flex-grow basis-0">
            <div className="flex items-center flex-row flex-nowrap gap-4 h-min w-[306px] relative p-0 overflow-visible justify-start">
              <p className="text-[32px] font-semibold leading-[40px]">37%</p>
              <p className="text-sm font-normal text-[#dfdfdf] opacity-[.7]">
                AI-powered automation has helped businesses reduce time.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#343232] via-[#adadad] via-[68%] to-white rounded-[100px] flex-none h-6 opacity-[.5] overflow-hidden relative w-[1px] z-[2]" />
        <div className="contents">
          <div className="flex-shrink-0 flex-grow basis-0">
            <div className="flex items-center flex-row flex-nowrap gap-4 h-min w-[306px] relative p-0 overflow-visible justify-start">
              <p className="text-[32px] font-semibold leading-[40px]">9x</p>
              <p className="text-sm font-normal text-[#dfdfdf] opacity-[.7]">
                Faster, informed, decision-making with our data analysis tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
